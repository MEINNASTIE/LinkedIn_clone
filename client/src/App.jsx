import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Homepage from "./pages/HomePage";
import NetworkPage from "./pages/NetworkPage";
import PageNotFound from "./pages/NotFoundPage";
import ProfilePage from "./pages/ProfilePage";

export default function App() {


  return (
    <> 
    <Routes>
      <Route path="/homepage" element={<Homepage />} />
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/networkPage" element={<NetworkPage />} />
      <Route path="/profilePage" element={<ProfilePage />} />
      
      {/* When page not found */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
    </>
  )
}
