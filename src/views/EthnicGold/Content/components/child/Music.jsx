import React, { useState, useEffect } from 'react';
import { AiFillPauseCircle, AiFillPlayCircle } from 'react-icons/ai';

function Music() {
  const [state, setstate] = useState(false);
  function pauseMusic() {
    document.getElementById('myAudio').pause();
    setstate(!state);
  }
  function playMusic() {
    document.getElementById('myAudio').play();
    setstate(!state);
  }
  useEffect(() => {
    document.getElementById('myAudio').volume = 0.3;
  }, []);
  return (
    <div>
      <audio id='myAudio' autoPlay>
        <source src='assets/sound/sample_music.mp3' />
      </audio>
      {!state ? (
        <button onClick={pauseMusic} className='btn btn-music'>
          <AiFillPauseCircle size={30} color='grey' />
        </button>
      ) : (
        <button onClick={playMusic} className='btn btn-music'>
          <AiFillPlayCircle size={30} color='grey' />
        </button>
      )}
    </div>
  );
}

export default Music;
