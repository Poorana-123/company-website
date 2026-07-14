import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Contact_info from "./pages/Contact_info";
import Port from "./pages/Port";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact_info />} />
        <Route path="/Port" element={<Port />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;