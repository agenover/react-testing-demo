import { Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <h1>Welcome to Coolform!</h1>
      <nav
        style={{
          paddingBottom: "1rem",
        }}
      >
        <Link to="/create-user">Create a new form</Link>
      </nav>
    </div>
  );
}