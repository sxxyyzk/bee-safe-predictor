
import React from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Info, HelpCircle, Lightbulb } from "lucide-react";

const Help = () => {
  return (
    <Layout>
      <div className="container py-8 md:py-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold tracking-tight mb-4">Help Center</h1>
            <p className="text-muted-foreground">
              Learn how to use the BeeSafe 2.0 toxicity prediction tool
            </p>
          </div>

          <Tabs defaultValue="usage" className="mb-8">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="usage">Usage Guide</TabsTrigger>
              <TabsTrigger value="faq">FAQ</TabsTrigger>
              <TabsTrigger value="troubleshooting">Troubleshooting</TabsTrigger>
            </TabsList>
            <TabsContent value="usage">
              <Card>
                <CardHeader>
                  <CardTitle>How to Use BeeSafe 2.0</CardTitle>
                  <CardDescription>
                    Follow these simple steps to analyze chemical compounds
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="mt-1 bg-bee-amber/20 p-2 rounded-full">
                        <FileText className="h-5 w-5 text-bee-amber" />
                      </div>
                      <div>
                        <h3 className="font-medium">Step 1: Prepare Your Files</h3>
                        <p className="text-muted-foreground">
                          First, you need to generate the input files in ".mol" files by ChemBioDraw Software or other possible ways.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="mt-1 bg-bee-amber/20 p-2 rounded-full">
                        <FileText className="h-5 w-5 text-bee-amber" />
                      </div>
                      <div>
                        <h3 className="font-medium">Step 2: Upload Your Files</h3>
                        <p className="text-muted-foreground">
                          Then, click "Choose File" and submit your input files.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="mt-1 bg-bee-amber/20 p-2 rounded-full">
                        <FileText className="h-5 w-5 text-bee-amber" />
                      </div>
                      <div>
                        <h3 className="font-medium">Step 3: Get Results</h3>
                        <p className="text-muted-foreground">
                          Finally, click "Upload and Classify" and obtain the prediction results.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="faq">
              <Card>
                <CardHeader>
                  <CardTitle>Frequently Asked Questions</CardTitle>
                  <CardDescription>
                    Common questions about our prediction service
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-medium flex items-center">
                      <HelpCircle className="h-4 w-4 mr-2 text-bee-amber" />
                      What file formats do you support?
                    </h3>
                    <p className="text-muted-foreground ml-6">
                      Currently, we only support .mol files, which are the standard file format for representing chemical structures.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium flex items-center">
                      <HelpCircle className="h-4 w-4 mr-2 text-bee-amber" />
                      How accurate are the predictions?
                    </h3>
                    <p className="text-muted-foreground ml-6">
                      Our model has been trained on extensive datasets and exhibits strong performance across key metrics. However, computational predictions should always be validated with laboratory testing.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium flex items-center">
                      <HelpCircle className="h-4 w-4 mr-2 text-bee-amber" />
                      Is my data secure?
                    </h3>
                    <p className="text-muted-foreground ml-6">
                      Yes, we prioritize data security. Your uploaded chemical structures are processed temporarily and are not permanently stored on our servers.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="troubleshooting">
              <Card>
                <CardHeader>
                  <CardTitle>Troubleshooting</CardTitle>
                  <CardDescription>
                    Common issues and their solutions
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-medium flex items-center">
                      <Info className="h-4 w-4 mr-2 text-bee-amber" />
                      File upload errors
                    </h3>
                    <p className="text-muted-foreground ml-6">
                      Make sure your file is in .mol format and doesn't exceed 5MB in size. Try using a different browser if issues persist.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium flex items-center">
                      <Info className="h-4 w-4 mr-2 text-bee-amber" />
                      Processing time is too long
                    </h3>
                    <p className="text-muted-foreground ml-6">
                      Complex molecular structures may take longer to analyze. If processing doesn't complete within 2 minutes, try refreshing and uploading again.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium flex items-center">
                      <Lightbulb className="h-4 w-4 mr-2 text-bee-amber" />
                      Tips for better results
                    </h3>
                    <p className="text-muted-foreground ml-6">
                      Ensure your .mol files contain clean, well-defined chemical structures. Remove any unnecessary annotations or elements that may interfere with analysis.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="text-center p-6 border rounded-md bg-bee-amber/10">
            <p className="text-sm">
              Need more help? Visit our <a href="/contact" className="text-bee-amber font-medium underline">Contact page</a> to get in touch with our support team.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Help;
