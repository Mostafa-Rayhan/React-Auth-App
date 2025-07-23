import React, { useState, useEffect } from 'react';
import { FaEye, FaEyeSlash, FaRedo } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
  const [activeTab, setActiveTab] = useState('partner');
  const [password, setPassword] = useState('');
  const [id, setId] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Clear form on browser refresh
  useEffect(() => {
    const handleBeforeUnload = () => {
      setId('');
      setPassword('');
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      activeTab,
      id,
      password
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-vh-100 bg-light d-flex align-items-center justify-content-center p-4">
      <div className="bg-white p-4 rounded shadow-sm w-100" style={{ maxWidth: '400px' }}>
        {/* <h1 className="text-center mb-4 fw-bold">Login Page</h1> */}
        <div className="text-center mb-4">
          <img 
            src="/web do logo.jpeg" 
            alt="Company Logo"
            style={{ objectFit: 'contain' }}
            className="img-fluid"
          />
        </div>
        
        <div className="btn-group d-flex border mb-4" role="group" aria-label="Basic radio toggle button group">
          <button
            className={`btn btn-link text-decoration-none py-2 px-4 fw-bold ${activeTab === 'partner' ? 'text-primary border bg-light border-primary border-2' : 'text-secondary'}`}
            onClick={() => setActiveTab('partner')}
            style={{ marginBottom: '-1px' }}
          >
            Partner
          </button>
          <button
            className={`btn btn-link text-decoration-none py-2 px-4 fw-bold ${activeTab === 'staff' ? 'text-primary border border-primary border-2' : 'text-secondary'}`}
            onClick={() => setActiveTab('staff')}
            style={{ marginBottom: '-1px' }}
          >
            Staff
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          {/* ID Field with floating label */}
          <div className="mb-3">
            <input 
              type="text" 
              className="form-control" 
              id="idInput"
              placeholder={activeTab === 'partner' ? 'Partner ID' : 'Staff ID'}
              value={id}
              onChange={(e) => setId(e.target.value)}
            />

          </div>

          {/* Password Field with floating label and toggle icon */}
          <div className="mb-3 position-relative">
            <input
              type={showPassword ? "text" : "password"}
              className="form-control"
              id="passwordInput"
              placeholder={activeTab === 'partner' ? 'Partner Password' : 'Staff Password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              className="btn btn-link position-absolute end-0 top-50 translate-middle-y me-2"
              onClick={togglePasswordVisibility}
              style={{ zIndex: 10 }}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {/* Links */}
          <div className="d-flex justify-content-between mb-4">
            <a href="#" className="text-primary text-decoration-none fw-bold">Forget Password?</a>
            <a href="#" className="text-primary text-decoration-none fw-bold">Register</a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn btn-primary w-100 py-2 fw-bold"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;