import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Javascript } from "./Pages/Javascript";
import { React_texnology } from "./Pages/React";
import { Html_css } from "./Pages/HtmlCss";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="javascript" element={<Javascript />} />
          <Route path="react" element={<React_texnology />} />
          <Route path="html_css" element={<Html_css />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
