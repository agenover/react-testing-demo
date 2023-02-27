import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import CoolForm from "./form";
import 'bootstrap/dist/css/bootstrap.css';

const container = document.getElementById('root');
const root = createRoot(container);
const onSubmit = (values) => {console.log(values)}
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="home" element={<Home />} />
      <Route path="create-user" element={<CoolForm onSubmit={onSubmit}/>}/>
    </Routes>
  </BrowserRouter>
);
