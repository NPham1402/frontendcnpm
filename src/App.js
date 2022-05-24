import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hoa_don from "./pages/hoadon/Hoa_don";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<List />} />
        <Route path="/hotels_detail" element={<Hotel />} />
        <Route path="/hoadon" element={<Hoa_don />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
