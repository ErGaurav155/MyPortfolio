import Lottie from "lottie-react";
interface AnimationLottieProps {
  animationPath: object; // or `any`, or a more specific Lottie type if available
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

  return <Lottie {...defaultOptions} />;
};

export default AnimationLottie;
