export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      additional_specs: {
        Row: {
          id: string
          spec_category: string
          spec_name: string
          spec_type: string | null
          default_value: string | null
          min_value: number | null
          max_value: number | null
          unit: string | null
          price_impact: number | null
          affects_lead_time: boolean | null
          additional_days: number | null
          is_required: boolean | null
          is_active: boolean | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          spec_category: string
          spec_name: string
          spec_type?: string | null
          default_value?: string | null
          min_value?: number | null
          max_value?: number | null
          unit?: string | null
          price_impact?: number | null
          affects_lead_time?: boolean | null
          additional_days?: number | null
          is_required?: boolean | null
          is_active?: boolean | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          spec_category?: string
          spec_name?: string
          spec_type?: string | null
          default_value?: string | null
          min_value?: number | null
          max_value?: number | null
          unit?: string | null
          price_impact?: number | null
          affects_lead_time?: boolean | null
          additional_days?: number | null
          is_required?: boolean | null
          is_active?: boolean | null
          created_at?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      admin_audit_log: {
        Row: {
          id: string
          action: string
          user_id: string | null
          user_email: string | null
          resource_type: string | null
          resource_id: string | null
          metadata: Json | null
          ip_address: string | null
          created_at: string | null
        }
        Insert: {
          id?: string
          action: string
          user_id?: string | null
          user_email?: string | null
          resource_type?: string | null
          resource_id?: string | null
          metadata?: Json | null
          ip_address?: string | null
          created_at?: string | null
        }
        Update: {
          id?: string
          action?: string
          user_id?: string | null
          user_email?: string | null
          resource_type?: string | null
          resource_id?: string | null
          metadata?: Json | null
          ip_address?: string | null
          created_at?: string | null
        }
        Relationships: []
      }
      admin_permissions: {
        Row: {
          id: string
          role_name: string
          resource: string
          action: string
          created_at: string | null
        }
        Insert: {
          id?: string
          role_name: string
          resource: string
          action: string
          created_at?: string | null
        }
        Update: {
          id?: string
          role_name?: string
          resource?: string
          action?: string
          created_at?: string | null
        }
        Relationships: []
      }
      admin_security_events: {
        Row: {
          id: string
          event_type: string
          user_id: string | null
          ip_address: string | null
          user_agent: string | null
          metadata: Json | null
          severity: string | null
          created_at: string | null
        }
        Insert: {
          id?: string
          event_type: string
          user_id?: string | null
          ip_address?: string | null
          user_agent?: string | null
          metadata?: Json | null
          severity?: string | null
          created_at?: string | null
        }
        Update: {
          id?: string
          event_type?: string
          user_id?: string | null
          ip_address?: string | null
          user_agent?: string | null
          metadata?: Json | null
          severity?: string | null
          created_at?: string | null
        }
        Relationships: []
      }
      admin_sessions: {
        Row: {
          id: string
          user_id: string | null
          session_token: string | null
          ip_address: string | null
          user_agent: string | null
          is_active: boolean | null
          created_at: string | null
          ended_at: string | null
        }
        Insert: {
          id?: string
          user_id?: string | null
          session_token?: string | null
          ip_address?: string | null
          user_agent?: string | null
          is_active?: boolean | null
          created_at?: string | null
          ended_at?: string | null
        }
        Update: {
          id?: string
          user_id?: string | null
          session_token?: string | null
          ip_address?: string | null
          user_agent?: string | null
          is_active?: boolean | null
          created_at?: string | null
          ended_at?: string | null
        }
        Relationships: []
      }
      admin_settings: {
        Row: {
          id: string
          category: string
          key: string
          value: Json | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          category: string
          key: string
          value?: Json | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          category?: string
          key?: string
          value?: Json | null
          updated_at?: string | null
        }
        Relationships: []
      }
      analytics_dashboard_widgets: {
        Row: {
          id: string
          widget_name: string
          widget_type: string | null
          data_source: string | null
          query_config: Json
          display_config: Json | null
          refresh_interval_seconds: number | null
          is_active: boolean | null
          created_by: string | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          widget_name: string
          widget_type?: string | null
          data_source?: string | null
          query_config: Json
          display_config?: Json | null
          refresh_interval_seconds?: number | null
          is_active?: boolean | null
          created_by?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          widget_name?: string
          widget_type?: string | null
          data_source?: string | null
          query_config?: Json
          display_config?: Json | null
          refresh_interval_seconds?: number | null
          is_active?: boolean | null
          created_by?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      app_settings: {
        Row: {
          id: string
          user_id: string | null
          theme: string | null
          notifications_enabled: boolean | null
          offline_mode_enabled: boolean | null
          data_saver: boolean | null
          sync_frequency: string | null
          cache_size_mb: number | null
          language: string | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          user_id?: string | null
          theme?: string | null
          notifications_enabled?: boolean | null
          offline_mode_enabled?: boolean | null
          data_saver?: boolean | null
          sync_frequency?: string | null
          cache_size_mb?: number | null
          language?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          user_id?: string | null
          theme?: string | null
          notifications_enabled?: boolean | null
          offline_mode_enabled?: boolean | null
          data_saver?: boolean | null
          sync_frequency?: string | null
          cache_size_mb?: number | null
          language?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      approval_templates: {
        Row: {
          id: string
          template_name: string
          description: string | null
          document_category: string | null
          document_type: string | null
          approval_stages: Json
          sequential: boolean | null
          auto_start: boolean | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          template_name: string
          description?: string | null
          document_category?: string | null
          document_type?: string | null
          approval_stages: Json
          sequential?: boolean | null
          auto_start?: boolean | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          template_name?: string
          description?: string | null
          document_category?: string | null
          document_type?: string | null
          approval_stages?: Json
          sequential?: boolean | null
          auto_start?: boolean | null
          created_at?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      ar_aging: {
        Row: {
          id: string
          snapshot_date: string
          customer_id: string | null
          current_amount: number | null
          days_1_30: number | null
          days_31_60: number | null
          days_61_90: number | null
          over_90_days: number | null
          total_outstanding: number | null
          created_at: string | null
        }
        Insert: {
          id?: string
          snapshot_date: string
          customer_id?: string | null
          current_amount?: number | null
          days_1_30?: number | null
          days_31_60?: number | null
          days_61_90?: number | null
          over_90_days?: number | null
          total_outstanding?: number | null
          created_at?: string | null
        }
        Update: {
          id?: string
          snapshot_date?: string
          customer_id?: string | null
          current_amount?: number | null
          days_1_30?: number | null
          days_31_60?: number | null
          days_61_90?: number | null
          over_90_days?: number | null
          total_outstanding?: number | null
          created_at?: string | null
        }
        Relationships: []
      }
      automation_logs: {
        Row: {
          id: string
          rule_id: string | null
          trigger_data: Json | null
          actions_executed: Json | null
          status: string | null
          error_message: string | null
          execution_time_ms: number | null
          created_at: string | null
        }
        Insert: {
          id?: string
          rule_id?: string | null
          trigger_data?: Json | null
          actions_executed?: Json | null
          status?: string | null
          error_message?: string | null
          execution_time_ms?: number | null
          created_at?: string | null
        }
        Update: {
          id?: string
          rule_id?: string | null
          trigger_data?: Json | null
          actions_executed?: Json | null
          status?: string | null
          error_message?: string | null
          execution_time_ms?: number | null
          created_at?: string | null
        }
        Relationships: []
      }
      automation_rules: {
        Row: {
          id: string
          rule_name: string
          rule_type: string | null
          trigger_event: string | null
          trigger_conditions: Json | null
          actions: Json
          is_active: boolean | null
          priority: number | null
          last_triggered_at: string | null
          trigger_count: number | null
          created_by: string | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          rule_name: string
          rule_type?: string | null
          trigger_event?: string | null
          trigger_conditions?: Json | null
          actions: Json
          is_active?: boolean | null
          priority?: number | null
          last_triggered_at?: string | null
          trigger_count?: number | null
          created_by?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          rule_name?: string
          rule_type?: string | null
          trigger_event?: string | null
          trigger_conditions?: Json | null
          actions?: Json
          is_active?: boolean | null
          priority?: number | null
          last_triggered_at?: string | null
          trigger_count?: number | null
          created_by?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      budgets: {
        Row: {
          id: string
          name: string
          budget_type: string | null
          period_start: string
          period_end: string
          total_budget: number
          allocated_amount: number | null
          spent_amount: number | null
          remaining_amount: number | null
          status: string | null
          owner_id: string | null
          notes: string | null
          created_at: string | null
          updated_at: string | null
          category: string | null
          department: string | null
          period_name: string | null
        }
        Insert: {
          id?: string
          name: string
          budget_type?: string | null
          period_start: string
          period_end: string
          total_budget: number
          allocated_amount?: number | null
          spent_amount?: number | null
          remaining_amount?: number | null
          status?: string | null
          owner_id?: string | null
          notes?: string | null
          created_at?: string | null
          updated_at?: string | null
          category?: string | null
          department?: string | null
          period_name?: string | null
        }
        Update: {
          id?: string
          name?: string
          budget_type?: string | null
          period_start?: string
          period_end?: string
          total_budget?: number
          allocated_amount?: number | null
          spent_amount?: number | null
          remaining_amount?: number | null
          status?: string | null
          owner_id?: string | null
          notes?: string | null
          created_at?: string | null
          updated_at?: string | null
          category?: string | null
          department?: string | null
          period_name?: string | null
        }
        Relationships: []
      }
      carving_options: {
        Row: {
          id: string
          style: string
          code: string
          price_modifier: number | null
          complexity: string | null
          active: boolean | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          style: string
          code: string
          price_modifier?: number | null
          complexity?: string | null
          active?: boolean | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          style?: string
          code?: string
          price_modifier?: number | null
          complexity?: string | null
          active?: boolean | null
          created_at?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      carving_styles: {
        Row: {
          id: string
          name: string
          description: string | null
          price_modifier: number | null
          active: boolean | null
          sort_order: number | null
          created_at: string | null
          updated_at: string | null
          complexity_level: number | null
        }
        Insert: {
          id?: string
          name: string
          description?: string | null
          price_modifier?: number | null
          active?: boolean | null
          sort_order?: number | null
          created_at?: string | null
          updated_at?: string | null
          complexity_level?: number | null
        }
        Update: {
          id?: string
          name?: string
          description?: string | null
          price_modifier?: number | null
          active?: boolean | null
          sort_order?: number | null
          created_at?: string | null
          updated_at?: string | null
          complexity_level?: number | null
        }
        Relationships: []
      }
      carving_styles_old: {
        Row: {
          id: string
          style_name: string
          complexity_level: string | null
          application_area: string | null
          estimated_hours: number | null
          price_per_hour: number | null
          sample_image_url: string | null
          description: string | null
          artisan_required: boolean | null
          sku_code: string | null
          is_active: boolean | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          style_name: string
          complexity_level?: string | null
          application_area?: string | null
          estimated_hours?: number | null
          price_per_hour?: number | null
          sample_image_url?: string | null
          description?: string | null
          artisan_required?: boolean | null
          sku_code?: string | null
          is_active?: boolean | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          style_name?: string
          complexity_level?: string | null
          application_area?: string | null
          estimated_hours?: number | null
          price_per_hour?: number | null
          sample_image_url?: string | null
          description?: string | null
          artisan_required?: boolean | null
          sku_code?: string | null
          is_active?: boolean | null
          created_at?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      client_files: {
        Row: {
          id: string
          customer_id: string | null
          order_id: string | null
          file_name: string
          file_type: string
          file_size: number | null
          file_url: string
          storage_path: string | null
          category: string | null
          description: string | null
          uploaded_by: string | null
          uploaded_at: string | null
          is_client_visible: boolean | null
          is_archived: boolean | null
          metadata: Json | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          customer_id?: string | null
          order_id?: string | null
          file_name: string
          file_type: string
          file_size?: number | null
          file_url: string
          storage_path?: string | null
          category?: string | null
          description?: string | null
          uploaded_by?: string | null
          uploaded_at?: string | null
          is_client_visible?: boolean | null
          is_archived?: boolean | null
          metadata?: Json | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          customer_id?: string | null
          order_id?: string | null
          file_name?: string
          file_type?: string
          file_size?: number | null
          file_url?: string
          storage_path?: string | null
          category?: string | null
          description?: string | null
          uploaded_by?: string | null
          uploaded_at?: string | null
          is_client_visible?: boolean | null
          is_archived?: boolean | null
          metadata?: Json | null
          created_at?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      client_notifications: {
        Row: {
          id: string
          customer_id: string
          type: string
          title: string
          message: string
          data: Json | null
          read: boolean | null
          created_at: string | null
        }
        Insert: {
          id?: string
          customer_id: string
          type: string
          title: string
          message: string
          data?: Json | null
          read?: boolean | null
          created_at?: string | null
        }
        Update: {
          id?: string
          customer_id?: string
          type?: string
          title?: string
          message?: string
          data?: Json | null
          read?: boolean | null
          created_at?: string | null
        }
        Relationships: []
      }
      client_portal_sessions: {
        Row: {
          id: string
          customer_id: string
          user_email: string
          ip_address: string | null
          user_agent: string | null
          started_at: string | null
          ended_at: string | null
          pages_visited: Json | null
        }
        Insert: {
          id?: string
          customer_id: string
          user_email: string
          ip_address?: string | null
          user_agent?: string | null
          started_at?: string | null
          ended_at?: string | null
          pages_visited?: Json | null
        }
        Update: {
          id?: string
          customer_id?: string
          user_email?: string
          ip_address?: string | null
          user_agent?: string | null
          started_at?: string | null
          ended_at?: string | null
          pages_visited?: Json | null
        }
        Relationships: []
      }
      client_projects: {
        Row: {
          id: string
          client_name: string
          project_code: string
          project_type: string | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          client_name: string
          project_code: string
          project_type?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          client_name?: string
          project_code?: string
          project_type?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      collection_activities: {
        Row: {
          id: string
          customer_id: string | null
          activity_type: string | null
          notes: string | null
          created_at: string | null
          updated_at: string | null
          created_by: string | null
          updated_by: string | null
        }
        Insert: {
          id?: string
          customer_id?: string | null
          activity_type?: string | null
          notes?: string | null
          created_at?: string | null
          updated_at?: string | null
          created_by?: string | null
          updated_by?: string | null
        }
        Update: {
          id?: string
          customer_id?: string | null
          activity_type?: string | null
          notes?: string | null
          created_at?: string | null
          updated_at?: string | null
          created_by?: string | null
          updated_by?: string | null
        }
        Relationships: []
      }
      collections: {
        Row: {
          id: string
          name: string
          description: string | null
          category: string | null
          image_url: string | null
          is_active: boolean | null
          display_order: number | null
          metadata: Json | null
          created_at: string | null
          updated_at: string | null
          prefix: string | null
        }
        Insert: {
          id?: string
          name: string
          description?: string | null
          category?: string | null
          image_url?: string | null
          is_active?: boolean | null
          display_order?: number | null
          metadata?: Json | null
          created_at?: string | null
          updated_at?: string | null
          prefix?: string | null
        }
        Update: {
          id?: string
          name?: string
          description?: string | null
          category?: string | null
          image_url?: string | null
          is_active?: boolean | null
          display_order?: number | null
          metadata?: Json | null
          created_at?: string | null
          updated_at?: string | null
          prefix?: string | null
        }
        Relationships: []
      }
      contacts: {
        Row: {
          id: string
          first_name: string
          last_name: string
          email: string
          phone: string | null
          mobile: string | null
          title: string | null
          company: string
          department: string | null
          is_primary: boolean | null
          customer_id: string | null
          lead_id: string | null
          source: string | null
          status: string | null
          tags: string[] | null
          notes: string | null
          linkedin_url: string | null
          twitter_handle: string | null
          created_at: string | null
          updated_at: string | null
          last_contact_date: string | null
          next_follow_up: string | null
          birthday: string | null
          preferred_contact_method: string | null
          timezone: string | null
          created_by: string | null
          metadata: Json | null
        }
        Insert: {
          id?: string
          first_name: string
          last_name: string
          email: string
          phone?: string | null
          mobile?: string | null
          title?: string | null
          company: string
          department?: string | null
          is_primary?: boolean | null
          customer_id?: string | null
          lead_id?: string | null
          source?: string | null
          status?: string | null
          tags?: string[] | null
          notes?: string | null
          linkedin_url?: string | null
          twitter_handle?: string | null
          created_at?: string | null
          updated_at?: string | null
          last_contact_date?: string | null
          next_follow_up?: string | null
          birthday?: string | null
          preferred_contact_method?: string | null
          timezone?: string | null
          created_by?: string | null
          metadata?: Json | null
        }
        Update: {
          id?: string
          first_name?: string
          last_name?: string
          email?: string
          phone?: string | null
          mobile?: string | null
          title?: string | null
          company?: string
          department?: string | null
          is_primary?: boolean | null
          customer_id?: string | null
          lead_id?: string | null
          source?: string | null
          status?: string | null
          tags?: string[] | null
          notes?: string | null
          linkedin_url?: string | null
          twitter_handle?: string | null
          created_at?: string | null
          updated_at?: string | null
          last_contact_date?: string | null
          next_follow_up?: string | null
          birthday?: string | null
          preferred_contact_method?: string | null
          timezone?: string | null
          created_by?: string | null
          metadata?: Json | null
        }
        Relationships: []
      }
      cost_tracking: {
        Row: {
          id: string
          order_id: string | null
          order_item_id: string | null
          cost_category: string | null
          vendor_id: string | null
          description: string | null
          quantity: number | null
          unit_cost: number | null
          total_cost: number
          currency: string | null
          invoice_number: string | null
          paid: boolean | null
          paid_date: string | null
          quickbooks_expense_id: string | null
          notes: string | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          order_id?: string | null
          order_item_id?: string | null
          cost_category?: string | null
          vendor_id?: string | null
          description?: string | null
          quantity?: number | null
          unit_cost?: number | null
          total_cost: number
          currency?: string | null
          invoice_number?: string | null
          paid?: boolean | null
          paid_date?: string | null
          quickbooks_expense_id?: string | null
          notes?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          order_id?: string | null
          order_item_id?: string | null
          cost_category?: string | null
          vendor_id?: string | null
          description?: string | null
          quantity?: number | null
          unit_cost?: number | null
          total_cost?: number
          currency?: string | null
          invoice_number?: string | null
          paid?: boolean | null
          paid_date?: string | null
          quickbooks_expense_id?: string | null
          notes?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      customer_communication_preferences: {
        Row: {
          id: string
          customer_id: string
          portal_user_id: string | null
          email_notifications: boolean | null
          sms_notifications: boolean | null
          push_notifications: boolean | null
          notification_frequency: string | null
          quiet_hours_start: string | null
          quiet_hours_end: string | null
          timezone: string | null
          language_preference: string | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          customer_id: string
          portal_user_id?: string | null
          email_notifications?: boolean | null
          sms_notifications?: boolean | null
          push_notifications?: boolean | null
          notification_frequency?: string | null
          quiet_hours_start?: string | null
          quiet_hours_end?: string | null
          timezone?: string | null
          language_preference?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          customer_id?: string
          portal_user_id?: string | null
          email_notifications?: boolean | null
          sms_notifications?: boolean | null
          push_notifications?: boolean | null
          notification_frequency?: string | null
          quiet_hours_start?: string | null
          quiet_hours_end?: string | null
          timezone?: string | null
          language_preference?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      customer_financials: {
        Row: {
          id: string
          customer_id: string | null
          quickbooks_customer_id: string | null
          credit_limit: number | null
          payment_terms: string | null
          currency: string | null
          tax_exempt: boolean | null
          tax_id: string | null
          credit_status: string | null
          balance_outstanding: number | null
          ytd_sales: number | null
          lifetime_value: number | null
          average_days_to_pay: number | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          customer_id?: string | null
          quickbooks_customer_id?: string | null
          credit_limit?: number | null
          payment_terms?: string | null
          currency?: string | null
          tax_exempt?: boolean | null
          tax_id?: string | null
          credit_status?: string | null
          balance_outstanding?: number | null
          ytd_sales?: number | null
          lifetime_value?: number | null
          average_days_to_pay?: number | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          customer_id?: string | null
          quickbooks_customer_id?: string | null
          credit_limit?: number | null
          payment_terms?: string | null
          currency?: string | null
          tax_exempt?: boolean | null
          tax_id?: string | null
          credit_status?: string | null
          balance_outstanding?: number | null
          ytd_sales?: number | null
          lifetime_value?: number | null
          average_days_to_pay?: number | null
          created_at?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      customer_portal_access: {
        Row: {
          id: string
          customer_id: string | null
          user_id: string | null
          portal_role: string | null
          is_active: boolean | null
          last_login: string | null
          login_count: number | null
          invited_by: string | null
          invited_at: string | null
          accepted_at: string | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          customer_id?: string | null
          user_id?: string | null
          portal_role?: string | null
          is_active?: boolean | null
          last_login?: string | null
          login_count?: number | null
          invited_by?: string | null
          invited_at?: string | null
          accepted_at?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          customer_id?: string | null
          user_id?: string | null
          portal_role?: string | null
          is_active?: boolean | null
          last_login?: string | null
          login_count?: number | null
          invited_by?: string | null
          invited_at?: string | null
          accepted_at?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      customer_portal_activity: {
        Row: {
          id: string
          portal_id: string
          portal_user_id: string | null
          activity_type: string
          activity_description: string | null
          resource_type: string | null
          resource_id: string | null
          metadata: Json | null
          ip_address: string | null
          user_agent: string | null
          created_at: string | null
        }
        Insert: {
          id?: string
          portal_id: string
          portal_user_id?: string | null
          activity_type: string
          activity_description?: string | null
          resource_type?: string | null
          resource_id?: string | null
          metadata?: Json | null
          ip_address?: string | null
          user_agent?: string | null
          created_at?: string | null
        }
        Update: {
          id?: string
          portal_id?: string
          portal_user_id?: string | null
          activity_type?: string
          activity_description?: string | null
          resource_type?: string | null
          resource_id?: string | null
          metadata?: Json | null
          ip_address?: string | null
          user_agent?: string | null
          created_at?: string | null
        }
        Relationships: []
      }
      customer_portal_sessions: {
        Row: {
          id: string
          portal_user_id: string
          session_token: string
          ip_address: string | null
          user_agent: string | null
          started_at: string | null
          last_active_at: string | null
          ended_at: string | null
          is_active: boolean | null
        }
        Insert: {
          id?: string
          portal_user_id: string
          session_token: string
          ip_address?: string | null
          user_agent?: string | null
          started_at?: string | null
          last_active_at?: string | null
          ended_at?: string | null
          is_active?: boolean | null
        }
        Update: {
          id?: string
          portal_user_id?: string
          session_token?: string
          ip_address?: string | null
          user_agent?: string | null
          started_at?: string | null
          last_active_at?: string | null
          ended_at?: string | null
          is_active?: boolean | null
        }
        Relationships: []
      }
      customer_portal_users: {
        Row: {
          id: string
          portal_id: string
          email: string
          full_name: string
          title: string | null
          phone: string | null
          role: string
          is_primary_contact: boolean | null
          is_active: boolean | null
          invitation_status: string | null
          invitation_sent_at: string | null
          invitation_accepted_at: string | null
          last_login_at: string | null
          auth_user_id: string | null
          created_at: string | null
          updated_at: string | null
          phone_verified: boolean | null
          sms_invitation_sent: boolean | null
          sms_invitation_sent_at: string | null
          preferred_contact_method: string | null
        }
        Insert: {
          id?: string
          portal_id: string
          email: string
          full_name: string
          title?: string | null
          phone?: string | null
          role: string
          is_primary_contact?: boolean | null
          is_active?: boolean | null
          invitation_status?: string | null
          invitation_sent_at?: string | null
          invitation_accepted_at?: string | null
          last_login_at?: string | null
          auth_user_id?: string | null
          created_at?: string | null
          updated_at?: string | null
          phone_verified?: boolean | null
          sms_invitation_sent?: boolean | null
          sms_invitation_sent_at?: string | null
          preferred_contact_method?: string | null
        }
        Update: {
          id?: string
          portal_id?: string
          email?: string
          full_name?: string
          title?: string | null
          phone?: string | null
          role?: string
          is_primary_contact?: boolean | null
          is_active?: boolean | null
          invitation_status?: string | null
          invitation_sent_at?: string | null
          invitation_accepted_at?: string | null
          last_login_at?: string | null
          auth_user_id?: string | null
          created_at?: string | null
          updated_at?: string | null
          phone_verified?: boolean | null
          sms_invitation_sent?: boolean | null
          sms_invitation_sent_at?: string | null
          preferred_contact_method?: string | null
        }
        Relationships: []
      }
      customer_portals: {
        Row: {
          id: string
          customer_id: string
          portal_name: string
          welcome_message: string | null
          primary_color: string | null
          configuration: Json
          is_active: boolean | null
          created_at: string | null
          updated_at: string | null
          created_by: string | null
          updated_by: string | null
        }
        Insert: {
          id?: string
          customer_id: string
          portal_name: string
          welcome_message?: string | null
          primary_color?: string | null
          configuration?: Json
          is_active?: boolean | null
          created_at?: string | null
          updated_at?: string | null
          created_by?: string | null
          updated_by?: string | null
        }
        Update: {
          id?: string
          customer_id?: string
          portal_name?: string
          welcome_message?: string | null
          primary_color?: string | null
          configuration?: Json
          is_active?: boolean | null
          created_at?: string | null
          updated_at?: string | null
          created_by?: string | null
          updated_by?: string | null
        }
        Relationships: []
      }
      customer_production_notifications: {
        Row: {
          id: string
          customer_id: string | null
          order_id: string | null
          type: string | null
          channel: string | null
          subject: string | null
          message: string
          data: Json | null
          status: string | null
          sent_at: string | null
          read_at: string | null
          error_message: string | null
          created_at: string | null
        }
        Insert: {
          id?: string
          customer_id?: string | null
          order_id?: string | null
          type?: string | null
          channel?: string | null
          subject?: string | null
          message: string
          data?: Json | null
          status?: string | null
          sent_at?: string | null
          read_at?: string | null
          error_message?: string | null
          created_at?: string | null
        }
        Update: {
          id?: string
          customer_id?: string | null
          order_id?: string | null
          type?: string | null
          channel?: string | null
          subject?: string | null
          message?: string
          data?: Json | null
          status?: string | null
          sent_at?: string | null
          read_at?: string | null
          error_message?: string | null
          created_at?: string | null
        }
        Relationships: []
      }
      customers: {
        Row: {
          id: string
          name: string
          email: string | null
          phone: string | null
          company: string | null
          address: Json | null
          type: string | null
          status: string | null
          notes: string | null
          tags: string[] | null
          created_by: string | null
          created_at: string | null
          updated_at: string | null
          portal_access: boolean | null
          portal_password: string | null
          last_portal_login: string | null
          portal_access_granted_at: string | null
          portal_access_granted_by: string | null
          user_id: string | null
          company_name: string | null
          city: string | null
          state: string | null
          zip: string | null
          country: string | null
          billing_address_line1: string | null
          billing_address_line2: string | null
          billing_city: string | null
          billing_state: string | null
          billing_zip: string | null
          billing_country: string | null
          shipping_same_as_billing: boolean | null
          credit_limit: number | null
          portal_created_at: string | null
          portal_created_by: string | null
          last_password_reset: string | null
        }
        Insert: {
          id?: string
          name: string
          email?: string | null
          phone?: string | null
          company?: string | null
          address?: Json | null
          type?: string | null
          status?: string | null
          notes?: string | null
          tags?: string[] | null
          created_by?: string | null
          created_at?: string | null
          updated_at?: string | null
          portal_access?: boolean | null
          portal_password?: string | null
          last_portal_login?: string | null
          portal_access_granted_at?: string | null
          portal_access_granted_by?: string | null
          user_id?: string | null
          company_name?: string | null
          city?: string | null
          state?: string | null
          zip?: string | null
          country?: string | null
          billing_address_line1?: string | null
          billing_address_line2?: string | null
          billing_city?: string | null
          billing_state?: string | null
          billing_zip?: string | null
          billing_country?: string | null
          shipping_same_as_billing?: boolean | null
          credit_limit?: number | null
          portal_created_at?: string | null
          portal_created_by?: string | null
          last_password_reset?: string | null
        }
        Update: {
          id?: string
          name?: string
          email?: string | null
          phone?: string | null
          company?: string | null
          address?: Json | null
          type?: string | null
          status?: string | null
          notes?: string | null
          tags?: string[] | null
          created_by?: string | null
          created_at?: string | null
          updated_at?: string | null
          portal_access?: boolean | null
          portal_password?: string | null
          last_portal_login?: string | null
          portal_access_granted_at?: string | null
          portal_access_granted_by?: string | null
          user_id?: string | null
          company_name?: string | null
          city?: string | null
          state?: string | null
          zip?: string | null
          country?: string | null
          billing_address_line1?: string | null
          billing_address_line2?: string | null
          billing_city?: string | null
          billing_state?: string | null
          billing_zip?: string | null
          billing_country?: string | null
          shipping_same_as_billing?: boolean | null
          credit_limit?: number | null
          portal_created_at?: string | null
          portal_created_by?: string | null
          last_password_reset?: string | null
        }
        Relationships: []
      }
      deals: {
        Row: {
          id: string
          title: string
          client: string
          value: number
          stage: string | null
          probability: number | null
          expected_close_date: string | null
          actual_close_date: string | null
          assigned_to: string | null
          created_at: string | null
          updated_at: string | null
          notes: string | null
          customer_id: string | null
          lead_id: string | null
          loss_reason: string | null
          competitors: string[] | null
          products: string[] | null
          created_by: string | null
          metadata: Json | null
        }
        Insert: {
          id?: string
          title: string
          client: string
          value: number
          stage?: string | null
          probability?: number | null
          expected_close_date?: string | null
          actual_close_date?: string | null
          assigned_to?: string | null
          created_at?: string | null
          updated_at?: string | null
          notes?: string | null
          customer_id?: string | null
          lead_id?: string | null
          loss_reason?: string | null
          competitors?: string[] | null
          products?: string[] | null
          created_by?: string | null
          metadata?: Json | null
        }
        Update: {
          id?: string
          title?: string
          client?: string
          value?: number
          stage?: string | null
          probability?: number | null
          expected_close_date?: string | null
          actual_close_date?: string | null
          assigned_to?: string | null
          created_at?: string | null
          updated_at?: string | null
          notes?: string | null
          customer_id?: string | null
          lead_id?: string | null
          loss_reason?: string | null
          competitors?: string[] | null
          products?: string[] | null
          created_by?: string | null
          metadata?: Json | null
        }
        Relationships: []
      }
      delivery_addresses: {
        Row: {
          id: string
          shipment_id: string
          contact_name: string | null
          company_name: string | null
          street_address: string
          city: string
          state: string
          postal_code: string
          country: string | null
          phone: string | null
          email: string | null
          address_type: "delivery" | "billing" | "pickup" | null
          created_at: string | null
        }
        Insert: {
          id?: string
          shipment_id: string
          contact_name?: string | null
          company_name?: string | null
          street_address: string
          city: string
          state: string
          postal_code: string
          country?: string | null
          phone?: string | null
          email?: string | null
          address_type?: "delivery" | "billing" | "pickup" | null
          created_at?: string | null
        }
        Update: {
          id?: string
          shipment_id?: string
          contact_name?: string | null
          company_name?: string | null
          street_address?: string
          city?: string
          state?: string
          postal_code?: string
          country?: string | null
          phone?: string | null
          email?: string | null
          address_type?: "delivery" | "billing" | "pickup" | null
          created_at?: string | null
        }
        Relationships: []
      }
      design_approvals: {
        Row: {
          id: string
          order_id: string | null
          customer_id: string | null
          design_name: string
          version: string | null
          status: string | null
          submitted_at: string | null
          submitted_by: string | null
          reviewed_at: string | null
          reviewed_by: string | null
          approved_at: string | null
          approved_by: string | null
          notes: string | null
          feedback: string | null
          revision_count: number | null
          metadata: Json | null
          created_at: string | null
          updated_at: string | null
          created_by: string | null
          updated_by: string | null
        }
        Insert: {
          id?: string
          order_id?: string | null
          customer_id?: string | null
          design_name: string
          version?: string | null
          status?: string | null
          submitted_at?: string | null
          submitted_by?: string | null
          reviewed_at?: string | null
          reviewed_by?: string | null
          approved_at?: string | null
          approved_by?: string | null
          notes?: string | null
          feedback?: string | null
          revision_count?: number | null
          metadata?: Json | null
          created_at?: string | null
          updated_at?: string | null
          created_by?: string | null
          updated_by?: string | null
        }
        Update: {
          id?: string
          order_id?: string | null
          customer_id?: string | null
          design_name?: string
          version?: string | null
          status?: string | null
          submitted_at?: string | null
          submitted_by?: string | null
          reviewed_at?: string | null
          reviewed_by?: string | null
          approved_at?: string | null
          approved_by?: string | null
          notes?: string | null
          feedback?: string | null
          revision_count?: number | null
          metadata?: Json | null
          created_at?: string | null
          updated_at?: string | null
          created_by?: string | null
          updated_by?: string | null
        }
        Relationships: []
      }
      design_briefs: {
        Row: {
          id: string
          design_project_id: string | null
          title: string
          description: string | null
          target_market: string | null
          price_point_min: number | null
          price_point_max: number | null
          materials_preference: Json | null
          style_references: Json | null
          functional_requirements: string | null
          dimensional_constraints: Json | null
          sustainability_requirements: string | null
          created_by: string | null
          approved_date: string | null
          approved_by: string | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          design_project_id?: string | null
          title: string
          description?: string | null
          target_market?: string | null
          price_point_min?: number | null
          price_point_max?: number | null
          materials_preference?: Json | null
          style_references?: Json | null
          functional_requirements?: string | null
          dimensional_constraints?: Json | null
          sustainability_requirements?: string | null
          created_by?: string | null
          approved_date?: string | null
          approved_by?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          design_project_id?: string | null
          title?: string
          description?: string | null
          target_market?: string | null
          price_point_min?: number | null
          price_point_max?: number | null
          materials_preference?: Json | null
          style_references?: Json | null
          functional_requirements?: string | null
          dimensional_constraints?: Json | null
          sustainability_requirements?: string | null
          created_by?: string | null
          approved_date?: string | null
          approved_by?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      design_deliverables: {
        Row: {
          id: string
          design_project_id: string | null
          deliverable_type: string | null
          version: number | null
          file_name: string | null
          file_url: string | null
          file_size: number | null
          status: string | null
          submitted_date: string | null
          reviewed_by: string | null
          review_date: string | null
          review_comments: string | null
          created_at: string | null
        }
        Insert: {
          id?: string
          design_project_id?: string | null
          deliverable_type?: string | null
          version?: number | null
          file_name?: string | null
          file_url?: string | null
          file_size?: number | null
          status?: string | null
          submitted_date?: string | null
          reviewed_by?: string | null
          review_date?: string | null
          review_comments?: string | null
          created_at?: string | null
        }
        Update: {
          id?: string
          design_project_id?: string | null
          deliverable_type?: string | null
          version?: number | null
          file_name?: string | null
          file_url?: string | null
          file_size?: number | null
          status?: string | null
          submitted_date?: string | null
          reviewed_by?: string | null
          review_date?: string | null
          review_comments?: string | null
          created_at?: string | null
        }
        Relationships: []
      }
      design_files: {
        Row: {
          id: string
          design_approval_id: string | null
          file_name: string
          file_type: string
          file_size: number | null
          file_url: string
          thumbnail_url: string | null
          storage_path: string | null
          uploaded_by: string | null
          uploaded_at: string | null
          is_active: boolean | null
          metadata: Json | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          design_approval_id?: string | null
          file_name: string
          file_type: string
          file_size?: number | null
          file_url: string
          thumbnail_url?: string | null
          storage_path?: string | null
          uploaded_by?: string | null
          uploaded_at?: string | null
          is_active?: boolean | null
          metadata?: Json | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          design_approval_id?: string | null
          file_name?: string
          file_type?: string
          file_size?: number | null
          file_url?: string
          thumbnail_url?: string | null
          storage_path?: string | null
          uploaded_by?: string | null
          uploaded_at?: string | null
          is_active?: boolean | null
          metadata?: Json | null
          created_at?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      design_projects: {
        Row: {
          id: string
          project_name: string
          project_code: string | null
          designer_id: string | null
          collection_id: string | null
          project_type: string | null
          current_stage: string | null
          target_launch_date: string | null
          budget: number | null
          priority: string | null
          created_at: string | null
          updated_at: string | null
          designer_name: string | null
          manufacturer_name: string | null
          next_action: string | null
          days_in_stage: number | null
        }
        Insert: {
          id?: string
          project_name: string
          project_code?: string | null
          designer_id?: string | null
          collection_id?: string | null
          project_type?: string | null
          current_stage?: string | null
          target_launch_date?: string | null
          budget?: number | null
          priority?: string | null
          created_at?: string | null
          updated_at?: string | null
          designer_name?: string | null
          manufacturer_name?: string | null
          next_action?: string | null
          days_in_stage?: number | null
        }
        Update: {
          id?: string
          project_name?: string
          project_code?: string | null
          designer_id?: string | null
          collection_id?: string | null
          project_type?: string | null
          current_stage?: string | null
          target_launch_date?: string | null
          budget?: number | null
          priority?: string | null
          created_at?: string | null
          updated_at?: string | null
          designer_name?: string | null
          manufacturer_name?: string | null
          next_action?: string | null
          days_in_stage?: number | null
        }
        Relationships: []
      }
      design_revisions: {
        Row: {
          id: string
          design_project_id: string | null
          revision_number: number
          revision_stage: string | null
          requested_by: string | null
          request_date: string | null
          revision_notes: string | null
          changes_requested: Json | null
          designer_response: string | null
          response_date: string | null
          approved: boolean | null
          approved_by: string | null
          approval_date: string | null
          time_spent_hours: number | null
          created_at: string | null
        }
        Insert: {
          id?: string
          design_project_id?: string | null
          revision_number: number
          revision_stage?: string | null
          requested_by?: string | null
          request_date?: string | null
          revision_notes?: string | null
          changes_requested?: Json | null
          designer_response?: string | null
          response_date?: string | null
          approved?: boolean | null
          approved_by?: string | null
          approval_date?: string | null
          time_spent_hours?: number | null
          created_at?: string | null
        }
        Update: {
          id?: string
          design_project_id?: string | null
          revision_number?: number
          revision_stage?: string | null
          requested_by?: string | null
          request_date?: string | null
          revision_notes?: string | null
          changes_requested?: Json | null
          designer_response?: string | null
          response_date?: string | null
          approved?: boolean | null
          approved_by?: string | null
          approval_date?: string | null
          time_spent_hours?: number | null
          created_at?: string | null
        }
        Relationships: []
      }
      design_to_prototype: {
        Row: {
          id: string
          design_project_id: string | null
          manufacturer_project_id: string | null
          prototype_status: string | null
          handoff_date: string | null
          estimated_completion: string | null
          actual_completion: string | null
          notes: string | null
          created_at: string | null
        }
        Insert: {
          id?: string
          design_project_id?: string | null
          manufacturer_project_id?: string | null
          prototype_status?: string | null
          handoff_date?: string | null
          estimated_completion?: string | null
          actual_completion?: string | null
          notes?: string | null
          created_at?: string | null
        }
        Update: {
          id?: string
          design_project_id?: string | null
          manufacturer_project_id?: string | null
          prototype_status?: string | null
          handoff_date?: string | null
          estimated_completion?: string | null
          actual_completion?: string | null
          notes?: string | null
          created_at?: string | null
        }
        Relationships: []
      }
      designer_contracts: {
        Row: {
          id: string
          designer_id: string | null
          contract_number: string | null
          contract_type: string | null
          start_date: string | null
          end_date: string | null
          payment_terms: string | null
          deliverables: Json | null
          total_value: number | null
          status: string | null
          signed_date: string | null
          document_url: string | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          designer_id?: string | null
          contract_number?: string | null
          contract_type?: string | null
          start_date?: string | null
          end_date?: string | null
          payment_terms?: string | null
          deliverables?: Json | null
          total_value?: number | null
          status?: string | null
          signed_date?: string | null
          document_url?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          designer_id?: string | null
          contract_number?: string | null
          contract_type?: string | null
          start_date?: string | null
          end_date?: string | null
          payment_terms?: string | null
          deliverables?: Json | null
          total_value?: number | null
          status?: string | null
          signed_date?: string | null
          document_url?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      designer_performance: {
        Row: {
          id: string
          designer_id: string | null
          project_id: string | null
          on_time_delivery: boolean | null
          revision_count: number | null
          quality_rating: number | null
          creativity_rating: number | null
          communication_rating: number | null
          would_rehire: boolean | null
          notes: string | null
          created_at: string | null
        }
        Insert: {
          id?: string
          designer_id?: string | null
          project_id?: string | null
          on_time_delivery?: boolean | null
          revision_count?: number | null
          quality_rating?: number | null
          creativity_rating?: number | null
          communication_rating?: number | null
          would_rehire?: boolean | null
          notes?: string | null
          created_at?: string | null
        }
        Update: {
          id?: string
          designer_id?: string | null
          project_id?: string | null
          on_time_delivery?: boolean | null
          revision_count?: number | null
          quality_rating?: number | null
          creativity_rating?: number | null
          communication_rating?: number | null
          would_rehire?: boolean | null
          notes?: string | null
          created_at?: string | null
        }
        Relationships: []
      }
      designers: {
        Row: {
          id: string
          name: string
          company_name: string | null
          contact_email: string
          phone: string | null
          website: string | null
          portfolio_url: string | null
          specialties: Json | null
          design_style: Json | null
          hourly_rate: number | null
          currency: string | null
          status: string | null
          rating: number | null
          years_experience: number | null
          certifications: Json | null
          notes: string | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          name: string
          company_name?: string | null
          contact_email: string
          phone?: string | null
          website?: string | null
          portfolio_url?: string | null
          specialties?: Json | null
          design_style?: Json | null
          hourly_rate?: number | null
          currency?: string | null
          status?: string | null
          rating?: number | null
          years_experience?: number | null
          certifications?: Json | null
          notes?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          name?: string
          company_name?: string | null
          contact_email?: string
          phone?: string | null
          website?: string | null
          portfolio_url?: string | null
          specialties?: Json | null
          design_style?: Json | null
          hourly_rate?: number | null
          currency?: string | null
          status?: string | null
          rating?: number | null
          years_experience?: number | null
          certifications?: Json | null
          notes?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      document_access_log: {
        Row: {
          id: string
          document_id: string
          accessed_by: string
          access_type: string | null
          ip_address: string | null
          user_agent: string | null
          accessed_at: string | null
        }
        Insert: {
          id?: string
          document_id: string
          accessed_by: string
          access_type?: string | null
          ip_address?: string | null
          user_agent?: string | null
          accessed_at?: string | null
        }
        Update: {
          id?: string
          document_id?: string
          accessed_by?: string
          access_type?: string | null
          ip_address?: string | null
          user_agent?: string | null
          accessed_at?: string | null
        }
        Relationships: []
      }
      document_approval_workflow: {
        Row: {
          id: string
          document_id: string
          approval_step: number
          approver_id: string
          approval_status: string | null
          approval_date: string | null
          comments: string | null
          due_date: string | null
          created_at: string | null
        }
        Insert: {
          id?: string
          document_id: string
          approval_step: number
          approver_id: string
          approval_status?: string | null
          approval_date?: string | null
          comments?: string | null
          due_date?: string | null
          created_at?: string | null
        }
        Update: {
          id?: string
          document_id?: string
          approval_step?: number
          approver_id?: string
          approval_status?: string | null
          approval_date?: string | null
          comments?: string | null
          due_date?: string | null
          created_at?: string | null
        }
        Relationships: []
      }
      document_approvals: {
        Row: {
          id: string
          document_id: string
          approver_id: string | null
          approver_email: string | null
          approver_role: string | null
          approval_status: string
          comments: string | null
          conditions_for_approval: string | null
          markup_file_url: string | null
          requested_at: string | null
          requested_by: string
          responded_at: string | null
          deadline: string | null
          reminder_sent_at: string | null
          auto_escalate_after: string | null
          escalated_to: string | null
          escalated_at: string | null
          priority: string | null
          approval_order: number | null
          requires_all: boolean | null
        }
        Insert: {
          id?: string
          document_id: string
          approver_id?: string | null
          approver_email?: string | null
          approver_role?: string | null
          approval_status?: string
          comments?: string | null
          conditions_for_approval?: string | null
          markup_file_url?: string | null
          requested_at?: string | null
          requested_by: string
          responded_at?: string | null
          deadline?: string | null
          reminder_sent_at?: string | null
          auto_escalate_after?: string | null
          escalated_to?: string | null
          escalated_at?: string | null
          priority?: string | null
          approval_order?: number | null
          requires_all?: boolean | null
        }
        Update: {
          id?: string
          document_id?: string
          approver_id?: string | null
          approver_email?: string | null
          approver_role?: string | null
          approval_status?: string
          comments?: string | null
          conditions_for_approval?: string | null
          markup_file_url?: string | null
          requested_at?: string | null
          requested_by?: string
          responded_at?: string | null
          deadline?: string | null
          reminder_sent_at?: string | null
          auto_escalate_after?: string | null
          escalated_to?: string | null
          escalated_at?: string | null
          priority?: string | null
          approval_order?: number | null
          requires_all?: boolean | null
        }
        Relationships: []
      }
      document_categories: {
        Row: {
          id: string
          category: string
          subcategories: Json | null
          icon: string | null
          color: string | null
          sort_order: number | null
          is_active: boolean | null
          created_at: string | null
        }
        Insert: {
          id?: string
          category: string
          subcategories?: Json | null
          icon?: string | null
          color?: string | null
          sort_order?: number | null
          is_active?: boolean | null
          created_at?: string | null
        }
        Update: {
          id?: string
          category?: string
          subcategories?: Json | null
          icon?: string | null
          color?: string | null
          sort_order?: number | null
          is_active?: boolean | null
          created_at?: string | null
        }
        Relationships: []
      }
      document_comments: {
        Row: {
          id: string
          document_id: string
          revision_id: string | null
          comment_text: string
          commented_by: string
          parent_comment_id: string | null
          mentioned_users: string[] | null
          is_resolved: boolean | null
          resolved_by: string | null
          resolved_at: string | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          document_id: string
          revision_id?: string | null
          comment_text: string
          commented_by: string
          parent_comment_id?: string | null
          mentioned_users?: string[] | null
          is_resolved?: boolean | null
          resolved_by?: string | null
          resolved_at?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          document_id?: string
          revision_id?: string | null
          comment_text?: string
          commented_by?: string
          parent_comment_id?: string | null
          mentioned_users?: string[] | null
          is_resolved?: boolean | null
          resolved_by?: string | null
          resolved_at?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      document_comments_new: {
        Row: {
          id: string
          document_id: string | null
          user_id: number | null
          comment: string
          created_at: string | null
        }
        Insert: {
          id?: string
          document_id?: string | null
          user_id?: number | null
          comment: string
          created_at?: string | null
        }
        Update: {
          id?: string
          document_id?: string | null
          user_id?: number | null
          comment?: string
          created_at?: string | null
        }
        Relationships: []
      }
      document_folders: {
        Row: {
          id: string
          folder_name: string
          parent_folder_id: string | null
          google_drive_folder_id: string | null
          customer_id: string | null
          order_id: string | null
          project_type: string | null
          full_path: string | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          folder_name: string
          parent_folder_id?: string | null
          google_drive_folder_id?: string | null
          customer_id?: string | null
          order_id?: string | null
          project_type?: string | null
          full_path?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          folder_name?: string
          parent_folder_id?: string | null
          google_drive_folder_id?: string | null
          customer_id?: string | null
          order_id?: string | null
          project_type?: string | null
          full_path?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      document_revisions: {
        Row: {
          id: string
          document_id: string | null
          version: number
          name: string | null
          size: number | null
          uploaded_by: string | null
          created_at: string | null
          revision_notes: string | null
          url: string | null
          file_hash: string | null
          changed_by: string | null
          reviewed_by: string | null
          review_status: string | null
          review_date: string | null
        }
        Insert: {
          id?: string
          document_id?: string | null
          version: number
          name?: string | null
          size?: number | null
          uploaded_by?: string | null
          created_at?: string | null
          revision_notes?: string | null
          url?: string | null
          file_hash?: string | null
          changed_by?: string | null
          reviewed_by?: string | null
          review_status?: string | null
          review_date?: string | null
        }
        Update: {
          id?: string
          document_id?: string | null
          version?: number
          name?: string | null
          size?: number | null
          uploaded_by?: string | null
          created_at?: string | null
          revision_notes?: string | null
          url?: string | null
          file_hash?: string | null
          changed_by?: string | null
          reviewed_by?: string | null
          review_status?: string | null
          review_date?: string | null
        }
        Relationships: []
      }
      document_templates: {
        Row: {
          id: string
          template_name: string
          category: "design" | "production" | "prototyping" | "shop_drawings" | "invoices" | "contracts" | "correspondence" | "photos" | "qc_reports" | "shipping" | "other"
          naming_pattern: string | null
          default_tags: string[] | null
          default_metadata: Json | null
          folder_structure: string | null
          is_active: boolean | null
          created_at: string | null
        }
        Insert: {
          id?: string
          template_name: string
          category: "design" | "production" | "prototyping" | "shop_drawings" | "invoices" | "contracts" | "correspondence" | "photos" | "qc_reports" | "shipping" | "other"
          naming_pattern?: string | null
          default_tags?: string[] | null
          default_metadata?: Json | null
          folder_structure?: string | null
          is_active?: boolean | null
          created_at?: string | null
        }
        Update: {
          id?: string
          template_name?: string
          category?: "design" | "production" | "prototyping" | "shop_drawings" | "invoices" | "contracts" | "correspondence" | "photos" | "qc_reports" | "shipping" | "other"
          naming_pattern?: string | null
          default_tags?: string[] | null
          default_metadata?: Json | null
          folder_structure?: string | null
          is_active?: boolean | null
          created_at?: string | null
        }
        Relationships: []
      }
      documents: {
        Row: {
          id: string
          name: string
          original_name: string
          auto_generated_name: string | null
          type: string | null
          category: string | null
          subcategory: string | null
          size: number | null
          uploaded_by: string | null
          project_id: string | null
          project_name: string | null
          client_id: string | null
          client_name: string | null
          order_id: string | null
          order_number: string | null
          item_id: string | null
          item_name: string | null
          collection_id: string | null
          manufacturer_id: string | null
          manufacturer_project_id: string | null
          designer_id: string | null
          design_project_id: string | null
          customer_id: string | null
          order_item_id: string | null
          status: string | null
          tags: Json | null
          url: string | null
          download_url: string | null
          version: number | null
          revision_notes: string | null
          parent_document_id: string | null
          is_latest_version: boolean | null
          access_permissions: Json | null
          file_hash: string | null
          confidentiality: string | null
          metadata: Json | null
          created_at: string | null
          updated_at: string | null
          uploaded_by_user: string | null
          approved_by: string | null
          approved_at: string | null
          approval_status: string | null
        }
        Insert: {
          id?: string
          name: string
          original_name: string
          auto_generated_name?: string | null
          type?: string | null
          category?: string | null
          subcategory?: string | null
          size?: number | null
          uploaded_by?: string | null
          project_id?: string | null
          project_name?: string | null
          client_id?: string | null
          client_name?: string | null
          order_id?: string | null
          order_number?: string | null
          item_id?: string | null
          item_name?: string | null
          collection_id?: string | null
          manufacturer_id?: string | null
          manufacturer_project_id?: string | null
          designer_id?: string | null
          design_project_id?: string | null
          customer_id?: string | null
          order_item_id?: string | null
          status?: string | null
          tags?: Json | null
          url?: string | null
          download_url?: string | null
          version?: number | null
          revision_notes?: string | null
          parent_document_id?: string | null
          is_latest_version?: boolean | null
          access_permissions?: Json | null
          file_hash?: string | null
          confidentiality?: string | null
          metadata?: Json | null
          created_at?: string | null
          updated_at?: string | null
          uploaded_by_user?: string | null
          approved_by?: string | null
          approved_at?: string | null
          approval_status?: string | null
        }
        Update: {
          id?: string
          name?: string
          original_name?: string
          auto_generated_name?: string | null
          type?: string | null
          category?: string | null
          subcategory?: string | null
          size?: number | null
          uploaded_by?: string | null
          project_id?: string | null
          project_name?: string | null
          client_id?: string | null
          client_name?: string | null
          order_id?: string | null
          order_number?: string | null
          item_id?: string | null
          item_name?: string | null
          collection_id?: string | null
          manufacturer_id?: string | null
          manufacturer_project_id?: string | null
          designer_id?: string | null
          design_project_id?: string | null
          customer_id?: string | null
          order_item_id?: string | null
          status?: string | null
          tags?: Json | null
          url?: string | null
          download_url?: string | null
          version?: number | null
          revision_notes?: string | null
          parent_document_id?: string | null
          is_latest_version?: boolean | null
          access_permissions?: Json | null
          file_hash?: string | null
          confidentiality?: string | null
          metadata?: Json | null
          created_at?: string | null
          updated_at?: string | null
          uploaded_by_user?: string | null
          approved_by?: string | null
          approved_at?: string | null
          approval_status?: string | null
        }
        Relationships: []
      }
      email_campaigns: {
        Row: {
          id: string
          campaign_name: string
          subject_line: string
          email_template: string
          from_name: string | null
          from_email: string | null
          reply_to: string | null
          recipient_list: Json | null
          segment_criteria: Json | null
          scheduled_date: string | null
          status: string | null
          total_recipients: number | null
          sent_count: number | null
          open_count: number | null
          click_count: number | null
          bounce_count: number | null
          unsubscribe_count: number | null
          created_by: string | null
          created_at: string | null
          sent_at: string | null
          scheduled_for: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          campaign_name: string
          subject_line: string
          email_template: string
          from_name?: string | null
          from_email?: string | null
          reply_to?: string | null
          recipient_list?: Json | null
          segment_criteria?: Json | null
          scheduled_date?: string | null
          status?: string | null
          total_recipients?: number | null
          sent_count?: number | null
          open_count?: number | null
          click_count?: number | null
          bounce_count?: number | null
          unsubscribe_count?: number | null
          created_by?: string | null
          created_at?: string | null
          sent_at?: string | null
          scheduled_for?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          campaign_name?: string
          subject_line?: string
          email_template?: string
          from_name?: string | null
          from_email?: string | null
          reply_to?: string | null
          recipient_list?: Json | null
          segment_criteria?: Json | null
          scheduled_date?: string | null
          status?: string | null
          total_recipients?: number | null
          sent_count?: number | null
          open_count?: number | null
          click_count?: number | null
          bounce_count?: number | null
          unsubscribe_count?: number | null
          created_by?: string | null
          created_at?: string | null
          sent_at?: string | null
          scheduled_for?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      email_queue: {
        Row: {
          id: string
          recipient_email: string
          template_id: string | null
          subject: string
          html_content: string | null
          text_content: string | null
          status: string | null
          provider: string | null
          provider_message_id: string | null
          error_message: string | null
          sent_at: string | null
          delivered_at: string | null
          priority: number | null
          metadata: Json | null
          created_at: string | null
        }
        Insert: {
          id?: string
          recipient_email: string
          template_id?: string | null
          subject: string
          html_content?: string | null
          text_content?: string | null
          status?: string | null
          provider?: string | null
          provider_message_id?: string | null
          error_message?: string | null
          sent_at?: string | null
          delivered_at?: string | null
          priority?: number | null
          metadata?: Json | null
          created_at?: string | null
        }
        Update: {
          id?: string
          recipient_email?: string
          template_id?: string | null
          subject?: string
          html_content?: string | null
          text_content?: string | null
          status?: string | null
          provider?: string | null
          provider_message_id?: string | null
          error_message?: string | null
          sent_at?: string | null
          delivered_at?: string | null
          priority?: number | null
          metadata?: Json | null
          created_at?: string | null
        }
        Relationships: []
      }
      email_templates: {
        Row: {
          id: string
          template_key: string
          name: string
          subject: string
          html_content: string
          text_content: string | null
          variables: string[] | null
          language: string | null
          is_active: boolean | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          template_key: string
          name: string
          subject: string
          html_content: string
          text_content?: string | null
          variables?: string[] | null
          language?: string | null
          is_active?: boolean | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          template_key?: string
          name?: string
          subject?: string
          html_content?: string
          text_content?: string | null
          variables?: string[] | null
          language?: string | null
          is_active?: boolean | null
          created_at?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      email_tracking: {
        Row: {
          id: string
          campaign_id: string | null
          recipient_email: string | null
          event_type: string | null
          event_data: Json | null
          ip_address: string | null
          user_agent: string | null
          created_at: string | null
        }
        Insert: {
          id?: string
          campaign_id?: string | null
          recipient_email?: string | null
          event_type?: string | null
          event_data?: Json | null
          ip_address?: string | null
          user_agent?: string | null
          created_at?: string | null
        }
        Update: {
          id?: string
          campaign_id?: string | null
          recipient_email?: string | null
          event_type?: string | null
          event_data?: Json | null
          ip_address?: string | null
          user_agent?: string | null
          created_at?: string | null
        }
        Relationships: []
      }
      export_configurations: {
        Row: {
          id: string
          name: string
          module: string
          export_type: string
          fields: Json
          filters: Json | null
          schedule_enabled: boolean | null
          schedule_frequency: string | null
          schedule_time: string | null
          schedule_day_of_week: number | null
          schedule_day_of_month: number | null
          email_recipients: string[] | null
          is_active: boolean | null
          created_by: string | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          name: string
          module: string
          export_type: string
          fields?: Json
          filters?: Json | null
          schedule_enabled?: boolean | null
          schedule_frequency?: string | null
          schedule_time?: string | null
          schedule_day_of_week?: number | null
          schedule_day_of_month?: number | null
          email_recipients?: string[] | null
          is_active?: boolean | null
          created_by?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          name?: string
          module?: string
          export_type?: string
          fields?: Json
          filters?: Json | null
          schedule_enabled?: boolean | null
          schedule_frequency?: string | null
          schedule_time?: string | null
          schedule_day_of_week?: number | null
          schedule_day_of_month?: number | null
          email_recipients?: string[] | null
          is_active?: boolean | null
          created_by?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      export_history: {
        Row: {
          id: string
          configuration_id: string | null
          module: string
          export_type: string
          file_name: string
          file_size: number | null
          file_url: string | null
          storage_path: string | null
          record_count: number | null
          filters_applied: Json | null
          status: string | null
          error_message: string | null
          started_at: string | null
          completed_at: string | null
          expires_at: string | null
          created_by: string | null
          created_at: string | null
        }
        Insert: {
          id?: string
          configuration_id?: string | null
          module: string
          export_type: string
          file_name: string
          file_size?: number | null
          file_url?: string | null
          storage_path?: string | null
          record_count?: number | null
          filters_applied?: Json | null
          status?: string | null
          error_message?: string | null
          started_at?: string | null
          completed_at?: string | null
          expires_at?: string | null
          created_by?: string | null
          created_at?: string | null
        }
        Update: {
          id?: string
          configuration_id?: string | null
          module?: string
          export_type?: string
          file_name?: string
          file_size?: number | null
          file_url?: string | null
          storage_path?: string | null
          record_count?: number | null
          filters_applied?: Json | null
          status?: string | null
          error_message?: string | null
          started_at?: string | null
          completed_at?: string | null
          expires_at?: string | null
          created_by?: string | null
          created_at?: string | null
        }
        Relationships: []
      }
      fabric_brands: {
        Row: {
          id: string
          name: string
          description: string | null
          price_modifier: number | null
          active: boolean | null
          sort_order: number | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          name: string
          description?: string | null
          price_modifier?: number | null
          active?: boolean | null
          sort_order?: number | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          name?: string
          description?: string | null
          price_modifier?: number | null
          active?: boolean | null
          sort_order?: number | null
          created_at?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      fabric_collections: {
        Row: {
          id: string
          brand_id: string | null
          name: string
          description: string | null
          price_modifier: number | null
          active: boolean | null
          sort_order: number | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          brand_id?: string | null
          name: string
          description?: string | null
          price_modifier?: number | null
          active?: boolean | null
          sort_order?: number | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          brand_id?: string | null
          name?: string
          description?: string | null
          price_modifier?: number | null
          active?: boolean | null
          sort_order?: number | null
          created_at?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      fabric_colors: {
        Row: {
          id: string
          collection_id: string | null
          name: string
          hex_code: string | null
          price_modifier: number | null
          active: boolean | null
          sort_order: number | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          collection_id?: string | null
          name: string
          hex_code?: string | null
          price_modifier?: number | null
          active?: boolean | null
          sort_order?: number | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          collection_id?: string | null
          name?: string
          hex_code?: string | null
          price_modifier?: number | null
          active?: boolean | null
          sort_order?: number | null
          created_at?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      fabric_options: {
        Row: {
          id: string
          brand: string
          collection: string | null
          pattern: string | null
          color: string | null
          material_composition: string | null
          width_inches: number | null
          repeat_inches: number | null
          durability_rating: string | null
          price_per_yard: number | null
          in_stock: boolean | null
          lead_time_days: number | null
          supplier: string | null
          sku_code: string | null
          is_active: boolean | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          brand: string
          collection?: string | null
          pattern?: string | null
          color?: string | null
          material_composition?: string | null
          width_inches?: number | null
          repeat_inches?: number | null
          durability_rating?: string | null
          price_per_yard?: number | null
          in_stock?: boolean | null
          lead_time_days?: number | null
          supplier?: string | null
          sku_code?: string | null
          is_active?: boolean | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          brand?: string
          collection?: string | null
          pattern?: string | null
          color?: string | null
          material_composition?: string | null
          width_inches?: number | null
          repeat_inches?: number | null
          durability_rating?: string | null
          price_per_yard?: number | null
          in_stock?: boolean | null
          lead_time_days?: number | null
          supplier?: string | null
          sku_code?: string | null
          is_active?: boolean | null
          created_at?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      feature_permissions: {
        Row: {
          id: string
          user_type: "employee" | "contractor" | "designer" | "manufacturer" | "finance" | "super_admin" | "customer"
          feature_name: string
          feature_category: string | null
          is_enabled: boolean | null
          description: string | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          user_type: "employee" | "contractor" | "designer" | "manufacturer" | "finance" | "super_admin" | "customer"
          feature_name: string
          feature_category?: string | null
          is_enabled?: boolean | null
          description?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          user_type?: "employee" | "contractor" | "designer" | "manufacturer" | "finance" | "super_admin" | "customer"
          feature_name?: string
          feature_category?: string | null
          is_enabled?: boolean | null
          description?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      financial_periods: {
        Row: {
          id: string
          period_type: string | null
          period_name: string
          start_date: string
          end_date: string
          is_closed: boolean | null
          closed_date: string | null
          closed_by: string | null
          total_revenue: number | null
          total_costs: number | null
          gross_profit: number | null
          gross_margin_percent: number | null
          invoice_count: number | null
          payment_count: number | null
          created_at: string | null
        }
        Insert: {
          id?: string
          period_type?: string | null
          period_name: string
          start_date: string
          end_date: string
          is_closed?: boolean | null
          closed_date?: string | null
          closed_by?: string | null
          total_revenue?: number | null
          total_costs?: number | null
          gross_profit?: number | null
          gross_margin_percent?: number | null
          invoice_count?: number | null
          payment_count?: number | null
          created_at?: string | null
        }
        Update: {
          id?: string
          period_type?: string | null
          period_name?: string
          start_date?: string
          end_date?: string
          is_closed?: boolean | null
          closed_date?: string | null
          closed_by?: string | null
          total_revenue?: number | null
          total_costs?: number | null
          gross_profit?: number | null
          gross_margin_percent?: number | null
          invoice_count?: number | null
          payment_count?: number | null
          created_at?: string | null
        }
        Relationships: []
      }
      integration_status: {
        Row: {
          id: string
          service_name: string
          status: string | null
          last_sync: string | null
          sync_errors: Json | null
          metadata: Json | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          service_name: string
          status?: string | null
          last_sync?: string | null
          sync_errors?: Json | null
          metadata?: Json | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          service_name?: string
          status?: string | null
          last_sync?: string | null
          sync_errors?: Json | null
          metadata?: Json | null
          created_at?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      inventory: {
        Row: {
          id: string
          item_id: string | null
          location: string | null
          quantity: number | null
          reserved_quantity: number | null
          reorder_point: number | null
          reorder_quantity: number | null
          last_counted: string | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          item_id?: string | null
          location?: string | null
          quantity?: number | null
          reserved_quantity?: number | null
          reorder_point?: number | null
          reorder_quantity?: number | null
          last_counted?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          item_id?: string | null
          location?: string | null
          quantity?: number | null
          reserved_quantity?: number | null
          reorder_point?: number | null
          reorder_quantity?: number | null
          last_counted?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      invoice_items: {
        Row: {
          id: string
          invoice_id: string | null
          item_id: string | null
          order_item_id: string | null
          quickbooks_item_id: string | null
          description: string
          quantity: number
          unit_price: number
          discount_percent: number | null
          discount_amount: number | null
          tax_rate: number | null
          tax_amount: number | null
          line_total: number | null
          item_type: string | null
          sort_order: number | null
          created_at: string | null
        }
        Insert: {
          id?: string
          invoice_id?: string | null
          item_id?: string | null
          order_item_id?: string | null
          quickbooks_item_id?: string | null
          description: string
          quantity: number
          unit_price: number
          discount_percent?: number | null
          discount_amount?: number | null
          tax_rate?: number | null
          tax_amount?: number | null
          line_total?: number | null
          item_type?: string | null
          sort_order?: number | null
          created_at?: string | null
        }
        Update: {
          id?: string
          invoice_id?: string | null
          item_id?: string | null
          order_item_id?: string | null
          quickbooks_item_id?: string | null
          description?: string
          quantity?: number
          unit_price?: number
          discount_percent?: number | null
          discount_amount?: number | null
          tax_rate?: number | null
          tax_amount?: number | null
          line_total?: number | null
          item_type?: string | null
          sort_order?: number | null
          created_at?: string | null
        }
        Relationships: []
      }
      invoices: {
        Row: {
          id: string
          invoice_number: string
          quickbooks_invoice_id: string | null
          order_id: string | null
          customer_id: string | null
          invoice_type: string | null
          status: string | null
          invoice_date: string
          due_date: string
          currency: string | null
          exchange_rate: number | null
          subtotal: number
          discount_amount: number | null
          discount_percent: number | null
          tax_amount: number | null
          tax_rate: number | null
          shipping_amount: number | null
          total_amount: number
          amount_paid: number | null
          balance_due: number | null
          billing_address: Json | null
          shipping_address: Json | null
          po_number: string | null
          terms_conditions: string | null
          notes: string | null
          internal_notes: string | null
          sent_date: string | null
          viewed_date: string | null
          paid_date: string | null
          quickbooks_sync_date: string | null
          created_by: string | null
          created_at: string | null
          updated_at: string | null
          amount_due: number | null
        }
        Insert: {
          id?: string
          invoice_number: string
          quickbooks_invoice_id?: string | null
          order_id?: string | null
          customer_id?: string | null
          invoice_type?: string | null
          status?: string | null
          invoice_date: string
          due_date: string
          currency?: string | null
          exchange_rate?: number | null
          subtotal: number
          discount_amount?: number | null
          discount_percent?: number | null
          tax_amount?: number | null
          tax_rate?: number | null
          shipping_amount?: number | null
          total_amount: number
          amount_paid?: number | null
          balance_due?: number | null
          billing_address?: Json | null
          shipping_address?: Json | null
          po_number?: string | null
          terms_conditions?: string | null
          notes?: string | null
          internal_notes?: string | null
          sent_date?: string | null
          viewed_date?: string | null
          paid_date?: string | null
          quickbooks_sync_date?: string | null
          created_by?: string | null
          created_at?: string | null
          updated_at?: string | null
          amount_due?: number | null
        }
        Update: {
          id?: string
          invoice_number?: string
          quickbooks_invoice_id?: string | null
          order_id?: string | null
          customer_id?: string | null
          invoice_type?: string | null
          status?: string | null
          invoice_date?: string
          due_date?: string
          currency?: string | null
          exchange_rate?: number | null
          subtotal?: number
          discount_amount?: number | null
          discount_percent?: number | null
          tax_amount?: number | null
          tax_rate?: number | null
          shipping_amount?: number | null
          total_amount?: number
          amount_paid?: number | null
          balance_due?: number | null
          billing_address?: Json | null
          shipping_address?: Json | null
          po_number?: string | null
          terms_conditions?: string | null
          notes?: string | null
          internal_notes?: string | null
          sent_date?: string | null
          viewed_date?: string | null
          paid_date?: string | null
          quickbooks_sync_date?: string | null
          created_by?: string | null
          created_at?: string | null
          updated_at?: string | null
          amount_due?: number | null
        }
        Relationships: []
      }
      items: {
        Row: {
          id: string
          sku: string
          name: string
          collection_id: string | null
          category: string | null
          subcategory: string | null
          description: string | null
          base_price: number | null
          currency: string | null
          dimensions: Json | null
          materials: Json | null
          colors: string[] | null
          lead_time_days: number | null
          min_order_quantity: number | null
          is_active: boolean | null
          is_customizable: boolean | null
          image_urls: string[] | null
          metadata: Json | null
          created_at: string | null
          updated_at: string | null
          item_code: string | null
          weight_lbs: number | null
          full_sku: string | null
          client_sku: string | null
          material_specifications: Json | null
          client_info: Json | null
        }
        Insert: {
          id?: string
          sku: string
          name: string
          collection_id?: string | null
          category?: string | null
          subcategory?: string | null
          description?: string | null
          base_price?: number | null
          currency?: string | null
          dimensions?: Json | null
          materials?: Json | null
          colors?: string[] | null
          lead_time_days?: number | null
          min_order_quantity?: number | null
          is_active?: boolean | null
          is_customizable?: boolean | null
          image_urls?: string[] | null
          metadata?: Json | null
          created_at?: string | null
          updated_at?: string | null
          item_code?: string | null
          weight_lbs?: number | null
          full_sku?: string | null
          client_sku?: string | null
          material_specifications?: Json | null
          client_info?: Json | null
        }
        Update: {
          id?: string
          sku?: string
          name?: string
          collection_id?: string | null
          category?: string | null
          subcategory?: string | null
          description?: string | null
          base_price?: number | null
          currency?: string | null
          dimensions?: Json | null
          materials?: Json | null
          colors?: string[] | null
          lead_time_days?: number | null
          min_order_quantity?: number | null
          is_active?: boolean | null
          is_customizable?: boolean | null
          image_urls?: string[] | null
          metadata?: Json | null
          created_at?: string | null
          updated_at?: string | null
          item_code?: string | null
          weight_lbs?: number | null
          full_sku?: string | null
          client_sku?: string | null
          material_specifications?: Json | null
          client_info?: Json | null
        }
        Relationships: []
      }
      leads: {
        Row: {
          id: string
          name: string
          company: string
          email: string
          phone: string | null
          status: string | null
          source: string | null
          value: number | null
          assigned_to: string | null
          created_at: string | null
          updated_at: string | null
          last_contact: string | null
          next_followup: string | null
          notes: string | null
          tags: string[] | null
          metadata: Json | null
          created_by: string | null
          converted_to_customer_id: string | null
          conversion_date: string | null
        }
        Insert: {
          id?: string
          name: string
          company: string
          email: string
          phone?: string | null
          status?: string | null
          source?: string | null
          value?: number | null
          assigned_to?: string | null
          created_at?: string | null
          updated_at?: string | null
          last_contact?: string | null
          next_followup?: string | null
          notes?: string | null
          tags?: string[] | null
          metadata?: Json | null
          created_by?: string | null
          converted_to_customer_id?: string | null
          conversion_date?: string | null
        }
        Update: {
          id?: string
          name?: string
          company?: string
          email?: string
          phone?: string | null
          status?: string | null
          source?: string | null
          value?: number | null
          assigned_to?: string | null
          created_at?: string | null
          updated_at?: string | null
          last_contact?: string | null
          next_followup?: string | null
          notes?: string | null
          tags?: string[] | null
          metadata?: Json | null
          created_by?: string | null
          converted_to_customer_id?: string | null
          conversion_date?: string | null
        }
        Relationships: []
      }
      magic_link_tokens: {
        Row: {
          id: string
          email: string
          token: string
          expires_at: string
          used_at: string | null
          ip_address: string | null
          user_agent: string | null
          created_at: string | null
        }
        Insert: {
          id?: string
          email: string
          token: string
          expires_at: string
          used_at?: string | null
          ip_address?: string | null
          user_agent?: string | null
          created_at?: string | null
        }
        Update: {
          id?: string
          email?: string
          token?: string
          expires_at?: string
          used_at?: string | null
          ip_address?: string | null
          user_agent?: string | null
          created_at?: string | null
        }
        Relationships: []
      }
      manufacturer_capabilities: {
        Row: {
          id: string
          manufacturer_id: string | null
          category: string | null
          techniques: Json | null
          materials: Json | null
          max_dimensions: Json | null
          min_order_quantity: number | null
          max_capacity_monthly: number | null
          lead_time_days: number | null
          rush_available: boolean | null
          created_at: string | null
        }
        Insert: {
          id?: string
          manufacturer_id?: string | null
          category?: string | null
          techniques?: Json | null
          materials?: Json | null
          max_dimensions?: Json | null
          min_order_quantity?: number | null
          max_capacity_monthly?: number | null
          lead_time_days?: number | null
          rush_available?: boolean | null
          created_at?: string | null
        }
        Update: {
          id?: string
          manufacturer_id?: string | null
          category?: string | null
          techniques?: Json | null
          materials?: Json | null
          max_dimensions?: Json | null
          min_order_quantity?: number | null
          max_capacity_monthly?: number | null
          lead_time_days?: number | null
          rush_available?: boolean | null
          created_at?: string | null
        }
        Relationships: []
      }
      manufacturer_communications: {
        Row: {
          id: string
          manufacturer_id: string | null
          project_id: string | null
          communication_type: string | null
          subject: string | null
          summary: string | null
          participants: Json | null
          action_items: Json | null
          follow_up_required: boolean | null
          follow_up_date: string | null
          created_by: string | null
          created_at: string | null
        }
        Insert: {
          id?: string
          manufacturer_id?: string | null
          project_id?: string | null
          communication_type?: string | null
          subject?: string | null
          summary?: string | null
          participants?: Json | null
          action_items?: Json | null
          follow_up_required?: boolean | null
          follow_up_date?: string | null
          created_by?: string | null
          created_at?: string | null
        }
        Update: {
          id?: string
          manufacturer_id?: string | null
          project_id?: string | null
          communication_type?: string | null
          subject?: string | null
          summary?: string | null
          participants?: Json | null
          action_items?: Json | null
          follow_up_required?: boolean | null
          follow_up_date?: string | null
          created_by?: string | null
          created_at?: string | null
        }
        Relationships: []
      }
      manufacturer_contracts: {
        Row: {
          id: string
          manufacturer_id: string | null
          contract_number: string | null
          contract_type: string | null
          start_date: string | null
          end_date: string | null
          auto_renew: boolean | null
          terms: Json | null
          min_commitment: number | null
          max_liability: number | null
          document_url: string | null
          status: string | null
          signed_date: string | null
          signed_by: string | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          manufacturer_id?: string | null
          contract_number?: string | null
          contract_type?: string | null
          start_date?: string | null
          end_date?: string | null
          auto_renew?: boolean | null
          terms?: Json | null
          min_commitment?: number | null
          max_liability?: number | null
          document_url?: string | null
          status?: string | null
          signed_date?: string | null
          signed_by?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          manufacturer_id?: string | null
          contract_number?: string | null
          contract_type?: string | null
          start_date?: string | null
          end_date?: string | null
          auto_renew?: boolean | null
          terms?: Json | null
          min_commitment?: number | null
          max_liability?: number | null
          document_url?: string | null
          status?: string | null
          signed_date?: string | null
          signed_by?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      manufacturer_performance: {
        Row: {
          id: string
          manufacturer_id: string | null
          metric_date: string
          on_time_delivery_rate: number | null
          quality_score: number | null
          defect_rate: number | null
          response_time_hours: number | null
          rework_rate: number | null
          projects_completed: number | null
          projects_delayed: number | null
          created_at: string | null
        }
        Insert: {
          id?: string
          manufacturer_id?: string | null
          metric_date: string
          on_time_delivery_rate?: number | null
          quality_score?: number | null
          defect_rate?: number | null
          response_time_hours?: number | null
          rework_rate?: number | null
          projects_completed?: number | null
          projects_delayed?: number | null
          created_at?: string | null
        }
        Update: {
          id?: string
          manufacturer_id?: string | null
          metric_date?: string
          on_time_delivery_rate?: number | null
          quality_score?: number | null
          defect_rate?: number | null
          response_time_hours?: number | null
          rework_rate?: number | null
          projects_completed?: number | null
          projects_delayed?: number | null
          created_at?: string | null
        }
        Relationships: []
      }
      manufacturer_pricing: {
        Row: {
          id: string
          manufacturer_id: string | null
          pricing_type: string | null
          base_rate: number | null
          currency: string | null
          volume_discounts: Json | null
          rush_multiplier: number | null
          payment_terms: string | null
          valid_from: string | null
          valid_until: string | null
          notes: string | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          manufacturer_id?: string | null
          pricing_type?: string | null
          base_rate?: number | null
          currency?: string | null
          volume_discounts?: Json | null
          rush_multiplier?: number | null
          payment_terms?: string | null
          valid_from?: string | null
          valid_until?: string | null
          notes?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          manufacturer_id?: string | null
          pricing_type?: string | null
          base_rate?: number | null
          currency?: string | null
          volume_discounts?: Json | null
          rush_multiplier?: number | null
          payment_terms?: string | null
          valid_from?: string | null
          valid_until?: string | null
          notes?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      manufacturer_projects: {
        Row: {
          id: string
          manufacturer_id: string | null
          project_type: string | null
          project_name: string | null
          reference_number: string | null
          item_id: string | null
          collection_id: string | null
          status: string | null
          quoted_price: number | null
          final_price: number | null
          quoted_lead_time_days: number | null
          actual_lead_time_days: number | null
          start_date: string | null
          completion_date: string | null
          quality_rating: number | null
          notes: string | null
          created_at: string | null
          updated_at: string | null
          unit_cost: number | null
          quantity: number | null
          priority: string | null
          project_code: string | null
          total_value: number | null
          estimated_start_date: string | null
          estimated_completion_date: string | null
          actual_start_date: string | null
          actual_completion_date: string | null
          currency: string | null
          shipping_method: string | null
          tracking_number: string | null
          quality_requirements: string | null
          special_instructions: string | null
          created_by: string | null
        }
        Insert: {
          id?: string
          manufacturer_id?: string | null
          project_type?: string | null
          project_name?: string | null
          reference_number?: string | null
          item_id?: string | null
          collection_id?: string | null
          status?: string | null
          quoted_price?: number | null
          final_price?: number | null
          quoted_lead_time_days?: number | null
          actual_lead_time_days?: number | null
          start_date?: string | null
          completion_date?: string | null
          quality_rating?: number | null
          notes?: string | null
          created_at?: string | null
          updated_at?: string | null
          unit_cost?: number | null
          quantity?: number | null
          priority?: string | null
          project_code?: string | null
          total_value?: number | null
          estimated_start_date?: string | null
          estimated_completion_date?: string | null
          actual_start_date?: string | null
          actual_completion_date?: string | null
          currency?: string | null
          shipping_method?: string | null
          tracking_number?: string | null
          quality_requirements?: string | null
          special_instructions?: string | null
          created_by?: string | null
        }
        Update: {
          id?: string
          manufacturer_id?: string | null
          project_type?: string | null
          project_name?: string | null
          reference_number?: string | null
          item_id?: string | null
          collection_id?: string | null
          status?: string | null
          quoted_price?: number | null
          final_price?: number | null
          quoted_lead_time_days?: number | null
          actual_lead_time_days?: number | null
          start_date?: string | null
          completion_date?: string | null
          quality_rating?: number | null
          notes?: string | null
          created_at?: string | null
          updated_at?: string | null
          unit_cost?: number | null
          quantity?: number | null
          priority?: string | null
          project_code?: string | null
          total_value?: number | null
          estimated_start_date?: string | null
          estimated_completion_date?: string | null
          actual_start_date?: string | null
          actual_completion_date?: string | null
          currency?: string | null
          shipping_method?: string | null
          tracking_number?: string | null
          quality_requirements?: string | null
          special_instructions?: string | null
          created_by?: string | null
        }
        Relationships: []
      }
      manufacturer_qc_records: {
        Row: {
          id: string
          manufacturer_project_id: string | null
          inspection_type: string | null
          inspection_date: string | null
          inspector_name: string | null
          passed: boolean | null
          defects_found: Json | null
          measurements: Json | null
          corrective_actions: string | null
          reinspection_required: boolean | null
          photos: Json | null
          report_url: string | null
          created_at: string | null
        }
        Insert: {
          id?: string
          manufacturer_project_id?: string | null
          inspection_type?: string | null
          inspection_date?: string | null
          inspector_name?: string | null
          passed?: boolean | null
          defects_found?: Json | null
          measurements?: Json | null
          corrective_actions?: string | null
          reinspection_required?: boolean | null
          photos?: Json | null
          report_url?: string | null
          created_at?: string | null
        }
        Update: {
          id?: string
          manufacturer_project_id?: string | null
          inspection_type?: string | null
          inspection_date?: string | null
          inspector_name?: string | null
          passed?: boolean | null
          defects_found?: Json | null
          measurements?: Json | null
          corrective_actions?: string | null
          reinspection_required?: boolean | null
          photos?: Json | null
          report_url?: string | null
          created_at?: string | null
        }
        Relationships: []
      }
      manufacturer_shipments: {
        Row: {
          id: string
          manufacturer_project_id: string | null
          shipment_number: string | null
          shipping_carrier: string | null
          tracking_number: string | null
          shipping_method: string | null
          ship_date: string | null
          estimated_delivery_date: string | null
          actual_delivery_date: string | null
          ship_from_address: string | null
          ship_to_address: string | null
          package_count: number | null
          total_weight: number | null
          total_dimensions: string | null
          shipping_cost: number | null
          insurance_value: number | null
          special_handling: string | null
          delivery_instructions: string | null
          status: string | null
          recipient_signature: string | null
          delivery_photos: Json | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          manufacturer_project_id?: string | null
          shipment_number?: string | null
          shipping_carrier?: string | null
          tracking_number?: string | null
          shipping_method?: string | null
          ship_date?: string | null
          estimated_delivery_date?: string | null
          actual_delivery_date?: string | null
          ship_from_address?: string | null
          ship_to_address?: string | null
          package_count?: number | null
          total_weight?: number | null
          total_dimensions?: string | null
          shipping_cost?: number | null
          insurance_value?: number | null
          special_handling?: string | null
          delivery_instructions?: string | null
          status?: string | null
          recipient_signature?: string | null
          delivery_photos?: Json | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          manufacturer_project_id?: string | null
          shipment_number?: string | null
          shipping_carrier?: string | null
          tracking_number?: string | null
          shipping_method?: string | null
          ship_date?: string | null
          estimated_delivery_date?: string | null
          actual_delivery_date?: string | null
          ship_from_address?: string | null
          ship_to_address?: string | null
          package_count?: number | null
          total_weight?: number | null
          total_dimensions?: string | null
          shipping_cost?: number | null
          insurance_value?: number | null
          special_handling?: string | null
          delivery_instructions?: string | null
          status?: string | null
          recipient_signature?: string | null
          delivery_photos?: Json | null
          created_at?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      manufacturers: {
        Row: {
          id: string
          name: string
          company_name: string | null
          contact_person: string | null
          email: string | null
          phone: string | null
          website: string | null
          address: Json | null
          established_year: number | null
          employee_count: string | null
          certifications: Json | null
          status: string | null
          rating: number | null
          notes: string | null
          created_at: string | null
          updated_at: string | null
          contact_email: string | null
          contact_phone: string | null
          performance_rating: number | null
          quality_rating: number | null
          delivery_rating: number | null
          communication_rating: number | null
          city: string | null
          state: string | null
          country: string | null
          postal_code: string | null
          years_in_business: number | null
          annual_capacity: number | null
          lead_time_weeks: number | null
          minimum_order_quantity: number | null
          payment_terms: string | null
        }
        Insert: {
          id?: string
          name: string
          company_name?: string | null
          contact_person?: string | null
          email?: string | null
          phone?: string | null
          website?: string | null
          address?: Json | null
          established_year?: number | null
          employee_count?: string | null
          certifications?: Json | null
          status?: string | null
          rating?: number | null
          notes?: string | null
          created_at?: string | null
          updated_at?: string | null
          contact_email?: string | null
          contact_phone?: string | null
          performance_rating?: number | null
          quality_rating?: number | null
          delivery_rating?: number | null
          communication_rating?: number | null
          city?: string | null
          state?: string | null
          country?: string | null
          postal_code?: string | null
          years_in_business?: number | null
          annual_capacity?: number | null
          lead_time_weeks?: number | null
          minimum_order_quantity?: number | null
          payment_terms?: string | null
        }
        Update: {
          id?: string
          name?: string
          company_name?: string | null
          contact_person?: string | null
          email?: string | null
          phone?: string | null
          website?: string | null
          address?: Json | null
          established_year?: number | null
          employee_count?: string | null
          certifications?: Json | null
          status?: string | null
          rating?: number | null
          notes?: string | null
          created_at?: string | null
          updated_at?: string | null
          contact_email?: string | null
          contact_phone?: string | null
          performance_rating?: number | null
          quality_rating?: number | null
          delivery_rating?: number | null
          communication_rating?: number | null
          city?: string | null
          state?: string | null
          country?: string | null
          postal_code?: string | null
          years_in_business?: number | null
          annual_capacity?: number | null
          lead_time_weeks?: number | null
          minimum_order_quantity?: number | null
          payment_terms?: string | null
        }
        Relationships: []
      }
      material_categories: {
        Row: {
          id: string
          name: string
          icon: string | null
          sort_order: number | null
          active: boolean | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          name: string
          icon?: string | null
          sort_order?: number | null
          active?: boolean | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          name?: string
          icon?: string | null
          sort_order?: number | null
          active?: boolean | null
          created_at?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      material_inventory: {
        Row: {
          id: string
          material_type: string
          option_id: string
          quantity: number | null
          unit: string | null
          min_quantity: number | null
          max_quantity: number | null
          location: string | null
          last_restocked: string | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          material_type: string
          option_id: string
          quantity?: number | null
          unit?: string | null
          min_quantity?: number | null
          max_quantity?: number | null
          location?: string | null
          last_restocked?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          material_type?: string
          option_id?: string
          quantity?: number | null
          unit?: string | null
          min_quantity?: number | null
          max_quantity?: number | null
          location?: string | null
          last_restocked?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      material_price_history: {
        Row: {
          id: string
          material_type: string
          option_id: string
          price: number
          effective_date: string
          created_by: string | null
          notes: string | null
          created_at: string | null
        }
        Insert: {
          id?: string
          material_type: string
          option_id: string
          price: number
          effective_date: string
          created_by?: string | null
          notes?: string | null
          created_at?: string | null
        }
        Update: {
          id?: string
          material_type?: string
          option_id?: string
          price?: number
          effective_date?: string
          created_by?: string | null
          notes?: string | null
          created_at?: string | null
        }
        Relationships: []
      }
      materials: {
        Row: {
          id: string
          category_id: string | null
          name: string
          code: string
          base_price: number | null
          unit: string | null
          active: boolean | null
          created_at: string | null
          updated_at: string | null
          type: string | null
          color: string | null
          finish: string | null
          price_modifier: number | null
          description: string | null
          specifications: Json | null
        }
        Insert: {
          id?: string
          category_id?: string | null
          name: string
          code: string
          base_price?: number | null
          unit?: string | null
          active?: boolean | null
          created_at?: string | null
          updated_at?: string | null
          type?: string | null
          color?: string | null
          finish?: string | null
          price_modifier?: number | null
          description?: string | null
          specifications?: Json | null
        }
        Update: {
          id?: string
          category_id?: string | null
          name?: string
          code?: string
          base_price?: number | null
          unit?: string | null
          active?: boolean | null
          created_at?: string | null
          updated_at?: string | null
          type?: string | null
          color?: string | null
          finish?: string | null
          price_modifier?: number | null
          description?: string | null
          specifications?: Json | null
        }
        Relationships: []
      }
      metal_colors: {
        Row: {
          id: string
          metal_finish_id: string | null
          name: string
          hex_code: string | null
          price_modifier: number | null
          active: boolean | null
          sort_order: number | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          metal_finish_id?: string | null
          name: string
          hex_code?: string | null
          price_modifier?: number | null
          active?: boolean | null
          sort_order?: number | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          metal_finish_id?: string | null
          name?: string
          hex_code?: string | null
          price_modifier?: number | null
          active?: boolean | null
          sort_order?: number | null
          created_at?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      metal_finishes: {
        Row: {
          id: string
          metal_type_id: string | null
          name: string
          description: string | null
          price_modifier: number | null
          active: boolean | null
          sort_order: number | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          metal_type_id?: string | null
          name: string
          description?: string | null
          price_modifier?: number | null
          active?: boolean | null
          sort_order?: number | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          metal_type_id?: string | null
          name?: string
          description?: string | null
          price_modifier?: number | null
          active?: boolean | null
          sort_order?: number | null
          created_at?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      metal_options: {
        Row: {
          id: string
          type: string
          finish: string | null
          color: string | null
          code: string
          price_modifier: number | null
          active: boolean | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          type: string
          finish?: string | null
          color?: string | null
          code: string
          price_modifier?: number | null
          active?: boolean | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          type?: string
          finish?: string | null
          color?: string | null
          code?: string
          price_modifier?: number | null
          active?: boolean | null
          created_at?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      metal_types: {
        Row: {
          id: string
          name: string
          description: string | null
          price_modifier: number | null
          active: boolean | null
          sort_order: number | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          name: string
          description?: string | null
          price_modifier?: number | null
          active?: boolean | null
          sort_order?: number | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          name?: string
          description?: string | null
          price_modifier?: number | null
          active?: boolean | null
          sort_order?: number | null
          created_at?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      notification_queue: {
        Row: {
          id: string
          user_id: string | null
          title: string
          body: string
          icon: string | null
          badge: number | null
          priority: string | null
          status: string | null
          scheduled_for: string | null
          sent_at: string | null
          error_message: string | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          user_id?: string | null
          title: string
          body: string
          icon?: string | null
          badge?: number | null
          priority?: string | null
          status?: string | null
          scheduled_for?: string | null
          sent_at?: string | null
          error_message?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          user_id?: string | null
          title?: string
          body?: string
          icon?: string | null
          badge?: number | null
          priority?: string | null
          status?: string | null
          scheduled_for?: string | null
          sent_at?: string | null
          error_message?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      notifications: {
        Row: {
          id: string
          customer_id: string | null
          user_id: string | null
          type: string | null
          title: string
          message: string
          data: Json | null
          read: boolean | null
          read_at: string | null
          sent_via: Json | null
          priority: string | null
          expires_at: string | null
          created_at: string | null
        }
        Insert: {
          id?: string
          customer_id?: string | null
          user_id?: string | null
          type?: string | null
          title: string
          message: string
          data?: Json | null
          read?: boolean | null
          read_at?: string | null
          sent_via?: Json | null
          priority?: string | null
          expires_at?: string | null
          created_at?: string | null
        }
        Update: {
          id?: string
          customer_id?: string | null
          user_id?: string | null
          type?: string | null
          title?: string
          message?: string
          data?: Json | null
          read?: boolean | null
          read_at?: string | null
          sent_via?: Json | null
          priority?: string | null
          expires_at?: string | null
          created_at?: string | null
        }
        Relationships: []
      }
      offline_sync_queue: {
        Row: {
          id: string
          user_id: string | null
          action: string
          entity_type: string
          entity_id: string | null
          payload: Json
          status: string | null
          attempts: number | null
          error_message: string | null
          created_at: string | null
          synced_at: string | null
        }
        Insert: {
          id?: string
          user_id?: string | null
          action: string
          entity_type: string
          entity_id?: string | null
          payload: Json
          status?: string | null
          attempts?: number | null
          error_message?: string | null
          created_at?: string | null
          synced_at?: string | null
        }
        Update: {
          id?: string
          user_id?: string | null
          action?: string
          entity_type?: string
          entity_id?: string | null
          payload?: Json
          status?: string | null
          attempts?: number | null
          error_message?: string | null
          created_at?: string | null
          synced_at?: string | null
        }
        Relationships: []
      }
      order_item_materials: {
        Row: {
          id: string
          order_item_id: string | null
          metal_option_id: string | null
          wood_option_id: string | null
          stone_option_id: string | null
          weave_option_id: string | null
          carving_option_id: string | null
          additional_specs: string | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          order_item_id?: string | null
          metal_option_id?: string | null
          wood_option_id?: string | null
          stone_option_id?: string | null
          weave_option_id?: string | null
          carving_option_id?: string | null
          additional_specs?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          order_item_id?: string | null
          metal_option_id?: string | null
          wood_option_id?: string | null
          stone_option_id?: string | null
          weave_option_id?: string | null
          carving_option_id?: string | null
          additional_specs?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      order_items: {
        Row: {
          id: string
          order_id: string | null
          item_id: string | null
          quantity: number
          unit_price: number | null
          customizations: Json | null
          notes: string | null
          created_at: string | null
          material_selections: Json | null
          custom_specifications: string | null
          sku_full: string | null
          client_sku: string | null
        }
        Insert: {
          id?: string
          order_id?: string | null
          item_id?: string | null
          quantity: number
          unit_price?: number | null
          customizations?: Json | null
          notes?: string | null
          created_at?: string | null
          material_selections?: Json | null
          custom_specifications?: string | null
          sku_full?: string | null
          client_sku?: string | null
        }
        Update: {
          id?: string
          order_id?: string | null
          item_id?: string | null
          quantity?: number
          unit_price?: number | null
          customizations?: Json | null
          notes?: string | null
          created_at?: string | null
          material_selections?: Json | null
          custom_specifications?: string | null
          sku_full?: string | null
          client_sku?: string | null
        }
        Relationships: []
      }
      order_materials: {
        Row: {
          id: string
          order_id: string | null
          order_item_id: string | null
          fabric_option_id: string | null
          wood_option_id: string | null
          metal_option_id: string | null
          stone_option_id: string | null
          weaving_material_id: string | null
          carving_style_id: string | null
          additional_specs: Json | null
          custom_notes: string | null
          generated_sku: string | null
          material_cost: number | null
          labor_cost: number | null
          total_cost: number | null
          created_at: string | null
          updated_at: string | null
          created_by: string | null
        }
        Insert: {
          id?: string
          order_id?: string | null
          order_item_id?: string | null
          fabric_option_id?: string | null
          wood_option_id?: string | null
          metal_option_id?: string | null
          stone_option_id?: string | null
          weaving_material_id?: string | null
          carving_style_id?: string | null
          additional_specs?: Json | null
          custom_notes?: string | null
          generated_sku?: string | null
          material_cost?: number | null
          labor_cost?: number | null
          total_cost?: number | null
          created_at?: string | null
          updated_at?: string | null
          created_by?: string | null
        }
        Update: {
          id?: string
          order_id?: string | null
          order_item_id?: string | null
          fabric_option_id?: string | null
          wood_option_id?: string | null
          metal_option_id?: string | null
          stone_option_id?: string | null
          weaving_material_id?: string | null
          carving_style_id?: string | null
          additional_specs?: Json | null
          custom_notes?: string | null
          generated_sku?: string | null
          material_cost?: number | null
          labor_cost?: number | null
          total_cost?: number | null
          created_at?: string | null
          updated_at?: string | null
          created_by?: string | null
        }
        Relationships: []
      }
      orders: {
        Row: {
          id: string
          order_number: string
          customer_id: string | null
          collection_id: string | null
          status: string
          order_type: string | null
          priority: string | null
          total_amount: number | null
          currency: string | null
          payment_status: string | null
          payment_terms: string | null
          order_date: string | null
          estimated_completion: string | null
          actual_completion: string | null
          items: Json | null
          metadata: Json | null
          created_at: string | null
          updated_at: string | null
          created_by: string | null
          design_approved_at: string | null
          client_notes: string | null
        }
        Insert: {
          id?: string
          order_number?: string
          customer_id?: string | null
          collection_id?: string | null
          status?: string
          order_type?: string | null
          priority?: string | null
          total_amount?: number | null
          currency?: string | null
          payment_status?: string | null
          payment_terms?: string | null
          order_date?: string | null
          estimated_completion?: string | null
          actual_completion?: string | null
          items?: Json | null
          metadata?: Json | null
          created_at?: string | null
          updated_at?: string | null
          created_by?: string | null
          design_approved_at?: string | null
          client_notes?: string | null
        }
        Update: {
          id?: string
          order_number?: string
          customer_id?: string | null
          collection_id?: string | null
          status?: string
          order_type?: string | null
          priority?: string | null
          total_amount?: number | null
          currency?: string | null
          payment_status?: string | null
          payment_terms?: string | null
          order_date?: string | null
          estimated_completion?: string | null
          actual_completion?: string | null
          items?: Json | null
          metadata?: Json | null
          created_at?: string | null
          updated_at?: string | null
          created_by?: string | null
          design_approved_at?: string | null
          client_notes?: string | null
        }
        Relationships: []
      }
      orders_old: {
        Row: {
          id: string
          order_number: string
          customer_id: string | null
          project_id: string | null
          status: string | null
          order_date: string | null
          delivery_date: string | null
          subtotal: number | null
          tax: number | null
          shipping: number | null
          total: number | null
          currency: string | null
          payment_status: string | null
          payment_terms: string | null
          shipping_address: Json | null
          billing_address: Json | null
          notes: string | null
          metadata: Json | null
          created_by: string | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          order_number: string
          customer_id?: string | null
          project_id?: string | null
          status?: string | null
          order_date?: string | null
          delivery_date?: string | null
          subtotal?: number | null
          tax?: number | null
          shipping?: number | null
          total?: number | null
          currency?: string | null
          payment_status?: string | null
          payment_terms?: string | null
          shipping_address?: Json | null
          billing_address?: Json | null
          notes?: string | null
          metadata?: Json | null
          created_by?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          order_number?: string
          customer_id?: string | null
          project_id?: string | null
          status?: string | null
          order_date?: string | null
          delivery_date?: string | null
          subtotal?: number | null
          tax?: number | null
          shipping?: number | null
          total?: number | null
          currency?: string | null
          payment_status?: string | null
          payment_terms?: string | null
          shipping_address?: Json | null
          billing_address?: Json | null
          notes?: string | null
          metadata?: Json | null
          created_by?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      packing_boxes: {
        Row: {
          id: string
          packing_job_id: string
          box_number: number
          box_type: string | null
          dimensions: string | null
          weight: number | null
          contents_description: string | null
          barcode: string | null
          tracking_number: string | null
          created_at: string | null
        }
        Insert: {
          id?: string
          packing_job_id: string
          box_number: number
          box_type?: string | null
          dimensions?: string | null
          weight?: number | null
          contents_description?: string | null
          barcode?: string | null
          tracking_number?: string | null
          created_at?: string | null
        }
        Update: {
          id?: string
          packing_job_id?: string
          box_number?: number
          box_type?: string | null
          dimensions?: string | null
          weight?: number | null
          contents_description?: string | null
          barcode?: string | null
          tracking_number?: string | null
          created_at?: string | null
        }
        Relationships: []
      }
      packing_jobs: {
        Row: {
          id: string
          order_id: string
          order_item_id: string | null
          qc_inspection_id: string | null
          quantity: number
          packed_quantity: number
          box_count: number
          total_weight: number | null
          dimensions: string | null
          packing_status: "pending" | "in_progress" | "packed" | "shipped"
          packer_assigned_id: string | null
          priority: "urgent" | "high" | "normal" | "low"
          special_instructions: string | null
          packed_date: string | null
          tracking_number: string | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          order_id: string
          order_item_id?: string | null
          qc_inspection_id?: string | null
          quantity: number
          packed_quantity?: number
          box_count?: number
          total_weight?: number | null
          dimensions?: string | null
          packing_status?: "pending" | "in_progress" | "packed" | "shipped"
          packer_assigned_id?: string | null
          priority?: "urgent" | "high" | "normal" | "low"
          special_instructions?: string | null
          packed_date?: string | null
          tracking_number?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          order_id?: string
          order_item_id?: string | null
          qc_inspection_id?: string | null
          quantity?: number
          packed_quantity?: number
          box_count?: number
          total_weight?: number | null
          dimensions?: string | null
          packing_status?: "pending" | "in_progress" | "packed" | "shipped"
          packer_assigned_id?: string | null
          priority?: "urgent" | "high" | "normal" | "low"
          special_instructions?: string | null
          packed_date?: string | null
          tracking_number?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      pandadoc_documents: {
        Row: {
          id: string
          document_id: string
          template_id: string | null
          order_id: string | null
          customer_id: string | null
          document_type: string | null
          status: string | null
          recipients: Json | null
          metadata: Json | null
          sent_at: string | null
          viewed_at: string | null
          signed_at: string | null
          expired_at: string | null
          document_url: string | null
          created_by: string | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          document_id: string
          template_id?: string | null
          order_id?: string | null
          customer_id?: string | null
          document_type?: string | null
          status?: string | null
          recipients?: Json | null
          metadata?: Json | null
          sent_at?: string | null
          viewed_at?: string | null
          signed_at?: string | null
          expired_at?: string | null
          document_url?: string | null
          created_by?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          document_id?: string
          template_id?: string | null
          order_id?: string | null
          customer_id?: string | null
          document_type?: string | null
          status?: string | null
          recipients?: Json | null
          metadata?: Json | null
          sent_at?: string | null
          viewed_at?: string | null
          signed_at?: string | null
          expired_at?: string | null
          document_url?: string | null
          created_by?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      pandadoc_templates: {
        Row: {
          id: number
          pandadoc_template_id: string
          name: string
          template_type: string
          description: string | null
          tags: string[] | null
          is_active: boolean | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: number
          pandadoc_template_id: string
          name: string
          template_type?: string
          description?: string | null
          tags?: string[] | null
          is_active?: boolean | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: number
          pandadoc_template_id?: string
          name?: string
          template_type?: string
          description?: string | null
          tags?: string[] | null
          is_active?: boolean | null
          created_at?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      password_reset_tokens: {
        Row: {
          id: string
          user_id: string | null
          token: string
          expires_at: string
          used_at: string | null
          ip_address: string | null
          created_at: string | null
        }
        Insert: {
          id?: string
          user_id?: string | null
          token: string
          expires_at: string
          used_at?: string | null
          ip_address?: string | null
          created_at?: string | null
        }
        Update: {
          id?: string
          user_id?: string | null
          token?: string
          expires_at?: string
          used_at?: string | null
          ip_address?: string | null
          created_at?: string | null
        }
        Relationships: []
      }
      payment_allocations: {
        Row: {
          id: string
          payment_id: string | null
          invoice_id: string | null
          allocated_amount: number
          created_at: string | null
        }
        Insert: {
          id?: string
          payment_id?: string | null
          invoice_id?: string | null
          allocated_amount: number
          created_at?: string | null
        }
        Update: {
          id?: string
          payment_id?: string | null
          invoice_id?: string | null
          allocated_amount?: number
          created_at?: string | null
        }
        Relationships: []
      }
      payment_batches: {
        Row: {
          id: string
          batch_number: string
          total_amount: number | null
          status: string | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          batch_number: string
          total_amount?: number | null
          status?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          batch_number?: string
          total_amount?: number | null
          status?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      payment_transactions: {
        Row: {
          id: string
          type: string
          amount: number
          currency: string | null
          status: string | null
          method: string | null
          reference_number: string | null
          description: string | null
          customer_id: string | null
          customer_name: string | null
          invoice_id: string | null
          invoice_number: string | null
          quickbooks_id: string | null
          quickbooks_sync_status: string | null
          processed_date: string | null
          created_date: string | null
          batch_id: string | null
          fee_amount: number | null
          net_amount: number | null
          metadata: Json | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          type?: string
          amount: number
          currency?: string | null
          status?: string | null
          method?: string | null
          reference_number?: string | null
          description?: string | null
          customer_id?: string | null
          customer_name?: string | null
          invoice_id?: string | null
          invoice_number?: string | null
          quickbooks_id?: string | null
          quickbooks_sync_status?: string | null
          processed_date?: string | null
          created_date?: string | null
          batch_id?: string | null
          fee_amount?: number | null
          net_amount?: number | null
          metadata?: Json | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          type?: string
          amount?: number
          currency?: string | null
          status?: string | null
          method?: string | null
          reference_number?: string | null
          description?: string | null
          customer_id?: string | null
          customer_name?: string | null
          invoice_id?: string | null
          invoice_number?: string | null
          quickbooks_id?: string | null
          quickbooks_sync_status?: string | null
          processed_date?: string | null
          created_date?: string | null
          batch_id?: string | null
          fee_amount?: number | null
          net_amount?: number | null
          metadata?: Json | null
          created_at?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      payments: {
        Row: {
          id: string
          payment_number: string
          quickbooks_payment_id: string | null
          invoice_id: string | null
          customer_id: string | null
          payment_date: string
          payment_method: string | null
          payment_type: string | null
          amount: number
          currency: string | null
          exchange_rate: number | null
          reference_number: string | null
          processor_transaction_id: string | null
          processing_fee: number | null
          net_amount: number | null
          status: string | null
          notes: string | null
          quickbooks_sync_date: string | null
          created_by: string | null
          created_at: string | null
        }
        Insert: {
          id?: string
          payment_number: string
          quickbooks_payment_id?: string | null
          invoice_id?: string | null
          customer_id?: string | null
          payment_date: string
          payment_method?: string | null
          payment_type?: string | null
          amount: number
          currency?: string | null
          exchange_rate?: number | null
          reference_number?: string | null
          processor_transaction_id?: string | null
          processing_fee?: number | null
          net_amount?: number | null
          status?: string | null
          notes?: string | null
          quickbooks_sync_date?: string | null
          created_by?: string | null
          created_at?: string | null
        }
        Update: {
          id?: string
          payment_number?: string
          quickbooks_payment_id?: string | null
          invoice_id?: string | null
          customer_id?: string | null
          payment_date?: string
          payment_method?: string | null
          payment_type?: string | null
          amount?: number
          currency?: string | null
          exchange_rate?: number | null
          reference_number?: string | null
          processor_transaction_id?: string | null
          processing_fee?: number | null
          net_amount?: number | null
          status?: string | null
          notes?: string | null
          quickbooks_sync_date?: string | null
          created_by?: string | null
          created_at?: string | null
        }
        Relationships: []
      }
      performance_metrics: {
        Row: {
          id: string
          metric_date: string
          metric_type: string | null
          metric_value: number | null
          metadata: Json | null
          created_at: string | null
        }
        Insert: {
          id?: string
          metric_date: string
          metric_type?: string | null
          metric_value?: number | null
          metadata?: Json | null
          created_at?: string | null
        }
        Update: {
          id?: string
          metric_date?: string
          metric_type?: string | null
          metric_value?: number | null
          metadata?: Json | null
          created_at?: string | null
        }
        Relationships: []
      }
      pickup_requests: {
        Row: {
          id: string
          shipment_id: string | null
          pickup_date: string
          ready_time: string
          close_time: string
          location: Json
          confirmation_number: string | null
          driver_name: string | null
          driver_phone: string | null
          status: string | null
          seko_pickup_response: Json | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          shipment_id?: string | null
          pickup_date: string
          ready_time: string
          close_time: string
          location: Json
          confirmation_number?: string | null
          driver_name?: string | null
          driver_phone?: string | null
          status?: string | null
          seko_pickup_response?: Json | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          shipment_id?: string | null
          pickup_date?: string
          ready_time?: string
          close_time?: string
          location?: Json
          confirmation_number?: string | null
          driver_name?: string | null
          driver_phone?: string | null
          status?: string | null
          seko_pickup_response?: Json | null
          created_at?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      portal_access_logs: {
        Row: {
          id: string
          customer_id: string | null
          portal_user_id: string | null
          action: string
          resource_type: string | null
          resource_id: string | null
          ip_address: string | null
          user_agent: string | null
          request_method: string | null
          request_path: string | null
          response_status: number | null
          occurred_at: string | null
          processing_time_ms: number | null
          metadata: Json | null
        }
        Insert: {
          id?: string
          customer_id?: string | null
          portal_user_id?: string | null
          action: string
          resource_type?: string | null
          resource_id?: string | null
          ip_address?: string | null
          user_agent?: string | null
          request_method?: string | null
          request_path?: string | null
          response_status?: number | null
          occurred_at?: string | null
          processing_time_ms?: number | null
          metadata?: Json | null
        }
        Update: {
          id?: string
          customer_id?: string | null
          portal_user_id?: string | null
          action?: string
          resource_type?: string | null
          resource_id?: string | null
          ip_address?: string | null
          user_agent?: string | null
          request_method?: string | null
          request_path?: string | null
          response_status?: number | null
          occurred_at?: string | null
          processing_time_ms?: number | null
          metadata?: Json | null
        }
        Relationships: []
      }
      portal_activity_log: {
        Row: {
          id: string
          customer_id: string | null
          user_id: string | null
          activity_type: string
          description: string | null
          metadata: Json | null
          ip_address: string | null
          user_agent: string | null
          created_at: string | null
        }
        Insert: {
          id?: string
          customer_id?: string | null
          user_id?: string | null
          activity_type: string
          description?: string | null
          metadata?: Json | null
          ip_address?: string | null
          user_agent?: string | null
          created_at?: string | null
        }
        Update: {
          id?: string
          customer_id?: string | null
          user_id?: string | null
          activity_type?: string
          description?: string | null
          metadata?: Json | null
          ip_address?: string | null
          user_agent?: string | null
          created_at?: string | null
        }
        Relationships: []
      }
      portal_configurations: {
        Row: {
          id: string
          customer_id: string
          portal_name: string | null
          welcome_message: string | null
          custom_logo_url: string | null
          primary_color: string | null
          show_dashboard: boolean | null
          show_orders: boolean | null
          show_shipping: boolean | null
          show_financials: boolean | null
          show_documents: boolean | null
          show_approvals: boolean | null
          show_production_tracking: boolean | null
          show_design_center: boolean | null
          show_support_tickets: boolean | null
          show_invoice_details: boolean | null
          show_payment_history: boolean | null
          show_outstanding_balance: boolean | null
          allow_online_payments: boolean | null
          allow_document_upload: boolean | null
          allowed_file_types: string[] | null
          max_file_size_mb: number | null
          require_approval_for_uploads: boolean | null
          enable_notifications: boolean | null
          enable_email_notifications: boolean | null
          notification_frequency: string | null
          session_timeout_minutes: number | null
          require_mfa: boolean | null
          allowed_ip_ranges: string[] | null
          created_at: string | null
          created_by: string | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          id?: string
          customer_id: string
          portal_name?: string | null
          welcome_message?: string | null
          custom_logo_url?: string | null
          primary_color?: string | null
          show_dashboard?: boolean | null
          show_orders?: boolean | null
          show_shipping?: boolean | null
          show_financials?: boolean | null
          show_documents?: boolean | null
          show_approvals?: boolean | null
          show_production_tracking?: boolean | null
          show_design_center?: boolean | null
          show_support_tickets?: boolean | null
          show_invoice_details?: boolean | null
          show_payment_history?: boolean | null
          show_outstanding_balance?: boolean | null
          allow_online_payments?: boolean | null
          allow_document_upload?: boolean | null
          allowed_file_types?: string[] | null
          max_file_size_mb?: number | null
          require_approval_for_uploads?: boolean | null
          enable_notifications?: boolean | null
          enable_email_notifications?: boolean | null
          notification_frequency?: string | null
          session_timeout_minutes?: number | null
          require_mfa?: boolean | null
          allowed_ip_ranges?: string[] | null
          created_at?: string | null
          created_by?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          id?: string
          customer_id?: string
          portal_name?: string | null
          welcome_message?: string | null
          custom_logo_url?: string | null
          primary_color?: string | null
          show_dashboard?: boolean | null
          show_orders?: boolean | null
          show_shipping?: boolean | null
          show_financials?: boolean | null
          show_documents?: boolean | null
          show_approvals?: boolean | null
          show_production_tracking?: boolean | null
          show_design_center?: boolean | null
          show_support_tickets?: boolean | null
          show_invoice_details?: boolean | null
          show_payment_history?: boolean | null
          show_outstanding_balance?: boolean | null
          allow_online_payments?: boolean | null
          allow_document_upload?: boolean | null
          allowed_file_types?: string[] | null
          max_file_size_mb?: number | null
          require_approval_for_uploads?: boolean | null
          enable_notifications?: boolean | null
          enable_email_notifications?: boolean | null
          notification_frequency?: string | null
          session_timeout_minutes?: number | null
          require_mfa?: boolean | null
          allowed_ip_ranges?: string[] | null
          created_at?: string | null
          created_by?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: []
      }
      portal_documents: {
        Row: {
          id: string
          customer_id: string | null
          document_type: string
          title: string
          description: string | null
          file_url: string | null
          file_size: number | null
          mime_type: string | null
          is_public: boolean | null
          uploaded_by: string | null
          tags: string[] | null
          metadata: Json | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          customer_id?: string | null
          document_type: string
          title: string
          description?: string | null
          file_url?: string | null
          file_size?: number | null
          mime_type?: string | null
          is_public?: boolean | null
          uploaded_by?: string | null
          tags?: string[] | null
          metadata?: Json | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          customer_id?: string | null
          document_type?: string
          title?: string
          description?: string | null
          file_url?: string | null
          file_size?: number | null
          mime_type?: string | null
          is_public?: boolean | null
          uploaded_by?: string | null
          tags?: string[] | null
          metadata?: Json | null
          created_at?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      portal_invitations: {
        Row: {
          id: string
          customer_id: string
          email: string
          full_name: string
          title: string | null
          portal_role: string | null
          invitation_token: string
          status: string | null
          sent_at: string | null
          expires_at: string | null
          accepted_at: string | null
          revoked_at: string | null
          initial_permissions: Json | null
          custom_message: string | null
          sender_name: string | null
          created_by: string
          created_at: string | null
        }
        Insert: {
          id?: string
          customer_id: string
          email: string
          full_name: string
          title?: string | null
          portal_role?: string | null
          invitation_token?: string
          status?: string | null
          sent_at?: string | null
          expires_at?: string | null
          accepted_at?: string | null
          revoked_at?: string | null
          initial_permissions?: Json | null
          custom_message?: string | null
          sender_name?: string | null
          created_by: string
          created_at?: string | null
        }
        Update: {
          id?: string
          customer_id?: string
          email?: string
          full_name?: string
          title?: string | null
          portal_role?: string | null
          invitation_token?: string
          status?: string | null
          sent_at?: string | null
          expires_at?: string | null
          accepted_at?: string | null
          revoked_at?: string | null
          initial_permissions?: Json | null
          custom_message?: string | null
          sender_name?: string | null
          created_by?: string
          created_at?: string | null
        }
        Relationships: []
      }
      portal_sessions: {
        Row: {
          id: string
          customer_id: string
          portal_user_id: string | null
          session_token: string
          ip_address: string | null
          user_agent: string | null
          device_info: Json | null
          started_at: string | null
          last_activity: string | null
          ended_at: string | null
          is_active: boolean | null
          pages_visited: string[] | null
          actions_performed: Json | null
          is_suspicious: boolean | null
          risk_score: number | null
        }
        Insert: {
          id?: string
          customer_id: string
          portal_user_id?: string | null
          session_token: string
          ip_address?: string | null
          user_agent?: string | null
          device_info?: Json | null
          started_at?: string | null
          last_activity?: string | null
          ended_at?: string | null
          is_active?: boolean | null
          pages_visited?: string[] | null
          actions_performed?: Json | null
          is_suspicious?: boolean | null
          risk_score?: number | null
        }
        Update: {
          id?: string
          customer_id?: string
          portal_user_id?: string | null
          session_token?: string
          ip_address?: string | null
          user_agent?: string | null
          device_info?: Json | null
          started_at?: string | null
          last_activity?: string | null
          ended_at?: string | null
          is_active?: boolean | null
          pages_visited?: string[] | null
          actions_performed?: Json | null
          is_suspicious?: boolean | null
          risk_score?: number | null
        }
        Relationships: []
      }
      portal_settings: {
        Row: {
          id: string
          customer_id: string | null
          show_production_tracking: boolean | null
          show_financial_details: boolean | null
          show_shipping_info: boolean | null
          allow_document_upload: boolean | null
          allow_design_approval: boolean | null
          custom_branding: Json | null
          notification_preferences: Json | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          customer_id?: string | null
          show_production_tracking?: boolean | null
          show_financial_details?: boolean | null
          show_shipping_info?: boolean | null
          allow_document_upload?: boolean | null
          allow_design_approval?: boolean | null
          custom_branding?: Json | null
          notification_preferences?: Json | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          customer_id?: string | null
          show_production_tracking?: boolean | null
          show_financial_details?: boolean | null
          show_shipping_info?: boolean | null
          allow_document_upload?: boolean | null
          allow_design_approval?: boolean | null
          custom_branding?: Json | null
          notification_preferences?: Json | null
          created_at?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      portal_users: {
        Row: {
          id: string
          customer_id: string
          auth_user_id: string | null
          email: string
          full_name: string
          title: string | null
          phone: string | null
          portal_role: string | null
          is_active: boolean | null
          is_primary_contact: boolean | null
          permissions: Json | null
          last_login: string | null
          login_count: number | null
          password_reset_required: boolean | null
          created_at: string | null
          created_by: string | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          id?: string
          customer_id: string
          auth_user_id?: string | null
          email: string
          full_name: string
          title?: string | null
          phone?: string | null
          portal_role?: string | null
          is_active?: boolean | null
          is_primary_contact?: boolean | null
          permissions?: Json | null
          last_login?: string | null
          login_count?: number | null
          password_reset_required?: boolean | null
          created_at?: string | null
          created_by?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          id?: string
          customer_id?: string
          auth_user_id?: string | null
          email?: string
          full_name?: string
          title?: string | null
          phone?: string | null
          portal_role?: string | null
          is_active?: boolean | null
          is_primary_contact?: boolean | null
          permissions?: Json | null
          last_login?: string | null
          login_count?: number | null
          password_reset_required?: boolean | null
          created_at?: string | null
          created_by?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: []
      }
      product_materials: {
        Row: {
          id: string
          product_id: string | null
          metal_option_id: string | null
          wood_option_id: string | null
          stone_option_id: string | null
          weave_option_id: string | null
          carving_option_id: string | null
          additional_specs: string | null
          is_default: boolean | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          product_id?: string | null
          metal_option_id?: string | null
          wood_option_id?: string | null
          stone_option_id?: string | null
          weave_option_id?: string | null
          carving_option_id?: string | null
          additional_specs?: string | null
          is_default?: boolean | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          product_id?: string | null
          metal_option_id?: string | null
          wood_option_id?: string | null
          stone_option_id?: string | null
          weave_option_id?: string | null
          carving_option_id?: string | null
          additional_specs?: string | null
          is_default?: boolean | null
          created_at?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      production_batches: {
        Row: {
          id: string
          batch_number: string
          order_id: string | null
          status: string | null
          start_date: string | null
          completion_date: string | null
          assigned_to: string | null
          notes: string | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          batch_number: string
          order_id?: string | null
          status?: string | null
          start_date?: string | null
          completion_date?: string | null
          assigned_to?: string | null
          notes?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          batch_number?: string
          order_id?: string | null
          status?: string | null
          start_date?: string | null
          completion_date?: string | null
          assigned_to?: string | null
          notes?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      production_events: {
        Row: {
          id: string
          production_tracking_id: string | null
          event_type: string
          title: string
          description: string | null
          severity: string | null
          data: Json | null
          created_by: string | null
          created_at: string | null
        }
        Insert: {
          id?: string
          production_tracking_id?: string | null
          event_type: string
          title: string
          description?: string | null
          severity?: string | null
          data?: Json | null
          created_by?: string | null
          created_at?: string | null
        }
        Update: {
          id?: string
          production_tracking_id?: string | null
          event_type?: string
          title?: string
          description?: string | null
          severity?: string | null
          data?: Json | null
          created_by?: string | null
          created_at?: string | null
        }
        Relationships: []
      }
      production_items: {
        Row: {
          id: string
          order_id: string
          order_item_id: string | null
          item_name: string
          current_stage_name: string | null
          current_stage_id: string | null
          progress: number | null
          priority: "urgent" | "high" | "normal" | "low"
          assigned_to: string | null
          started_at: string | null
          estimated_completion: string | null
          customer_name: string | null
          status: "planned" | "in_progress" | "quality_check" | "completed" | "delayed" | "on_hold"
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          order_id: string
          order_item_id?: string | null
          item_name: string
          current_stage_name?: string | null
          current_stage_id?: string | null
          progress?: number | null
          priority?: "urgent" | "high" | "normal" | "low"
          assigned_to?: string | null
          started_at?: string | null
          estimated_completion?: string | null
          customer_name?: string | null
          status?: "planned" | "in_progress" | "quality_check" | "completed" | "delayed" | "on_hold"
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          order_id?: string
          order_item_id?: string | null
          item_name?: string
          current_stage_name?: string | null
          current_stage_id?: string | null
          progress?: number | null
          priority?: "urgent" | "high" | "normal" | "low"
          assigned_to?: string | null
          started_at?: string | null
          estimated_completion?: string | null
          customer_name?: string | null
          status?: "planned" | "in_progress" | "quality_check" | "completed" | "delayed" | "on_hold"
          created_at?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      production_milestones: {
        Row: {
          id: string
          manufacturer_project_id: string | null
          milestone_name: string
          milestone_type: string | null
          planned_date: string | null
          actual_date: string | null
          status: string | null
          completion_percentage: number | null
          notes: string | null
          photos: Json | null
          created_by: string | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          manufacturer_project_id?: string | null
          milestone_name: string
          milestone_type?: string | null
          planned_date?: string | null
          actual_date?: string | null
          status?: string | null
          completion_percentage?: number | null
          notes?: string | null
          photos?: Json | null
          created_by?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          manufacturer_project_id?: string | null
          milestone_name?: string
          milestone_type?: string | null
          planned_date?: string | null
          actual_date?: string | null
          status?: string | null
          completion_percentage?: number | null
          notes?: string | null
          photos?: Json | null
          created_by?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      production_progress: {
        Row: {
          id: string
          order_id: string
          stage: string
          status: string | null
          progress_percentage: number | null
          estimated_completion: string | null
          actual_completion: string | null
          notes: string | null
          updated_by: string | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          order_id: string
          stage: string
          status?: string | null
          progress_percentage?: number | null
          estimated_completion?: string | null
          actual_completion?: string | null
          notes?: string | null
          updated_by?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          order_id?: string
          stage?: string
          status?: string | null
          progress_percentage?: number | null
          estimated_completion?: string | null
          actual_completion?: string | null
          notes?: string | null
          updated_by?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      production_reset_config: {
        Row: {
          id: string
          table_name: string
          reset_strategy: string | null
          load_order: number | null
          notes: string | null
          created_at: string | null
        }
        Insert: {
          id?: string
          table_name: string
          reset_strategy?: string | null
          load_order?: number | null
          notes?: string | null
          created_at?: string | null
        }
        Update: {
          id?: string
          table_name?: string
          reset_strategy?: string | null
          load_order?: number | null
          notes?: string | null
          created_at?: string | null
        }
        Relationships: []
      }
      production_stage_history: {
        Row: {
          id: string
          production_tracking_id: string | null
          stage_id: string | null
          entered_at: string | null
          exited_at: string | null
          duration_minutes: number | null
          completed_by: string | null
          notes: string | null
          photos: Json | null
          issues_reported: Json | null
          approval_status: string | null
          approved_by: string | null
          approval_notes: string | null
          created_at: string | null
        }
        Insert: {
          id?: string
          production_tracking_id?: string | null
          stage_id?: string | null
          entered_at?: string | null
          exited_at?: string | null
          duration_minutes?: number | null
          completed_by?: string | null
          notes?: string | null
          photos?: Json | null
          issues_reported?: Json | null
          approval_status?: string | null
          approved_by?: string | null
          approval_notes?: string | null
          created_at?: string | null
        }
        Update: {
          id?: string
          production_tracking_id?: string | null
          stage_id?: string | null
          entered_at?: string | null
          exited_at?: string | null
          duration_minutes?: number | null
          completed_by?: string | null
          notes?: string | null
          photos?: Json | null
          issues_reported?: Json | null
          approval_status?: string | null
          approved_by?: string | null
          approval_notes?: string | null
          created_at?: string | null
        }
        Relationships: []
      }
      production_stages: {
        Row: {
          id: string
          name: string
          stage_order: number
          description: string | null
          typical_duration_days: number | null
          color: string | null
          icon: string | null
          is_active: boolean | null
          created_at: string | null
        }
        Insert: {
          id?: string
          name: string
          stage_order: number
          description?: string | null
          typical_duration_days?: number | null
          color?: string | null
          icon?: string | null
          is_active?: boolean | null
          created_at?: string | null
        }
        Update: {
          id?: string
          name?: string
          stage_order?: number
          description?: string | null
          typical_duration_days?: number | null
          color?: string | null
          icon?: string | null
          is_active?: boolean | null
          created_at?: string | null
        }
        Relationships: []
      }
      production_tracking: {
        Row: {
          id: string
          order_id: string | null
          current_stage_id: string | null
          progress: number | null
          stage_history: Json | null
          started_at: string | null
          estimated_completion: string | null
          completed_at: string | null
          internal_notes: string | null
          customer_notes: string | null
          created_at: string | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          id?: string
          order_id?: string | null
          current_stage_id?: string | null
          progress?: number | null
          stage_history?: Json | null
          started_at?: string | null
          estimated_completion?: string | null
          completed_at?: string | null
          internal_notes?: string | null
          customer_notes?: string | null
          created_at?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          id?: string
          order_id?: string | null
          current_stage_id?: string | null
          progress?: number | null
          stage_history?: Json | null
          started_at?: string | null
          estimated_completion?: string | null
          completed_at?: string | null
          internal_notes?: string | null
          customer_notes?: string | null
          created_at?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: []
      }
      products: {
        Row: {
          id: string
          sku: string
          name: string
          category: string | null
          base_price: number | null
          created_at: string | null
          updated_at: string | null
          description: string | null
          unit: string | null
          weight_lbs: number | null
          dimensions: string | null
        }
        Insert: {
          id?: string
          sku: string
          name: string
          category?: string | null
          base_price?: number | null
          created_at?: string | null
          updated_at?: string | null
          description?: string | null
          unit?: string | null
          weight_lbs?: number | null
          dimensions?: string | null
        }
        Update: {
          id?: string
          sku?: string
          name?: string
          category?: string | null
          base_price?: number | null
          created_at?: string | null
          updated_at?: string | null
          description?: string | null
          unit?: string | null
          weight_lbs?: number | null
          dimensions?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          id: string
          email: string | null
          full_name: string | null
          role: string | null
          tenant_id: string | null
          department: string | null
          permissions: Json | null
          is_active: boolean | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id: string
          email?: string | null
          full_name?: string | null
          role?: string | null
          tenant_id?: string | null
          department?: string | null
          permissions?: Json | null
          is_active?: boolean | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          email?: string | null
          full_name?: string | null
          role?: string | null
          tenant_id?: string | null
          department?: string | null
          permissions?: Json | null
          is_active?: boolean | null
          created_at?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      project_materials: {
        Row: {
          id: string
          manufacturer_project_id: string | null
          material_name: string
          material_type: string | null
          supplier_name: string | null
          quantity_needed: number | null
          quantity_ordered: number | null
          quantity_received: number | null
          unit_of_measure: string | null
          unit_cost: number | null
          total_cost: number | null
          order_date: string | null
          expected_delivery_date: string | null
          actual_delivery_date: string | null
          status: string | null
          quality_grade: string | null
          storage_location: string | null
          notes: string | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          manufacturer_project_id?: string | null
          material_name: string
          material_type?: string | null
          supplier_name?: string | null
          quantity_needed?: number | null
          quantity_ordered?: number | null
          quantity_received?: number | null
          unit_of_measure?: string | null
          unit_cost?: number | null
          total_cost?: number | null
          order_date?: string | null
          expected_delivery_date?: string | null
          actual_delivery_date?: string | null
          status?: string | null
          quality_grade?: string | null
          storage_location?: string | null
          notes?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          manufacturer_project_id?: string | null
          material_name?: string
          material_type?: string | null
          supplier_name?: string | null
          quantity_needed?: number | null
          quantity_ordered?: number | null
          quantity_received?: number | null
          unit_of_measure?: string | null
          unit_cost?: number | null
          total_cost?: number | null
          order_date?: string | null
          expected_delivery_date?: string | null
          actual_delivery_date?: string | null
          status?: string | null
          quality_grade?: string | null
          storage_location?: string | null
          notes?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
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
          priority: string | null
          estimated_completion_date: string | null
          actual_completion_date: string | null
          budget_estimate: number | null
          actual_cost: number | null
          project_manager: string | null
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
          priority?: string | null
          estimated_completion_date?: string | null
          actual_completion_date?: string | null
          budget_estimate?: number | null
          actual_cost?: number | null
          project_manager?: string | null
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
          priority?: string | null
          estimated_completion_date?: string | null
          actual_completion_date?: string | null
          budget_estimate?: number | null
          actual_cost?: number | null
          project_manager?: string | null
        }
        Relationships: []
      }
      push_subscriptions: {
        Row: {
          id: string
          user_id: string | null
          device_id: string
          device_type: string | null
          push_token: string
          endpoint: string | null
          auth_keys: Json | null
          platform_details: Json | null
          is_active: boolean | null
          last_used: string | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          user_id?: string | null
          device_id: string
          device_type?: string | null
          push_token: string
          endpoint?: string | null
          auth_keys?: Json | null
          platform_details?: Json | null
          is_active?: boolean | null
          last_used?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          user_id?: string | null
          device_id?: string
          device_type?: string | null
          push_token?: string
          endpoint?: string | null
          auth_keys?: Json | null
          platform_details?: Json | null
          is_active?: boolean | null
          last_used?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      pwa_cache_manifest: {
        Row: {
          id: string
          cache_name: string
          cache_version: string
          urls: string[]
          strategy: string | null
          max_age_seconds: number | null
          is_active: boolean | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          cache_name: string
          cache_version: string
          urls: string[]
          strategy?: string | null
          max_age_seconds?: number | null
          is_active?: boolean | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          cache_name?: string
          cache_version?: string
          urls?: string[]
          strategy?: string | null
          max_age_seconds?: number | null
          is_active?: boolean | null
          created_at?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      pwa_devices: {
        Row: {
          id: string
          user_id: string | null
          device_id: string
          device_type: string | null
          platform: string | null
          browser: string | null
          version: string | null
          last_active: string | null
          push_enabled: boolean | null
          created_at: string | null
        }
        Insert: {
          id?: string
          user_id?: string | null
          device_id: string
          device_type?: string | null
          platform?: string | null
          browser?: string | null
          version?: string | null
          last_active?: string | null
          push_enabled?: boolean | null
          created_at?: string | null
        }
        Update: {
          id?: string
          user_id?: string | null
          device_id?: string
          device_type?: string | null
          platform?: string | null
          browser?: string | null
          version?: string | null
          last_active?: string | null
          push_enabled?: boolean | null
          created_at?: string | null
        }
        Relationships: []
      }
      pwa_subscriptions: {
        Row: {
          id: string
          user_id: string | null
          endpoint: string
          keys: Json
          device_info: Json | null
          is_active: boolean | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          user_id?: string | null
          endpoint: string
          keys: Json
          device_info?: Json | null
          is_active?: boolean | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          user_id?: string | null
          endpoint?: string
          keys?: Json
          device_info?: Json | null
          is_active?: boolean | null
          created_at?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      qc_checkpoints: {
        Row: {
          id: string
          qc_inspection_id: string
          checkpoint_name: string
          status: "pending" | "passed" | "failed" | "na"
          notes: string | null
          inspector_id: string | null
          completed_at: string | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          qc_inspection_id: string
          checkpoint_name: string
          status?: "pending" | "passed" | "failed" | "na"
          notes?: string | null
          inspector_id?: string | null
          completed_at?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          qc_inspection_id?: string
          checkpoint_name?: string
          status?: "pending" | "passed" | "failed" | "na"
          notes?: string | null
          inspector_id?: string | null
          completed_at?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      qc_defects: {
        Row: {
          id: string
          qc_inspection_id: string
          defect_type: string
          severity: "critical" | "major" | "minor" | "cosmetic"
          description: string | null
          location: string | null
          action_required: string | null
          resolved_at: string | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          qc_inspection_id: string
          defect_type: string
          severity: "critical" | "major" | "minor" | "cosmetic"
          description?: string | null
          location?: string | null
          action_required?: string | null
          resolved_at?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          qc_inspection_id?: string
          defect_type?: string
          severity?: "critical" | "major" | "minor" | "cosmetic"
          description?: string | null
          location?: string | null
          action_required?: string | null
          resolved_at?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      qc_inspections: {
        Row: {
          id: string
          order_id: string
          order_item_id: string | null
          production_item_id: string | null
          batch_id: string | null
          qc_stage: "incoming_inspection" | "in_process_check" | "final_inspection" | "packaging_check"
          status: "pending" | "in_progress" | "passed" | "failed" | "on_hold"
          assigned_inspector_id: string | null
          priority: "urgent" | "high" | "normal" | "low"
          defects_found: number
          started_at: string | null
          due_date: string | null
          completed_at: string | null
          notes: string | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          order_id: string
          order_item_id?: string | null
          production_item_id?: string | null
          batch_id?: string | null
          qc_stage: "incoming_inspection" | "in_process_check" | "final_inspection" | "packaging_check"
          status?: "pending" | "in_progress" | "passed" | "failed" | "on_hold"
          assigned_inspector_id?: string | null
          priority?: "urgent" | "high" | "normal" | "low"
          defects_found?: number
          started_at?: string | null
          due_date?: string | null
          completed_at?: string | null
          notes?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          order_id?: string
          order_item_id?: string | null
          production_item_id?: string | null
          batch_id?: string | null
          qc_stage?: "incoming_inspection" | "in_process_check" | "final_inspection" | "packaging_check"
          status?: "pending" | "in_progress" | "passed" | "failed" | "on_hold"
          assigned_inspector_id?: string | null
          priority?: "urgent" | "high" | "normal" | "low"
          defects_found?: number
          started_at?: string | null
          due_date?: string | null
          completed_at?: string | null
          notes?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      qc_photos: {
        Row: {
          id: string
          qc_inspection_id: string | null
          qc_defect_id: string | null
          photo_url: string
          caption: string | null
          uploaded_by: string | null
          created_at: string | null
        }
        Insert: {
          id?: string
          qc_inspection_id?: string | null
          qc_defect_id?: string | null
          photo_url: string
          caption?: string | null
          uploaded_by?: string | null
          created_at?: string | null
        }
        Update: {
          id?: string
          qc_inspection_id?: string | null
          qc_defect_id?: string | null
          photo_url?: string
          caption?: string | null
          uploaded_by?: string | null
          created_at?: string | null
        }
        Relationships: []
      }
      quality_inspections: {
        Row: {
          id: string
          manufacturer_project_id: string | null
          inspection_type: string | null
          inspection_date: string | null
          inspector_name: string | null
          overall_grade: string | null
          dimensional_accuracy_score: number | null
          finish_quality_score: number | null
          assembly_quality_score: number | null
          defects_found: number | null
          defect_descriptions: string[] | null
          corrective_actions: string[] | null
          photos: Json | null
          passed: boolean | null
          notes: string | null
          created_at: string | null
        }
        Insert: {
          id?: string
          manufacturer_project_id?: string | null
          inspection_type?: string | null
          inspection_date?: string | null
          inspector_name?: string | null
          overall_grade?: string | null
          dimensional_accuracy_score?: number | null
          finish_quality_score?: number | null
          assembly_quality_score?: number | null
          defects_found?: number | null
          defect_descriptions?: string[] | null
          corrective_actions?: string[] | null
          photos?: Json | null
          passed?: boolean | null
          notes?: string | null
          created_at?: string | null
        }
        Update: {
          id?: string
          manufacturer_project_id?: string | null
          inspection_type?: string | null
          inspection_date?: string | null
          inspector_name?: string | null
          overall_grade?: string | null
          dimensional_accuracy_score?: number | null
          finish_quality_score?: number | null
          assembly_quality_score?: number | null
          defects_found?: number | null
          defect_descriptions?: string[] | null
          corrective_actions?: string[] | null
          photos?: Json | null
          passed?: boolean | null
          notes?: string | null
          created_at?: string | null
        }
        Relationships: []
      }
      quickbooks_auth: {
        Row: {
          id: string
          company_id: string
          access_token: string
          refresh_token: string
          token_expiry: string
          refresh_token_expiry: string
          company_name: string | null
          is_active: boolean | null
          connected_by: string | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          company_id: string
          access_token: string
          refresh_token: string
          token_expiry: string
          refresh_token_expiry: string
          company_name?: string | null
          is_active?: boolean | null
          connected_by?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          company_id?: string
          access_token?: string
          refresh_token?: string
          token_expiry?: string
          refresh_token_expiry?: string
          company_name?: string | null
          is_active?: boolean | null
          connected_by?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      quickbooks_connections: {
        Row: {
          id: string
          user_id: string
          company_id: string
          company_name: string | null
          access_token: string
          refresh_token: string
          token_expires_at: string | null
          realm_id: string
          scope: string | null
          is_active: boolean | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          user_id: string
          company_id: string
          company_name?: string | null
          access_token: string
          refresh_token: string
          token_expires_at?: string | null
          realm_id: string
          scope?: string | null
          is_active?: boolean | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          user_id?: string
          company_id?: string
          company_name?: string | null
          access_token?: string
          refresh_token?: string
          token_expires_at?: string | null
          realm_id?: string
          scope?: string | null
          is_active?: boolean | null
          created_at?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      quickbooks_entity_mapping: {
        Row: {
          id: string
          entity_type: string
          limn_id: string
          quickbooks_id: string
          quickbooks_sync_token: string | null
          last_synced_at: string | null
          sync_status: "pending" | "in_progress" | "completed" | "failed" | "skipped" | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          entity_type: string
          limn_id: string
          quickbooks_id: string
          quickbooks_sync_token?: string | null
          last_synced_at?: string | null
          sync_status?: "pending" | "in_progress" | "completed" | "failed" | "skipped" | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          entity_type?: string
          limn_id?: string
          quickbooks_id?: string
          quickbooks_sync_token?: string | null
          last_synced_at?: string | null
          sync_status?: "pending" | "in_progress" | "completed" | "failed" | "skipped" | null
          created_at?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      quickbooks_field_templates: {
        Row: {
          id: string
          entity_type: string
          template_name: string
          field_mappings: Json
          is_default: boolean | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          entity_type: string
          template_name: string
          field_mappings: Json
          is_default?: boolean | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          entity_type?: string
          template_name?: string
          field_mappings?: Json
          is_default?: boolean | null
          created_at?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      quickbooks_oauth_states: {
        Row: {
          id: string
          user_id: string
          state: string
          created_at: string | null
          expires_at: string
        }
        Insert: {
          id?: string
          user_id: string
          state: string
          created_at?: string | null
          expires_at: string
        }
        Update: {
          id?: string
          user_id?: string
          state?: string
          created_at?: string | null
          expires_at?: string
        }
        Relationships: []
      }
      quickbooks_payment_methods: {
        Row: {
          id: string
          quickbooks_method_id: string
          method_name: string
          method_type: string | null
          is_active: boolean | null
          is_default: boolean | null
          processing_fee_percent: number | null
          processing_fee_fixed: number | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          quickbooks_method_id: string
          method_name: string
          method_type?: string | null
          is_active?: boolean | null
          is_default?: boolean | null
          processing_fee_percent?: number | null
          processing_fee_fixed?: number | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          quickbooks_method_id?: string
          method_name?: string
          method_type?: string | null
          is_active?: boolean | null
          is_default?: boolean | null
          processing_fee_percent?: number | null
          processing_fee_fixed?: number | null
          created_at?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      quickbooks_payment_queue: {
        Row: {
          id: string
          invoice_id: string | null
          customer_id: string | null
          amount: number
          payment_method_id: string | null
          scheduled_date: string | null
          status: string | null
          attempts: number | null
          last_attempt_at: string | null
          error_message: string | null
          quickbooks_payment_id: string | null
          quickbooks_transaction_id: string | null
          metadata: Json | null
          created_at: string | null
          processed_at: string | null
        }
        Insert: {
          id?: string
          invoice_id?: string | null
          customer_id?: string | null
          amount: number
          payment_method_id?: string | null
          scheduled_date?: string | null
          status?: string | null
          attempts?: number | null
          last_attempt_at?: string | null
          error_message?: string | null
          quickbooks_payment_id?: string | null
          quickbooks_transaction_id?: string | null
          metadata?: Json | null
          created_at?: string | null
          processed_at?: string | null
        }
        Update: {
          id?: string
          invoice_id?: string | null
          customer_id?: string | null
          amount?: number
          payment_method_id?: string | null
          scheduled_date?: string | null
          status?: string | null
          attempts?: number | null
          last_attempt_at?: string | null
          error_message?: string | null
          quickbooks_payment_id?: string | null
          quickbooks_transaction_id?: string | null
          metadata?: Json | null
          created_at?: string | null
          processed_at?: string | null
        }
        Relationships: []
      }
      quickbooks_payment_reconciliation: {
        Row: {
          id: string
          payment_id: string | null
          quickbooks_payment_id: string | null
          quickbooks_deposit_id: string | null
          reconciliation_date: string | null
          bank_account: string | null
          expected_amount: number | null
          actual_amount: number | null
          difference: number | null
          status: string | null
          notes: string | null
          reconciled_by: string | null
          created_at: string | null
        }
        Insert: {
          id?: string
          payment_id?: string | null
          quickbooks_payment_id?: string | null
          quickbooks_deposit_id?: string | null
          reconciliation_date?: string | null
          bank_account?: string | null
          expected_amount?: number | null
          actual_amount?: number | null
          difference?: number | null
          status?: string | null
          notes?: string | null
          reconciled_by?: string | null
          created_at?: string | null
        }
        Update: {
          id?: string
          payment_id?: string | null
          quickbooks_payment_id?: string | null
          quickbooks_deposit_id?: string | null
          reconciliation_date?: string | null
          bank_account?: string | null
          expected_amount?: number | null
          actual_amount?: number | null
          difference?: number | null
          status?: string | null
          notes?: string | null
          reconciled_by?: string | null
          created_at?: string | null
        }
        Relationships: []
      }
      quickbooks_recurring_payments: {
        Row: {
          id: string
          customer_id: string | null
          payment_method_id: string | null
          amount: number
          frequency: string | null
          start_date: string
          end_date: string | null
          next_payment_date: string | null
          is_active: boolean | null
          last_payment_id: string | null
          total_payments_made: number | null
          total_amount_collected: number | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          customer_id?: string | null
          payment_method_id?: string | null
          amount: number
          frequency?: string | null
          start_date: string
          end_date?: string | null
          next_payment_date?: string | null
          is_active?: boolean | null
          last_payment_id?: string | null
          total_payments_made?: number | null
          total_amount_collected?: number | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          customer_id?: string | null
          payment_method_id?: string | null
          amount?: number
          frequency?: string | null
          start_date?: string
          end_date?: string | null
          next_payment_date?: string | null
          is_active?: boolean | null
          last_payment_id?: string | null
          total_payments_made?: number | null
          total_amount_collected?: number | null
          created_at?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      quickbooks_sync_config: {
        Row: {
          id: string
          entity_type: string
          sync_enabled: boolean | null
          sync_direction: "to_quickbooks" | "from_quickbooks" | "bidirectional" | null
          last_sync_at: string | null
          sync_frequency_minutes: number | null
          field_mappings: Json | null
          filters: Json | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          entity_type: string
          sync_enabled?: boolean | null
          sync_direction?: "to_quickbooks" | "from_quickbooks" | "bidirectional" | null
          last_sync_at?: string | null
          sync_frequency_minutes?: number | null
          field_mappings?: Json | null
          filters?: Json | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          entity_type?: string
          sync_enabled?: boolean | null
          sync_direction?: "to_quickbooks" | "from_quickbooks" | "bidirectional" | null
          last_sync_at?: string | null
          sync_frequency_minutes?: number | null
          field_mappings?: Json | null
          filters?: Json | null
          created_at?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      quickbooks_sync_log: {
        Row: {
          id: string
          sync_batch_id: string | null
          sync_type: string
          sync_direction: "to_quickbooks" | "from_quickbooks" | "bidirectional"
          entity_id: string | null
          quickbooks_id: string | null
          action: string
          status: "pending" | "in_progress" | "completed" | "failed" | "skipped"
          request_data: Json | null
          response_data: Json | null
          error_message: string | null
          error_code: string | null
          started_at: string | null
          completed_at: string | null
          created_by: string | null
        }
        Insert: {
          id?: string
          sync_batch_id?: string | null
          sync_type: string
          sync_direction: "to_quickbooks" | "from_quickbooks" | "bidirectional"
          entity_id?: string | null
          quickbooks_id?: string | null
          action: string
          status: "pending" | "in_progress" | "completed" | "failed" | "skipped"
          request_data?: Json | null
          response_data?: Json | null
          error_message?: string | null
          error_code?: string | null
          started_at?: string | null
          completed_at?: string | null
          created_by?: string | null
        }
        Update: {
          id?: string
          sync_batch_id?: string | null
          sync_type?: string
          sync_direction?: "to_quickbooks" | "from_quickbooks" | "bidirectional"
          entity_id?: string | null
          quickbooks_id?: string | null
          action?: string
          status?: "pending" | "in_progress" | "completed" | "failed" | "skipped"
          request_data?: Json | null
          response_data?: Json | null
          error_message?: string | null
          error_code?: string | null
          started_at?: string | null
          completed_at?: string | null
          created_by?: string | null
        }
        Relationships: []
      }
      quickbooks_webhooks: {
        Row: {
          id: string
          event_type: string
          realm_id: string
          entity_name: string | null
          entity_id: string | null
          operation: string | null
          last_updated_time: string | null
          webhook_payload: Json
          processed: boolean | null
          processed_at: string | null
          error_message: string | null
          received_at: string | null
        }
        Insert: {
          id?: string
          event_type: string
          realm_id: string
          entity_name?: string | null
          entity_id?: string | null
          operation?: string | null
          last_updated_time?: string | null
          webhook_payload: Json
          processed?: boolean | null
          processed_at?: string | null
          error_message?: string | null
          received_at?: string | null
        }
        Update: {
          id?: string
          event_type?: string
          realm_id?: string
          entity_name?: string | null
          entity_id?: string | null
          operation?: string | null
          last_updated_time?: string | null
          webhook_payload?: Json
          processed?: boolean | null
          processed_at?: string | null
          error_message?: string | null
          received_at?: string | null
        }
        Relationships: []
      }
      saved_searches: {
        Row: {
          id: string
          user_id: string | null
          search_name: string | null
          entity_type: string | null
          search_criteria: Json
          sort_config: Json | null
          is_default: boolean | null
          is_shared: boolean | null
          created_at: string | null
        }
        Insert: {
          id?: string
          user_id?: string | null
          search_name?: string | null
          entity_type?: string | null
          search_criteria: Json
          sort_config?: Json | null
          is_default?: boolean | null
          is_shared?: boolean | null
          created_at?: string | null
        }
        Update: {
          id?: string
          user_id?: string | null
          search_name?: string | null
          entity_type?: string | null
          search_criteria?: Json
          sort_config?: Json | null
          is_default?: boolean | null
          is_shared?: boolean | null
          created_at?: string | null
        }
        Relationships: []
      }
      seko_config: {
        Row: {
          id: string
          profile_id: string
          api_key: string | null
          api_secret: string | null
          environment: string | null
          base_url: string | null
          is_active: boolean | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          profile_id: string
          api_key?: string | null
          api_secret?: string | null
          environment?: string | null
          base_url?: string | null
          is_active?: boolean | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          profile_id?: string
          api_key?: string | null
          api_secret?: string | null
          environment?: string | null
          base_url?: string | null
          is_active?: boolean | null
          created_at?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      shipments: {
        Row: {
          id: string
          order_id: string | null
          carrier_id: string | null
          tracking_number: string | null
          status: string | null
          ship_from: Json | null
          ship_to: Json | null
          shipped_date: string | null
          estimated_delivery: string | null
          actual_delivery: string | null
          package_count: number | null
          weight: number | null
          dimensions: Json | null
          shipping_cost: number | null
          insurance_amount: number | null
          tracking_events: Json | null
          last_tracking_update: string | null
          created_at: string | null
          updated_at: string | null
          seko_shipment_id: string | null
          last_seko_sync: string | null
          priority: string | null
          packing_job_id: string | null
        }
        Insert: {
          id?: string
          order_id?: string | null
          carrier_id?: string | null
          tracking_number?: string | null
          status?: string | null
          ship_from?: Json | null
          ship_to?: Json | null
          shipped_date?: string | null
          estimated_delivery?: string | null
          actual_delivery?: string | null
          package_count?: number | null
          weight?: number | null
          dimensions?: Json | null
          shipping_cost?: number | null
          insurance_amount?: number | null
          tracking_events?: Json | null
          last_tracking_update?: string | null
          created_at?: string | null
          updated_at?: string | null
          seko_shipment_id?: string | null
          last_seko_sync?: string | null
          priority?: string | null
          packing_job_id?: string | null
        }
        Update: {
          id?: string
          order_id?: string | null
          carrier_id?: string | null
          tracking_number?: string | null
          status?: string | null
          ship_from?: Json | null
          ship_to?: Json | null
          shipped_date?: string | null
          estimated_delivery?: string | null
          actual_delivery?: string | null
          package_count?: number | null
          weight?: number | null
          dimensions?: Json | null
          shipping_cost?: number | null
          insurance_amount?: number | null
          tracking_events?: Json | null
          last_tracking_update?: string | null
          created_at?: string | null
          updated_at?: string | null
          seko_shipment_id?: string | null
          last_seko_sync?: string | null
          priority?: string | null
          packing_job_id?: string | null
        }
        Relationships: []
      }
      shipping_carriers: {
        Row: {
          id: string
          name: string
          code: string | null
          tracking_url_template: string | null
          logo_url: string | null
          is_active: boolean | null
          created_at: string | null
        }
        Insert: {
          id?: string
          name: string
          code?: string | null
          tracking_url_template?: string | null
          logo_url?: string | null
          is_active?: boolean | null
          created_at?: string | null
        }
        Update: {
          id?: string
          name?: string
          code?: string | null
          tracking_url_template?: string | null
          logo_url?: string | null
          is_active?: boolean | null
          created_at?: string | null
        }
        Relationships: []
      }
      shipping_events: {
        Row: {
          id: string
          shipment_id: string
          event_type: string
          event_description: string | null
          event_location: string | null
          event_timestamp: string
          seko_event_id: string | null
          created_at: string | null
        }
        Insert: {
          id?: string
          shipment_id: string
          event_type: string
          event_description?: string | null
          event_location?: string | null
          event_timestamp: string
          seko_event_id?: string | null
          created_at?: string | null
        }
        Update: {
          id?: string
          shipment_id?: string
          event_type?: string
          event_description?: string | null
          event_location?: string | null
          event_timestamp?: string
          seko_event_id?: string | null
          created_at?: string | null
        }
        Relationships: []
      }
      shipping_quotes: {
        Row: {
          id: string
          order_id: string | null
          ship_from: Json
          ship_to: Json
          packages: Json
          carrier_quotes: Json | null
          selected_quote: Json | null
          quote_expires_at: string | null
          seko_quote_response: Json | null
          created_at: string | null
          status: string | null
          customer_id: string | null
          quote_number: string | null
          customer_name: string | null
          service_type: string | null
          quoted_cost: number | null
        }
        Insert: {
          id?: string
          order_id?: string | null
          ship_from: Json
          ship_to: Json
          packages: Json
          carrier_quotes?: Json | null
          selected_quote?: Json | null
          quote_expires_at?: string | null
          seko_quote_response?: Json | null
          created_at?: string | null
          status?: string | null
          customer_id?: string | null
          quote_number?: string | null
          customer_name?: string | null
          service_type?: string | null
          quoted_cost?: number | null
        }
        Update: {
          id?: string
          order_id?: string | null
          ship_from?: Json
          ship_to?: Json
          packages?: Json
          carrier_quotes?: Json | null
          selected_quote?: Json | null
          quote_expires_at?: string | null
          seko_quote_response?: Json | null
          created_at?: string | null
          status?: string | null
          customer_id?: string | null
          quote_number?: string | null
          customer_name?: string | null
          service_type?: string | null
          quoted_cost?: number | null
        }
        Relationships: []
      }
      shipping_tracking: {
        Row: {
          id: string
          order_id: string
          carrier: string | null
          tracking_number: string | null
          status: string | null
          current_location: string | null
          estimated_delivery: string | null
          actual_delivery: string | null
          tracking_events: Json | null
          last_api_update: string | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          order_id: string
          carrier?: string | null
          tracking_number?: string | null
          status?: string | null
          current_location?: string | null
          estimated_delivery?: string | null
          actual_delivery?: string | null
          tracking_events?: Json | null
          last_api_update?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          order_id?: string
          carrier?: string | null
          tracking_number?: string | null
          status?: string | null
          current_location?: string | null
          estimated_delivery?: string | null
          actual_delivery?: string | null
          tracking_events?: Json | null
          last_api_update?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      shop_drawing_comments: {
        Row: {
          id: string
          drawing_id: string | null
          comment: string
          comment_type: string | null
          is_internal: boolean | null
          created_at: string | null
          created_by: string
          user_name: string
        }
        Insert: {
          id?: string
          drawing_id?: string | null
          comment: string
          comment_type?: string | null
          is_internal?: boolean | null
          created_at?: string | null
          created_by: string
          user_name: string
        }
        Update: {
          id?: string
          drawing_id?: string | null
          comment?: string
          comment_type?: string | null
          is_internal?: boolean | null
          created_at?: string | null
          created_by?: string
          user_name?: string
        }
        Relationships: []
      }
      shop_drawing_files: {
        Row: {
          id: string
          shop_drawing_id: string | null
          file_name: string
          file_url: string
          file_size: number | null
          drawing_type: string | null
          drawing_number: string | null
          scale: string | null
          sheet_size: string | null
          notes: string | null
          created_at: string | null
        }
        Insert: {
          id?: string
          shop_drawing_id?: string | null
          file_name: string
          file_url: string
          file_size?: number | null
          drawing_type?: string | null
          drawing_number?: string | null
          scale?: string | null
          sheet_size?: string | null
          notes?: string | null
          created_at?: string | null
        }
        Update: {
          id?: string
          shop_drawing_id?: string | null
          file_name?: string
          file_url?: string
          file_size?: number | null
          drawing_type?: string | null
          drawing_number?: string | null
          scale?: string | null
          sheet_size?: string | null
          notes?: string | null
          created_at?: string | null
        }
        Relationships: []
      }
      shop_drawing_revisions: {
        Row: {
          id: string
          drawing_id: string | null
          revision_number: number
          description: string
          file_path: string
          file_size: number | null
          changes_summary: string | null
          status: string | null
          created_at: string | null
          created_by: string
        }
        Insert: {
          id?: string
          drawing_id?: string | null
          revision_number: number
          description: string
          file_path: string
          file_size?: number | null
          changes_summary?: string | null
          status?: string | null
          created_at?: string | null
          created_by: string
        }
        Update: {
          id?: string
          drawing_id?: string | null
          revision_number?: number
          description?: string
          file_path?: string
          file_size?: number | null
          changes_summary?: string | null
          status?: string | null
          created_at?: string | null
          created_by?: string
        }
        Relationships: []
      }
      shop_drawings: {
        Row: {
          id: string
          manufacturer_project_id: string | null
          manufacturer_id: string | null
          version: number | null
          status: string | null
          submitted_date: string | null
          review_deadline: string | null
          reviewed_by: string | null
          review_date: string | null
          approved_date: string | null
          approved_by: string | null
          rejection_reason: string | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          manufacturer_project_id?: string | null
          manufacturer_id?: string | null
          version?: number | null
          status?: string | null
          submitted_date?: string | null
          review_deadline?: string | null
          reviewed_by?: string | null
          review_date?: string | null
          approved_date?: string | null
          approved_by?: string | null
          rejection_reason?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          manufacturer_project_id?: string | null
          manufacturer_id?: string | null
          version?: number | null
          status?: string | null
          submitted_date?: string | null
          review_deadline?: string | null
          reviewed_by?: string | null
          review_date?: string | null
          approved_date?: string | null
          approved_by?: string | null
          rejection_reason?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      shop_drawings_list: {
        Row: {
          id: string
          shop_drawing_id: string
          drawing_number: string
          title: string
          description: string | null
          order_id: string | null
          customer_name: string
          project_name: string
          item_id: string | null
          item_name: string | null
          drawing_type: string | null
          revision_number: number | null
          status: string | null
          priority: string | null
          assigned_to: string | null
          submitted_date: string | null
          due_date: string
          approved_date: string | null
          completed_date: string | null
          file_path: string | null
          file_size: number | null
          file_type: string | null
          notes: string | null
          approval_notes: string | null
          rejection_reason: string | null
          notification_sent: boolean | null
          manufacturing_ready: boolean | null
          created_at: string | null
          updated_at: string | null
          created_by: string
        }
        Insert: {
          id?: string
          shop_drawing_id: string
          drawing_number: string
          title: string
          description?: string | null
          order_id?: string | null
          customer_name: string
          project_name: string
          item_id?: string | null
          item_name?: string | null
          drawing_type?: string | null
          revision_number?: number | null
          status?: string | null
          priority?: string | null
          assigned_to?: string | null
          submitted_date?: string | null
          due_date: string
          approved_date?: string | null
          completed_date?: string | null
          file_path?: string | null
          file_size?: number | null
          file_type?: string | null
          notes?: string | null
          approval_notes?: string | null
          rejection_reason?: string | null
          notification_sent?: boolean | null
          manufacturing_ready?: boolean | null
          created_at?: string | null
          updated_at?: string | null
          created_by: string
        }
        Update: {
          id?: string
          shop_drawing_id?: string
          drawing_number?: string
          title?: string
          description?: string | null
          order_id?: string | null
          customer_name?: string
          project_name?: string
          item_id?: string | null
          item_name?: string | null
          drawing_type?: string | null
          revision_number?: number | null
          status?: string | null
          priority?: string | null
          assigned_to?: string | null
          submitted_date?: string | null
          due_date?: string
          approved_date?: string | null
          completed_date?: string | null
          file_path?: string | null
          file_size?: number | null
          file_type?: string | null
          notes?: string | null
          approval_notes?: string | null
          rejection_reason?: string | null
          notification_sent?: boolean | null
          manufacturing_ready?: boolean | null
          created_at?: string | null
          updated_at?: string | null
          created_by?: string
        }
        Relationships: []
      }
      sms_analytics: {
        Row: {
          id: string
          date: string
          provider_id: string | null
          total_sent: number | null
          total_delivered: number | null
          total_failed: number | null
          total_cost: number | null
          avg_delivery_time_ms: number | null
          success_rate: number | null
          peak_hour: number | null
          peak_hour_volume: number | null
          created_at: string | null
        }
        Insert: {
          id?: string
          date: string
          provider_id?: string | null
          total_sent?: number | null
          total_delivered?: number | null
          total_failed?: number | null
          total_cost?: number | null
          avg_delivery_time_ms?: number | null
          success_rate?: number | null
          peak_hour?: number | null
          peak_hour_volume?: number | null
          created_at?: string | null
        }
        Update: {
          id?: string
          date?: string
          provider_id?: string | null
          total_sent?: number | null
          total_delivered?: number | null
          total_failed?: number | null
          total_cost?: number | null
          avg_delivery_time_ms?: number | null
          success_rate?: number | null
          peak_hour?: number | null
          peak_hour_volume?: number | null
          created_at?: string | null
        }
        Relationships: []
      }
      sms_campaigns: {
        Row: {
          id: string
          campaign_name: string
          campaign_type: string | null
          template_id: string | null
          target_audience: Json | null
          scheduled_date: string | null
          status: string | null
          total_recipients: number | null
          sent_count: number | null
          delivered_count: number | null
          failed_count: number | null
          opt_out_count: number | null
          created_by: string | null
          approved_by: string | null
          approved_at: string | null
          created_at: string | null
          completed_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          campaign_name: string
          campaign_type?: string | null
          template_id?: string | null
          target_audience?: Json | null
          scheduled_date?: string | null
          status?: string | null
          total_recipients?: number | null
          sent_count?: number | null
          delivered_count?: number | null
          failed_count?: number | null
          opt_out_count?: number | null
          created_by?: string | null
          approved_by?: string | null
          approved_at?: string | null
          created_at?: string | null
          completed_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          campaign_name?: string
          campaign_type?: string | null
          template_id?: string | null
          target_audience?: Json | null
          scheduled_date?: string | null
          status?: string | null
          total_recipients?: number | null
          sent_count?: number | null
          delivered_count?: number | null
          failed_count?: number | null
          opt_out_count?: number | null
          created_by?: string | null
          approved_by?: string | null
          approved_at?: string | null
          created_at?: string | null
          completed_at?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      sms_delivery_logs: {
        Row: {
          id: string
          sms_log_id: string | null
          provider_id: string | null
          delivery_status: string | null
          provider_message_id: string | null
          provider_status_code: string | null
          provider_status_message: string | null
          delivery_timestamp: string | null
          attempt_number: number | null
          cost: number | null
          carrier_info: Json | null
          created_at: string | null
        }
        Insert: {
          id?: string
          sms_log_id?: string | null
          provider_id?: string | null
          delivery_status?: string | null
          provider_message_id?: string | null
          provider_status_code?: string | null
          provider_status_message?: string | null
          delivery_timestamp?: string | null
          attempt_number?: number | null
          cost?: number | null
          carrier_info?: Json | null
          created_at?: string | null
        }
        Update: {
          id?: string
          sms_log_id?: string | null
          provider_id?: string | null
          delivery_status?: string | null
          provider_message_id?: string | null
          provider_status_code?: string | null
          provider_status_message?: string | null
          delivery_timestamp?: string | null
          attempt_number?: number | null
          cost?: number | null
          carrier_info?: Json | null
          created_at?: string | null
        }
        Relationships: []
      }
      sms_invitations: {
        Row: {
          id: string
          portal_user_id: string
          phone_number: string
          message_content: string
          provider: string | null
          provider_message_id: string | null
          status: string | null
          sent_at: string | null
          delivered_at: string | null
          failed_reason: string | null
          cost_cents: number | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          portal_user_id: string
          phone_number: string
          message_content: string
          provider?: string | null
          provider_message_id?: string | null
          status?: string | null
          sent_at?: string | null
          delivered_at?: string | null
          failed_reason?: string | null
          cost_cents?: number | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          portal_user_id?: string
          phone_number?: string
          message_content?: string
          provider?: string | null
          provider_message_id?: string | null
          status?: string | null
          sent_at?: string | null
          delivered_at?: string | null
          failed_reason?: string | null
          cost_cents?: number | null
          created_at?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      sms_logs: {
        Row: {
          id: string
          recipient_phone: string
          message: string
          template_id: string | null
          status: string | null
          provider: string | null
          provider_message_id: string | null
          error_message: string | null
          sent_at: string | null
          delivered_at: string | null
          created_at: string | null
        }
        Insert: {
          id?: string
          recipient_phone: string
          message: string
          template_id?: string | null
          status?: string | null
          provider?: string | null
          provider_message_id?: string | null
          error_message?: string | null
          sent_at?: string | null
          delivered_at?: string | null
          created_at?: string | null
        }
        Update: {
          id?: string
          recipient_phone?: string
          message?: string
          template_id?: string | null
          status?: string | null
          provider?: string | null
          provider_message_id?: string | null
          error_message?: string | null
          sent_at?: string | null
          delivered_at?: string | null
          created_at?: string | null
        }
        Relationships: []
      }
      sms_opt_outs: {
        Row: {
          id: string
          phone_number: string
          customer_id: string | null
          opt_out_date: string | null
          opt_out_reason: string | null
          opt_out_method: string | null
          can_resubscribe: boolean | null
          resubscribe_date: string | null
          created_at: string | null
        }
        Insert: {
          id?: string
          phone_number: string
          customer_id?: string | null
          opt_out_date?: string | null
          opt_out_reason?: string | null
          opt_out_method?: string | null
          can_resubscribe?: boolean | null
          resubscribe_date?: string | null
          created_at?: string | null
        }
        Update: {
          id?: string
          phone_number?: string
          customer_id?: string | null
          opt_out_date?: string | null
          opt_out_reason?: string | null
          opt_out_method?: string | null
          can_resubscribe?: boolean | null
          resubscribe_date?: string | null
          created_at?: string | null
        }
        Relationships: []
      }
      sms_providers: {
        Row: {
          id: string
          provider_name: string
          provider_type: string | null
          api_endpoint: string | null
          api_key_encrypted: string | null
          api_secret_encrypted: string | null
          from_number: string | null
          is_active: boolean | null
          is_primary: boolean | null
          priority_order: number | null
          success_rate: number | null
          avg_delivery_time_ms: number | null
          cost_per_sms: number | null
          monthly_limit: number | null
          current_month_usage: number | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          provider_name: string
          provider_type?: string | null
          api_endpoint?: string | null
          api_key_encrypted?: string | null
          api_secret_encrypted?: string | null
          from_number?: string | null
          is_active?: boolean | null
          is_primary?: boolean | null
          priority_order?: number | null
          success_rate?: number | null
          avg_delivery_time_ms?: number | null
          cost_per_sms?: number | null
          monthly_limit?: number | null
          current_month_usage?: number | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          provider_name?: string
          provider_type?: string | null
          api_endpoint?: string | null
          api_key_encrypted?: string | null
          api_secret_encrypted?: string | null
          from_number?: string | null
          is_active?: boolean | null
          is_primary?: boolean | null
          priority_order?: number | null
          success_rate?: number | null
          avg_delivery_time_ms?: number | null
          cost_per_sms?: number | null
          monthly_limit?: number | null
          current_month_usage?: number | null
          created_at?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      sms_scheduled_jobs: {
        Row: {
          id: string
          job_type: string | null
          recipient_phone: string | null
          recipient_list: Json | null
          template_id: string | null
          message_content: string | null
          variables: Json | null
          scheduled_time: string
          time_zone: string | null
          status: string | null
          priority: number | null
          retry_count: number | null
          max_retries: number | null
          created_by: string | null
          created_at: string | null
          processed_at: string | null
        }
        Insert: {
          id?: string
          job_type?: string | null
          recipient_phone?: string | null
          recipient_list?: Json | null
          template_id?: string | null
          message_content?: string | null
          variables?: Json | null
          scheduled_time: string
          time_zone?: string | null
          status?: string | null
          priority?: number | null
          retry_count?: number | null
          max_retries?: number | null
          created_by?: string | null
          created_at?: string | null
          processed_at?: string | null
        }
        Update: {
          id?: string
          job_type?: string | null
          recipient_phone?: string | null
          recipient_list?: Json | null
          template_id?: string | null
          message_content?: string | null
          variables?: Json | null
          scheduled_time?: string
          time_zone?: string | null
          status?: string | null
          priority?: number | null
          retry_count?: number | null
          max_retries?: number | null
          created_by?: string | null
          created_at?: string | null
          processed_at?: string | null
        }
        Relationships: []
      }
      sms_templates: {
        Row: {
          id: string
          name: string
          template_key: string
          message: string
          variables: string[] | null
          is_active: boolean | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          name: string
          template_key: string
          message: string
          variables?: string[] | null
          is_active?: boolean | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          name?: string
          template_key?: string
          message?: string
          variables?: string[] | null
          is_active?: boolean | null
          created_at?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      sms_tracking: {
        Row: {
          id: string
          campaign_id: string | null
          recipient_phone: string
          event_type: string | null
          event_timestamp: string | null
          error_message: string | null
          event_data: Json | null
          created_at: string | null
        }
        Insert: {
          id?: string
          campaign_id?: string | null
          recipient_phone: string
          event_type?: string | null
          event_timestamp?: string | null
          error_message?: string | null
          event_data?: Json | null
          created_at?: string | null
        }
        Update: {
          id?: string
          campaign_id?: string | null
          recipient_phone?: string
          event_type?: string | null
          event_timestamp?: string | null
          error_message?: string | null
          event_data?: Json | null
          created_at?: string | null
        }
        Relationships: []
      }
      sms_usage: {
        Row: {
          id: string
          phone_number: string
          date: string
          message_count: number | null
          total_cost: number | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          phone_number: string
          date: string
          message_count?: number | null
          total_cost?: number | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          phone_number?: string
          date?: string
          message_count?: number | null
          total_cost?: number | null
          created_at?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      sso_configuration: {
        Row: {
          id: string
          provider_name: string
          saml_metadata_url: string | null
          saml_entity_id: string | null
          saml_sso_url: string | null
          saml_x509_cert: string | null
          attribute_mapping: Json | null
          domain_restriction: string | null
          auto_provision_users: boolean | null
          default_user_type: string | null
          is_active: boolean | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          provider_name?: string
          saml_metadata_url?: string | null
          saml_entity_id?: string | null
          saml_sso_url?: string | null
          saml_x509_cert?: string | null
          attribute_mapping?: Json | null
          domain_restriction?: string | null
          auto_provision_users?: boolean | null
          default_user_type?: string | null
          is_active?: boolean | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          provider_name?: string
          saml_metadata_url?: string | null
          saml_entity_id?: string | null
          saml_sso_url?: string | null
          saml_x509_cert?: string | null
          attribute_mapping?: Json | null
          domain_restriction?: string | null
          auto_provision_users?: boolean | null
          default_user_type?: string | null
          is_active?: boolean | null
          created_at?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      sso_group_role_mappings: {
        Row: {
          id: string
          google_group_email: string
          user_type: string
          permissions: Json | null
          priority: number | null
          is_active: boolean | null
          created_at: string | null
        }
        Insert: {
          id?: string
          google_group_email: string
          user_type: string
          permissions?: Json | null
          priority?: number | null
          is_active?: boolean | null
          created_at?: string | null
        }
        Update: {
          id?: string
          google_group_email?: string
          user_type?: string
          permissions?: Json | null
          priority?: number | null
          is_active?: boolean | null
          created_at?: string | null
        }
        Relationships: []
      }
      sso_login_audit: {
        Row: {
          id: string
          user_id: string | null
          google_email: string | null
          login_time: string | null
          login_type: string | null
          ip_address: string | null
          user_agent: string | null
          success: boolean | null
          error_message: string | null
          session_id: string | null
          metadata: Json | null
        }
        Insert: {
          id?: string
          user_id?: string | null
          google_email?: string | null
          login_time?: string | null
          login_type?: string | null
          ip_address?: string | null
          user_agent?: string | null
          success?: boolean | null
          error_message?: string | null
          session_id?: string | null
          metadata?: Json | null
        }
        Update: {
          id?: string
          user_id?: string | null
          google_email?: string | null
          login_time?: string | null
          login_type?: string | null
          ip_address?: string | null
          user_agent?: string | null
          success?: boolean | null
          error_message?: string | null
          session_id?: string | null
          metadata?: Json | null
        }
        Relationships: []
      }
      sso_user_mappings: {
        Row: {
          id: string
          user_id: string | null
          google_workspace_id: string | null
          google_email: string | null
          primary_email: string | null
          department: string | null
          job_title: string | null
          manager_email: string | null
          google_groups: string[] | null
          assigned_user_type: string | null
          is_active: boolean | null
          last_login: string | null
          first_login: string | null
          metadata: Json | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          user_id?: string | null
          google_workspace_id?: string | null
          google_email?: string | null
          primary_email?: string | null
          department?: string | null
          job_title?: string | null
          manager_email?: string | null
          google_groups?: string[] | null
          assigned_user_type?: string | null
          is_active?: boolean | null
          last_login?: string | null
          first_login?: string | null
          metadata?: Json | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          user_id?: string | null
          google_workspace_id?: string | null
          google_email?: string | null
          primary_email?: string | null
          department?: string | null
          job_title?: string | null
          manager_email?: string | null
          google_groups?: string[] | null
          assigned_user_type?: string | null
          is_active?: boolean | null
          last_login?: string | null
          first_login?: string | null
          metadata?: Json | null
          created_at?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      status_change_log: {
        Row: {
          id: string
          table_name: string
          record_id: string
          field_name: string
          old_value: string | null
          new_value: string
          changed_by: string | null
          change_reason: string | null
          automated: boolean | null
          created_at: string | null
        }
        Insert: {
          id?: string
          table_name: string
          record_id: string
          field_name: string
          old_value?: string | null
          new_value: string
          changed_by?: string | null
          change_reason?: string | null
          automated?: boolean | null
          created_at?: string | null
        }
        Update: {
          id?: string
          table_name?: string
          record_id?: string
          field_name?: string
          old_value?: string | null
          new_value?: string
          changed_by?: string | null
          change_reason?: string | null
          automated?: boolean | null
          created_at?: string | null
        }
        Relationships: []
      }
      stone_finishes: {
        Row: {
          id: string
          stone_type_id: string | null
          name: string
          description: string | null
          price_modifier: number | null
          active: boolean | null
          sort_order: number | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          stone_type_id?: string | null
          name: string
          description?: string | null
          price_modifier?: number | null
          active?: boolean | null
          sort_order?: number | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          stone_type_id?: string | null
          name?: string
          description?: string | null
          price_modifier?: number | null
          active?: boolean | null
          sort_order?: number | null
          created_at?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      stone_options: {
        Row: {
          id: string
          type: string
          finish: string | null
          code: string
          price_modifier: number | null
          active: boolean | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          type: string
          finish?: string | null
          code: string
          price_modifier?: number | null
          active?: boolean | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          type?: string
          finish?: string | null
          code?: string
          price_modifier?: number | null
          active?: boolean | null
          created_at?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      stone_types: {
        Row: {
          id: string
          name: string
          description: string | null
          price_modifier: number | null
          active: boolean | null
          sort_order: number | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          name: string
          description?: string | null
          price_modifier?: number | null
          active?: boolean | null
          sort_order?: number | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          name?: string
          description?: string | null
          price_modifier?: number | null
          active?: boolean | null
          sort_order?: number | null
          created_at?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      system_logs: {
        Row: {
          id: string
          level: string
          category: string
          message: string
          timestamp: string
          user_id: string | null
          session_id: string | null
          request_id: string | null
          ip_address: string | null
          user_agent: string | null
          method: string | null
          url: string | null
          status_code: number | null
          response_time: number | null
          metadata: Json | null
          error_stack: string | null
          created_at: string | null
        }
        Insert: {
          id?: string
          level: string
          category: string
          message: string
          timestamp?: string
          user_id?: string | null
          session_id?: string | null
          request_id?: string | null
          ip_address?: string | null
          user_agent?: string | null
          method?: string | null
          url?: string | null
          status_code?: number | null
          response_time?: number | null
          metadata?: Json | null
          error_stack?: string | null
          created_at?: string | null
        }
        Update: {
          id?: string
          level?: string
          category?: string
          message?: string
          timestamp?: string
          user_id?: string | null
          session_id?: string | null
          request_id?: string | null
          ip_address?: string | null
          user_agent?: string | null
          method?: string | null
          url?: string | null
          status_code?: number | null
          response_time?: number | null
          metadata?: Json | null
          error_stack?: string | null
          created_at?: string | null
        }
        Relationships: []
      }
      task_activity: {
        Row: {
          id: string
          task_id: string | null
          user_id: string | null
          action: string
          changes: Json | null
          created_at: string | null
        }
        Insert: {
          id?: string
          task_id?: string | null
          user_id?: string | null
          action: string
          changes?: Json | null
          created_at?: string | null
        }
        Update: {
          id?: string
          task_id?: string | null
          user_id?: string | null
          action?: string
          changes?: Json | null
          created_at?: string | null
        }
        Relationships: []
      }
      task_comments: {
        Row: {
          id: string
          task_id: string | null
          user_id: string | null
          comment: string
          mentions: string[] | null
          created_at: string | null
        }
        Insert: {
          id?: string
          task_id?: string | null
          user_id?: string | null
          comment: string
          mentions?: string[] | null
          created_at?: string | null
        }
        Update: {
          id?: string
          task_id?: string | null
          user_id?: string | null
          comment?: string
          mentions?: string[] | null
          created_at?: string | null
        }
        Relationships: []
      }
      task_templates: {
        Row: {
          id: string
          name: string
          description: string | null
          template_data: Json
          category: string | null
          is_active: boolean | null
          created_at: string | null
        }
        Insert: {
          id?: string
          name: string
          description?: string | null
          template_data: Json
          category?: string | null
          is_active?: boolean | null
          created_at?: string | null
        }
        Update: {
          id?: string
          name?: string
          description?: string | null
          template_data?: Json
          category?: string | null
          is_active?: boolean | null
          created_at?: string | null
        }
        Relationships: []
      }
      tasks: {
        Row: {
          id: string
          title: string
          description: string | null
          status: string | null
          priority: string | null
          task_type: string | null
          created_by: string | null
          parent_task_id: string | null
          project_id: string | null
          order_id: string | null
          customer_id: string | null
          due_date: string | null
          start_date: string | null
          completed_at: string | null
          estimated_hours: number | null
          actual_hours: number | null
          tags: string[] | null
          custom_fields: Json | null
          attachments: Json | null
          position: number | null
          is_archived: boolean | null
          created_at: string | null
          updated_at: string | null
          department: string | null
          visibility: string | null
          mentioned_users: string[] | null
          assigned_to: string[] | null
          watchers: string[] | null
          depends_on: string[] | null
          blocks: string[] | null
        }
        Insert: {
          id?: string
          title: string
          description?: string | null
          status?: string | null
          priority?: string | null
          task_type?: string | null
          created_by?: string | null
          parent_task_id?: string | null
          project_id?: string | null
          order_id?: string | null
          customer_id?: string | null
          due_date?: string | null
          start_date?: string | null
          completed_at?: string | null
          estimated_hours?: number | null
          actual_hours?: number | null
          tags?: string[] | null
          custom_fields?: Json | null
          attachments?: Json | null
          position?: number | null
          is_archived?: boolean | null
          created_at?: string | null
          updated_at?: string | null
          department?: string | null
          visibility?: string | null
          mentioned_users?: string[] | null
          assigned_to?: string[] | null
          watchers?: string[] | null
          depends_on?: string[] | null
          blocks?: string[] | null
        }
        Update: {
          id?: string
          title?: string
          description?: string | null
          status?: string | null
          priority?: string | null
          task_type?: string | null
          created_by?: string | null
          parent_task_id?: string | null
          project_id?: string | null
          order_id?: string | null
          customer_id?: string | null
          due_date?: string | null
          start_date?: string | null
          completed_at?: string | null
          estimated_hours?: number | null
          actual_hours?: number | null
          tags?: string[] | null
          custom_fields?: Json | null
          attachments?: Json | null
          position?: number | null
          is_archived?: boolean | null
          created_at?: string | null
          updated_at?: string | null
          department?: string | null
          visibility?: string | null
          mentioned_users?: string[] | null
          assigned_to?: string[] | null
          watchers?: string[] | null
          depends_on?: string[] | null
          blocks?: string[] | null
        }
        Relationships: []
      }
      tax_rates: {
        Row: {
          id: string
          name: string
          rate: number
          tax_agency: string | null
          quickbooks_tax_code: string | null
          is_compound: boolean | null
          is_default: boolean | null
          active: boolean | null
          created_at: string | null
        }
        Insert: {
          id?: string
          name: string
          rate: number
          tax_agency?: string | null
          quickbooks_tax_code?: string | null
          is_compound?: boolean | null
          is_default?: boolean | null
          active?: boolean | null
          created_at?: string | null
        }
        Update: {
          id?: string
          name?: string
          rate?: number
          tax_agency?: string | null
          quickbooks_tax_code?: string | null
          is_compound?: boolean | null
          is_default?: boolean | null
          active?: boolean | null
          created_at?: string | null
        }
        Relationships: []
      }
      team_members: {
        Row: {
          id: string
          team_id: string | null
          user_id: string | null
          role: string | null
          joined_at: string | null
        }
        Insert: {
          id?: string
          team_id?: string | null
          user_id?: string | null
          role?: string | null
          joined_at?: string | null
        }
        Update: {
          id?: string
          team_id?: string | null
          user_id?: string | null
          role?: string | null
          joined_at?: string | null
        }
        Relationships: []
      }
      teams: {
        Row: {
          id: string
          name: string
          description: string | null
          created_by: string | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          name: string
          description?: string | null
          created_by?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          name?: string
          description?: string | null
          created_by?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      tenants: {
        Row: {
          id: string
          name: string
          slug: string | null
          settings: Json | null
          is_active: boolean | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          name: string
          slug?: string | null
          settings?: Json | null
          is_active?: boolean | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          name?: string
          slug?: string | null
          settings?: Json | null
          is_active?: boolean | null
          created_at?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      tracking_milestones: {
        Row: {
          id: string
          shipment_id: string | null
          milestone_code: string | null
          milestone_description: string | null
          location: string | null
          carrier_status_code: string | null
          carrier_status_description: string | null
          milestone_date: string
          estimated: boolean | null
          signature: string | null
          pod_url: string | null
          exception_reason: string | null
          raw_data: Json | null
          created_at: string | null
        }
        Insert: {
          id?: string
          shipment_id?: string | null
          milestone_code?: string | null
          milestone_description?: string | null
          location?: string | null
          carrier_status_code?: string | null
          carrier_status_description?: string | null
          milestone_date: string
          estimated?: boolean | null
          signature?: string | null
          pod_url?: string | null
          exception_reason?: string | null
          raw_data?: Json | null
          created_at?: string | null
        }
        Update: {
          id?: string
          shipment_id?: string | null
          milestone_code?: string | null
          milestone_description?: string | null
          location?: string | null
          carrier_status_code?: string | null
          carrier_status_description?: string | null
          milestone_date?: string
          estimated?: boolean | null
          signature?: string | null
          pod_url?: string | null
          exception_reason?: string | null
          raw_data?: Json | null
          created_at?: string | null
        }
        Relationships: []
      }
      user_dashboards: {
        Row: {
          id: string
          user_id: string | null
          dashboard_name: string
          dashboard_layout: Json | null
          widget_ids: string[] | null
          is_default: boolean | null
          is_shared: boolean | null
          shared_with: string[] | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          user_id?: string | null
          dashboard_name: string
          dashboard_layout?: Json | null
          widget_ids?: string[] | null
          is_default?: boolean | null
          is_shared?: boolean | null
          shared_with?: string[] | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          user_id?: string | null
          dashboard_name?: string
          dashboard_layout?: Json | null
          widget_ids?: string[] | null
          is_default?: boolean | null
          is_shared?: boolean | null
          shared_with?: string[] | null
          created_at?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      user_document_permissions: {
        Row: {
          id: string
          user_id: string
          can_access_documents: boolean | null
          can_download: boolean | null
          can_upload: boolean | null
          can_delete: boolean | null
          can_approve: boolean | null
          can_share: boolean | null
          max_upload_size_mb: number | null
          storage_quota_gb: number | null
          storage_used_gb: number | null
          allowed_file_types: string[] | null
          restricted_categories: string[] | null
          access_expires_at: string | null
          download_expires_at: string | null
          created_at: string | null
          updated_at: string | null
          created_by: string | null
          last_modified_by: string | null
          notes: string | null
          permission_reason: string | null
          permission_history: Json | null
        }
        Insert: {
          id?: string
          user_id: string
          can_access_documents?: boolean | null
          can_download?: boolean | null
          can_upload?: boolean | null
          can_delete?: boolean | null
          can_approve?: boolean | null
          can_share?: boolean | null
          max_upload_size_mb?: number | null
          storage_quota_gb?: number | null
          storage_used_gb?: number | null
          allowed_file_types?: string[] | null
          restricted_categories?: string[] | null
          access_expires_at?: string | null
          download_expires_at?: string | null
          created_at?: string | null
          updated_at?: string | null
          created_by?: string | null
          last_modified_by?: string | null
          notes?: string | null
          permission_reason?: string | null
          permission_history?: Json | null
        }
        Update: {
          id?: string
          user_id?: string
          can_access_documents?: boolean | null
          can_download?: boolean | null
          can_upload?: boolean | null
          can_delete?: boolean | null
          can_approve?: boolean | null
          can_share?: boolean | null
          max_upload_size_mb?: number | null
          storage_quota_gb?: number | null
          storage_used_gb?: number | null
          allowed_file_types?: string[] | null
          restricted_categories?: string[] | null
          access_expires_at?: string | null
          download_expires_at?: string | null
          created_at?: string | null
          updated_at?: string | null
          created_by?: string | null
          last_modified_by?: string | null
          notes?: string | null
          permission_reason?: string | null
          permission_history?: Json | null
        }
        Relationships: []
      }
      user_feature_overrides: {
        Row: {
          id: string
          user_id: string
          feature_name: string
          is_enabled: boolean
          override_reason: string | null
          overridden_by: string | null
          created_at: string | null
        }
        Insert: {
          id?: string
          user_id: string
          feature_name: string
          is_enabled: boolean
          override_reason?: string | null
          overridden_by?: string | null
          created_at?: string | null
        }
        Update: {
          id?: string
          user_id?: string
          feature_name?: string
          is_enabled?: boolean
          override_reason?: string | null
          overridden_by?: string | null
          created_at?: string | null
        }
        Relationships: []
      }
      user_permissions: {
        Row: {
          id: string
          user_id: string
          module: string
          can_view: boolean | null
          can_edit: boolean | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          user_id: string
          module: string
          can_view?: boolean | null
          can_edit?: boolean | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          user_id?: string
          module?: string
          can_view?: boolean | null
          can_edit?: boolean | null
          created_at?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      user_preferences: {
        Row: {
          id: string
          user_id: string | null
          notification_email: boolean | null
          notification_sms: boolean | null
          notification_in_app: boolean | null
          theme: string | null
          language: string | null
          timezone: string | null
          date_format: string | null
          time_format: string | null
          email_digest: string | null
          metadata: Json | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          user_id?: string | null
          notification_email?: boolean | null
          notification_sms?: boolean | null
          notification_in_app?: boolean | null
          theme?: string | null
          language?: string | null
          timezone?: string | null
          date_format?: string | null
          time_format?: string | null
          email_digest?: string | null
          metadata?: Json | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          user_id?: string | null
          notification_email?: boolean | null
          notification_sms?: boolean | null
          notification_in_app?: boolean | null
          theme?: string | null
          language?: string | null
          timezone?: string | null
          date_format?: string | null
          time_format?: string | null
          email_digest?: string | null
          metadata?: Json | null
          created_at?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      user_profiles: {
        Row: {
          id: string
          email: string | null
          name: string | null
          avatar_url: string | null
          created_at: string | null
          updated_at: string | null
          title: string | null
          user_type: "employee" | "contractor" | "designer" | "manufacturer" | "finance" | "super_admin" | "customer" | null
          is_active: boolean | null
          department: string | null
          hire_date: string | null
          permissions: Json | null
          is_sso_user: boolean | null
          sso_provider: string | null
          google_workspace_id: string | null
          last_sso_login: string | null
          user_id: string | null
          first_name: string | null
          last_name: string | null
          full_name: string | null
          job_title: string | null
          raw_metadata: Json | null
        }
        Insert: {
          id: string
          email?: string | null
          name?: string | null
          avatar_url?: string | null
          created_at?: string | null
          updated_at?: string | null
          title?: string | null
          user_type?: "employee" | "contractor" | "designer" | "manufacturer" | "finance" | "super_admin" | "customer" | null
          is_active?: boolean | null
          department?: string | null
          hire_date?: string | null
          permissions?: Json | null
          is_sso_user?: boolean | null
          sso_provider?: string | null
          google_workspace_id?: string | null
          last_sso_login?: string | null
          user_id?: string | null
          first_name?: string | null
          last_name?: string | null
          full_name?: string | null
          job_title?: string | null
          raw_metadata?: Json | null
        }
        Update: {
          id?: string
          email?: string | null
          name?: string | null
          avatar_url?: string | null
          created_at?: string | null
          updated_at?: string | null
          title?: string | null
          user_type?: "employee" | "contractor" | "designer" | "manufacturer" | "finance" | "super_admin" | "customer" | null
          is_active?: boolean | null
          department?: string | null
          hire_date?: string | null
          permissions?: Json | null
          is_sso_user?: boolean | null
          sso_provider?: string | null
          google_workspace_id?: string | null
          last_sso_login?: string | null
          user_id?: string | null
          first_name?: string | null
          last_name?: string | null
          full_name?: string | null
          job_title?: string | null
          raw_metadata?: Json | null
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          id: string
          user_id: string | null
          role_name: string
          created_at: string | null
        }
        Insert: {
          id?: string
          user_id?: string | null
          role_name: string
          created_at?: string | null
        }
        Update: {
          id?: string
          user_id?: string | null
          role_name?: string
          created_at?: string | null
        }
        Relationships: []
      }
      verification_logs: {
        Row: {
          id: string
          user_id: string | null
          email: string | null
          type: string
          success: boolean
          ip_address: string | null
          user_agent: string | null
          error_message: string | null
          metadata: Json | null
          created_at: string | null
          phone_number: string | null
          provider: string | null
          delivery_status: string | null
          delivery_timestamp: string | null
        }
        Insert: {
          id?: string
          user_id?: string | null
          email?: string | null
          type: string
          success: boolean
          ip_address?: string | null
          user_agent?: string | null
          error_message?: string | null
          metadata?: Json | null
          created_at?: string | null
          phone_number?: string | null
          provider?: string | null
          delivery_status?: string | null
          delivery_timestamp?: string | null
        }
        Update: {
          id?: string
          user_id?: string | null
          email?: string | null
          type?: string
          success?: boolean
          ip_address?: string | null
          user_agent?: string | null
          error_message?: string | null
          metadata?: Json | null
          created_at?: string | null
          phone_number?: string | null
          provider?: string | null
          delivery_status?: string | null
          delivery_timestamp?: string | null
        }
        Relationships: []
      }
      weave_options: {
        Row: {
          id: string
          material: string
          pattern: string | null
          color: string | null
          code: string
          price_modifier: number | null
          active: boolean | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          material: string
          pattern?: string | null
          color?: string | null
          code: string
          price_modifier?: number | null
          active?: boolean | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          material?: string
          pattern?: string | null
          color?: string | null
          code?: string
          price_modifier?: number | null
          active?: boolean | null
          created_at?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      weaving_colors: {
        Row: {
          id: string
          pattern_id: string | null
          name: string
          hex_code: string | null
          price_modifier: number | null
          active: boolean | null
          sort_order: number | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          pattern_id?: string | null
          name: string
          hex_code?: string | null
          price_modifier?: number | null
          active?: boolean | null
          sort_order?: number | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          pattern_id?: string | null
          name?: string
          hex_code?: string | null
          price_modifier?: number | null
          active?: boolean | null
          sort_order?: number | null
          created_at?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      weaving_materials: {
        Row: {
          id: string
          name: string
          description: string | null
          price_modifier: number | null
          active: boolean | null
          sort_order: number | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          name: string
          description?: string | null
          price_modifier?: number | null
          active?: boolean | null
          sort_order?: number | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          name?: string
          description?: string | null
          price_modifier?: number | null
          active?: boolean | null
          sort_order?: number | null
          created_at?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      weaving_materials_old: {
        Row: {
          id: string
          material_name: string
          material_type: string | null
          weave_pattern: string | null
          color: string | null
          thickness_mm: number | null
          weather_resistance: string | null
          uv_resistant: boolean | null
          price_per_meter: number | null
          minimum_order_qty: number | null
          in_stock: boolean | null
          lead_time_days: number | null
          supplier: string | null
          sku_code: string | null
          is_active: boolean | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          material_name: string
          material_type?: string | null
          weave_pattern?: string | null
          color?: string | null
          thickness_mm?: number | null
          weather_resistance?: string | null
          uv_resistant?: boolean | null
          price_per_meter?: number | null
          minimum_order_qty?: number | null
          in_stock?: boolean | null
          lead_time_days?: number | null
          supplier?: string | null
          sku_code?: string | null
          is_active?: boolean | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          material_name?: string
          material_type?: string | null
          weave_pattern?: string | null
          color?: string | null
          thickness_mm?: number | null
          weather_resistance?: string | null
          uv_resistant?: boolean | null
          price_per_meter?: number | null
          minimum_order_qty?: number | null
          in_stock?: boolean | null
          lead_time_days?: number | null
          supplier?: string | null
          sku_code?: string | null
          is_active?: boolean | null
          created_at?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      weaving_patterns: {
        Row: {
          id: string
          material_id: string | null
          name: string
          description: string | null
          price_modifier: number | null
          active: boolean | null
          sort_order: number | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          material_id?: string | null
          name: string
          description?: string | null
          price_modifier?: number | null
          active?: boolean | null
          sort_order?: number | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          material_id?: string | null
          name?: string
          description?: string | null
          price_modifier?: number | null
          active?: boolean | null
          sort_order?: number | null
          created_at?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      webhook_deliveries: {
        Row: {
          id: string
          endpoint_id: string | null
          event_type: string
          payload: Json
          response_status: number | null
          response_body: string | null
          attempted_at: string | null
          delivered_at: string | null
          retry_count: number | null
          next_retry_at: string | null
          created_at: string | null
        }
        Insert: {
          id?: string
          endpoint_id?: string | null
          event_type: string
          payload: Json
          response_status?: number | null
          response_body?: string | null
          attempted_at?: string | null
          delivered_at?: string | null
          retry_count?: number | null
          next_retry_at?: string | null
          created_at?: string | null
        }
        Update: {
          id?: string
          endpoint_id?: string | null
          event_type?: string
          payload?: Json
          response_status?: number | null
          response_body?: string | null
          attempted_at?: string | null
          delivered_at?: string | null
          retry_count?: number | null
          next_retry_at?: string | null
          created_at?: string | null
        }
        Relationships: []
      }
      webhook_endpoints: {
        Row: {
          id: string
          customer_id: string | null
          url: string
          secret: string | null
          events: string[] | null
          is_active: boolean | null
          last_success: string | null
          last_failure: string | null
          failure_count: number | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          customer_id?: string | null
          url: string
          secret?: string | null
          events?: string[] | null
          is_active?: boolean | null
          last_success?: string | null
          last_failure?: string | null
          failure_count?: number | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          customer_id?: string | null
          url?: string
          secret?: string | null
          events?: string[] | null
          is_active?: boolean | null
          last_success?: string | null
          last_failure?: string | null
          failure_count?: number | null
          created_at?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      wood_finishes: {
        Row: {
          id: string
          wood_type_id: string | null
          name: string
          description: string | null
          price_modifier: number | null
          active: boolean | null
          sort_order: number | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          wood_type_id?: string | null
          name: string
          description?: string | null
          price_modifier?: number | null
          active?: boolean | null
          sort_order?: number | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          wood_type_id?: string | null
          name?: string
          description?: string | null
          price_modifier?: number | null
          active?: boolean | null
          sort_order?: number | null
          created_at?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      wood_options: {
        Row: {
          id: string
          type: string
          finish: string | null
          code: string
          price_modifier: number | null
          active: boolean | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          type: string
          finish?: string | null
          code: string
          price_modifier?: number | null
          active?: boolean | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          type?: string
          finish?: string | null
          code?: string
          price_modifier?: number | null
          active?: boolean | null
          created_at?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      wood_types: {
        Row: {
          id: string
          name: string
          description: string | null
          price_modifier: number | null
          active: boolean | null
          sort_order: number | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          name: string
          description?: string | null
          price_modifier?: number | null
          active?: boolean | null
          sort_order?: number | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          name?: string
          description?: string | null
          price_modifier?: number | null
          active?: boolean | null
          sort_order?: number | null
          created_at?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      workflow_executions: {
        Row: {
          id: string
          workflow_id: string
          started_at: string | null
          completed_at: string | null
          status: string
          trigger_data: Json | null
          execution_context: Json | null
          execution_result: Json | null
          error_message: string | null
          error_details: Json | null
          duration_ms: number | null
          steps_completed: number | null
          steps_total: number | null
          initiated_by: string | null
          cancelled_by: string | null
          created_at: string | null
        }
        Insert: {
          id?: string
          workflow_id: string
          started_at?: string | null
          completed_at?: string | null
          status?: string
          trigger_data?: Json | null
          execution_context?: Json | null
          execution_result?: Json | null
          error_message?: string | null
          error_details?: Json | null
          duration_ms?: number | null
          steps_completed?: number | null
          steps_total?: number | null
          initiated_by?: string | null
          cancelled_by?: string | null
          created_at?: string | null
        }
        Update: {
          id?: string
          workflow_id?: string
          started_at?: string | null
          completed_at?: string | null
          status?: string
          trigger_data?: Json | null
          execution_context?: Json | null
          execution_result?: Json | null
          error_message?: string | null
          error_details?: Json | null
          duration_ms?: number | null
          steps_completed?: number | null
          steps_total?: number | null
          initiated_by?: string | null
          cancelled_by?: string | null
          created_at?: string | null
        }
        Relationships: []
      }
      workflow_steps: {
        Row: {
          id: string
          workflow_id: string
          step_order: number
          step_name: string
          step_type: string
          step_config: Json | null
          is_required: boolean | null
          retry_on_failure: boolean | null
          max_retries: number | null
          timeout_seconds: number | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          workflow_id: string
          step_order: number
          step_name: string
          step_type: string
          step_config?: Json | null
          is_required?: boolean | null
          retry_on_failure?: boolean | null
          max_retries?: number | null
          timeout_seconds?: number | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          workflow_id?: string
          step_order?: number
          step_name?: string
          step_type?: string
          step_config?: Json | null
          is_required?: boolean | null
          retry_on_failure?: boolean | null
          max_retries?: number | null
          timeout_seconds?: number | null
          created_at?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      workflow_templates: {
        Row: {
          id: string
          name: string
          description: string | null
          category: string | null
          template_definition: Json
          icon: string | null
          is_public: boolean | null
          usage_count: number | null
          created_by: string | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          name: string
          description?: string | null
          category?: string | null
          template_definition: Json
          icon?: string | null
          is_public?: boolean | null
          usage_count?: number | null
          created_by?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          name?: string
          description?: string | null
          category?: string | null
          template_definition?: Json
          icon?: string | null
          is_public?: boolean | null
          usage_count?: number | null
          created_by?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      workflows: {
        Row: {
          id: string
          name: string
          description: string | null
          trigger_type: string
          trigger_config: Json | null
          status: string | null
          workflow_definition: Json
          last_run_at: string | null
          last_run_status: string | null
          last_run_error: string | null
          run_count: number | null
          success_count: number | null
          failure_count: number | null
          department_id: string | null
          created_by: string | null
          updated_by: string | null
          tags: string[] | null
          category: string | null
          priority: number | null
          is_template: boolean | null
          created_at: string | null
          updated_at: string | null
          deleted_at: string | null
        }
        Insert: {
          id?: string
          name: string
          description?: string | null
          trigger_type: string
          trigger_config?: Json | null
          status?: string | null
          workflow_definition?: Json
          last_run_at?: string | null
          last_run_status?: string | null
          last_run_error?: string | null
          run_count?: number | null
          success_count?: number | null
          failure_count?: number | null
          department_id?: string | null
          created_by?: string | null
          updated_by?: string | null
          tags?: string[] | null
          category?: string | null
          priority?: number | null
          is_template?: boolean | null
          created_at?: string | null
          updated_at?: string | null
          deleted_at?: string | null
        }
        Update: {
          id?: string
          name?: string
          description?: string | null
          trigger_type?: string
          trigger_config?: Json | null
          status?: string | null
          workflow_definition?: Json
          last_run_at?: string | null
          last_run_status?: string | null
          last_run_error?: string | null
          run_count?: number | null
          success_count?: number | null
          failure_count?: number | null
          department_id?: string | null
          created_by?: string | null
          updated_by?: string | null
          tags?: string[] | null
          category?: string | null
          priority?: number | null
          is_template?: boolean | null
          created_at?: string | null
          updated_at?: string | null
          deleted_at?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      address_type_enum: "delivery" | "billing" | "pickup"
      defect_severity_enum: "critical" | "major" | "minor" | "cosmetic"
      document_access_level: "private" | "internal" | "client_visible" | "public"
      document_category: "design" | "production" | "prototyping" | "shop_drawings" | "invoices" | "contracts" | "correspondence" | "photos" | "qc_reports" | "shipping" | "other"
      document_status: "draft" | "pending_review" | "in_review" | "approved" | "rejected" | "revision_requested" | "archived" | "deleted"
      file_type_category: "document" | "image" | "cad_3d" | "vector" | "video" | "archive" | "other"
      manufacturer_status_enum: "prospect" | "approved" | "preferred" | "suspended" | "inactive"
      packing_material_type_enum: "box" | "padding" | "wrap" | "tape" | "label" | "cushioning"
      packing_status_enum: "pending" | "in_progress" | "packed" | "shipped"
      priority_enum: "urgent" | "high" | "normal" | "low"
      production_status_enum: "planned" | "in_progress" | "quality_check" | "completed" | "delayed" | "on_hold"
      qc_checkpoint_status_enum: "pending" | "passed" | "failed" | "na"
      qc_stage_enum: "incoming_inspection" | "in_process_check" | "final_inspection" | "packaging_check"
      qc_status_enum: "pending" | "in_progress" | "passed" | "failed" | "on_hold"
      quickbooks_sync_status: "pending" | "in_progress" | "completed" | "failed" | "skipped"
      shipping_status_enum: "pending" | "picked_up" | "in_transit" | "out_for_delivery" | "delivered" | "exception" | "returned"
      sync_direction: "to_quickbooks" | "from_quickbooks" | "bidirectional"
      user_role_enum: "admin" | "manager" | "qc_inspector" | "packer" | "shipping_coordinator" | "production_worker"
      user_type_enum: "employee" | "contractor" | "designer" | "manufacturer" | "finance" | "super_admin" | "customer"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[keyof Database]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
