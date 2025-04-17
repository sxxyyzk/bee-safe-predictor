
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { HelpCircle, Home, Mail, FlaskConical } from "lucide-react";

const Navigation = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-bee-amber">
              <span className="text-bee-black text-sm font-bold">B</span>
            </div>
            <span className="font-bold text-xl">BeeSafe 2.0</span>
          </Link>
        </div>
        <nav className="flex-1 flex items-center justify-end space-x-1 md:space-x-4">
          <Button variant="ghost" asChild>
            <Link to="/" className="flex items-center space-x-1">
              <Home className="h-4 w-4" />
              <span>Home</span>
            </Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link to="/prediction" className="flex items-center space-x-1">
              <FlaskConical className="h-4 w-4" />
              <span>Prediction</span>
            </Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link to="/help" className="flex items-center space-x-1">
              <HelpCircle className="h-4 w-4" />
              <span>Help</span>
            </Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link to="/contact" className="flex items-center space-x-1">
              <Mail className="h-4 w-4" />
              <span>Contact</span>
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
