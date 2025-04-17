
import React from "react";
import Navigation from "./Navigation";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-1">{children}</main>
      <footer className="py-6 border-t">
        <div className="container">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} BeeSafe 2.0. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
