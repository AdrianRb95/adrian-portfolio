import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Mesh3DCanvas() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 7.5);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x030712, 1);
    container.appendChild(renderer.domElement);

    // Vertex & Fragment Shaders for the 3D fluid mesh
    const vertexShader = `
      uniform float uTime;
      uniform vec2 uMouse;
      uniform float uScroll;
      varying vec2 vUv;
      varying float vElevation;
      varying vec3 vNormal;

      // Classic 3D Perlin Noise
      vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
      vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}
      vec3 fade(vec3 t) {return t*t*t*(t*(t*6.0-15.0)+10.0);}

      float cnoise(vec3 P){
        vec3 Pi0 = floor(P);
        vec3 Pi1 = Pi0 + vec3(1.0);
        Pi0 = mod(Pi0, 289.0);
        Pi1 = mod(Pi1, 289.0);
        vec3 Pf0 = fract(P);
        vec3 Pf1 = Pf0 - vec3(1.0);
        vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
        vec4 iy = vec4(Pi0.yy, Pi1.yy);
        vec4 iz0 = Pi0.zzzz;
        vec4 iz1 = Pi1.zzzz;

        vec4 ixy = permute(permute(ix) + iy);
        vec4 ixy0 = permute(ixy + iz0);
        vec4 ixy1 = permute(ixy + iz1);

        vec4 gx0 = ixy0 / 7.0;
        vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;
        gx0 = fract(gx0);
        vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
        vec4 sz0 = step(gz0, vec4(0.0));
        gx0 -= sz0 * (step(0.0, gx0) - 0.5);
        gy0 -= sz0 * (step(0.0, gy0) - 0.5);

        vec4 gx1 = ixy1 / 7.0;
        vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;
        gx1 = fract(gx1);
        vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
        vec4 sz1 = step(gz1, vec4(0.0));
        gx1 -= sz1 * (step(0.0, gx1) - 0.5);
        gy1 -= sz1 * (step(0.0, gy1) - 0.5);

        vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
        vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
        vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
        vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
        vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
        vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
        vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
        vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

        vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
        g000 *= norm0.x;
        g010 *= norm0.y;
        g100 *= norm0.z;
        g110 *= norm0.w;
        vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
        g001 *= norm1.x;
        g011 *= norm1.y;
        g101 *= norm1.z;
        g111 *= norm1.w;

        float n000 = dot(g000, Pf0);
        float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
        float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
        float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
        float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
        float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
        float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
        float n111 = dot(g111, Pf1);

        vec3 fade_xyz = fade(Pf0);
        vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
        vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
        float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
        return 2.2 * n_xyz;
      }

      void main() {
        vUv = uv;
        vNormal = normal;
        vec3 pos = position;

        // Wave elevation combining multi-frequency perlin noise + scroll influence
        float speed = 0.12 + uScroll * 0.15;
        float noiseA = cnoise(vec3(pos.x * 0.35 + uTime * speed, pos.y * 0.35 + uTime * 0.08, uTime * 0.05 + uScroll * 0.5));
        float noiseB = cnoise(vec3(pos.x * 0.7 - uTime * 0.15, pos.y * 0.7 + uTime * 0.1, uTime * 0.1)) * 0.5;
        
        // Mouse interaction wave
        float distToMouse = distance(pos.xy, uMouse * 4.2);
        float mouseWave = sin(distToMouse * 2.2 - uTime * 3.2) * exp(-distToMouse * 0.55) * 0.65;

        float elevation = noiseA + noiseB + mouseWave;
        pos.z += elevation * 0.9;

        vElevation = elevation;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
      }
    `;

    const fragmentShader = `
      uniform float uTime;
      uniform float uScroll;
      varying vec2 vUv;
      varying float vElevation;
      varying vec3 vNormal;

      void main() {
        // Deep obsidian abyss -> indigo -> vivid electric violet -> cyan sheen
        vec3 colorDark = vec3(0.012, 0.024, 0.06);     // #030610
        vec3 colorMid = vec3(0.09, 0.12, 0.35);       // #171f59
        vec3 colorVibrant = vec3(0.38, 0.22, 0.85);   // #6138d9
        vec3 colorHighlight = vec3(0.12, 0.78, 0.92); // #1fc7eb
        vec3 colorWarm = vec3(0.85, 0.32, 0.72);      // iridescent magenta

        float normalizedElevation = smoothstep(-1.2, 1.4, vElevation);
        
        vec3 finalColor = mix(colorDark, colorMid, smoothstep(0.0, 0.5, normalizedElevation));
        finalColor = mix(finalColor, colorVibrant, smoothstep(0.4, 0.8, normalizedElevation));
        finalColor = mix(finalColor, colorHighlight, smoothstep(0.75, 1.0, normalizedElevation));
        
        // Subtle iridescent chromatic shift on crests
        float rim = pow(1.0 - abs(dot(vNormal, vec3(0.0, 0.0, 1.0))), 2.5);
        finalColor += colorWarm * rim * 0.38;

        // Subtle wireframe grid lines for technical architecture depth
        vec2 grid = abs(fract(vUv * 36.0 - 0.5) - 0.5) / fwidth(vUv * 36.0);
        float line = min(grid.x, grid.y);
        float gridAlpha = 1.0 - min(line, 1.0);
        finalColor += vec3(0.25, 0.35, 0.7) * gridAlpha * 0.12;

        gl_FragColor = vec4(finalColor, 0.95);
      }
    `;

    const uniforms = {
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0, 0) },
      uScroll: { value: 0 },
    };

    const geometry = new THREE.PlaneGeometry(17, 12, 128, 128);
    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,
      wireframe: false,
      transparent: true,
      side: THREE.DoubleSide,
    });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.rotation.x = -Math.PI * 0.18;
    mesh.position.y = -0.5;
    scene.add(mesh);

    // Subtle star dust particles
    const particleCount = 180;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 15;
      positions[i + 1] = (Math.random() - 0.5) * 11;
      positions[i + 2] = (Math.random() - 0.5) * 6;
    }
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMaterial = new THREE.PointsMaterial({
      color: 0xa5b4fc,
      size: 0.035,
      transparent: true,
      opacity: 0.45,
    });
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // Mouse Tracking with smooth interpolation
    let mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const handleMouseMove = (e) => {
      mouse.targetX = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.targetY = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Scroll Tracking with inertia
    let scroll = { current: 0, target: 0 };
    const handleScroll = () => {
      scroll.target = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Handle Window Resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();
      uniforms.uTime.value = elapsedTime;

      // Inertia smoothing for mouse
      mouse.x += (mouse.targetX - mouse.x) * 0.045;
      mouse.y += (mouse.targetY - mouse.y) * 0.045;
      uniforms.uMouse.value.set(mouse.x, mouse.y);

      // Inertia smoothing for scroll
      scroll.current += (scroll.target - scroll.current) * 0.045;
      const docHeight = Math.max(document.body.scrollHeight - window.innerHeight, 1);
      const scrollRatio = Math.min(Math.max(scroll.current / docHeight, 0), 1);
      uniforms.uScroll.value = scrollRatio;

      // Fluid parallax shift based on scroll
      mesh.position.y = -0.5 + scrollRatio * 1.6;
      mesh.rotation.x = -Math.PI * 0.18 - scrollRatio * 0.2;
      camera.position.z = 7.5 - scrollRatio * 1.2;

      // Subtle scene tilt following cursor
      scene.rotation.y = mouse.x * 0.07;
      scene.rotation.x = -mouse.y * 0.04;

      particles.rotation.y = elapsedTime * 0.015;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      style={{ opacity: 0.92 }}
    />
  );
}
