"use client";
import { YouTubeEmbed } from "@next/third-parties/google";

// note that need to enable iframe jsapi if we wanna track
// video views
export default function Embed() {
  return (
    <>
      <h1>Showcasing youtube embeds:</h1>
      <YouTubeEmbed
        videoid="EngW7tLk6R8"
        height={400}
        params="controls=0"
        js-api
      />
    </>
  );
}
