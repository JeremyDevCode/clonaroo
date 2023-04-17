import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Record } from "./Record";
import { Recording } from "./Recording";
import { Recorded } from "./Recorded";

export const MicContainer = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: fit-content;
  border-radius: 1.5rem;
  padding: 1.25rem;
  background: #00ff75;
  box-shadow: 0 4px 0 #00ff7580;
  &:hover {
    transform: translateY(4px);
    box-shadow: none;
  }
  transition: all 100ms ease-in-out;
`;

export const StopContainer = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: fit-content;
  border-radius: 1.5rem;
  padding: 1.25rem;
  background: #ed2939;
  box-shadow: 0 4px 0 #ed293980;
  &:hover {
    transform: translateY(4px);
    box-shadow: none;
  }
  transition: all 100ms ease-in-out;
`;

const mimeType = "audio/webm";

function Main() {
  const [voice, setVoice] = useState<string>("");
  const [audio, setAudio] = useState<string>("");
  const [audioChunks, setAudioChunks] = useState<Blob[]>([]);
  const [permission, setPermission] = useState<boolean>(false);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const mediaRecorder = useRef<MediaRecorder | null>(null);

  const getMicrophonePermission = async (): Promise<void> => {
    if ("MediaRecorder" in window) {
      try {
        const streamData = await navigator.mediaDevices.getUserMedia({
          audio: true,
          video: false,
        });
        setPermission(true);
        setStream(streamData);
      } catch (err) {
        alert(err);
      }
    } else {
      alert("The MediaRecorder API is not supported in your browser.");
    }
  };

  useEffect(() => {
    getMicrophonePermission();
  }, []);

  const startRecording = async (): Promise<void> => {
    setVoice("recording");
    if (!stream) return;
    //create new Media recorder instance using the stream
    const media = new MediaRecorder(stream, { mimeType });
    //set the MediaRecorder instance to the mediaRecorder ref
    mediaRecorder.current = media;
    //invokes the start method to start the recording process
    mediaRecorder.current.start();
    let localAudioChunks: Blob[] = [];
    mediaRecorder.current.ondataavailable = (event) => {
      if (typeof event.data === "undefined") return;
      if (event.data.size === 0) return;
      localAudioChunks.push(event.data);
    };
    setAudioChunks(localAudioChunks);
  };

  const stopRecording = (): void => {
    setVoice("recorded");
    if (!mediaRecorder.current) return;
    //stops the recording instance
    mediaRecorder.current.stop();
    mediaRecorder.current.onstop = () => {
      //creates a blob file from the audiochunks data
      const audioBlob = new Blob(audioChunks, { type: mimeType });
      //creates a playable URL from the blob file.
      const audioUrl = URL.createObjectURL(audioBlob);
      setAudio(audioUrl);
      setAudioChunks([]);
    };
  };

  return (
    <>
      <Record voice={voice} onClick={() => startRecording()} />
      <Recording voice={voice} onClick={() => stopRecording()} />
      <Recorded voice={voice} onClick={() => setVoice("record")} />
      {audio ? (
        <div className="audio-container">
          <audio src={audio} controls></audio>
          <a download href={audio}>
            Download Recording
          </a>
        </div>
      ) : null}
    </>
  );
}

export { Main };
