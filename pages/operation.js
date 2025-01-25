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
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">运维命令发送</h2>
        <div className="mb-4">
          <label className="block text-gray-700">设备名/IP</label>
          <input 
            type="text" 
            value={deviceName} 
            onChange={(e) => setDeviceName(e.target.value)} 
            className="mt-1 p-2 w-full border rounded"
            required 
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">命令</label>
          <input 
            type="text" 
            value={command} 
            onChange={(e) => setCommand(e.target.value)} 
            className="mt-1 p-2 w-full border rounded"
            required 
          />
        </div>
        <div className="mb-4">
          <label className="inline-flex items-center">
            <input 
              type="checkbox" 
              checked={isLoop} 
              onChange={(e) => setIsLoop(e.target.checked)} 
              className="form-checkbox"
            />
            <span className="ml-2">持续运行</span>
          </label>
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">发送命令</button>
      </form>
    </div>
  );
} 