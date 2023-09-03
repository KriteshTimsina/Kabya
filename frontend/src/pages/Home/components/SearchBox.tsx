import { BiSearch } from "react-icons/bi";
import ImageCarousel from "./ImageCarousel";

const SearchBox = () => {
  return (
    <form className="h-60 md:h-80 bg-secondary flex justify-center items-center">
      <ImageCarousel className="relative" />
      <div className="z-10 absolute flex border-[1px] border-gray-400 rounded-md w-4/5 md:w-1/2">
        <select className="w-2/12  bg-gray-50 border-secondary rounded-none border outline-none  text-gray-900 text-sm  block  p-2.5 ">
          <option value="songs">Songs</option>
          <option value="lyrics">Lyrics</option>
          <option value="tracks">Tracks</option>
          <option value="albums">Albums</option>
        </select>
        <input
          className="w-5/6 indent-2 py-3 relative border-none focus:outline-[1px]  focus:outline-blue-400"
          type="text"
          placeholder="Search for Songs,Lyrics..."
        />

        <button
          type="submit"
          className="px-5 bg-white border-l-[1px] border-l-secondary hover:bg-blue-400"
        >
          <BiSearch />
        </button>
      </div>
    </form>
  );
};

export default SearchBox;
