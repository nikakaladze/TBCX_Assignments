"use client";

import { useEffect, useState } from "react";
import React from "react";
import {
  useStripe,
  useElements,
  paymentElement,
} from "@stripe/react-stripe-js";

const CheckoutPage = ({ amount }: { amount: number }) => {
 
    const stripe = useStripe();
    const elements = useElements();
    const [errorMessage,setErrorMessage] = useState<string>();
    const [clientSecret,setClientSecret] = useState("");
    const [loading,setLoading] = useState(false);
    

  
}

export default CheckoutPage;
