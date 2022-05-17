import Sidebar from "./components/Sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/" element={<LoginPage />}/>


        <Route element={(
          <Sidebar />
        )}>

          <Route path="/home" element={<HomePage />}/>
        </Route>
      </Routes>
    </BrowserRouter>

  );
}