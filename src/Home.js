import { useNavigate } from "react-router-dom";
import React from "react";

export default function Home() {
  let navigate = useNavigate();
  return (
    <main style={{ padding: "1rem"}}>
      <h1>Welcome to Coolform!</h1>
      <nav
        style={{
          paddingBottom: "1rem",
        }}
      >
        <button onClick={() => {navigate("/create-user")}}>
          Create New User
        </button>
      </nav>
    </main>
  );
}
