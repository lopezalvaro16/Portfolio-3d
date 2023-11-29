import React, { useState, useEffect, Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "../components/Loader";
import Island from "../models/Island";
import Sky from "../models/Sky";
import { Bird } from "../models/Birds";
import Plane from "../models/Plane";
import HomeInfo from "../components/HomeInfo";
import sakura from "../assets/sakura.mp3";
import { soundoff, soundon } from "../assets/icons";

import Swal from "sweetalert2";

function Home() {
  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;

  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const [showInstructions, setShowInstructions] = useState(true);
  const showInstructionsHandler = () => {
    setShowInstructions(true);

    const showAlertTimeout = setTimeout(() => {
      Swal.fire({
        html: `
          <div style="font-size: 16px; text-align: left;">
            <p><strong>¡Bienvenido!</strong></p>
            <p>Para explorar la aplicación, utiliza las siguientes opciones:</p>
            <ul>
              <li><strong>Teclado:</strong> Utiliza las teclas de dirección (izquierda o derecha) para moverte.</li>
              <li><strong>Ratón:</strong> Haz clic y arrastra con el ratón para cambiar la perspectiva del mapa.</li>
            </ul>
          </div>
          <img src="https://img2.freepng.es/20180502/qve/kisspng-computer-keyboard-arrow-keys-computer-icons-page-u-5ae939f140e7c1.4426757415252341612659.jpg" alt="Teclado y Ratón" style="max-width: 100%; height: auto; margin-top: 10px;">
        `,
        position: "bottom-end",
        width: 400,
        padding: "0.5rem",
        confirmButtonColor: "#40c9ff",
      });
    }, 0);

    const closeAlertTimeout = setTimeout(() => {
      setShowInstructions(false);
      Swal.close();
    }, 35000);

    return () => {
      clearTimeout(showAlertTimeout);
      clearTimeout(closeAlertTimeout);
    };
  };
  useEffect(() => {
    const showAlertTimeout = setTimeout(() => {
      Swal.fire({
        html: `
          <div style="font-size: 16px; text-align: left;">
            <p><strong>¡Bienvenido!</strong></p>
            <p>Para explorar la aplicación, utiliza las siguientes opciones:</p>
            <ul>
              <li><strong>Teclado:</strong> Utiliza las teclas de dirección (izquierda o derecha) para moverte.</li>
              <li><strong>Ratón:</strong> Haz clic y arrastra con el ratón para cambiar la perspectiva del mapa.</li>
            </ul>
          </div>
          <img src="https://img2.freepng.es/20180502/qve/kisspng-computer-keyboard-arrow-keys-computer-icons-page-u-5ae939f140e7c1.4426757415252341612659.jpg" alt="Teclado y Ratón" style="max-width: 100%; height: auto; margin-top: 10px;">
        `,
        position: "bottom-end",
        width: 400,
        padding: "0.5rem",
        confirmButtonColor: "#40c9ff",
      });
    }, 1200);

    const closeAlertTimeout = setTimeout(() => {
      Swal.close();
    }, 35000);

    return () => {
      clearTimeout(showAlertTimeout);
      clearTimeout(closeAlertTimeout);
    };
  }, []);

  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    }

    return () => {
      audioRef.current.pause();
    };
  }, [isPlayingMusic]);

  const adjustIsIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43];
    let rotation = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }
    return [screenScale, screenPosition];
  };
  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }
    return [screenScale, screenPosition];
  };

  const [islandScale, islandPosition, islandRotation] =
    adjustIsIslandForScreenSize();
  const [planeScale, planePosition] = adjustPlaneForScreenSize();

  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>

      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.8} />
          <hemisphereLight
            skyColor="#b1e1ff"
            groundColor="#000000"
            intensity={1}
          />{" "}
          <Bird />
          <Sky isRotating={isRotating} />
          <Island
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
          <Plane
            isRotating={isRotating}
            scale={planeScale}
            position={planePosition}
            rotation={[0, 20, 0]}
          />
        </Suspense>
      </Canvas>

      <div className="absolute bottom-2 left-2">
        <img
          src={!isPlayingMusic ? soundoff : soundon}
          alt="jukebox"
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
          className="w-10 h-10 cursor-pointer object-contain"
        />
      </div>

      <div className="absolute top-2 right-2 hidden md:block">
        <button
          onClick={showInstructionsHandler}
          className="text-white bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none"
        >
          Instrucciones
        </button>
      </div>

      {/* Botón de instrucciones para dispositivos móviles */}
      <div className="absolute bottom-2 left-2 md:hidden">
        <button
          onClick={showInstructionsHandler}
          className="text-white bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none"
        >
          Instrucciones
        </button>
      </div>
    </section>
  );
}

export default Home;
