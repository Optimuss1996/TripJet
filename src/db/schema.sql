-- Create a table for public profiles
create table profiles (
  id uuid references auth.users on delete cascade primary key,
  full_name text,
  phone text,
  updated_at timestamp with time zone,
  
  constraint phone_length check (char_length(phone) >= 10)
);

-- Set up Row Level Security (RLS)
alter table profiles enable row level security;

-- Create policies
create policy "Public profiles are viewable by everyone."
  on profiles for select
  using ( true );

create policy "Users can insert their own profile."
  on profiles for insert
  with check ( auth.uid() = id );

create policy "Users can update own profile."
  on profiles for update
  using ( auth.uid() = id );

-- Create indexes
create index profiles_id_index on profiles(id);
create index profiles_phone_index on profiles(phone);

-- Set up Storage
insert into storage.buckets (id, name)
values ('avatars', 'avatars');

create policy "Avatar images are publicly accessible."
  on storage.objects for select
  using ( bucket_id = 'avatars' );

create policy "Anyone can upload an avatar."
  on storage.objects for insert
  with check ( bucket_id = 'avatars' ); 