import React, { FC } from "react";

const Comment: FC = () => {
  return (
    <>
      <div>
        <div
          className="flex flex-col items-end shadow-md w-9/12"
          style={{ width: "1300px", height: "985px" }}
        >
          <div
            className="flex flex-col space-y-14 items-start justify-end px-14 pt-12 pb-6 bg-white rounded-2xl"
            style={{ width: "1300px", height: "985px" }}
          >
            <div
              className="flex flex-col space-y-2 items-start justify-start"
              style={{ width: "519.61px", height: "96.16px" }}
            >
              <div className="flex space-x-3 items-center justify-center">
                <div className="flex space-x-3 items-center justify-center">
                  <div className="w-1/3 h-full">
                    <img
                      className="flex-1 h-full rounded-full"
                      src="https://via.placeholder.com/50.569950103759766x50.569950103759766"
                    />
                  </div>
                  <p className="text-2xl font-medium">Cu Thinh</p>
                </div>
                <p className="w-36 h-1/2 text-xl leading-7 text-gray-400">
                  July 2nd 2022
                </p>
              </div>
              <p
                className="text-2xl leading-9 text-gray-800"
                style={{ width: "519.61px" }}
              >
                That's a fantastic new app feature.
              </p>
            </div>
            <div
              className="flex flex-col space-y-2 items-start justify-start"
              style={{ width: "519.61px", height: "96.16px" }}
            >
              <div className="inline-flex space-x-3 items-center justify-center">
                <div className="flex space-x-3 items-center justify-center">
                  <div className="w-12 h-full">
                    <img
                      className="flex-1 h-full rounded-full"
                      src="https://via.placeholder.com/50.569950103759766x50.569950103759766"
                    />
                  </div>
                  <p className="text-2xl font-medium">Minh Duc</p>
                </div>
                <p className="w-36 h-1/2 text-xl leading-7 text-gray-400">
                  July 3rd 2022
                </p>
              </div>
              <p
                className="text-2xl leading-9 text-gray-800"
                style={{ width: "519.61px" }}
              >
                That's a fantastic new app feature.
              </p>
            </div>
            <div
              className="flex flex-col space-y-2 items-start justify-start"
              style={{ width: "519.61px", height: "96.16px" }}
            >
              <div className="inline-flex space-x-3 items-center justify-center">
                <div className="flex space-x-3 items-center justify-center">
                  <div className="w-12 h-full">
                    <img
                      className="flex-1 h-full rounded-full"
                      src="https://via.placeholder.com/50.569950103759766x50.569950103759766"
                    />
                  </div>
                  <p className="text-2xl font-medium">Cống Thành</p>
                </div>
                <p className="w-44 h-1/2 text-xl leading-7 text-gray-400">
                  March 3rd 2022
                </p>
              </div>
              <p
                className="text-2xl leading-9 text-gray-800"
                style={{ width: "519.61px" }}
              >
                Good app!
              </p>
            </div>
            <div
              className="flex flex-col space-y-2 items-start justify-start"
              style={{ width: "519.61px", height: "96.16px" }}
            >
              <div className="inline-flex space-x-3 items-center justify-center">
                <div className="flex space-x-3 items-center justify-center">
                  <div className="w-12 h-full">
                    <img
                      className="flex-1 h-full rounded-full"
                      src="https://via.placeholder.com/50.569950103759766x50.569950103759766"
                    />
                  </div>
                  <p className="text-2xl font-medium">Rick Astley</p>
                </div>
                <p className="w-36 h-1/2 text-xl leading-7 text-gray-400">
                  July 2nd 2022
                </p>
              </div>
              <p
                className="text-2xl leading-9 text-gray-800"
                style={{ width: "519.61px" }}
              >
                Nice post!
              </p>
            </div>
            <div
              className="flex flex-col space-y-2 items-start justify-start"
              style={{ width: "519.61px", height: "96.16px" }}
            >
              <div className="inline-flex space-x-3 items-center justify-center">
                <div className="flex space-x-3 items-center justify-center">
                  <div className="w-12 h-full">
                    <img
                      className="flex-1 h-full rounded-full"
                      src="https://via.placeholder.com/50.569950103759766x50.569950103759766"
                    />
                  </div>
                  <p className="text-2xl font-medium">Gay Lo</p>
                </div>
                <p className="w-36 h-1/2 text-xl leading-7 text-gray-400">
                  July 1st 2022
                </p>
              </div>
              <p
                className="text-2xl leading-9 text-gray-800"
                style={{ width: "519.61px" }}
              >
                Hehehe
              </p>
            </div>
            <div
              className="inline-flex items-start justify-start"
              style={{ width: "1184.70px", height: "141.07px" }}
            >
              <input
                type="text"
                placeholder="Type your comment here"
                className="pl-6 pr-96 pt-6 pb-20 bg-white border-2 rounded-lg border-gray-400 border-opacity-50"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Comment;
