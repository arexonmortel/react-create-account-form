

import { Routes, Route } from 'react-router-dom';
import CreateAccountPage from './CreateAccountPage';
import TermsAndConditions from './TermsAndConditions';
import PrivacyPolicy from './PrivacyPolicy';
import Login from './Login';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<CreateAccountPage />} />
      <Route path="/toc" element={<TermsAndConditions/>} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/login" element={<Login />} />
      
    </Routes>
  );
};

export default App;
