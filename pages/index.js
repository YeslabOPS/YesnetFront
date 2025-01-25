import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-4">
      <Link href="/login" legacyBehavior>
        <a className="text-white bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">用户登录</a>
      </Link>
      <Link href="/operation" legacyBehavior>
        <a className="text-white bg-purple-500 px-4 py-2 rounded-lg hover:bg-purple-600 transition duration-300">前往运维页面</a>
      </Link>
    </div>
  );
}