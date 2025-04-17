
import React from "react";
import Layout from "@/components/Layout";
import FileUploader from "@/components/FileUploader";

const Prediction = () => {
  return (
    <Layout>
      <div className="container py-8 md:py-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold tracking-tight mb-4">
              Chemical Toxicity Prediction
            </h1>
            <p className="text-muted-foreground">
              Upload a chemical structure file (.mol) to predict its potential toxicity to bees
            </p>
          </div>

          <div className="mb-8 p-4 border rounded-md bg-amber-50 text-amber-800">
            <p className="text-sm">
              <strong>Note:</strong> This tool analyzes chemical structures to predict potential toxicity to honeybees.
              All predictions are based on computational models and should be validated with laboratory testing.
            </p>
          </div>

          <FileUploader />

          <div className="mt-12">
            <h2 className="text-xl font-semibold mb-4">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center p-4 border rounded-md bg-background">
                <div className="w-8 h-8 rounded-full bg-bee-amber flex items-center justify-center mb-2 text-white font-bold">
                  1
                </div>
                <p className="text-center text-sm">
                  Upload your chemical structure file in .mol format
                </p>
              </div>
              <div className="flex flex-col items-center p-4 border rounded-md bg-background">
                <div className="w-8 h-8 rounded-full bg-bee-amber flex items-center justify-center mb-2 text-white font-bold">
                  2
                </div>
                <p className="text-center text-sm">
                  Our advanced neural network analyzes the structure
                </p>
              </div>
              <div className="flex flex-col items-center p-4 border rounded-md bg-background">
                <div className="w-8 h-8 rounded-full bg-bee-amber flex items-center justify-center mb-2 text-white font-bold">
                  3
                </div>
                <p className="text-center text-sm">
                  Receive a detailed toxicity prediction report
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Prediction;
