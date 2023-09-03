import SongList from "./SongList";
import { songs } from "./songs";
const Charts = () => {
  return (
    <div className="flex flex-col gap-3 px-2 md:px-12 ">
      <div className="flex flex-col md:flex-row items-center gap-3 md:justify-between ">
        <h4 className="font-bold text-6xl text-stone-700">CHARTS</h4>
        <select className="w-60 md:w-40 border-black border-[1.5px] h-12 outline-none">
          <option>Songs</option>
          <option>Albums</option>
          <option>Genre</option>
        </select>
      </div>
      {songs.map((song) => {
        return <SongList key={song.id} song={song} />;
      })}
    </div>
  );
};

export default Charts;
