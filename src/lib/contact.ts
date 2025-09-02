import { supabase } from './supabase'

export interface ContactFormData {
  firstName: string
  lastName: string
  email: string
  subject: string
  message: string
}

export async function submitContactForm(data: ContactFormData) {
  const { error } = await supabase
    .from('contact_messages')
    .insert({
      first_name: data.firstName,
      last_name: data.lastName,
      email: data.email,
      subject: data.subject,
      message: data.message
    })

  if (error) {
    throw new Error(`Failed to submit contact form: ${error.message}`)
  }

  return { success: true }
}

export async function getContactMessages() {
  const { data, error } = await supabase
    .from('contact_messages')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    throw new Error(`Failed to fetch contact messages: ${error.message}`)
  }

  return data
}