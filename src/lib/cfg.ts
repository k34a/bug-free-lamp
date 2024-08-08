import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const ENV = createEnv({
    server: {
        NODE_ENV: z.enum(["development", "test", "production"]),
        FROM_EMAIL_ID: z.string(),
        FROM_EMAIL_PASSWORD: z.string(),
        TURNSTILE_SECRET_KEY: z.string(),
        NOTION_WRITE_TOKEN: z.string(),
        NOTION_SUBSCRIBE: z.string(),
        NOTION_JOINUS: z.string(),
        NOTION_CONTACTUS: z.string(),
    },
    client: {
        NEXT_PUBLIC_TURNSTILE_SITE_KEY: z.string(),
    },
    runtimeEnv: {
        NODE_ENV: process.env.NODE_ENV,
        FROM_EMAIL_ID: process.env.FROM_EMAIL_ID,
        FROM_EMAIL_PASSWORD: process.env.FROM_EMAIL_PASSWORD,
        NEXT_PUBLIC_TURNSTILE_SITE_KEY:
            process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY,
        TURNSTILE_SECRET_KEY: process.env.TURNSTILE_SECRET_KEY,
        NOTION_WRITE_TOKEN: process.env.NOTION_WRITE_TOKEN,
        NOTION_SUBSCRIBE: process.env.NOTION_SUBSCRIBE,
        NOTION_JOINUS: process.env.NOTION_JOINUS,
        NOTION_CONTACTUS: process.env.NOTION_CONTACTUS,
    },
});
