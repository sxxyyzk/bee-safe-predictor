
import React, { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Send, ExternalLink, AlertCircle } from "lucide-react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic form validation
    if (!name || !email || !message) {
      toast({
        title: "Missing information",
        description: "Please fill out all fields in the form.",
        variant: "destructive",
      });
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setName("");
      setEmail("");
      setMessage("");
      
      toast({
        title: "Message sent",
        description: "Thank you for your message. We'll get back to you soon.",
      });
    }, 1000);
  };

  return (
    <Layout>
      <div className="container py-8 md:py-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold tracking-tight mb-4">Contact Us</h1>
            <p className="text-muted-foreground">
              Get in touch with our team for support or inquiries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle>Send us a message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input 
                      id="name" 
                      value={name} 
                      onChange={(e) => setName(e.target.value)} 
                      placeholder="John Doe" 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      value={email} 
                      onChange={(e) => setEmail(e.target.value)} 
                      placeholder="john@example.com" 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      value={message} 
                      onChange={(e) => setMessage(e.target.value)} 
                      placeholder="Type your message here..." 
                      rows={4} 
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-bee-amber hover:bg-bee-gold text-black" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>Sending...</>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>
                  You can also reach us through these channels
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="h-5 w-5 text-bee-amber mt-0.5" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-muted-foreground">2311477644@qq.com</p>
                    <a 
                      href="mailto:2311477644@qq.com" 
                      className="text-bee-amber text-sm flex items-center mt-1 hover:underline"
                    >
                      Send an email
                      <ExternalLink className="ml-1 h-3 w-3" />
                    </a>
                  </div>
                </div>

                <div className="p-4 border rounded-md bg-amber-50">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="h-5 w-5 text-bee-amber mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-amber-800">
                      Our team typically responds within 24-48 hours during business days. For urgent inquiries, please mark your message as important.
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col items-start">
                <div className="text-sm text-muted-foreground">
                  <h3 className="font-medium mb-1">Hours of operation</h3>
                  <p>Monday - Friday: 9:00 AM - 5:00 PM (GMT+8)</p>
                  <p>Weekends: Closed</p>
                </div>
              </CardFooter>
            </Card>
          </div>

          <div className="text-center border-t pt-8">
            <h2 className="text-xl font-semibold mb-4">Thank you for your interest in BeeSafe 2.0</h2>
            <p className="text-muted-foreground">
              We're committed to helping researchers and developers build safer chemicals for our ecosystem.
              Your feedback helps us improve our prediction models and services.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
