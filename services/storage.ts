
import { UserRegistration } from '../types';
import { supabase } from './supabaseClient';

const STORAGE_KEY = 'catrix_user_data';
// Change this to 'Data' if you named your table 'Data' in Supabase
const TABLE_NAME = 'registrations';

export const storageService = {
  saveUser: async (user: UserRegistration): Promise<void> => {
    console.log(`Attempting to save to Supabase table: ${TABLE_NAME}...`);
    
    // 1. Save to Supabase
    if (supabase) {
      const { error, data } = await supabase
        .from(TABLE_NAME)
        .insert([
          { 
            full_name: user.fullName, 
            email: user.email, 
            phone: user.phone, 
            attempt_year: user.attemptYear 
          }
        ])
        .select();

      if (error) {
        console.error('Supabase Error:', error);
        
        // Specific check for the "not found in schema cache" error
        if (error.message.includes('schema cache') || error.code === '42P01') {
          throw new Error(`The table "${TABLE_NAME}" was not found. Please ensure you created the table in your Supabase dashboard with exactly this name.`);
        }
        
        throw new Error(error.message || 'Error saving to database');
      }
      
      console.log('Supabase Save Successful:', data);
    } else {
      console.warn('Supabase client not initialized. check your keys.');
    }

    // 2. Save to LocalStorage as a fallback/cache
    localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
  },

  getUser: (): UserRegistration | null => {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : null;
  },

  isRegistered: (): boolean => {
    return localStorage.getItem(STORAGE_KEY) !== null;
  }
};
