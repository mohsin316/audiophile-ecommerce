// imports
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

//components
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import Headphones from "./pages/Headphones/Headphones";
import HeadphoneProduct from "./pages/Headphones/HeadphoneProduct";
import Speakers from "./pages/Speakers/Speakers";
import SpeakerProduct from "./pages/Speakers/SpeakerProduct";
import Earphones from "./pages/Earphones/Earphones";
import EarphoneProduct from "./pages/Earphones/EarphoneProduct";
import Checkout from "./components/Checkout";
import Login from "./components/Login";

// styles
import "./App.css";
import RequireAuth from "./components/requireAuth";
import AuthTestOne from "./components/Welcome";
import Welcome from "./components/Welcome";
import Users from "./components/Users";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar />}>
      <Route index element={<Home />} />
      <Route path="login" element={<Login />} />

      <Route path="headphones">
        <Route index element={<Headphones />} />
        <Route path=":id" element={<HeadphoneProduct />} />
      </Route>

      <Route path="speakers">
        <Route index element={<Speakers />} />
        <Route path=":id" element={<SpeakerProduct />} />
      </Route>

      <Route path="earphones">
        <Route index element={<Earphones />} />
        <Route path=":id" element={<EarphoneProduct />} />
      </Route>

      <Route element={<RequireAuth />}>
        <Route path="welcome" element={<Welcome />} />
        <Route path="users" element={<Users />} />
      </Route>

      <Route path="checkout" element={<Checkout />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
