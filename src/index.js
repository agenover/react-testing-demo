import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Form from "./form";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/home"></Route>
      </Route>
      <Route path="create-user" element={<Form />} />
    </Routes>
   
    
  </BrowserRouter>,
  rootElement
);
