import { NextPage } from "next";
import React from "react";
import Comment from "../components/comment/index";
import MainLayout from "../layouts/main";

const comment: NextPage = () => {
  return (
    <MainLayout>
      <div className="p-10">
        <Comment />
      </div>
    </MainLayout>
  );
};

export default comment;
