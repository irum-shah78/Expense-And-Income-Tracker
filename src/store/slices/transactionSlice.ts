import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

interface Transaction {
  id?: string;
  amount: number;
  description: string;
  category: string;
  createdAt: Date;
  type: 'expense' | 'income';
  attachments?: string[];
  walletId?: string;
}

interface Category {
  id?: string;
  name: string;
}

interface Wallet {
  id: string;
  name: string;
}

interface TransactionState {
  transactions: Transaction[];
  categories: Category[];
  wallets: Wallet[];
  loading: boolean;
  error: string | null;
  message: string | null;
}

const initialState: TransactionState = {
  transactions: [],
  categories: [],
  wallets: [],
  loading: false,
  error: null,
  message: null,
};

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

// Action to fetch transactions
export const fetchTransactions = createAsyncThunk(
  'transactions/fetchTransactions',
  async (userId: string, { rejectWithValue }) => {
    try {
      const querySnapshot = await firestore()
        .collection('transactions')
        .where('userId', '==', userId)
        .get();

      const transactions: Transaction[] = [];
      querySnapshot.forEach(doc => {
        const data = doc.data();

        // Convert Firestore Timestamp to JS Date object
        const createdAt = (data.createdAt as any)?.toDate(); // Converts Firestore Timestamp to Date

        transactions.push({
          id: doc.id,
          amount: data.amount,
          description: data.description,
          category: data.category,
          createdAt: createdAt || new Date(),
          type: data.type,
          attachments: data.attachments || [],
        });
      });

      return transactions;
    } catch (error: any) {
      return rejectWithValue('Failed to fetch transactions.');
    }
  }
);

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

// export const addTransaction = createAsyncThunk(
//   'transactions/addTransaction',
//   async (transaction: Transaction & { userId: string; walletId: string }, { rejectWithValue }) => {
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

// Helper function to upload files to Firebase Storage and get the download URL
const uploadFile = async (fileUri: string, userId: string): Promise<string> => {
  try {
    const fileName = `${Date.now()}_${fileUri.substring(fileUri.lastIndexOf('/') + 1)}`;
    const reference = storage().ref(`attachments/${userId}/${fileName}`);
    await reference.putFile(fileUri);
    const downloadUrl = await reference.getDownloadURL();
    return downloadUrl;
  } catch (error) {
    throw new Error('Failed to upload file');
  }
};

// Updated action to add a transaction with attachments
export const addTransaction = createAsyncThunk(
  'transactions/addTransaction',
  async (transaction: Transaction & { userId: string; walletId: string; files?: string[] }, { rejectWithValue }) => {
    try {
      const uploadedFiles = transaction.files ? await Promise.all(
        transaction.files.map(fileUri => uploadFile(fileUri, transaction.userId))
      ) : [];

      const transactionData = {
        ...transaction,
        attachments: uploadedFiles,  // Store URLs of uploaded files
        createdAt: new Date(),
      };

      // Save to Firestore
      const docRef = await firestore().collection('transactions').add(transactionData);
      return { id: docRef.id, ...transactionData };
    } catch (error: any) {
      return rejectWithValue('Failed to add transaction with attachments.');
    }
  }
);



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

export const fetchTransactionsByUserId = createAsyncThunk(
  'transaction/fetchTransactionsByUserId',
  async (userId: string, { rejectWithValue }) => {
    try {
      const snapshot = await firestore()
        .collection('transactions')
        .where('userId', '==', userId)
        .get();

      const transactions = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));

      return transactions;
    } catch (error: any) {
      return rejectWithValue('Failed to fetch transactions.');
    }
  }
);

export const fetchWallets = createAsyncThunk(
  'transactions/fetchWallets',
  async (_, { rejectWithValue }) => {
    try {
      const querySnapshot = await firestore().collection('wallets').get();
      const wallets: Wallet[] = [];
      querySnapshot.forEach(doc => {
        wallets.push({ id: doc.id, ...doc.data() } as Wallet);
      });
      return wallets;
    } catch (error: any) {
      return rejectWithValue('Failed to fetch wallets.');
    }
  }
);

export const addWallet = createAsyncThunk(
  'transactions/addWallet',
  async (walletName: string, { rejectWithValue }) => {
    try {
      const docRef = await firestore().collection('wallets').add({
        name: walletName,
      });
      return { id: docRef.id, name: walletName };
    } catch (error: any) {
      return rejectWithValue('Failed to add wallet.');
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
      .addCase(fetchTransactionsByUserId.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      // .addCase(fetchTransactionsByUserId.fulfilled, (state, action) => {
      //   state.loading = false;
      //   state.transactions = action.payload;
      // })
      .addCase(fetchTransactionsByUserId.fulfilled, (state, action) => {
        state.loading = false;
        state.transactions = action.payload.map((transaction: any) => ({
          id: transaction.id,
          amount: transaction.amount || 0,
          description: transaction.description || '',
          category: transaction.category || 'Uncategorized',
          createdAt: new Date(transaction.createdAt) || new Date(),
          type: transaction.type || 'expense' || 'income',
        }));
      })
      .addCase(fetchTransactionsByUserId.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(fetchWallets.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchWallets.fulfilled, (state, action: PayloadAction<Wallet[]>) => {
        state.loading = false;
        state.wallets = action.payload;
      })
      .addCase(fetchWallets.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // Add wallet
      .addCase(addWallet.pending, (state) => {
        state.loading = true;
      })
      .addCase(addWallet.fulfilled, (state, action: PayloadAction<Wallet>) => {
        state.loading = false;
        state.wallets.push(action.payload);
        state.message = 'Wallet added successfully';
      })
      .addCase(addWallet.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});
export const { clearMessage, clearError } = transactionSlice.actions;
export default transactionSlice.reducer;
