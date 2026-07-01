"use client";

import { useRef, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { useFrame } from "@react-three/fiber";
import { Line } from "@react-three/drei";
import * as THREE from "three";

const nodes = [
  "ISO27001", "AWS", "OCI", "SOC", "Cloud",
  "Risk", "Audit", "EDR", "MITRE", "Nessus",
  "OpenVAS", "Wazuh", "IAM", "SIEM", "DLP",
];

function Network() {
  const groupRef = useRef<THREE.Group>(null);

  const positions = useMemo(() => {
    const pos: [number, number, number][] = [];
    for (let i = 0; i < nodes.length; i++) {
      const angle = (i / nodes.length) * Math.PI * 2;
      const radius = 3 + Math.random() * 1.5;
      pos.push([
        Math.cos(angle) * radius,
        (Math.random() - 0.5) * 3,
        Math.sin(angle) * radius,
      ]);
    }
    return pos;
  }, []);

  const connections = useMemo(() => {
    const conns: [number, number][] = [];
    for (let i = 0; i < nodes.length; i++) {
      const count = 2 + Math.floor(Math.random() * 3);
      for (let j = 0; j < count; j++) {
        const target = Math.floor(Math.random() * nodes.length);
        if (target !== i) conns.push([i, target]);
      }
    }
    return conns;
  }, []);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.15;
      groupRef.current.rotation.x = Math.sin(Date.now() * 0.0003) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {connections.map(([from, to], i) => {
        const start = positions[from];
        const end = positions[to];

        return (
          <Line
            key={i}
            points={[start, end]}
            color="#00F5FF"
            transparent
            opacity={0.08 + Math.random() * 0.1}
            lineWidth={1}
          />
        );
      })}

      {positions.map((pos, i) => (
        <group key={i} position={pos}>
          <mesh>
            <sphereGeometry args={[0.12, 12, 12]} />
            <meshBasicMaterial color="#00F5FF" />
          </mesh>
          <mesh>
            <sphereGeometry args={[0.2, 12, 12]} />
            <meshBasicMaterial color="#00F5FF" transparent opacity={0.2} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

export default function NeuralNetwork() {
  return (
    <section id="neural" className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-4 text-center text-3xl font-bold tracking-wider md:text-4xl">
          <span className="text-gradient">SKILLS NETWORK</span>
          <div className="mx-auto mt-2 h-[1px] w-20 bg-[#00F5FF]/50" />
        </h2>
        <p className="mb-8 text-center text-sm text-[#94A3B8]">
          3D Neural Network Visualization
        </p>
        <div className="h-[400px] w-full rounded-2xl border border-[#00F5FF]/10 bg-[#0F172A]/30 backdrop-blur-sm">
          <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
            <Network />
          </Canvas>
        </div>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {nodes.map((node) => (
            <span
              key={node}
              className="rounded-full border border-[#00F5FF]/15 px-3 py-1 text-xs text-[#00F5FF] transition-colors hover:border-[#00F5FF]/40"
            >
              {node}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
