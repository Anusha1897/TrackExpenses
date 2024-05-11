import react from "react";
import AgTable from "./Components/AgTable";

export default function App() {

  return (
    <div className="container">
      <header>
        <h1>Tracker your Expenses</h1>
      </header>
      <AgTable  />
    </div>
  );
}
