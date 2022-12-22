import { Routes, Route } from "react-router-dom";
import Auth from "./Pages/Auth";
import Home from "./Pages/Home";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/auth" element={<Auth />} />
    </Routes>
  );
}

export default App;
