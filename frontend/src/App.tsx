import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Albums from "./pages/Albums/Albums";
import Navbar from "./components/navbar/Navbar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "albums",
    element: <Albums />,
  },
]);

const App = () => {
  return (
    <>
      <Navbar />
      <hr />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
