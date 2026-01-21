import prisma from "@/libs/prisma";
import React from "react";

const CommentBox = async ({ anime_mal_id }) => {
  // Limit comments to 8 for better performance
  const comments = await prisma.comment.findMany({ 
    where: { anime_mal_id },
    take: 8
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
      {comments.map(comment => {
        return(
            <div key={comment.id} className=" bg-cyberpunk-secondary rounded-xl p-3 opacity-60 hover:opacity-100 transition-opacity duration-300">
                <p className="text-cyberpunk-third font-semibold text-sm">{comment.username}</p>
                <p className="text-cyberpunk-primary text-sm line-clamp-3">{comment.comment}</p>
            </div>
        )
      })}
    </div>
  );
};

export default CommentBox;
