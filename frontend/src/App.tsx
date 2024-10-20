import MainLayout from "./layouts/MainLayout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Name from "./pages/steps/Name";
import Summary from "./pages/steps/Summary";
import Email from "./pages/steps/Email";
import NotFound from "./pages/NotFound";
import Success from "./pages/Success";
import Income from "./pages/steps/Income";
import PhoneNumber from "./pages/steps/PhoneNumber";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route element={<MainLayout />}>
            <Route index element={<Welcome />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/success" element={<Success />} />

            <Route path="/profile">
              <Route path="name" element={<Name />} />
              <Route path="email" element={<Email />} />
              <Route path="phone" element={<PhoneNumber />} />
              <Route path="income" element={<Income />} />
              <Route path="summary" element={<Summary />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
