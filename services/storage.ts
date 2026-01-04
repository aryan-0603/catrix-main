import { UserRegistration } from '../types';
import { supabase } from './supabaseClient';

const STORAGE_KEY = 'catrix_user_data';

export const storageService = {
  saveUser: async (user: UserRegistration): Promise<void> => {
    // 1. Save to Supabase only if configured
    if (supabase) {
      const { error } = await supabase
        .from('registrations')
        .insert([
          { 
            full_name: user.fullName, 
            email: user.email, 
            phone: user.phone, 
            attempt_year: user.attemptYear 
          }
        ]);

      if (error) {
        console.error('Error saving to Supabase:', error.message);
        throw error;
      }
    } else {
      console.info('Supabase not configured: Saving data to local storage only.');
    }

    // 2. Save to LocalStorage as a fallback/cache
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