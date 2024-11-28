import { ShaderGradient, ShaderGradientCanvas } from "@shadergradient/react";

const GradientBackground = () => {
  return (
    <ShaderGradientCanvas
      pointerEvents="none"
      style={{
        position: "fixed",
        height: "110vh",
        top: 0,
        zIndex: -1,
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
