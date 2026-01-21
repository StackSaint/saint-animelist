"use client";

import dynamic from "next/dynamic";

const VideoPlayer = dynamic(() => import("./VideoPlayer"), {
  loading: () => (
    <div className="w-full h-96 bg-cyberpunk-third/20 rounded-lg animate-pulse"></div>
  ),
  ssr: false
});

export default function VideoPlayerWrapper({ youtubeId }) {
  return <VideoPlayer youtubeId={youtubeId} />;
}
