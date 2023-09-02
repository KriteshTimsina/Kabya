import { DarkModeSwitch } from "react-toggle-dark-mode";
import { selectTheme, setDarkTheme } from "../../store/features/themeSlice";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";

const Navbar = () => {
  const theme = useAppSelector(selectTheme);
  const dispatch = useAppDispatch();

  const toggleTheme = (checked: any) => {
    console.log(checked, "checked");
    dispatch(setDarkTheme(checked));
  };
  return (
    <div className="flex justify-between items-center p-1 px-10 bg-white dark:bg-slate-800">
      <img src="/logo.png" alt="Kabya" width={120} />
      <div>
        <DarkModeSwitch checked={theme} onChange={toggleTheme} />
      </div>
    </div>
  );
};

export default Navbar;
