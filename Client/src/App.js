import MyFirstComponent from "./Components/MyFirstComponent";
import SignUp from "./Components/SignUp";
import {Route, Routes} from "react-router-dom"
function App() {
  return (
    <Routes>
      <Route path="/" element={<MyFirstComponent />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}

export default App;
