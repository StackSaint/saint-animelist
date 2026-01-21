import { getAnimeResponse } from "@/libs/api-libs";
import VideoPlayerWrapper from "@/components/Utilities/VideoPlayerWrapper";
import Image from "next/image";
import CollectionButton from "@/components/AnimeList/CollectionButton";
import { authUserSession } from "@/libs/auth-libs";
import prisma from "@/libs/prisma";
import CommentInput from "@/components/AnimeList/CommentInput";
import CommentBox from "@/components/AnimeList/CommentBox";

const Page = async ({ params }) => {
  const { id } = await params;
  const anime = await getAnimeResponse(`anime/${id}`);
  const trailerData = anime.data.trailer;
  const videoId =
    trailerData?.youtube_id ||
    trailerData?.embed_url?.split("/embed/")[1]?.split("?")[0];
  const user = await authUserSession();
  const collection = await prisma.collection.findFirst({
    where: { user_email: user?.email, anime_mal_id: id },
  });

  return (
    <>
      <div
        className="pt-4 sm:pt-6 px-4 sm:px-6 fade-in-up"
        style={{ animationDelay: "0.1s" }}
      >
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-cyberpunk-main mb-2 transition-all duration-600">
          {anime.data.title}
        </h3>
        <p className="text-cyberpunk-secondary text-sm sm:text-base md:text-lg mb-4 transition-all duration-600">
          {anime.data.aired.string}
        </p>
        {!collection && user && (
          <CollectionButton
            anime_mal_id={id}
            user_email={user?.email}
            anime_image={
              anime.data.images.webp.large_image_url ||
              anime.data.images.webp.image_url
            }
            anime_title={anime.data.title}
          />
        )}
      </div>

      <div
        className="pt-6 px-4 sm:px-6 flex gap-4 text-cyberpunk-main overflow-x-auto pb-4 fade-in-up max-w-full"
        style={{ animationDelay: "0.2s" }}
      >
        <div className="flex-shrink-0 flex flex-col justify-center items-center rounded-lg border border-cyberpunk-accent/20 p-3 sm:p-4 bg-cyberpunk-third/10 hover:border-cyberpunk-accent/40 hover:bg-cyberpunk-third/20 transition-all duration-600 group min-w-max">
          <h3 className="text-xs sm:text-sm font-semibold text-cyberpunk-secondary group-hover:text-cyberpunk-accent transition-colors duration-600">
            Rank
          </h3>
          <p className="text-xl sm:text-2xl font-black text-cyberpunk-accent mt-2 group-hover:scale-110 transition-transform duration-600">
            {anime.data.rank}
          </p>
        </div>
        <div className="flex-shrink-0 flex flex-col justify-center items-center rounded-lg border border-cyberpunk-accent/20 p-3 sm:p-4 bg-cyberpunk-third/10 hover:border-cyberpunk-accent/40 hover:bg-cyberpunk-third/20 transition-all duration-600 group min-w-max">
          <h3 className="text-xs sm:text-sm font-semibold text-cyberpunk-secondary group-hover:text-cyberpunk-accent transition-colors duration-600">
            Score
          </h3>
          <p className="text-xl sm:text-2xl font-black text-cyberpunk-accent mt-2 group-hover:scale-110 transition-transform duration-600">
            {anime.data.score}
          </p>
        </div>
        <div className="flex-shrink-0 flex flex-col justify-center items-center rounded-lg border border-cyberpunk-accent/20 p-3 sm:p-4 bg-cyberpunk-third/10 hover:border-cyberpunk-accent/40 hover:bg-cyberpunk-third/20 transition-all duration-600 group min-w-max">
          <h3 className="text-xs sm:text-sm font-semibold text-cyberpunk-secondary group-hover:text-cyberpunk-accent transition-colors duration-600">
            Followers
          </h3>
          <p className="text-xl sm:text-2xl font-black text-cyberpunk-accent mt-2 group-hover:scale-110 transition-transform duration-600">
            {(anime.data.members / 1000).toFixed(0)}K
          </p>
        </div>
        <div className="flex-shrink-0 flex flex-col justify-center items-center rounded-lg border border-cyberpunk-accent/20 p-3 sm:p-4 bg-cyberpunk-third/10 hover:border-cyberpunk-accent/40 hover:bg-cyberpunk-third/20 transition-all duration-600 group min-w-max">
          <h3 className="text-xs sm:text-sm font-semibold text-cyberpunk-secondary group-hover:text-cyberpunk-accent transition-colors duration-600">
            Episodes
          </h3>
          <p className="text-xl sm:text-2xl font-black text-cyberpunk-accent mt-2 group-hover:scale-110 transition-transform duration-600">
            {anime.data.episodes || "?"}
          </p>
        </div>
      </div>

      <div
        className="pt-6 px-4 sm:px-6 flex gap-4 sm:gap-6 flex-col sm:flex-row text-cyberpunk-main fade-in-up"
        style={{ animationDelay: "0.3s" }}
      >
        <div className="w-full sm:w-auto sm:flex-shrink-0 aspect-[3/4] sm:w-48 sm:h-72 rounded-lg overflow-hidden anime-card flex-shrink-0 transition-all duration-600">
          <Image
            src={
              anime.data.images.webp.large_image_url ||
              anime.data.images.webp.image_url
            }
            alt={anime.data.title}
            width={192}
            height={288}
            priority
            className="w-full h-full object-cover transition-all duration-600"
          />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-cyberpunk-secondary break-words transition-all duration-600">
            {anime.data.synopsis}
          </p>
          {anime.data.genres && anime.data.genres.length > 0 && (
            <div className="mt-4 sm:mt-6 flex flex-wrap gap-2">
              {anime.data.genres.map((genre, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-xs sm:text-sm font-semibold rounded-full border border-cyberpunk-accent/30 text-cyberpunk-accent bg-cyberpunk-accent/5 hover:border-cyberpunk-accent/60 hover:bg-cyberpunk-accent/10 transition-all duration-600 whitespace-nowrap"
                  style={{ animationDelay: `${idx * 0.05}s` }}
                >
                  {genre.name}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
      <div
        className="px-4 sm:px-6 py-6 fade-in-up transition-all duration-600"
        style={{ animationDelay: "0.4s" }}
      >
        <h3 className="text-cyberpunk-main text-2xl mb-2">Comments</h3>
        <CommentBox anime_mal_id={id} />
        {user && (
          <CommentInput
            anime_mal_id={id}
            user_email={user?.email}
            username={user?.name}
            anime_title={anime.data.title}
          />
        )}
      </div>
      <div
        className="fade-in-up px-4 sm:px-6 transition-all duration-600"
        style={{ animationDelay: "0.5s" }}
      >
        <VideoPlayerWrapper youtubeId={videoId} />
      </div>
    </>
  );
};

export default Page;
