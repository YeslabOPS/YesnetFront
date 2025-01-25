import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Link href="/operation">
        <a className="text-blue-500 underline">前往运维页面</a>
      </Link>
    </div>
  );
} 