import "./styles/global.scss";
import Home from "./pages/home/Home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import About from "./pages/about/About";
import Login from "./pages/login/Login";
import SignUp from "./pages/signUp/SignUp";
import Cart from "./pages/cart/Cart";
import Profile from "./pages/profile/Profile";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import { useTranslation } from "react-i18next";

const App = () => {
  const { t } = useTranslation();

  const Layout = () => {
    return (
      <main>
        <Header t={t} />
        <div className="Main_container">
          <Outlet />
        </div>
        <Footer t={t} />
      </main>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
