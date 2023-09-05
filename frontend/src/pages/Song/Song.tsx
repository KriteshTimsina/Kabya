import { useLocation } from "react-router-dom";
import Lyrics from "./components/Lyrics";
import Sidebar from "./components/Sidebar";

const Song = () => {
  const {
    state: { song },
  } = useLocation();
  return (
    <div className="flex flex-col pt-top ">
      <div className="h-48 bg-red-200"></div>
      <div className="flex  flex-col md:flex-row ">
        <Lyrics {...{ song }} />
        <div className="w-full md:w-1/4 p-3 md:p-1 flex flex-col gap-5">
          <Sidebar title="More From Bipul Chettri" />
          <Sidebar title="Similar Songs" />
        </div>
      </div>
    </div>
  );
};

export default Song;
