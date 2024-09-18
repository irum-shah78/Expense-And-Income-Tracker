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
//       });
//   },
// });

// export const { login, logout, clearMessage, clearError, updateUserProfile } = authSlice.actions;
// export default authSlice.reducer;


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

// // Check if email exists
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

// // Change password
// export const changePassword = createAsyncThunk(
//   'auth/changePassword',
//   async ({ oldPassword, newPassword }: { oldPassword: string; newPassword: string }, { rejectWithValue, getState }) => {
//     const state = getState() as { auth: AuthState };
//     if (!state.auth.user) {
//       return rejectWithValue('User not authenticated.');
//     }
//     try {
//       const user = auth().currentUser;
//       if (!user) throw new Error('No user is currently logged in');

//       // Re-authenticate user
//       const credential = auth.EmailAuthProvider.credential(user.email!, oldPassword);
//       await user.reauthenticateWithCredential(credential);

//       // Update password
//       await user.updatePassword(newPassword);
//       return 'Password changed successfully!';
//     } catch (error: any) {
//       return rejectWithValue(error.message);
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

// Check if email exists
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

// Reset password
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

// Change password
export const changePassword = createAsyncThunk(
  'auth/changePassword',
  async ({ newPassword, retypeNewPassword }: { newPassword: string; retypeNewPassword: string }, { rejectWithValue, getState }) => {
    const state = getState() as { auth: AuthState };
    if (!state.auth.user) {
      return rejectWithValue('User not authenticated.');
    }
    if (newPassword !== retypeNewPassword) {
      return rejectWithValue('Passwords do not match.');
    }
    try {
      const user = auth().currentUser;
      if (!user) throw new Error('No user is currently logged in');

      // Re-authenticate user (assuming you have the necessary credentials for re-authentication)
      // You might need to collect old password or use other authentication methods if applicable
      // const credential = auth.EmailAuthProvider.credential(user.email!, oldPassword);
      // await user.reauthenticateWithCredential(credential);

      // Update password
      await user.updatePassword(newPassword);
      return 'Password changed successfully!';
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
       updateUserProfile: (state, action: PayloadAction<FirebaseAuthTypes.User>) => {
      state.user = action.payload;
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
      })
      .addCase(changePassword.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(changePassword.fulfilled, (state, action: PayloadAction<string>) => {
        state.loading = false;
        state.message = action.payload;
      })
      .addCase(changePassword.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { login, logout, clearMessage, clearError, updateUserProfile } = authSlice.actions;
export default authSlice.reducer;
