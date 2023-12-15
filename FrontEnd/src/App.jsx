import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/home";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignOut from "./pages/SignOut";
import ProductList from "./pages/ProductList";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/Cart" element={<Cart/>} exact />
          <Route path="/Profile" element={<Profile />} exact />
          <Route path="/Signin" element={<SignIn />} exact />
        </Routes>
      </Router>
    </>
  );
}

export default App;
