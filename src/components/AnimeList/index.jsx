import Image from "next/image";
import Link from "next/link";
import { memo } from "react";

const AnimeListItem = memo(({ anime, delay }) => (
  <Link
    href={`/anime/${anime.mal_id}`}
    className="anime-card group cursor-pointer text-cyberpunk-main hover:text-cyberpunk-accent transition-all duration-600 flex flex-col fade-in-up"
    style={{ animationDelay: `${delay}s` }}
  >
    <div className="w-full aspect-[3/4] overflow-hidden rounded relative flex-shrink-0">
      <Image
        src={
          anime.images.webp.large_image_url ||
          anime.images.webp.image_url
        }
        alt={anime.title}
        fill
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        loading="lazy"
        className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-600"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-600"></div>
    </div>
    <h3 className="text-center justify-center items-center font-bold text-sm sm:text-base md:text-lg lg:text-xl p-2 sm:p-3 line-clamp-2 group-hover:text-cyberpunk-accent transition-colors duration-600 flex-grow">
      {anime.title}
    </h3>
  </Link>
));

AnimeListItem.displayName = "AnimeListItem";

const AnimeList = memo(({ api }) => {
  return (
    <div
      className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 px-4 sm:px-6 pb-8 fade-in-up w-full"
      style={{ animationDelay: "0.1s" }}
    >
      {api.data?.map((anime, index) => {
        const delay = Math.min(index * 0.08, 0.8);
        return (
          <AnimeListItem 
            key={anime.mal_id}
            anime={anime}
            delay={delay}
          />
        );
      })}
    </div>
  );
});

AnimeList.displayName = "AnimeList";

export default AnimeList;
