-- Hana Community Database Schema

-- Events table
create table if not exists events (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  description text,
  event_date date not null,
  start_time time not null,
  end_time time,
  location text,
  is_recurring boolean default false,
  recurrence_pattern text,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

-- Admin users (use Supabase Auth, this is for role tracking)
create table if not exists admin_users (
  id uuid references auth.users primary key,
  email text not null,
  role text default 'admin',
  created_at timestamp with time zone default now()
);

-- Contact form submissions
create table if not exists contact_submissions (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  email text not null,
  message text not null,
  created_at timestamp with time zone default now(),
  is_read boolean default false
);

-- Row Level Security Policies

-- Enable RLS on all tables
alter table events enable row level security;
alter table admin_users enable row level security;
alter table contact_submissions enable row level security;

-- Events: Public read, authenticated admin write
create policy "Events are viewable by everyone"
  on events for select
  using (true);

create policy "Events can be inserted by authenticated users"
  on events for insert
  to authenticated
  with check (true);

create policy "Events can be updated by authenticated users"
  on events for update
  to authenticated
  using (true);

create policy "Events can be deleted by authenticated users"
  on events for delete
  to authenticated
  using (true);

-- Admin users: Only admins can view/manage
create policy "Admin users can view their own record"
  on admin_users for select
  to authenticated
  using (auth.uid() = id);

-- Contact submissions: Public insert, admin read
create policy "Anyone can submit contact form"
  on contact_submissions for insert
  with check (true);

create policy "Authenticated users can view contact submissions"
  on contact_submissions for select
  to authenticated
  using (true);

create policy "Authenticated users can update contact submissions"
  on contact_submissions for update
  to authenticated
  using (true);
