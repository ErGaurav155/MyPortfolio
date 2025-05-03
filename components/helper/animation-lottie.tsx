"use client";
import Lottie from "lottie-react";

interface AnimationLottieProps {
  animationPath: object;
  width?: string | number;
}

const AnimationLottie = ({ animationPath, width }: AnimationLottieProps) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationPath,
    style: {
      width: width,
    },
  };

  return <Lottie {...defaultOptions} />;
};

export default AnimationLottie;
