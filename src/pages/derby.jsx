import Card from "@/components/card";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import React from "react";

const Derby = () => {
  return (
    <div className="bg-blue-800 h-full">
      <div>

     <Navbar/>
      </div>
      <div className="flex justify-center items-center mt-3">

      <Card/>
      </div>
      <Footer/>
    </div>
  );
};

export default Derby;
