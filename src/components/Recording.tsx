import React, { useState } from "react";
import { MicContainer, StopContainer } from "./Main";
import { PauseIcon } from "../assets/icons/PauseIcon";
import { PlayIcon } from "../assets/icons/PlayIcon";
import { StopIcon } from "../assets/icons/StopIcon";

function Recording({ voice, onClick }: RecordProps) {
  const [recording, setRecording] = useState(true);
  return (
    <>
      {voice === "recording" && (
        <section className="relative flex items-center justify-center gap-4 text-[#0C0D0D]">
          <MicContainer
            onClick={() => setRecording((prevState: boolean) => !prevState)}
          >
            <div className="flex items-center">
              {recording && <PauseIcon />}
              {!recording && <PlayIcon />}
            </div>
          </MicContainer>
          <div>
            <img
              className="w-20 h-20 invert"
              src="https://cdn-icons-png.flaticon.com/512/1792/1792737.png"
            />
          </div>
          <StopContainer onClick={onClick}>
            <div className="flex items-center">
              <StopIcon />
            </div>
          </StopContainer>
          <p className="absolute -bottom-12 text-[#F3F3F3]">00:08</p>
        </section>
      )}
    </>
  );
}

export { Recording };
