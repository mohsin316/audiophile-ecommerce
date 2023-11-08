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

// styles
import "./App.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar />}>
      <Route index element={<Home />} />

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
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
