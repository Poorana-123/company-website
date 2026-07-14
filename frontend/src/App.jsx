import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Contact_info from "./pages/Contact_info";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact_info />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;