import React, { useState, useEffect, useRef } from "react";
import Start from "./components/Start";
import Location from "./components/Location";
import "./App.css";
import {AnimatePresence, motion} from "framer-motion"
import pauseIcon from "./assets/pauseIcon.svg"
import playIcon from "./assets/playIcon.svg"
import Dresscode from "./components/Dresscode";
import Gifts from "./components/Gifts";
import gifFondo from "./assets/video.gif"
import videoFondo from "./assets/video.mp4"
import cancionFondo from "./assets/song.mp3"

function App() {
  const variants ={
    offscreen: {
      opacity: 0,
      transition: {
        duration: 0.5
      }
    },
    onscreen: {
      opacity: 1,
      transition: {
        duration: 4
      }
    }
  } 

  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [firstClick, setFirstClick] = useState(true);
  const [currentTime, setCurrentTime] = useState(32);
  const [isIOS, setIsIOS] = useState(false);

  const playPauseToggle = () => {
    if (audioRef.current.paused) {
      audioRef.current.currentTime = currentTime;
      audioRef.current.play();
      setFirstClick(false);
    } else if(firstClick !== true) {
      setCurrentTime(audioRef.current.currentTime);
      audioRef.current.pause();
    }
    setIsPlaying(!isPlaying);
  };

  const handleAudioEnd = () => {
    setCurrentTime(32);
    audioRef.current.currentTime = currentTime;
    audioRef.current.play();
  };

  useEffect(() => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    setIsIOS(/iphone|ipad|ipod/.test(userAgent));
    // Agrega un event listener para el clic en el documento
    const clickListener = () => {
      playPauseToggle();
      // Elimina el event listener después de la primera interacción
      document.removeEventListener("click", clickListener);
      setFirstClick("inline");
    };
    document.addEventListener("click", clickListener);
    audioRef.current.addEventListener("ended", handleAudioEnd);
    // Limpia el event listener al desmontar el componente
    return () => {
      document.removeEventListener("click", clickListener);
      audioRef.current.removeEventListener("ended", handleAudioEnd);
    };
  }, []);


  return (
    <div>
     <div className="app-container">
      <button
        className={`play-pause-button ${isPlaying ? "pause" : "play"}`}
        onClick={playPauseToggle}
      >
         {isPlaying ? (
          <img src={pauseIcon} alt="Pause Icon" />
        ) : (
          <img src={playIcon} alt="Pause Icon" />
        )}
      </button>
      <audio ref={audioRef} style={{ display: "none" }}>
        <source src={cancionFondo} type="audio/mp3"  />
        Tu navegador no soporta el elemento de audio.
      </audio>
    </div>
    {!isIOS ? (
      <div
        className="backgroundVideo"
        dangerouslySetInnerHTML={{
          __html: `<video autoplay loop muted playsinline id="vid">
            <source src=${videoFondo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>`,
        }}
       />  
    ) : (
      <div className="backgroundVideo">
        <img src={gifFondo} alt="background"/>
      </div>
    )}
    
      <div className="overlay"></div>
      <AnimatePresence>
        <motion.div className="main"
          variants={variants}
          initial="offscreen"
          exit={{ opacity: 0 }}
          whileInView="onscreen"
          viewport={{ once: false}}
        >
          <Start />
        </motion.div>
        </AnimatePresence>
        
        <AnimatePresence>
        <motion.div 
          variants={variants}
          initial="offscreen"
          exit={{ opacity: 0 }}
          whileInView="onscreen"
          viewport={{ once: false}}
        >
          <Location />
        </motion.div>
      </AnimatePresence>
      
      <AnimatePresence>
        <motion.div 
          variants={variants}
          initial="offscreen"
          exit={{ opacity: 0 }}
          whileInView="onscreen"
          viewport={{ once: false}}
        >
          <Dresscode />
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        <motion.div 
          variants={variants}
          initial="offscreen"
          exit={{ opacity: 0 }}
          whileInView="onscreen"
          viewport={{ once: false}}
        >
          <Gifts/>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default App;
