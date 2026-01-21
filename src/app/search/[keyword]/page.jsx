import Header from "@/components/AnimeList/Header";
import AnimeList from "@/components/AnimeList";
import { getAnimeResponse } from "@/libs/api-libs";

// Revalidate search results every 30 minutes
export const revalidate = 1800;

const Page = async ({params}) => {
  const { keyword } = await params;
  const decodedKeyword = decodeURI(keyword)

  // Add limit to search results for faster response
  const searchAnime = await getAnimeResponse("anime", `q=${decodedKeyword}&limit=25`)

  return (
    <>
      <section>
        <Header title={`Search Results for ${decodedKeyword}`} />
        <AnimeList api={searchAnime} />
      </section>
    </>
  );
};

export default Page;
