
import { UserRegistration } from '../types';

const STORAGE_KEY = 'catrix_user_data';

export const storageService = {
  saveUser: (user: UserRegistration): void => {
    // In a real production app, this would be an API call to MongoDB/Supabase
    localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    console.log('User registered successfully:', user);
  },

  getUser: (): UserRegistration | null => {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : null;
  },

  isRegistered: (): boolean => {
    return localStorage.getItem(STORAGE_KEY) !== null;
  }
};
