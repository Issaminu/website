import React from "react";
import { ShaderGradientCanvas, ShaderGradient } from "shadergradient";
import { useEffect } from "react";
import * as reactSpring from "@react-spring/three";
import * as drei from "@react-three/drei";
import * as fiber from "@react-three/fiber";

const GradientBackground = () => {
  const [visibility, setVisibility] = React.useState("hidden");

  // The start animation for the background is bad, so we delay showing the background by 400ms. Not sure if there's a way to disable that startup animation.
  useEffect(() => {
    setTimeout(() => {
      setVisibility("visible");
    }, 100);
  });

  return (
    <ShaderGradientCanvas
      importedFiber={{ ...fiber, ...drei, ...reactSpring }}
      style={{
        position: "absolute",
        top: 0,
        zIndex: -1,
        pointerEvents: "none",
      }}
    >
      <ShaderGradient
        type="waterPlane"
        animate="on"
        uTime={7.9}
        uSpeed={0.3}
        uStrength={1}
        uDensity={1.2}
        uFrequency={0}
        uAmplitude={0}
        positionX={0}
        positionY={0}
        positionZ={0}
        rotationX={0}
        rotationY={0}
        rotationZ={0}
        color1="#145580"
        color2="#0065ca"
        color3="#1e1e21"
        reflection={0}
        wireframe={false}
        shader="defaults"
        cAzimuthAngle={0}
        cPolarAngle={80}
        cDistance={2.8}
        cameraZoom={9.1}
        lightType="3d"
        brightness={0.6}
        envPreset="dawn"
        grain="off"
        zoomOut={false}
        toggleAxis={false}
        control="query"
      />
    </ShaderGradientCanvas>
  );
};

export default GradientBackground;
