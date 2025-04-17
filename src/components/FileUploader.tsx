
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Upload, FileText, Loader2, Check } from "lucide-react";

const FileUploader = () => {
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      
      // Check if the file is a .mol file
      if (!selectedFile.name.endsWith('.mol')) {
        toast({
          title: "Invalid file type",
          description: "Please upload a .mol file.",
          variant: "destructive",
        });
        return;
      }
      
      setFile(selectedFile);
      setResult(null);
    }
  };

  const handleUpload = () => {
    if (!file) {
      toast({
        title: "No file selected",
        description: "Please select a .mol file to upload.",
        variant: "destructive",
      });
      return;
    }

    setIsUploading(true);

    // Simulate a file upload and prediction process
    setTimeout(() => {
      setIsUploading(false);
      
      // Generate a random toxicity value for demo purposes
      const toxicity = Math.random();
      let toxicityLevel;
      let toxicityClass;
      
      if (toxicity < 0.3) {
        toxicityLevel = "Low toxicity";
        toxicityClass = "text-green-600";
      } else if (toxicity < 0.7) {
        toxicityLevel = "Moderate toxicity";
        toxicityClass = "text-amber-500";
      } else {
        toxicityLevel = "High toxicity";
        toxicityClass = "text-red-600";
      }
      
      setResult(`
        <div>
          <p class="mb-2">Prediction results for <strong>${file.name}</strong>:</p>
          <p class="mb-1">Toxicity probability: <strong>${(toxicity * 100).toFixed(2)}%</strong></p>
          <p class="${toxicityClass} font-bold text-lg">${toxicityLevel}</p>
        </div>
      `);
      
      toast({
        title: "Analysis complete",
        description: "Your chemical has been analyzed successfully.",
      });
    }, 2000);
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardContent className="pt-6">
        <div className="space-y-4">
          <div className="flex flex-col items-center justify-center border-2 border-dashed border-muted-foreground/25 rounded-md p-6 hover:border-muted-foreground/50 transition-colors">
            <FileText className="h-10 w-10 text-muted-foreground mb-2" />
            <p className="text-sm text-muted-foreground mb-2">
              Upload your .mol file
            </p>
            <input
              type="file"
              id="file-upload"
              onChange={handleFileChange}
              className="hidden"
            />
            <Button variant="outline" onClick={() => document.getElementById("file-upload")?.click()}>
              Choose File
            </Button>
            {file && (
              <p className="mt-2 text-sm">Selected: {file.name}</p>
            )}
          </div>

          <Button
            onClick={handleUpload}
            disabled={!file || isUploading}
            className="w-full bg-bee-amber hover:bg-bee-gold text-black"
          >
            {isUploading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Analyzing...
              </>
            ) : (
              <>
                <Upload className="mr-2 h-4 w-4" />
                Upload and Classify
              </>
            )}
          </Button>

          {result && (
            <div className="mt-4 p-4 border rounded-md bg-muted/50">
              <div dangerouslySetInnerHTML={{ __html: result }} />
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default FileUploader;
