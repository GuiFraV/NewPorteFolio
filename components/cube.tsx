'use client';

import { useRef, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useScroll } from 'framer-motion';
import * as THREE from 'three';
import { gsap } from 'gsap';

export function Cube() {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.MeshStandardMaterial>(null);
  const { scrollYProgress } = useScroll();
  const { viewport } = useThree();
  
  useEffect(() => {
    if (!meshRef.current || !materialRef.current) return;

    // Initial animation
    gsap.from(meshRef.current.rotation, {
      duration: 2,
      x: Math.PI * 2,
      y: Math.PI * 2,
      ease: "power3.out"
    });

    gsap.from(meshRef.current.position, {
      duration: 2,
      y: -viewport.height,
      ease: "power3.out"
    });

    // Scroll animation
    return scrollYProgress.on('change', (latest) => {
      if (meshRef.current) {
        // Horizontal movement based on scroll
        gsap.to(meshRef.current.position, {
          duration: 0.8,
          x: (latest - 0.5) * 3,
          ease: "power2.out"
        });

        // Rotation based on scroll
        gsap.to(meshRef.current.rotation, {
          duration: 0.8,
          y: latest * Math.PI * 2,
          ease: "power2.out"
        });

        // Color transition based on scroll
        if (materialRef.current) {
          gsap.to(materialRef.current.color, {
            duration: 0.8,
            r: 1 - latest * 0.5,
            g: 0.5 + latest * 0.2,
            b: 1,
            ease: "power2.out"
          });

          gsap.to(materialRef.current, {
            duration: 0.8,
            metalness: 0.8 - latest * 0.3,
            roughness: 0.2 + latest * 0.3,
            ease: "power2.out"
          });
        }
      }
    });
  }, [scrollYProgress, viewport.height]);

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Continuous gentle rotation
      meshRef.current.rotation.x += delta * 0.2;
      
      // Floating animation
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
      
      // Scale pulse effect
      const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.05;
      meshRef.current.scale.set(scale, scale, scale);

      // Update material properties based on mouse position
      if (materialRef.current) {
        const mouseX = (state.mouse.x + 1) / 2; // Normalize to 0-1
        const mouseY = (state.mouse.y + 1) / 2;
        
        materialRef.current.emissiveIntensity = mouseX * 0.5;
        materialRef.current.metalness = 0.8 - mouseY * 0.3;
      }
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      <meshStandardMaterial
        ref={materialRef}
        color="#ffffff"
        metalness={0.8}
        roughness={0.2}
        envMapIntensity={1}
        emissive="#330066"
        emissiveIntensity={0.2}
      />
    </mesh>
  );
}