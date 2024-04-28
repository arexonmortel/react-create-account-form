import React, { useState } from 'react';
import eyeOpen from './assets/eye-outline.svg'
import eyeClose from './assets/eye-off-outline.svg'

const CreateAccountPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    dateOfBirth: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
  });
  const [formErrors, setFormErrors] = useState({
    username: '',
    email: '',
    dateOfBirth: '',
    password: '',
    confirmPassword: '',
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === 'checkbox' ? checked : value;
    setFormData((prevData) => ({
      ...prevData,
      [name]: val,
    }));
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleToggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form validation
    const errors = {};
    if (formData.username.length < 4) {
      errors.username = 'Username must be at least 4 characters long';
    }
    if (new Date(formData.dateOfBirth) > new Date()) {
      errors.dateOfBirth = 'Date of birth cannot be in the future';
    }
    if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(formData.email)) {
      errors.email = 'Invalid email address';
    }
    if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/.test(formData.password)) {
      errors.password = 'Password must contain at least 8 characters, 1 special symbol character, 1 number, and 1 uppercase letter';
    }
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    if (Object.keys(errors).length === 0) {
      // No errors, submit the form
      console.log('Form Data:', formData);
    } else {
      // Set form errors
      setFormErrors(errors);
    }
  };

  // Function to format date as "DD / MM / YYYY"
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day} / ${month} / ${year}`;
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-[28px] font-semibold mt-6 mb-2 leading-[33.6px] text-black">Let’s get you started</h1>
      <p className="mb-6 text-secondary-color">
        Already have an account? <a href="/login" className='text-link-color'>Login</a>
      </p>
      <form onSubmit={handleSubmit}>
        {/* Username */}
        <div className="mb-6">
          <label htmlFor="username" className="block mb-1 leading-6 ">Username</label>
          <input
            id="username"
            type="text"
            name="username"
            placeholder="Enter your username"
            value={formData.username}
            onChange={handleInputChange}
            className="border border-border-color text-placeholder-color rounded-lg px-4 py-3 w-full"
            required
          />
          {formErrors.username && <p className="text-error-color text-sm mt-1">{formErrors.username}</p>}
        </div>
        {/* Date of Birth */}
        <div className="mb-6">
          <label htmlFor="dateOfBirth" className="block mb-1">Date of Birth</label>
          <input
            id="dateOfBirth"
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleInputChange}
            className="border border-border-color text-placeholder-color rounded-lg px-4 py-3 w-full"
            required
          />
          {formErrors.dateOfBirth && <p className="text-error-color text-sm mt-1">{formErrors.dateOfBirth}</p>}
        </div>
        {/* Email Address */}
        <div className="mb-6">
          <label htmlFor="email" className="block mb-1">Email address</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Enter your email address"
            value={formData.email}
            onChange={handleInputChange}
            className="border border-border-color text-placeholder-color rounded-lg px-4 py-3 w-full"
            required
          />
          {formErrors.email && <p className="text-error-color text-sm mt-1">{formErrors.email}</p>}
        </div>
        {/* Password */}
        <div className="mb-6">
          <label htmlFor="password" className="block mb-1">Password</label>
          <div className="relative">
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleInputChange}
              className="border border-border-color text-placeholder-color rounded-lg px-4 py-3 w-full pr-10"
              required
            />
          <img className="absolute top-1/2 -translate-y-1/2 right-0 px-3 py-2 w-12" 
          src={showPassword ? eyeClose : eyeOpen} 
          alt={showPassword ? "Hide": "Show" } 
          onClick={handleTogglePassword} />
          </div>
          {formErrors.password && <p className="text-error-color text-sm mt-1">{formErrors.password}</p>}
        </div>
        {/* Confirm Password */}
        <div className="mb-6">
          <label htmlFor="confirmPassword" className="block mb-1">Confirm Password</label>
          <div className="relative">
            <input
              id="confirmPassword"
              type={showConfirmPassword ? 'text' : 'password'}
              name="confirmPassword"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              className="border border-border-color text-placeholder-color rounded-lg px-4 py-3 w-full pr-10"
              required
            />
          <img className="absolute top-1/2 -translate-y-1/2 right-0 px-3 py-2 w-12" 
          src={showConfirmPassword ? eyeClose : eyeOpen} 
          alt={showConfirmPassword ? "Hide": "Show" } 
          onClick={handleToggleConfirmPassword} />

          </div>
          {formErrors.confirmPassword && <p className="text-error-color text-sm mt-1">{formErrors.confirmPassword}</p>}
        </div>
        {/* Terms and Conditions Checkbox */}
        <div className="mb-12">
          <label className="flex items-center gap-1">
            <input
              type="checkbox"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleInputChange}
              className="mr-2 size-6 rounded-md border border-border-color"
              required
            />
            <span className="text-sm">
              I agree to the <a href="/toc" className="text-link-color">Terms and Conditions</a> and <a href="/privacy-policy" className="text-link-color">Privacy Policy</a> of this app.
            </span>
          </label>
        </div>
        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-link-color text-btn-text px-[20px] font-medium py-2 rounded-lg w-full disabled:bg-btn-color-disabled disabled:cursor-not-allowed"
            disabled={!formData.username || !formData.email || !formData.dateOfBirth || !formData.password || !formData.confirmPassword || !formData.agreeToTerms}
          >
            Create Account
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateAccountPage;
