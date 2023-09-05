import React, { useState } from "react";
import { AiOutlineFieldTime } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { GiMicrophone } from "react-icons/gi";
import { GrLanguage } from "react-icons/gr";

const Lyrics = ({ song }: any) => {
  const [isLyricsNepali, setIsLyricsNepali] = useState(true);
  const { lyrics } = song;
  const toggleSongLanguage = () => {
    setIsLyricsNepali(!isLyricsNepali);
  };

  return (
    <div className=" md:w-3/4 bg-purple-50 dark:bg-dark flex flex-col px-5 pt-5">
      <div className=" flex flex-wrap w-full justify-evenly md:justify-start gap-2 md:gap-16">
        <div className="flex  items-center gap-2">
          <BsInfoCircle />
          <p>{song.track}</p>
        </div>
        <div className="flex items-center gap-2">
          <GiMicrophone />
          <p>Bipul Chettri</p>
        </div>
        <div className="flex items-center gap-2">
          <AiOutlineFieldTime size={20} />
          <p>Duration: 3:00 min</p>
        </div>
        <div className="flex items-center gap-2">
          <GrLanguage />
          <button onClick={toggleSongLanguage}>
            Language:{" "}
            <span className="underline text-blue-500">
              {isLyricsNepali ? "ENG" : "NEP"}
            </span>
          </button>
        </div>
      </div>
      {song.lyrics ? (
        <div>
          <pre className=" text-base md:text-lg font-sans whitespace-pre-line md:ml-16">
            {isLyricsNepali ? lyrics?.NEP : lyrics?.ENG}
          </pre>
        </div>
      ) : null}
    </div>
  );
};

export default Lyrics;
