import { Stripe, loadStripe } from "@stripe/stripe-js";
interface LineItem {
  // Define the properties of a line item
}

const stripePromise = loadStripe("process.env.NEXT_PUBLIC_API_KEY");

const getStripe = (): Promise<Stripe | null> => {
  const stripePromise = loadStripe("process.env.NEXT_PUBLIC_API_KEY");
  return stripePromise;
};

export async function CheckOut({ lineItems }: { lineItems: LineItem[] }) {
  try {
    const stripe = await getStripe();
    await stripe?.redirectToCheckout({
      mode: "payment",
      lineItems,
      successUrl: `${window.location.origin}?session_id={CHECKOUT_SESSION_ID}`,
      cancelUrl: window.location.origin,
    });
  } catch (error) {
    console.error("Error during checkout:", error);
  }
}