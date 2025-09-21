export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      projects: {
        Row: {
          id: string
          name: string
          customer_id: string | null
          status: string | null
          start_date: string | null
          end_date: string | null
          budget: number | null
          description: string | null
          metadata: Json | null
          created_by: string | null
          created_at: string | null
          updated_at: string | null
          user_id: string
          tenant_id: string | null
        }
        Insert: {
          id?: string
          name: string
          customer_id?: string | null
          status?: string | null
          start_date?: string | null
          end_date?: string | null
          budget?: number | null
          description?: string | null
          metadata?: Json | null
          created_by?: string | null
          created_at?: string | null
          updated_at?: string | null
          user_id: string
          tenant_id?: string | null
        }
        Update: {
          id?: string
          name?: string
          customer_id?: string | null
          status?: string | null
          start_date?: string | null
          end_date?: string | null
          budget?: number | null
          description?: string | null
          metadata?: Json | null
          created_by?: string | null
          created_at?: string | null
          updated_at?: string | null
          user_id?: string
          tenant_id?: string | null
        }
      }
      // Add other tables as needed
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}