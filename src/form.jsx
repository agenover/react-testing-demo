import { useNavigate } from "react-router-dom";

export default function Form() {
    let navigate = useNavigate();
    return (
      <main style={{ padding: "1rem" }}>
        <button onClick={() => {navigate("/")}}>
          Back to home page
        </button>
        <h2>Form</h2>
      </main>
    );
  }
