import React, { useCallback, useState } from "react";

function Recorder() {
  const [recorder, setRecorder] = useState(null);
  const [chunks, setChunks] = useState([]);
  const [audioUrl, setAudioUrl] = useState(null);

  const handleRecordStart = useCallback(() => {
    if (!recorder) return;
    console.log("start");
    recorder.start();
  }, [recorder]);

  const handleRecordStop = useCallback(() => {
    if (!recorder) return;
    console.log("stop");
    recorder.stop();
  }, [recorder]);

  const handleDataAvailable = useCallback((e) => {
    setChunks((prev) => [...prev, e.data]);
  }, []);

  const handleDataStop = useCallback(() => {
    const blob = new Blob(chunks, { type: "audio/ogg; codecs=opus" });
    setAudioUrl(URL.createObjectURL(blob));
  }, [chunks]);

  React.useEffect(() => {
    navigator.mediaDevices.getUserMedia({ audio: true }, (stream) => {
      const grap = new MediaRecorder(stream);
      setRecorder(grap);
    });
  }, []);

  React.useEffect(() => {
    if (!recorder) return;
    recorder.addEventListener("dataavailable", handleDataAvailable);
    recorder.addEventListener("stop", handleDataStop);
    return () => {
      recorder.removeEventListener("dataavailable", handleDataAvailable);
      recorder.removeEventListener("stop", handleDataStop);
    };
  }, [recorder]);

  return (
    <div>
      <button onClick={handleRecordStart}>Record</button>
      {audioUrl && <audio src={audioUrl} controls />}
      <button onClick={handleRecordStop}>Stop</button>
    </div>
  );
}

export default Recorder;
