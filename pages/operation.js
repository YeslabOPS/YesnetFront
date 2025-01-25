import { useState } from 'react';

export default function OperationPage() {
  const [deviceName, setDeviceName] = useState('');
  const [command, setCommand] = useState('');
  const [isLoop, setIsLoop] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = isLoop 
      ? 'http://127.0.0.1:8000/api/ssh/cmdloop' 
      : 'http://127.0.0.1:8000/api/ssh/cmd';
    
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ device_name: deviceName, command }),
    });

    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">运维命令发送</h2>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">设备名/IP</label>
          <input 
            type="text" 
            value={deviceName} 
            onChange={(e) => setDeviceName(e.target.value)} 
            className="mt-1 p-3 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required 
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">命令</label>
          <input 
            type="text" 
            value={command} 
            onChange={(e) => setCommand(e.target.value)} 
            className="mt-1 p-3 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required 
          />
        </div>
        <div className="mb-6">
          <label className="inline-flex items-center">
            <input 
              type="checkbox" 
              checked={isLoop} 
              onChange={(e) => setIsLoop(e.target.checked)} 
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <span className="ml-2 text-gray-700">持续运行</span>
          </label>
        </div>
        <button type="submit" className="bg-blue-500 text-white p-3 rounded-lg w-full hover:bg-blue-600 transition duration-300">发送命令</button>
      </form>
    </div>
  );
} 