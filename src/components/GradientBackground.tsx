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
        type="waterPlane"
        animate="on"
        uTime={7.9}
        uSpeed={0.1}
        uStrength={1}
        uDensity={1.2}
        color1="#145580"
        color2="#0065ca"
        color3="#1e1e21"
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
      />
    </ShaderGradientCanvas>
  );
};

export default GradientBackground;
