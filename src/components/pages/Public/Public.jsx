import { Routes, Route } from "react-router-dom";
import { Login } from "../../Login/Login";
import { PublicHeader } from "../../PublicHeader/PublicHeader";
import { PublicHome } from "../../PublicHome/PublicHome";
import { Register } from "../../Register/Register";

export const Public = () => {
  return (
    <>
      <PublicHeader />
      <Routes>
        <Route index path="/" element={<PublicHome />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};
