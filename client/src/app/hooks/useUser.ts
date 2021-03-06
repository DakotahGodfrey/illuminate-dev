import { selectAuth, updateUser } from 'app/features/auth/authSlice';
import axios from 'axios';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '.';

export const useUser = () => {
  const auth = useAppSelector(selectAuth);
  const { user } = auth;
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!user) {
      const getUser = async () => {
        const res = await axios.get('/api/current-user');
        const data = res.data;
        if (data.error) {
          return;
        }
        dispatch(updateUser(data));
      };
      getUser();
    }
  }, [user, dispatch]);

  return user;
};
