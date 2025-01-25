import { useState } from 'react';
import { useRouter } from 'next/router';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === '123456') {
      router.push('/operation');
    } else {
      alert('用户名或密码错误');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">用户登录</h2>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">用户名</label>
          <input 
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            className="mt-1 p-3 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            required 
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 font-semibold">密码</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            className="mt-1 p-3 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            required 
          />
        </div>
        <button type="submit" className="bg-green-500 text-white p-3 rounded-lg w-full hover:bg-green-600 transition duration-300">登录</button>
      </form>
    </div>
  );
} 