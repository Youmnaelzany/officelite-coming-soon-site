CREATE TABLE form_submissions (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  plan VARCHAR(20) NOT NULL CHECK (plan IN ('basic', 'pro', 'ultimate')),
  phone VARCHAR(20),
  company VARCHAR(100),
  submitted_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);