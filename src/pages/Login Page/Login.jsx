import React, { useState } from 'react';
import { FaMobileAlt, FaEnvelope, FaKey, FaRedo } from 'react-icons/fa';

const Login = () => {
  const [activeTab, setActiveTab] = useState('citizen');
  const [loginMethod, setLoginMethod] = useState('mobile');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [captcha, setCaptcha] = useState('K P C W Y G O');
  const [enteredCaptcha, setEnteredCaptcha] = useState('');

  const generateNewCaptcha = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let newCaptcha = '';
    for (let i = 0; i < 7; i++) {
      newCaptcha += chars.charAt(Math.floor(Math.random() * chars.length)) + ' ';
    }
    setCaptcha(newCaptcha.trim());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      activeTab,
      loginMethod,
      mobile,
      email,
      password,
      enteredCaptcha
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">Login Page</h1>
        
        <div className="flex border-b mb-6">
          <button
            className={`py-2 px-4 font-medium flex items-center ${activeTab === 'citizen' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
            onClick={() => setActiveTab('citizen')}
          >
            Citizen
          </button>
          <button
            className={`py-2 px-4 font-medium flex items-center ${activeTab === 'organization' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
            onClick={() => setActiveTab('organization')}
          >
            Organization
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Radio Buttons */}
          <div className="flex mb-4 space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio text-blue-600"
                name="loginMethod"
                value="mobile"
                checked={loginMethod === 'mobile'}
                onChange={() => setLoginMethod('mobile')}
              />
              <span className="ml-2 flex items-center">
                {activeTab === 'citizen' ? (
                  <>
                    Mobile
                  </>
                ) : (
                  <>
                    Organization Mobile
                  </>
                )}
              </span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio text-blue-600"
                name="loginMethod"
                value="email"
                checked={loginMethod === 'email'}
                onChange={() => setLoginMethod('email')}
              />
              <span className="ml-2 flex items-center">
                {activeTab === 'citizen' ? 'Email' : 'Organization Email'}
              </span>
            </label>
          </div>

          {/* Mobile/Email Input */}
          {loginMethod === 'mobile' ? (
            <div className="mb-4">
              <label className="block text-gray-700 mb-2 flex items-center">
                {activeTab === 'citizen' ? 'Mobile No.' : 'Organization Mobile No.'}
              </label>
              <div className="flex">
                {activeTab === 'citizen' && (
                    <p className="border rounded-l px-3 py-2 bg-gray-100">+880</p>
                )}
                <input
                  type="text"
                  placeholder={activeTab === 'citizen' ? 'Mobile No.' : 'Organization Mobile No.'}
                  className={`border ${activeTab === 'citizen' ? 'rounded-r' : 'rounded'} px-3 py-2 flex-grow`}
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                />
              </div>
            </div>
          ) : (
            <div className="mb-4">
              <label className="block text-gray-700 mb-2 flex items-center">
                {activeTab === 'citizen' ? 'Email' : 'Organization Email'}
              </label>
              <input
                type="email"
                className="border rounded px-3 py-2 w-full"
                placeholder={activeTab === 'citizen' ? 'Email' : 'Organization Email'}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          )}

          {/* Password Field */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2 flex items-center">
              {activeTab === 'citizen' ? 'Password' : 'Organization Password'}
            </label>
            <input
              type="password"
              className="border rounded px-3 py-2 w-full"
              placeholder={activeTab === 'citizen' ? 'Password' : 'Organization Password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* CAPTCHA */}
          <div className="mb-4">
            <div className="flex items-center">
              <div className="bg-gray-100 p-2 rounded mb-2 text-center font-mono flex-grow mr-2">
                {captcha}
              </div>
              <button 
                type="button" 
                onClick={generateNewCaptcha}
                className="text-blue-600 text-sm whitespace-nowrap flex items-center border-2 border-gray-600 rounded px-3 py-3 mb-2 hover:bg-blue-50 transition"
              >
                <FaRedo className="mr-1" />
              </button>
            </div>
            <label className="block text-gray-700 mb-2">Enter the code letters from captcha</label>
            <input
              type="text"
              className="border rounded px-3 py-2 w-full"
              value={enteredCaptcha}
              onChange={(e) => setEnteredCaptcha(e.target.value)}
            />
          </div>

          {/* Links */}
          <div className="flex justify-between mb-6">
            <a href="#" className="text-blue-600 text-sm font-bold">Forget Password?</a>
            <a href="#" className="text-blue-600 text-sm font-bold">Register</a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition flex items-center justify-center"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;