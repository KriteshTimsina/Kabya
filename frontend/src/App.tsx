import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import Albums from "./pages/Albums/Albums";
import Navbar from "./components/navbar/Navbar";
import { useAppSelector } from "./utils/hooks";
import { selectTheme } from "./store/features/themeSlice";
import Song from "./pages/Song/Song";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "song/:title",
    element: <Song />,
  },
  {
    path: "albums",
    element: <Albums />,
  },
]);

const App = () => {
  const theme = useAppSelector(selectTheme);
  console.log(theme);
  return (
    <div className={`${theme ? "dark" : "light"} font-roboto `}>
      <Navbar />
      <hr />
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
