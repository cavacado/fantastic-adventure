import Link from "next/link";

export default function Outbound() {
  return (
    <>
      <h1>Showcasing Outbound Links:</h1>
      <a href={"https://www.channelnewsasia.com/"} target="_blank">
        Link to outbound
      </a>
      <br />
      {/* See whether Nextjs Link can track outbound links */}
      <Link href={"https://www.channelnewsasia.com/"} passHref>
        Link to outbound (Next Link)
      </Link>
    </>
  );
}
