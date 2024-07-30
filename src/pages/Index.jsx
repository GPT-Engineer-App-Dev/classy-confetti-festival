import { useState } from 'react';
import Confetti from 'react-dom-confetti';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

const confettiConfig = {
  angle: 90,
  spread: 360,
  startVelocity: 40,
  elementCount: 70,
  dragFriction: 0.12,
  duration: 3000,
  stagger: 3,
  width: "10px",
  height: "10px",
  colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
};

const Index = () => {
  const [isConfettiActive, setIsConfettiActive] = useState(false);

  const triggerConfetti = () => {
    setIsConfettiActive(true);
    setTimeout(() => setIsConfettiActive(false), 100);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-purple-100 to-indigo-200">
      <Card className="w-96 shadow-xl">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center text-purple-800">Classy Confetti</CardTitle>
          <CardDescription className="text-center text-gray-600">Celebrate in style!</CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center">
          <div className="relative">
            <Button
              onClick={triggerConfetti}
              className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full transition duration-300 ease-in-out transform hover:scale-105"
            >
              <Sparkles className="mr-2 h-4 w-4" />
              Celebrate!
            </Button>
            <Confetti active={isConfettiActive} config={confettiConfig} className="absolute top-0 left-1/2" />
          </div>
        </CardContent>
        <CardFooter className="text-center text-sm text-gray-500">
          Click the button to unleash the magic!
        </CardFooter>
      </Card>
    </div>
  );
};

export default Index;
