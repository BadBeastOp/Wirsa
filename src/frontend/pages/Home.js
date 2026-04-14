import FeatureBar       from "../components/sections/FeatureBar";
import MarqueText       from "../components/sections/MarqueText";
import BannerSection    from "../components/sections/Banner";
import ImageCarousel    from "../components/sections/BannerScreen";
import CategoryGrid     from "../components/sections/Category";
import ProductCarousel  from "../components/sections/ProductCarousel";
import MediaCoverage    from "../components/sections/MediaCoverage";
import WeeklyDeals      from "../components/sections/WeeklyDeals";

export default function Home() {
  return (
    <>
      {/* 1. Hero banner */}
      <ImageCarousel />

      {/* 2. Weekly Deals — moved right after hero */}
      <WeeklyDeals />

      {/* 3. Main Categories */}
      <CategoryGrid />

      {/* 4. Promo banners */}
      <BannerSection />

      {/* 5. Feature bar */}
      <FeatureBar />

      {/* 6. Product carousels */}
      <ProductCarousel title="Dairy, Bread & Eggs"   seeAllLink="/category/dairy"  />
      <ProductCarousel title="Fruits & Vegetables"   seeAllLink="/category/fruits" />

      <MarqueText />
      <MediaCoverage />
    </>
  );
}