import React from "react";
import Button from "@/components/common/Button";
import Header from "@/components/layout/Header"

const AboutPage = () => {
  return (
    <div>
      <Header />
      <main className="p-4 space-y-4">
        <h1 className="text-2xl  font-bold mb-4">Welcome to the About Page!</h1>
        <Button label="Small Button" size="small" shape="rounded-sm" />
        <Button label="Medium Button" size="medium" shape="rounded-md" />
        <Button label="Large Button" size="large" shape="rounded-full" />
      </main>
    </div>
  );
};

export default AboutPage;
