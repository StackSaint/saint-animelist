import Header from "@/components/Dashboard/Header";
import { authUserSession } from "@/libs/auth-libs";
import prisma from "@/libs/prisma";
import Link from "next/link";
import React from "react";

const page = async () => {
  const user = await authUserSession();
  const comments = await prisma.comment.findMany({
    where: { user_email: user.email },
  });

  return (
    <section className="mt-4 px-4 w-full">
      <Header title={"My Comments"} />
      <div className="grid grid-cols-1 px-4 py-4 gap-4">
        {comments.map((comment) => {
          return (
            <Link
              href={`/anime/${comment.anime_mal_id}`}
              key={comment.id}
              className=" bg-cyberpunk-secondary rounded-xl p-3 opacity-60 hover:opacity-100"
            >
              <p className="text-cyberpunk-third">{comment.anime_title}</p>
              <p className="text-cyberpunk-primary">{comment.comment}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default page;
