
import Link from "next/link";
import { ProductCardContainer } from "./Components/MainPage/ProductCardContainer/ProductCardContainer";
import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutPage from '../components/CheckoutPage';
import convertToSubcurrency from '../lib/convertToSubcurrency';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY)
export default async function Home(): Promise<JSX.Element> {
  const amount:number = 50.00;

  return (
    <>
    <main className="max-w-6xl mx-auto p-10 text-white text-center border m-10 rounded-md bg-gradient-to-tr from-blue-500 to-purple-700">
    <div className="mb-10">
    <h1 className="text-4xl font-extrabold mb-2">Sonny</h1>
    <h2 className="text-2xl">has requested
    <span>{amount}</span>
    </h2>
    </div>
    <Elements stripe={stripePromise}
      options={{

        mode:"payment",
        amount:convertToSubcurrency(amount),
        currency:'usd'  
      }
      }
    >
      <CheckoutPage  amount={amount }/> 
    </Elements>
    </main>
      <ProductCardContainer />  
    </>
  );
}
