
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";

const Home = () => {
  return (
    <Layout>
      <div className="container py-8 md:py-12">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="relative mb-8">
            <div className="w-24 h-24 bg-bee-amber rounded-full flex items-center justify-center animate-float">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-bee-black">
                <path d="M4 16s-1-4 4-4 6 6 6 6 1-4 4-4 4 4 4 4" />
                <path d="M10 18s.8-1.7 4-1 3 2.5 3 2.5" />
                <path d="m7 14 3-3 2 2 3-3" />
              </svg>
            </div>
            <div className="absolute -top-1 -right-1 w-8 h-8 bg-bee-green rounded-full flex items-center justify-center animate-float" style={{ animationDelay: "0.5s" }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <path d="M19 12c0-4.41-3.59-8-8-8s-8 3.59-8 8 3.59 8 8 8c1.23 0 2.4-.29 3.44-.78" />
                <path d="M19 16v6" />
                <path d="M22 19h-6" />
              </svg>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">BeeSafe 2.0</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Advanced bee toxicity prediction for chemical compounds
          </p>
        </div>

        <Card className="mb-12">
          <CardContent className="p-6 md:p-8">
            <p className="text-lg leading-relaxed">
              BeeSafe 2.0 innovatively integrates direct image recognition technology, indirect graph encoding, and convolutional neural networks to achieve precise toxicity assessment of chemicals. Model evaluation demonstrates that BeeSafe 2.0 exhibits strong performance on the test set across key metrics and great predictive ability for the prediction of bee toxicity. BeeSafe 2.0 is anticipated to become a more valuable and powerful tool for new pesticides development and chemical risk assessment.
            </p>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col items-center p-6 border rounded-lg bg-background hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-full bg-bee-amber/20 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-bee-amber">
                <path d="M5 6h14" />
                <path d="M7 12a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1Z" />
                <path d="M9 3v3" />
                <path d="M15 3v3" />
              </svg>
            </div>
            <h3 className="text-lg font-medium mb-2">Image Recognition</h3>
            <p className="text-center text-muted-foreground">
              Advanced direct image recognition technology for chemical structure analysis
            </p>
          </div>

          <div className="flex flex-col items-center p-6 border rounded-lg bg-background hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-full bg-bee-green/20 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-bee-green">
                <circle cx="12" cy="12" r="10" />
                <line x1="22" x2="18" y1="12" y2="12" />
                <line x1="6" x2="2" y1="12" y2="12" />
                <line x1="12" x2="12" y1="6" y2="2" />
                <line x1="12" x2="12" y1="22" y2="18" />
              </svg>
            </div>
            <h3 className="text-lg font-medium mb-2">Graph Encoding</h3>
            <p className="text-center text-muted-foreground">
              Indirect graph encoding for comprehensive chemical structure representation
            </p>
          </div>

          <div className="flex flex-col items-center p-6 border rounded-lg bg-background hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-full bg-bee-black/10 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-bee-black">
                <rect width="18" height="18" x="3" y="3" rx="2" />
                <path d="M7 7h.01" />
                <path d="M11 7h.01" />
                <path d="M15 7h.01" />
                <path d="M7 11h.01" />
                <path d="M11 11h.01" />
                <path d="M15 11h.01" />
                <path d="M7 15h.01" />
                <path d="M11 15h.01" />
                <path d="M15 15h.01" />
              </svg>
            </div>
            <h3 className="text-lg font-medium mb-2">Neural Networks</h3>
            <p className="text-center text-muted-foreground">
              Convolutional neural networks for precise toxicity assessment of chemicals
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
