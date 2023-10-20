import { DarkModeSwitch } from "react-toggle-dark-mode";
import { selectTheme, setDarkTheme } from "../../store/features/themeSlice";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";

const Navbar = () => {
  const theme = useAppSelector(selectTheme);
  const dispatch = useAppDispatch();

  const toggleTheme = (checked: any) => {
    dispatch(setDarkTheme(checked));
  };

  const eventsLinkClass = theme ? "text-white" : "text-black"; // Conditional class based on theme

  return (
    <div className="flex justify-between items-center p-1 px-10 bg-white dark:bg-dark fixed left-0 right-0 z-20">
      <a href="/">
        <img src="/logo.png" alt="Kabya" width={120} />
      </a>
      <div className="flex items-center gap-4">
        <a href="/events" className={eventsLinkClass}>Events</a>
        <DarkModeSwitch checked={theme} onChange={toggleTheme} />
      </div>
    </div>
  );
};

export default Navbar;
