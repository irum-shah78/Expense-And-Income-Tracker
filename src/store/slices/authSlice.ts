// import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
// import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

// interface AuthState {
//   user: FirebaseAuthTypes.User | null;
//   isAuthenticated: boolean;
//   loading: boolean;
//   error: string | null;
//   message: string | null;
//   emailExists: boolean | null;
// }

// const initialState: AuthState = {
//   user: null,
//   isAuthenticated: false,
//   loading: false,
//   error: null,
//   message: null,
//   emailExists: null,
// };

// export const checkEmailExists = createAsyncThunk(
//   'auth/checkEmailExists',
//   async (email: string, { rejectWithValue }) => {
//     try {
//       await auth().fetchSignInMethodsForEmail(email);
//       return true;
//     } catch (error: any) {
//       return rejectWithValue('Email not registered.');
//     }
//   }
// );

// // Reset password
// export const resetPassword = createAsyncThunk(
//   'auth/resetPassword',
//   async (email: string, { rejectWithValue, getState }) => {
//     const state = getState() as { auth: AuthState };
//     if (!state.auth.emailExists) {
//       return rejectWithValue('Email not registered.');
//     }
//     try {
//       await auth().sendPasswordResetEmail(email);
//       return 'Password reset email sent!';
//     } catch (error: any) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// export const changePassword = createAsyncThunk(
//   'auth/changePassword',
//   async ({ currentPassword, newPassword }: { currentPassword: string; newPassword: string }, thunkAPI) => {
//     try {
//       const user = auth().currentUser;
//       const credential = auth.EmailAuthProvider.credential(user?.email!, currentPassword);
//       await user?.reauthenticateWithCredential(credential);
//       if (currentPassword === newPassword) {
//         return thunkAPI.rejectWithValue('New password cannot be the same as the old password.');
//       }

//       await user?.updatePassword(newPassword);

//       return 'Password updated successfully';
//     } catch (error: any) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     login: (state, action: PayloadAction<FirebaseAuthTypes.User>) => {
//       state.user = action.payload;
//       state.isAuthenticated = true;
//       state.error = null;
//     },
//     logout: (state) => {
//       state.user = null;
//       state.isAuthenticated = false;
//       state.error = null;
//     },
//     clearMessage: (state) => {
//       state.message = null;
//     },
//     clearError: (state) => {
//       state.error = null;
//     },
//     updateUserProfile: (state, action: PayloadAction<FirebaseAuthTypes.User>) => {
//       state.user = action.payload;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(checkEmailExists.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(checkEmailExists.fulfilled, (state) => {
//         state.loading = false;
//         state.emailExists = true;
//       })
//       .addCase(checkEmailExists.rejected, (state, action: PayloadAction<any>) => {
//         state.loading = false;
//         state.emailExists = false;
//         state.error = action.payload;
//       })
//       .addCase(resetPassword.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(resetPassword.fulfilled, (state, action: PayloadAction<string>) => {
//         state.loading = false;
//         state.message = action.payload;
//       })
//       .addCase(resetPassword.rejected, (state, action: PayloadAction<any>) => {
//         state.loading = false;
//         state.error = action.payload;
//       })
//       .addCase(changePassword.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(changePassword.fulfilled, (state, action: PayloadAction<string>) => {
//         state.loading = false;
//         state.message = action.payload;
//       })
//       .addCase(changePassword.rejected, (state, action: PayloadAction<any>) => {
//         state.loading = false;
//         state.error = action.payload;
//       });
//   },
// });

// export const { login, logout, clearMessage, clearError, updateUserProfile } = authSlice.actions;
// export default authSlice.reducer;


import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

interface AuthState {
  user: FirebaseAuthTypes.User | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
  message: string | null;
  emailExists: boolean | null;
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null,
  message: null,
  emailExists: null,
};

// Google Sign-In
export const signInWithGoogle = createAsyncThunk(
  'auth/signInWithGoogle',
  async (_, { rejectWithValue }) => {
    try {
      await GoogleSignin.hasPlayServices();
      const { idToken } = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      const userCredential = await auth().signInWithCredential(googleCredential);
      return userCredential.user;
    } catch (error: any) {
      return rejectWithValue('Google Sign-In failed. Please try again.');
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
    updateUserProfile: (state, action: PayloadAction<FirebaseAuthTypes.User>) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // Handle Google sign-in
      .addCase(signInWithGoogle.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signInWithGoogle.fulfilled, (state, action: PayloadAction<FirebaseAuthTypes.User>) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(signInWithGoogle.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { login, logout, clearMessage, clearError, updateUserProfile } = authSlice.actions;
export default authSlice.reducer;
