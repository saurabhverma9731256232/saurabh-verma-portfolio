import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Database = {
  public: {
    Tables: {
      contact_messages: {
        Row: {
          id: string
          first_name: string
          last_name: string
          email: string
          subject: string
          message: string
          created_at: string
        }
        Insert: {
          id?: string
          first_name: string
          last_name: string
          email: string
          subject: string
          message: string
          created_at?: string
        }
        Update: {
          id?: string
          first_name?: string
          last_name?: string
          email?: string
          subject?: string
          message?: string
          created_at?: string
        }
      }
    }
  }
}