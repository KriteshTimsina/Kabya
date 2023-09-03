import { FormEvent, useState } from "react";
import { BiSearch } from "react-icons/bi";

const SearchBox = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const handleSearch = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 3000);
  };
  return (
    <form
      onSubmit={handleSearch}
      className="h-60 bg-secondary flex justify-center items-center "
    >
      <div className="flex border-[1px] border-gray-400 rounded-md w-4/5 md:w-1/2">
        <select className="w-2/12 bg-gray-50 border-secondary border outline-none  text-gray-900 text-sm rounded-lg block  p-2.5 ">
          <option value="songs">Songs</option>
          <option value="lyrics">Lyrics</option>
          <option value="tracks">Tracks</option>
          <option value="albums">Albums</option>
        </select>
        <input
          className="w-5/6 indent-2 relative border-none focus:outline-[1px]  focus:outline-blue-400"
          type="text"
          placeholder="Search for Songs,Lyrics..."
        />

        <button type="submit" className="px-5 hover:bg-blue-400">
          <BiSearch />
        </button>
      </div>
    </form>
  );
};

export default SearchBox;
