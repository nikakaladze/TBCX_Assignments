import "server-only";

import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {

    apiVersion: "2024-11-20.acacia",

    appInfo: {
        name: "nextjs-with-stripe-typescript-demo",
        url: "https://nextjs-with-stripe-typescript-demo.vercel.app",
    },
});