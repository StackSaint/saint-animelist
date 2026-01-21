import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Dashboard/Header";
import prisma from "@/libs/prisma";
import { authUserSession } from "@/libs/auth-libs";

const page = async () => {
  const user = await authUserSession();
  const collection = await prisma.collection.findMany({
    where: { user_email: user.email },
  });

  return (
    <section className="mt-4 px-4 w-full">
      <Header title={"Anime Collection"} />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {collection.map((collect) => (
          <Link
            key={collect.id}
            href={`/anime/${collect.anime_mal_id}`}
            className="relative overflow-hidden hover:opacity-75 transition-opacity rounded-xl"
          >
            <Image
              src={collect.anime_image || "/placeholder.jpg"}
              alt={collect.anime_mal_id}
              width={350}
              height={350}
              className="w-full"
            />
            <div className="absolute flex items-center justify-center bottom-0 w-full bg-cyberpunk-third h-16">
              <h5 className="text-xl text-cyberpunk-main text-center line-clamp-2">
                {collect.anime_title}
              </h5>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default page;
