import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Calculator from "./Calculater/Calculator";
import InvestmentProcess from "./components/InvestmentProcess";
import TreeFamilySystem from "./components/TreeFamilySystem";
import CallToAction from "./components/CallToAction";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AuthModal from "./components/AuthModal";

import MyInvestments from "./pages/MyInvestments";
import Reports from "./pages/Reports";
import BankDetails from "./pages/BankDetails";
import Profile from "./pages/profile";
import Dashboard from "./pages/Dashboard";
import InvestmentOverview from "./pages/InvestmentOverview";
import AboutUs from "./pages/AboutUs";
import PlansPage from "./pages/PlansPage";
import FAQ from "./pages/FaqPage";
import ContactUs from "./pages/contact";

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  // Demo authentication
  const isAuthenticated = true;

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
};

// How It Works Page
function HowItWorks() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* Page Heading */}
        <h1 className="text-4xl font-bold text-center text-[#004D40] mb-4">
          How It Works
        </h1>

        <p className="text-center text-[#4B5563] text-[17px] font-semibold mb-12 max-w-2xl mx-auto">
          Understanding MSV Infotech's investment process is simple. Follow
          these steps to start your journey towards financial growth.
        </p>

        {/* Investment Process */}
        <InvestmentProcess />

        {/* Tree Family System */}
        <TreeFamilySystem />

        {/* Call To Action */}
        <CallToAction />
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      {/* Global Header */}
      <Header />

      <Routes>
        {/* ================= PUBLIC ROUTES ================= */}

        {/* Home */}
        <Route path="/" element={<InvestmentOverview />} />

        {/* About Us */}
        <Route path="/about" element={<AboutUs />} />

        {/* Plans */}
        <Route path="/plans" element={<PlansPage />} />

        {/* FAQ */}
        <Route path="/faqs" element={<FAQ />} />

        {/* Contact Us */}
        <Route path="/contact" element={<ContactUs />} />

        {/* How It Works */}
        <Route path="/how-it-works" element={<HowItWorks />} />

        {/* Investment Calculator */}
        <Route path="/calculator" element={<Calculator />} />

        {/* Authentication */}
        <Route path="/auth" element={<AuthModal />} />

        {/* ================= PROTECTED ROUTES ================= */}

        {/* Profile */}
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* My Investments */}
        <Route
          path="/my-investments"
          element={
            <ProtectedRoute>
              <MyInvestments />
            </ProtectedRoute>
          }
        />

        {/* Reports */}
        <Route
          path="/reports"
          element={
            <ProtectedRoute>
              <Reports />
            </ProtectedRoute>
          }
        />

        {/* Bank Details */}
        <Route
          path="/bank-details"
          element={
            <ProtectedRoute>
              <BankDetails />
            </ProtectedRoute>
          }
        />
      </Routes>

      {/* Global Footer */}
      <Footer />
    </Router>
  );
}

export default App;
