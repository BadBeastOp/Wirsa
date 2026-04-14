import { Route } from "react-router-dom";
import { useParams } from "react-router-dom";
import FrontLayout from "./layout/FrontLayout";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import AboutUsPage from "./pages/aboutus/AboutUs";
import ProductPage from "./components/sections/ProductPage";
import UserProfile from "./pages/UserProfile/UserProfile";
import ChocolatesPage from "./pages/ChocolatesPage";

// Wrapper reads :productId from URL and passes to ProductPage
const ProductPageWrapper = () => {
  const { productId } = useParams();
  return <ProductPage productId={productId} />;
};

export const FrontendRoutes = (
  <>
    {/* 🔹 FRONT LAYOUT ROUTES */}
    <Route path="/" element={<FrontLayout />}>
      <Route index element={<Home />} />
      <Route path="shop" element={<Shop />} />
      <Route path="aboutus" element={<AboutUsPage />} />
      <Route path="product" element={<ProductPage />} />
      <Route path="product/:productId" element={<ProductPageWrapper />} />
      <Route path="userprofile" element={<UserProfile />} />
    </Route>

    {/* 🔹 STANDALONE CATEGORY PAGES */}
    <Route path="/category/chocolates" element={<ChocolatesPage />} />

    {/* 🔹 LOGIN / SIGNUP OUTSIDE FRONT LAYOUT */}
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
  </>
);