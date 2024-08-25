import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div>
        <Link href="/performance" />
        Performance
      </div>
      <div>
        <Link href="/reliability" />
        Reliability
      </div>
      <div>
        <Link href="/scale" />
        Scale
      </div>
      Home Page
    </div>
  );
}
