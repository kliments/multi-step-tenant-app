import MainLayout from "./layouts/MainLayout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Welcome from "./pages/Welcome";
import NotFound from "./pages/NotFound";
import Success from "./pages/Success";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route element={<MainLayout />}>
            <Route index element={<Welcome />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/success" element={<Success />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
