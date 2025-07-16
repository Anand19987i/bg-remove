"use client"

import { useState } from "react";
import Header from "@/components/Header";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [resultImage, setResultImage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [originalImage, setOriginalImage] = useState<string | null>(null);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Store original image for comparison
    const originalUrl = URL.createObjectURL(file);
    setOriginalImage(originalUrl);

    setLoading(true);
    setError(null);
    setResultImage(null);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("http://localhost:8000/remove-bg-preview/", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const text = await response.text();
        throw new Error(text);
      }

      const blob = await response.blob();
      const imageUrl = URL.createObjectURL(blob);
      setResultImage(imageUrl);
    } catch (err: unknown) {
      let message = "Unknown error";
      if (err instanceof Error) {
        message = err.message;
      } else if (typeof err === "string") {
        message = err;
      }
      setError("Failed to remove background: " + message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />
      <Hero
        onImageUpload={handleImageUpload}
        loading={loading}
        error={error}
        originalImage={originalImage}
        resultImage={resultImage}
      />
      <Features />
      <HowItWorks />
      <Footer />
    </div>
  );
}