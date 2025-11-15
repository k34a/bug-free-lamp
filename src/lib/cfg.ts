export const ENV = {
    SUPABASE_PROJECT_URL: process.env.SUPABASE_PROJECT_URL!,
    SUPABASE_SECRET_KEY: process.env.SUPABASE_SECRET_KEY!,
    NODE_ENV: process.env.NODE_ENV!,
    FROM_EMAIL_ID: process.env.FROM_EMAIL_ID!,
    FROM_EMAIL_PASSWORD: process.env.FROM_EMAIL_PASSWORD!,
} as const
