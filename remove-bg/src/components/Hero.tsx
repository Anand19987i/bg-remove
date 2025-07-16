/* eslint-disable @next/next/no-img-element */
"use client"

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Upload, Loader2, Download, Check } from "lucide-react";

interface HeroProps {
  onImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  loading: boolean;
  error: string | null;
  originalImage: string | null;
  resultImage: string | null;
}

export default function Hero({ onImageUpload, loading, error, originalImage, resultImage }: HeroProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (file.type.startsWith('image/')) {
        // Create a synthetic event for the upload handler
        const syntheticEvent = {
            target: { files: [file] }
        } as unknown as React.ChangeEvent<HTMLInputElement>;
        onImageUpload(syntheticEvent);
      }
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Remove Image Backgrounds
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Instantly & Free
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Upload any image and get a professional background-removed result in seconds. 
            Perfect for product photos, profile pictures, and creative projects.
          </p>
          
          <div className="flex items-center justify-center space-x-6 mb-8">
            <div className="flex items-center space-x-2">
              <Check className="w-5 h-5 text-green-500" />
              <span className="text-gray-600">100% Free</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="w-5 h-5 text-green-500" />
              <span className="text-gray-600">No Sign-up Required</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="w-5 h-5 text-green-500" />
              <span className="text-gray-600">High Quality</span>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          {!originalImage ? (
            <Card className="border-2 border-dashed border-gray-300 hover:border-blue-400 transition-colors">
              <CardContent className="p-12">
                <div
                  className={`text-center ${dragActive ? 'bg-blue-50' : ''} rounded-lg p-8 transition-colors`}
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                >
                  <Upload className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    Choose an image to remove background
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Drag and drop an image here, or click to select
                  </p>
                  <Button 
                    onClick={handleButtonClick}
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  >
                    <Upload className="w-5 h-5 mr-2" />
                    Select Image
                  </Button>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={onImageUpload}
                  />
                  <p className="text-sm text-gray-500 mt-4">
                    Supports JPG, PNG, WebP up to 10MB
                  </p>
                </div>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-8">
              {loading && (
                <Card className="border-blue-200 bg-blue-50">
                  <CardContent className="p-8 text-center">
                    <Loader2 className="w-8 h-8 animate-spin text-blue-600 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-blue-900 mb-2">
                      Processing your image...
                    </h3>
                    <p className="text-blue-700">
                      This usually takes a few seconds
                    </p>
                  </CardContent>
                </Card>
              )}

              {error && (
                <Card className="border-red-200 bg-red-50">
                  <CardContent className="p-8 text-center">
                    <div className="text-red-600 mb-4">❌</div>
                    <h3 className="text-lg font-semibold text-red-900 mb-2">
                      Oops! Something went wrong
                    </h3>
                    <p className="text-red-700">{error}</p>
                    <Button 
                      onClick={() => window.location.reload()}
                      variant="outline"
                      className="mt-4"
                    >
                      Try Again
                    </Button>
                  </CardContent>
                </Card>
              )}

              {resultImage && (
                <div className="grid md:grid-cols-2 gap-8">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-4 text-center">Original</h3>
                      <img
                        src={originalImage}
                        alt="Original"
                        className="w-full h-auto rounded-lg shadow-md"
                      />
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-4 text-center text-green-600">
                        Background Removed
                      </h3>
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg opacity-50" 
                             style={{
                               backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23f3f4f6' fill-opacity='0.4' fill-rule='evenodd'%3E%3Crect width='10' height='10'/%3E%3Crect x='10' y='10' width='10' height='10'/%3E%3C/g%3E%3C/svg%3E")`,
                             }}
                        />
                        <img
                          src={resultImage}
                          alt="Result"
                          className="relative w-full h-auto rounded-lg shadow-md"
                        />
                      </div>
                      <div className="mt-4 text-center">
                        <a
                          href={resultImage}
                          download="no-background.png"
                          className="inline-block"
                        >
                          <Button className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800">
                            <Download className="w-4 h-4" />
                            Download
                          </Button>
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}

              <div className="text-center">
                <Button 
                  onClick={() => window.location.reload()}
                  variant="outline"
                  size="lg"
                >
                  <Upload className="w-5 h-5 mr-2" />
                  Upload Another Image
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}