import React, { useState } from "react";
import { MicContainer, StopContainer } from "./Main";
import { ReloadIcon } from "../assets/icons/ReloadIcon";
import { PauseIcon } from "../assets/icons/PauseIcon";
import { PlayIcon } from "../assets/icons/PlayIcon";
import { CircleIcon } from "../assets/icons/CircleIcon";

function Recorded({ voice, onClick }: RecordProps) {
  const [recording, setRecording] = useState(true);
  return (
    <>
      {voice === "recorded" && (
        <section className="flex flex-col gap-5">
          <section className="relative flex items-center justify-center gap-4 text-[#0C0D0D]">
            <StopContainer onClick={onClick}>
              <ReloadIcon />
            </StopContainer>
            <MicContainer
              onClick={() => setRecording((prevState: boolean) => !prevState)}
            >
              <div className="flex items-center">
                {recording && <PauseIcon />}
                {!recording && <PlayIcon />}
              </div>
            </MicContainer>
            <div className="relative w-48 h-1 bg-[#FFFFFF11]">
              <p className="absolute left-0 -bottom-10 text-[#F3F3F3]">00:00</p>
              <p className="absolute right-0 -bottom-10 text-[#F3F3F3]">
                00:08
              </p>
              <div className="relative flex items-center bg-[#DDDDDD] w-10 h-full">
                <CircleIcon className="absolute -right-2 fill-[#F3F3F3]" />
              </div>
            </div>
          </section>
          <article className="text-[#F3F3f3] bg-[#FFFFFF11] flex gap-5 p-5">
            <h2>Share</h2>
            <p>https://clonaroo</p>
          </article>
        </section>
      )}
    </>
  );
}

export { Recorded };
