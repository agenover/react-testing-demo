import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import CoolForm from "./form";
import 'bootstrap/dist/css/bootstrap.css';

const container = document.getElementById('root');
const root = createRoot(container);
const onSubmit = (values) => {console.log(values)}
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/home"></Route>
      </Route>
      <Route path="create-user" element={<CoolForm onSubmit={onSubmit}/>}/>
    </Routes>
  </BrowserRouter>
);
