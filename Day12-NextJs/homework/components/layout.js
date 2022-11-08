import Link from "next/link";

export default function Layout({ children }) {
  return (
    <>
      <ul>
        <li>
          <Link href="/toolbar">Home</Link>
        </li>
        <li>
          <Link href="/toolbar/blog">Blog </Link>
        </li>
        <li>
          <Link href="/toolbar/about">About</Link>
        </li>
        <li>
          <Link href="/covid-api/covid">Covid</Link>
        </li>
        <li>
          <Link href="/weather-api/weather">Weather</Link>
        </li>
      </ul>
      <div>{children}</div>
    </>
  );
}
