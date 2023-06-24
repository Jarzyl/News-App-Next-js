import Layout from "@/components/Layout/Layout";
import Categories from "@/components/HomePage/Categories";
import HomeArticle from "@/components/HomePage/HomeArticle";
import FullStory from "@/components/HomePage/FullStory";
import BigStory from "@/components/HomePage/BigStory";
import Popular from "@/components/HomePage/Popular";
import MostWatched from "@/components/HomePage/MostWatched";
import FindUs from "@/components/HomePage/FindUs";
import CustomHead from "@/components/Layout/CustomHead";

type Props = {};

export default function MainPage({} : Props) {
  return (
    <>
      <CustomHead title="News App" icon="news.png" />
      <main className="grid lg:max-w-7xl mx-auto md:px-2">
        <Layout>
          <Categories />
          <HomeArticle />
          <FullStory />
          <BigStory />
          <Popular />
          <MostWatched />
          <FindUs />
        </Layout>
      </main>
    </>
  );
}