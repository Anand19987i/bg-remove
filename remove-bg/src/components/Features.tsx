"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Zap, Shield, Smartphone, Palette, Download, Clock } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Remove backgrounds in seconds with our AI-powered technology. No waiting around for results."
  },
  {
    icon: Shield,
    title: "100% Free",
    description: "No hidden costs, no subscription fees. Use our tool as many times as you want, completely free."
  },
  {
    icon: Smartphone,
    title: "Works Everywhere",
    description: "Use on any device - desktop, tablet, or mobile. No app installation required."
  },
  {
    icon: Palette,
    title: "High Quality",
    description: "Professional-grade results with precise edge detection and smooth background removal."
  },
  {
    icon: Download,
    title: "Instant Download",
    description: "Download your processed images immediately in high-resolution PNG format."
  },
  {
    icon: Clock,
    title: "No Sign-up",
    description: "Start using immediately without creating an account or providing personal information."
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Our Background Remover?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the fastest, most accurate background removal tool available online.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}