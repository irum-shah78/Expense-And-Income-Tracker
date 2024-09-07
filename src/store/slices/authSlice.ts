import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

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

export const checkEmailExists = createAsyncThunk(
  'auth/checkEmailExists',
  async (email: string, { rejectWithValue }) => {
    try {
      await auth().fetchSignInMethodsForEmail(email);
      return true;
    } catch (error: any) {
      return rejectWithValue('Email not registered.');
    }
  }
);

export const resetPassword = createAsyncThunk(
  'auth/resetPassword',
  async (email: string, { rejectWithValue, getState }) => {
    const state = getState() as { auth: AuthState };
    if (!state.auth.emailExists) {
      return rejectWithValue('Email not registered.');
    }
    try {
      await auth().sendPasswordResetEmail(email);
      return 'Password reset email sent!';
    } catch (error: any) {
      return rejectWithValue(error.message);
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
      .addCase(checkEmailExists.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(checkEmailExists.fulfilled, (state) => {
        state.loading = false;
        state.emailExists = true;
      })
      .addCase(checkEmailExists.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.emailExists = false;
        state.error = action.payload;
      })
      .addCase(resetPassword.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(resetPassword.fulfilled, (state, action: PayloadAction<string>) => {
        state.loading = false;
        state.message = action.payload;
      })
      .addCase(resetPassword.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { login, logout, clearMessage, clearError } = authSlice.actions;
export default authSlice.reducer;
