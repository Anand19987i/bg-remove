"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Upload, Wand2, Download } from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "Upload Image",
    description:
      "Select or drag and drop your image. We support JPG, PNG, and WebP formats up to 10MB.",
  },
  {
    icon: Wand2,
    title: "AI Magic",
    description:
      "Our advanced AI instantly identifies and removes the background with pixel-perfect precision.",
  },
  {
    icon: Download,
    title: "Download Result",
    description:
      "Get your background-free image in high-resolution PNG format, ready for download and any use.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Remove backgrounds in three simple steps. No technical knowledge
            required.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center text-center">
              {/* Step Number Badge */}
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4 z-10">
                {index + 1}
              </div>

              {/* Card Content */}
              <Card className="w-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8 flex flex-col items-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>

              {/* Arrow between steps (only on desktop, and not after last step) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-[-40px] transform -translate-y-1/2">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
