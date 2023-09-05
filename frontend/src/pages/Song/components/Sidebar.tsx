import SongList from "./SongList";

const Sidebar = ({ title }: any) => {
  return (
    <div className="border-[1px] border-blue-400 flex flex-col gap-2 pb-1 sticky top-[80px] bg-slate-50">
      <p className="bg-blue-400 text-white pl-1">{title}</p>
      <SongList />
      <SongList />
    </div>
  );
};

export default Sidebar;
