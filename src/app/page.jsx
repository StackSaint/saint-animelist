import Header from "@/components/AnimeList/Header";
import AnimeList from "@/components/AnimeList";
import { getAnimeResponse, getNestedAnimeResponse, reproduce } from "@/libs/api-libs";

// Revalidate homepage every 2 hours
export const revalidate = 7200;

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=8&type=tv") 
  let recommendedAnime = await getNestedAnimeResponse("recommendations/anime", "entry") 
  recommendedAnime = reproduce(recommendedAnime, 8)
  
  return (
    <>
      {/* Popular Anime */}
      <section>
        <Header title="Trending Anime" linkHref="/trending" linkTitle="See All" />
        <AnimeList api={topAnime} />
      </section>
      <section>
        <Header title="Recommended Anime" />
        <AnimeList api={recommendedAnime} />
      </section>

    </>
  );
};

export default Page;
