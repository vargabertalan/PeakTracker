import Home from "./pages/Home";
import AppLayout from "./pages/AppLayout";
import Stats from "./pages/Stats";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="app" element={<AppLayout />} />
        <Route path="stats" element={<Stats />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
