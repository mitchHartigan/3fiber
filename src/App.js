import logo from "./logo.svg";
import "./App.css";
import { Canvas } from "react-three-fiber";
import { OrbitControls } from "@react-three/drei";

const Box = () => {
  return (
    <mesh>
      <boxBufferGeometry attach="geometry" />
      <meshLambertMaterial attach="material" color="hotpink" />
    </mesh>
  );
};

function App() {
  return (
    <Canvas>
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <Box />
    </Canvas>
  );
}

export default App;
