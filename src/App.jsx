import Home from "./pages/Home";
import AppLayout from "./pages/AppLayout";
import Stats from "./pages/Stats";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HikeProvider } from "./contexts/HikeContext";

function App() {
  return (
    <HikeProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="app" element={<AppLayout />} />
          <Route path="stats" element={<Stats />} />
        </Routes>
      </BrowserRouter>
    </HikeProvider>
  );
}

export default App;
