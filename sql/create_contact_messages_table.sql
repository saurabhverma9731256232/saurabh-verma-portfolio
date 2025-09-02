-- Create contact_messages table
CREATE TABLE IF NOT EXISTS contact_messages (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    subject VARCHAR(500) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Add RLS (Row Level Security) policies
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Policy to allow anyone to insert contact messages
CREATE POLICY "Anyone can insert contact messages" ON contact_messages
    FOR INSERT WITH CHECK (true);

-- Policy to allow authenticated users to read contact messages (for admin dashboard)
CREATE POLICY "Authenticated users can read contact messages" ON contact_messages
    FOR SELECT USING (auth.role() = 'authenticated');

-- Add indexes for better performance
CREATE INDEX IF NOT EXISTS contact_messages_created_at_idx ON contact_messages(created_at DESC);
CREATE INDEX IF NOT EXISTS contact_messages_email_idx ON contact_messages(email);