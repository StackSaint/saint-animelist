"use client";

import React, { useState, useCallback, memo } from "react";
import { Check } from "@phosphor-icons/react";

const CollectionButton = memo(({ anime_mal_id, user_email, anime_image, anime_title }) => {
  const [isCreated, setIsCreated] = useState(false);
  
  const handleCollection = useCallback(async (event) => {
    event.preventDefault();

    const data = { anime_mal_id, user_email, anime_image, anime_title };

    try {
      const response = await fetch("/api/v1/collection", {
        method: "POST",
        body: JSON.stringify(data),
      });
      const collection = await response.json();
      if (collection.isCreated) {
        setIsCreated(true);
      }
    } catch (error) {
      console.error("Failed to add to collection:", error);
    }
  }, [anime_mal_id, user_email, anime_image, anime_title]);

  return (
    <>
      {isCreated ? (
        <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-cyberpunk-accent/10 border border-cyberpunk-accent text-cyberpunk-accent rounded-lg font-bold text-sm sm:text-base">
          <Check size={18} weight="bold" className="sm:w-5 sm:h-5" />
          Added to Collection
        </div>
      ) : (
        <button
          onClick={handleCollection}
          className="px-4 sm:px-6 py-2 sm:py-3 bg-cyberpunk-accent text-cyberpunk-primary font-bold rounded-lg hover:bg-cyberpunk-accent/90 transition-all duration-300 hover:scale-105 transform active:scale-95 text-sm sm:text-base"
        >
          Add To Collection
        </button>
      )}
    </>
  );
});

CollectionButton.displayName = "CollectionButton";

export default CollectionButton;
