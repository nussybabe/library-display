import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Contact from "./directory/Contact";
import List from "./movie/List";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<List />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
