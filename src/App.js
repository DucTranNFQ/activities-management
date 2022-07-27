import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import AdminPage from "./pages/AdminPage";
import HomePage from "./pages/HomePage";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import SignIn from "./features/user/SignIn";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header /> <Outlet /> <Footer />
            </>
          }
        >
          <Route index element={<HomePage />} />
        </Route>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
