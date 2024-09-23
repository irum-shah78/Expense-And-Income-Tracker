import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

interface AuthState {
  user: FirebaseAuthTypes.User | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
  message: string | null;
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null,
  message: null,
};

export const userRegister = createAsyncThunk(
  'auth/userRegister',
  async ({ name, email, password }: { name: string; email: string; password: string }, { rejectWithValue }) => {
    try {
      const userCredential = await auth().createUserWithEmailAndPassword(email, password);
      const user = userCredential.user;

      await user.updateProfile({ displayName: name });

      await firestore().collection('users').doc(user.uid).set({
        email,
        displayName: name,
      });

      return user;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);


export const googleSignIn = createAsyncThunk(
  'auth/googleSignIn',
  async (_, { rejectWithValue }) => {
    try {
      await GoogleSignin.hasPlayServices();
      const { idToken } = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      const userCredential = await auth().signInWithCredential(googleCredential);
      const user = userCredential.user;
      const userDoc = await firestore().collection('users').doc(user.uid).get();

      if (!userDoc.exists) {
        await firestore().collection('users').doc(user.uid).set({
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
        });
      }

      return user;
    } catch (error: any) {
      return rejectWithValue(error.message || 'Google Sign-In failed');
    }
  }
);

export const storeUserProfile = createAsyncThunk(
  'auth/storeUserProfile',
  async ({ userId, email, displayName, imageUrl }: { userId: string; email: string; displayName: string; imageUrl: string }, { rejectWithValue }) => {
    try {
      await firestore().collection('users').doc(userId).set({
        email,
        displayName,
        imageUrl,
      });
      return { userId, email, displayName, imageUrl };
    } catch (error: any) {
      return rejectWithValue('Failed to store user profile.');
    }
  }
);

export const fetchUserProfile = createAsyncThunk(
  'auth/fetchUserProfile',
  async (userId: string, { rejectWithValue }) => {
    try {
      const userDoc = await firestore().collection('users').doc(userId).get();
      return userDoc.data();
    } catch (error: any) {
      return rejectWithValue('Failed to fetch user profile.');
    }
  }
);

export const updateUserProfile = createAsyncThunk(
  'auth/updateUserProfile',
  async (
    { userId, displayName, imageUrl }: { userId: string; displayName: string; imageUrl: string },
    { rejectWithValue }
  ) => {
    try {
      const user = auth().currentUser;
      if (user) {
        await user.updateProfile({
          displayName,
          photoURL: imageUrl,
        });

        await firestore().collection('users').doc(userId).update({
          displayName,
          imageUrl,
        });

        const userDoc = await firestore().collection('users').doc(userId).get();
        const updatedUser = userDoc.data();

        return {
          displayName: updatedUser?.displayName,
          imageUrl: updatedUser?.imageUrl,
        };
      }

      return { displayName, imageUrl };
    } catch (error: any) {
      return rejectWithValue('Failed to update user profile.');
    }
  }
);

export const resetPassword = createAsyncThunk(
  'auth/resetPassword',
  async ({ currentPassword, newPassword }: { currentPassword: string; newPassword: string }, { rejectWithValue }) => {
    try {
      const user = auth().currentUser;
      if (!user) { throw new Error('No user is currently signed in.'); }

      const credential = auth.EmailAuthProvider.credential(user.email!, currentPassword);

      await user.reauthenticateWithCredential(credential);
      await user.updatePassword(newPassword);

      // optional
      await firestore().collection('users').doc(user.uid).update({
        password: newPassword,
      });

      return 'Password updated successfully';
    } catch (error: any) {
      return rejectWithValue(error.message || 'Failed to reset password');
    }
  }
);

export const forgetPassword = createAsyncThunk(
  'auth/resetPassword',
  async (email: string, { rejectWithValue }) => {
    try {
      await auth().sendPasswordResetEmail(email);
      return 'Password reset email sent successfully';
    } catch (error: any) {
      return rejectWithValue(error.message || 'Failed to send password reset email');
    }
  }
);

export const checkEmailExists = createAsyncThunk(
  'auth/checkEmailExists',
  async (email: string, { rejectWithValue }) => {
    try {
      const userDocs = await firestore().collection('users').where('email', '==', email).get();
      return userDocs.empty ? false : true;
    } catch (error: any) {
      return rejectWithValue('Failed to check email existence.');
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<FirebaseAuthTypes.User>) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.error = null;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.error = null;
    },
    clearMessage: (state) => {
      state.message = null;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(googleSignIn.pending, (state) => {
        state.loading = true;
      })
      .addCase(googleSignIn.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
        state.message = 'Google Sign-In successful';
      })
      .addCase(googleSignIn.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(storeUserProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(storeUserProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.message = 'Profile stored successfully';
        console.error(action.payload);
      })
      .addCase(storeUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });

    // Fetch user profile
    builder
      .addCase(fetchUserProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.user = { ...state.user, ...action.payload };
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });

    builder
      .addCase(updateUserProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateUserProfile.fulfilled, (state, action) => {
        state.loading = false;
        if (state.user) {
          state.user.displayName = action.payload.displayName;
          state.user.photoURL = action.payload.imageUrl;
        }
        state.message = 'Profile updated successfully';
      })
      .addCase(updateUserProfile.rejected, (state, action) => {
        console.error(action.payload);
      })
      .addCase(resetPassword.pending, (state) => {
        state.loading = true;
      })
      .addCase(resetPassword.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload;
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { login, logout, clearMessage, clearError } = authSlice.actions;
export default authSlice.reducer;
