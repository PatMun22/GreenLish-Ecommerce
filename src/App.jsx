import "./styles/global.scss";
import Home from "./pages/home/Home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import About from "./pages/about/About";
import Login from "./pages/login/Login";
import SignUp from "./pages/signUp/SignUp";
import Cart from "./pages/cart/Cart";
import Profile from "./pages/profile/Profile";
import ShopUnit from "./pages/shop-unit/ShopUnit";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import { useTranslation } from "react-i18next";
import ShopContextProvider from "./context/ShopContext";
import Checkout from "./pages/checkout/Checkout";
import WishList from "./pages/wishList/WishList";
import Shop from "./pages/shop/Shop";
import Product from "./pages/product/Product";
import Blogs from "./pages/blogs/Blogs";

const App = () => {
  const { t } = useTranslation();

  const Layout = () => {
    return (
      <main>
        <ShopContextProvider>
          <Header t={t} />
          <div className="Main_container">
            <Outlet />
          </div>
          <Footer t={t} />
        </ShopContextProvider>
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
        {
          path: "/checkout",
          element: <Checkout />,
        },
        {
          path: "/wishlist",
          element: <WishList />,
        },
        {
          path: "/shop/${id}",
          element: <Product />,
        },
        {
          path: "/shop",
          element: <Shop />,
        },
        {
          path: "/shop/unit",
          element: <ShopUnit />,
        },
        {
          path: "/blogs",
          element: <Blogs />,
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
