// import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
// import firestore from '@react-native-firebase/firestore';

// interface Transaction {
//   id?: string;
//   amount: number;
//   description: string;
//   category: string;
//   createdAt: Date;
// }

// interface TransactionState {
//   transactions: Transaction[];
//   loading: boolean;
//   error: string | null;
//   message: string | null;
// }

// const initialState: TransactionState = {
//   transactions: [],
//   loading: false,
//   error: null,
//   message: null,
// };

// // Async thunk to fetch transactions
// export const fetchTransactions = createAsyncThunk(
//   'transactions/fetchTransactions',
//   async (userId: string, { rejectWithValue }) => {
//     try {
//       const querySnapshot = await firestore().collection('transactions').where('userId', '==', userId).get();
//       const transactions: Transaction[] = [];
//       querySnapshot.forEach(doc => {
//         transactions.push({ id: doc.id, ...doc.data() } as Transaction);
//       });
//       return transactions;
//     } catch (error: any) {
//       return rejectWithValue('Failed to fetch transactions.');
//     }
//   }
// );

// // Async thunk to add a transaction
// export const addTransaction = createAsyncThunk(
//   'transactions/addTransaction',
//   async (transaction: Transaction & { userId: string }, { rejectWithValue }) => {
//     try {
//       const docRef = await firestore().collection('transactions').add({
//         ...transaction,
//         createdAt: new Date(),
//       });
//       return { id: docRef.id, ...transaction };
//     } catch (error: any) {
//       return rejectWithValue('Failed to add transaction.');
//     }
//   }
// );

// // Async thunk to update a transaction
// export const updateTransaction = createAsyncThunk(
//   'transactions/updateTransaction',
//   async ({ id, transaction }: { id: string; transaction: Transaction }, { rejectWithValue }) => {
//     try {
//       await firestore().collection('transactions').doc(id).update(transaction);
//       return { id, ...transaction };
//     } catch (error: any) {
//       return rejectWithValue('Failed to update transaction.');
//     }
//   }
// );

// // Async thunk to delete a transaction
// export const deleteTransaction = createAsyncThunk(
//   'transactions/deleteTransaction',
//   async (id: string, { rejectWithValue }) => {
//     try {
//       await firestore().collection('transactions').doc(id).delete();
//       return id;
//     } catch (error: any) {
//       return rejectWithValue('Failed to delete transaction.');
//     }
//   }
// );

// const transactionSlice = createSlice({
//   name: 'transactions',
//   initialState,
//   reducers: {
//     clearMessage: (state) => {
//       state.message = null;
//     },
//     clearError: (state) => {
//       state.error = null;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchTransactions.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(fetchTransactions.fulfilled, (state, action: PayloadAction<Transaction[]>) => {
//         state.loading = false;
//         state.transactions = action.payload;
//       })
//       .addCase(fetchTransactions.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload as string;
//       })
//       .addCase(addTransaction.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(addTransaction.fulfilled, (state, action: PayloadAction<Transaction>) => {
//         state.loading = false;
//         state.transactions.push(action.payload);
//         state.message = 'Transaction added successfully';
//       })
//       .addCase(addTransaction.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload as string;
//       })
//       .addCase(updateTransaction.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(updateTransaction.fulfilled, (state, action: PayloadAction<Transaction>) => {
//         state.loading = false;
//         const index = state.transactions.findIndex(t => t.id === action.payload.id);
//         if (index !== -1) {
//           state.transactions[index] = action.payload;
//         }
//         state.message = 'Transaction updated successfully';
//       })
//       .addCase(updateTransaction.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload as string;
//       })
//       .addCase(deleteTransaction.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(deleteTransaction.fulfilled, (state, action: PayloadAction<string>) => {
//         state.loading = false;
//         state.transactions = state.transactions.filter(t => t.id !== action.payload);
//         state.message = 'Transaction deleted successfully';
//       })
//       .addCase(deleteTransaction.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload as string;
//       });
//   },
// });

// export const { clearMessage, clearError } = transactionSlice.actions;
// export default transactionSlice.reducer;


import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import firestore from '@react-native-firebase/firestore';

interface Transaction {
  id?: string;
  amount: number;
  description: string;
  category: string;
  createdAt: Date;
}

interface Category {
  id?: string;
  name: string;
}

interface TransactionState {
  transactions: Transaction[];
  categories: Category[]; // New field to store categories
  loading: boolean;
  error: string | null;
  message: string | null;
}

const initialState: TransactionState = {
  transactions: [],
  categories: [], // Initialize categories as empty array
  loading: false,
  error: null,
  message: null,
};

// Async thunk to fetch transactions
export const fetchTransactions = createAsyncThunk(
  'transactions/fetchTransactions',
  async (userId: string, { rejectWithValue }) => {
    try {
      const querySnapshot = await firestore().collection('transactions').where('userId', '==', userId).get();
      const transactions: Transaction[] = [];
      querySnapshot.forEach(doc => {
        transactions.push({ id: doc.id, ...doc.data() } as Transaction);
      });
      return transactions;
    } catch (error: any) {
      return rejectWithValue('Failed to fetch transactions.');
    }
  }
);

// Async thunk to fetch categories
export const fetchCategories = createAsyncThunk(
  'transactions/fetchCategories',
  async (_, { rejectWithValue }) => {
    try {
      const querySnapshot = await firestore().collection('categories').get();
      const categories: Category[] = [];
      querySnapshot.forEach(doc => {
        categories.push({ id: doc.id, ...doc.data() } as Category);
      });
      return categories;
    } catch (error: any) {
      return rejectWithValue('Failed to fetch categories.');
    }
  }
);

// Async thunk to add a category
export const addCategory = createAsyncThunk(
  'transactions/addCategory',
  async (categoryName: string, { rejectWithValue }) => {
    try {
      const docRef = await firestore().collection('categories').add({
        name: categoryName,
      });
      return { id: docRef.id, name: categoryName };
    } catch (error: any) {
      return rejectWithValue('Failed to add category.');
    }
  }
);

// Async thunk to add a transaction
export const addTransaction = createAsyncThunk(
  'transactions/addTransaction',
  async (transaction: Transaction & { userId: string }, { rejectWithValue }) => {
    try {
      const docRef = await firestore().collection('transactions').add({
        ...transaction,
        createdAt: new Date(),
      });
      return { id: docRef.id, ...transaction };
    } catch (error: any) {
      return rejectWithValue('Failed to add transaction.');
    }
  }
);

// Async thunk to update a transaction
export const updateTransaction = createAsyncThunk(
  'transactions/updateTransaction',
  async ({ id, transaction }: { id: string; transaction: Transaction }, { rejectWithValue }) => {
    try {
      await firestore().collection('transactions').doc(id).update(transaction);
      return { id, ...transaction };
    } catch (error: any) {
      return rejectWithValue('Failed to update transaction.');
    }
  }
);

// Async thunk to delete a transaction
export const deleteTransaction = createAsyncThunk(
  'transactions/deleteTransaction',
  async (id: string, { rejectWithValue }) => {
    try {
      await firestore().collection('transactions').doc(id).delete();
      return id;
    } catch (error: any) {
      return rejectWithValue('Failed to delete transaction.');
    }
  }
);

const transactionSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    clearMessage: (state) => {
      state.message = null;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Transactions
      .addCase(fetchTransactions.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTransactions.fulfilled, (state, action: PayloadAction<Transaction[]>) => {
        state.loading = false;
        state.transactions = action.payload;
      })
      .addCase(fetchTransactions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(addTransaction.pending, (state) => {
        state.loading = true;
      })
      .addCase(addTransaction.fulfilled, (state, action: PayloadAction<Transaction>) => {
        state.loading = false;
        state.transactions.push(action.payload);
        state.message = 'Transaction added successfully';
      })
      .addCase(addTransaction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(updateTransaction.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateTransaction.fulfilled, (state, action: PayloadAction<Transaction>) => {
        state.loading = false;
        const index = state.transactions.findIndex(t => t.id === action.payload.id);
        if (index !== -1) {
          state.transactions[index] = action.payload;
        }
        state.message = 'Transaction updated successfully';
      })
      .addCase(updateTransaction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(deleteTransaction.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteTransaction.fulfilled, (state, action: PayloadAction<string>) => {
        state.loading = false;
        state.transactions = state.transactions.filter(t => t.id !== action.payload);
        state.message = 'Transaction deleted successfully';
      })
      .addCase(deleteTransaction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // Categories
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCategories.fulfilled, (state, action: PayloadAction<Category[]>) => {
        state.loading = false;
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(addCategory.pending, (state) => {
        state.loading = true;
      })
      .addCase(addCategory.fulfilled, (state, action: PayloadAction<Category>) => {
        state.loading = false;
        state.categories.push(action.payload);
        state.message = 'Category added successfully';
      })
      .addCase(addCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearMessage, clearError } = transactionSlice.actions;
export default transactionSlice.reducer;
