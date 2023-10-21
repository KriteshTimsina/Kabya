import { useNavigate } from "react-router-dom";
import { ISong } from "./songs";

const SongList = ({ song }: { song: ISong }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/song/${song.track}`, { state: { song } })}
      className="px-1 flex gap-10 md:gap-32 py-2 items-center w-full md:w-3/4  justify-start border-b-secondary border-b-[1px] pb-1 hover:bg-secondary dark:hover:bg-black cursor-pointer "
    >
      <p className="text-7xl font-roboto font-bold text-stone-700 flex items-end gap-1 dark:text-white">
        {song.id}
        <span className="h-2 w-2 bg-blue-500 mb-2"></span>
      </p>
      <div className="flex items-center gap-3 w-full">
        <img src={song.image} alt={song.track} className="w-20" />
        <div className=" w-full flex flex-col gap-0 sm:gap-2 sm:flex-row sm:items-center ">
          <p className="text-2xl w-fit whitespace-nowrap dark:text-white">{song.track}</p>
          <p className="text-xl order-4 sm:text-end w-full dark:text-white">{song.artist}</p>
          {song.hasLyrics ? (
            <span className="text-slate-400 text-sm">LYRICS</span>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default SongList;
