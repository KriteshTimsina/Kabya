import { ISong } from "./songs";

const SongList = ({ song }: { song: ISong }) => {
  return (
    <div className=" flex gap-10 md:gap-32 py-3 items-center w-full md:w-3/4  justify-start border-b-secondary border-b-[1px] pb-1 hover:bg-secondary cursor-pointer ">
      <p className="text-2xl">{song.id}</p>
      <div className="hidden md:flex items-center gap-3 ">
        <img src={song.image} alt={song.track} className="w-10" />
        <p className="text-2xl">{song.track}</p>
        <span className="text-slate-400 text-sm">LYRICS</span>
      </div>
      <p className="text-2xl hidden md:block">{song.artist}</p>

      <div className="flex items-center gap-3 md:hidden">
        <img src={song.image} alt={song.track} className="w-20" />
        <div className="flex-col gap-2">
          <p className="text-2xl">{song.track}</p>
          <p className="text-xl">{song.artist}</p>
          <span className="text-slate-400 text-sm">LYRICS</span>
        </div>
      </div>
    </div>
  );
};

export default SongList;
