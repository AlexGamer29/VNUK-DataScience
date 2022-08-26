import { NextPage } from "next";
import React from "react";
import MainLayout from "../../layouts/main";

const about: NextPage = () => (
  <MainLayout>
    <div className="flex bg-white mt-10 w-full">
      <div className="flex flex-col w-2/5">
        <div className="grid gap-10 grid-cols-1 p-10">
          <div>
            <h1 className="text-3xl montserrat-semibold">DISCOVER US</h1>
            <p className="text-lg roboto-light">
              VNUK is here to help you! Our experts are available to answer any
              questions you might have. We’ve got the answers.
            </p>
          </div>
          <div>
            <h1 className="text-3xl montserrat-semibold">VISIT US</h1>
            <p className="text-lg roboto-light">
              158A, Lê Lợi, P. Hải Châu 1, Q. Hải Châu, Tp. Đà Nẵng
            </p>
          </div>
          <div>
            <h1 className="text-3xl montserrat-semibold">EMAIL US</h1>
            <p className="text-lg roboto-light">support@vnuk.edu.vn</p>
          </div>
          <div>
            <h1 className="text-3xl montserrat-semibold">CALL US</h1>
            <p className="text-lg roboto-light">(0236) 3.738.399 </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-3/5">
        <div className="flex flex-row flex-wrap z-0 ml-[200px] space-x-20">
          <img
            className="w-72 h-96 object-cover"
            src="https://tuyensinhvnuk.edu.vn/wp-content/uploads/2018/02/DHQ_8779_compressed.jpg" />
          <img
            className="w-72 h-96 mt-24 object-cover"
            src="https://tuyensinhvnuk.edu.vn/wp-content/uploads/2019/05/MAD_0158-1280x887.jpg" />
        </div>
        <div className="flex flex-row flex-wrap z-10 mt-[-220px] ml-[50px] space-x-20">
          <img
            className="w-72 h-96 border-8 border-white object-cover"
            src="https://tuyensinhvnuk.edu.vn/wp-content/uploads/2019/05/20190507-768x426.jpg" />
          <img
            className="w-72 h-96 border-8 border-white mt-24 object-cover"
            src="https://tuyensinhvnuk.edu.vn/wp-content/uploads/2019/01/MAD_0362-768x513.jpg" />
        </div>
      </div>
    </div>
  </MainLayout>
);

export default about;
