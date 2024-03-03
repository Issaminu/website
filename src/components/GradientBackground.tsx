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
        top: 0,
        zIndex: -1,
        visibility: visibility,
        pointerEvents: "none",
      }}
    >
      <ShaderGradient
        control="query"
        urlString="https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=0.6&cAzimuthAngle=0&cDistance=2.8&cPolarAngle=80&cameraZoom=9.1&color1=%23145580&color2=%230065ca&color3=%231e1e21&destination=onCanvas&embedMode=off&envPreset=dawn&format=gif&fov=45&frameRate=10&gizmoHelper=hide&grain=off&lightType=3d&pixelDensity=0.2&positionX=0&positionY=0&positionZ=0&range=disabled&rangeEnd=40&rangeStart=0&reflection=0&rotationX=0&rotationY=0&rotationZ=0&shader=defaults&toggleAxis=false&type=waterPlane&uAmplitude=0&uDensity=1.2&uFrequency=0&uSpeed=0.1&uStrength=1&uTime=7.9&wireframe=false&zoomOut=false"
      />
    </ShaderGradientCanvas>
  );
};

export default GradientBackground;
