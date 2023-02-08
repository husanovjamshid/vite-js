import { Route, Routes } from "react-router-dom";
import { PrivateHeader } from "../../PrivateHeader/PrivateHeader";
import { Posts } from "../../../posts/posts";
import { PrivateHome } from "../../PrivateHome/PrivateHome";

export const Private = () => {
  return (
    <>
      <PrivateHeader />
      <Routes>
        <Route path="/" element={<PrivateHome />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </>
  );
};
