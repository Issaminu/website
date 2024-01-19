import React from "react";
import { ShaderGradientCanvas, ShaderGradient } from "shadergradient";
import { useEffect } from "react";

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
      style={{
        position: "absolute",
        top: 0,
        visibility: visibility,
        zIndex: -1,
        pointerEvents: "none",
      }}
    >
      <ShaderGradient
        control="query"
        urlString="https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=0.6&cAzimuthAngle=0&cDistance=2.8&cPolarAngle=80&cameraZoom=9.1&color1=%23145580&color2=%230065ca&color3=%231e1e21&destination=onCanvas&embedMode=off&envPreset=dawn&format=gif&fov=45&frameRate=10&gizmoHelper=hide&grain=off&lightType=3d&pixelDensity=0.2&positionX=0&positionY=0&positionZ=0&range=disabled&rangeEnd=40&rangeStart=0&reflection=0&rotationX=0&rotationY=0&rotationZ=0&shader=defaults&toggleAxis=false&type=waterPlane&uAmplitude=0&uDensity=1.2&uFrequency=0&uSpeed=0.3&uStrength=1&uTime=7.9&wireframe=false&zoomOut=false"
      />
    </ShaderGradientCanvas>
  );
};

export default GradientBackground;
