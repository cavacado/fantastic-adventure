import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function Home() {
  const loggedIn = cookies().get("authorised");
  if (!loggedIn) {
    redirect("/login");
  }
  return (
    <div>
      Hello World.
      <nav>
        <h1>Enhanced measurements</h1>
        <Link href="/about">About (pageview)</Link>
        <br />
        <Link href="/form">Form (form submission, search events)</Link>
        <br />
        <Link href="/file-download">Download (file download)</Link>
        <br />
        <Link href="/embed">Embed (video embeds)</Link>
        <br />
        <Link href="/outbound">Outbound (outbound links)</Link>
        <h1>Recommended Events</h1>
        <Link href="/login">Login</Link>
        <br />
        <h1>Custom Events</h1>
        <Link href="/custom-event">Custom Event</Link>
      </nav>
    </div>
  );
}
