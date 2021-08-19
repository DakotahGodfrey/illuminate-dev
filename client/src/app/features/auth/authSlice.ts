import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';

interface AuthState {
  user: {
    id: string | null;
    username: string | null;
  } | null;
}
interface UpdateUserAction {
  id: string;
  username: string;
}
const initialState: AuthState = {
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateUser(state, action: PayloadAction<UpdateUserAction | null>) {
      state.user = action.payload;
    },
  },
});

export const { updateUser } = authSlice.actions;
export const selectAuth = (state: RootState) => state.auth;
export default authSlice.reducer;
