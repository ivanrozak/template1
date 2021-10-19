import React from 'react';
import useSound from 'use-sound';

function Music() {
  const [play, { stop, pause }] = useSound('assets/sound/sample_music.mp3', {
    volume: 0.5,
  });
  return (
    <div>
      <h1>Music here</h1>
      <button onClick={play}>Play</button>
      <button onClick={() => stop()}>Stop</button>
      <button onClick={() => pause()}>pause</button>
    </div>
  );
}

export default Music;
