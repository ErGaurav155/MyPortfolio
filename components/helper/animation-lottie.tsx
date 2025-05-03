"use client";
import Lottie from "lottie-react";
import { Suspense } from "react";

interface AnimationLottieProps {
  animationPath: object;
}

const AnimationLottie = ({ animationPath }: AnimationLottieProps) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationPath,
    style: {
      width: "95%",
    },
  };

  return (
    <Suspense
      fallback={
        <div className="w-full h-full flex items-center justify-center">
          Loading...
        </div>
      }
    >
      <Lottie {...defaultOptions} />
    </Suspense>
  );
};

export default AnimationLottie;
