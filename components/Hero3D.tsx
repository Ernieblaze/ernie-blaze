"use client";

import { useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import type { Mesh } from "three";

function Orb() {
  const ref = useRef<Mesh>(null);
  const scrollRef = useRef(0);

  useEffect(() => {
    function handleScroll() {
      scrollRef.current = window.scrollY;
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.15;
    ref.current.rotation.x = 0.2 + scrollRef.current * 0.0006;
  });

  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[1.4, 1]} />
      <meshPhysicalMaterial
        color="#10b981"
        transmission={0.85}
        roughness={0.1}
        thickness={1.4}
        ior={1.3}
        clearcoat={1}
        clearcoatRoughness={0.1}
        envMapIntensity={0.6}
      />
    </mesh>
  );
}

export default function Hero3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 4.2], fov: 38 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.7} />
      <directionalLight position={[2, 2, 3]} intensity={1.4} />
      <directionalLight position={[-2, -1, -2]} intensity={0.4} color="#ff7a1a" />
      <Orb />
    </Canvas>
  );
}
