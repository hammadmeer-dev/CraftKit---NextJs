// lib/firebase.js
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Firebase config from environment variables
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase app (check so it doesn't get initialized twice)
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Auth export (you’ll use this for login/signup)
export const auth = getAuth(app);

// Only initialize analytics in browser
export const initAnalytics = async () => {
  if (typeof window !== "undefined") {
    const { getAnalytics } = await import("firebase/analytics");
    return getAnalytics(app);
  }
};

export default app;
