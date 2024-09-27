import React from "react";
import { ShaderGradientCanvas, ShaderGradient } from "shadergradient";
import { useEffect } from "react";

const GradientBackground = () => {
  const [visibility, setVisibility] = React.useState("hidden");

  // The background flashes white on page load, so we hide it until it's loaded
  useEffect(() => {
    setTimeout(() => {
      setVisibility("visible");
    }, 100);
  });

  return (
    <ShaderGradientCanvas
      style={{
        position: "fixed",
        height: "110vh",
        top: 0,
        zIndex: -1,
        visibility: visibility,
        pointerEvents: "none",
      }}
    >
      <ShaderGradient
        control="props"
        animate="on"
        brightness={0.6}
        cAzimuthAngle={0}
        cDistance={2.8}
        cPolarAngle={80}
        cameraZoom={9.1}
        color1="#145580"
        color2="#0065ca"
        color3="#1e1e21"
        envPreset="dawn"
        lightType="3d"
        grain="off"
        positionX={0}
        positionY={0}
        positionZ={0}
        reflection={0}
        rotationX={0}
        rotationY={0}
        rotationZ={0}
        type="waterPlane"
        uAmplitude={0}
        uDensity={1.2}
        uFrequency={0}
        uSpeed={0.1}
        uStrength={1}
        uTime={7.9}
        wireframe={false}
        toggleAxis={false}
        zoomOut={false}
      />
    </ShaderGradientCanvas>
  );
};

export default GradientBackground;
