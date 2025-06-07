import React from "react";
import Card from "@/components/common/Card"

const HomePage = () => {
  return (
    <div className="p-4">
      <h1 className="text-center text-2xl mb-4 font-bold">Welcome Home Meriye!</h1>
      <Card title="Card One" content="This is the content of the first card" />
      <Card title="Card Two" content="This is the content of the second card" />
      <Card title="Card Three" content="This is the content of the third card" />
    </div>
  );
};

export default HomePage;
