import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import SaasLndingPage from "./pages/SaasLndingPage";
import AgencyLandingPage from "./pages/AgencyLandingPage";
import DesktopDesign from "./pages/DesktopDesign";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/agency-landing-page":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-design":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<SaasLndingPage />} />
      <Route path="/agency-landing-page" element={<AgencyLandingPage />} />
      <Route path="/desktop-design" element={<DesktopDesign />} />
    </Routes>
  );
}
export default App;
