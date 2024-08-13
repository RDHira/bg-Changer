import React from "react";

function Cards() {
  return (
    <div className="font-serif">
      <div>
        <h1 className="Card_head text-white text-3xl font-bold text-center uppercase pt-6 ">
        Developer Teams
        </h1>
      </div>
      <div className=" md:flex gap-3 justify-between mx-5 py-4">
        <div className="w-[400px] h-[450px]  border shadow-2xl rounded-lg ">
          <img className="rounded-lg" src="https://github.com/RDHira/bg-Changer/blob/main/src/assets/a.jpg?raw=true" alt="" />
          <h1 className="text-white text-3xl font-bold text-center">
            Front-End Developer
          </h1>
          <p className="text-white font-medium px-3 py-2 text-center ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non quas
            perspiciatis repellendus minima eum, laboriosam dignissimos. Non
            fugit quos dolorem atque hic nulla optio adipisci deleniti, nemo ad
            debitis iusto!
          </p>
        </div>

        <div className="w-[400px] h-[450px]  border shadow-2xl rounded-lg ">
          <img className="rounded-lg" src="https://github.com/RDHira/bg-Changer/blob/main/src/assets/a.jpg?raw=true" alt="" />
          <h1 className="text-white text-3xl font-bold text-center">
            FullStack Developer
          </h1>
          <p className="text-white font-medium px-3 py-2 text-center ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non quas
            perspiciatis repellendus minima eum, laboriosam dignissimos. Non
            fugit quos dolorem atque hic nulla optio adipisci deleniti, nemo ad
            debitis iusto!
          </p>
        </div>

        <div className="w-[400px] h-[450px]  border shadow-2xl rounded-lg ">
          <img className="rounded-lg" src="https://github.com/RDHira/bg-Changer/blob/main/src/assets/a.jpg?raw=true" alt="" />
          <h1 className="text-white text-3xl font-bold text-center">
            Back-End Developer
          </h1>
          <p className="text-white font-medium px-3 py-2 text-center ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non quas
            perspiciatis repellendus minima eum, laboriosam dignissimos. Non
            fugit quos dolorem atque hic nulla optio adipisci deleniti, nemo ad
            debitis iusto!
          </p>
        </div>
      </div>

      {/* // For responsive */}
      <div className="">
        <div className="hidden  md:flex-col  ">
          <div className="w-[400px] h-[450px]  border shadow-2xl rounded-lg ">
            <img className="rounded-lg" src="./src/assets/a.jpg" alt="" />
            <h1 className="text-white text-3xl font-bold text-center">
              FullStack Developer
            </h1>
            <p className="text-white font-medium px-3 py-2 text-center ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non quas
              perspiciatis repellendus minima eum, laboriosam dignissimos. Non
              fugit quos dolorem atque hic nulla optio adipisci deleniti, nemo
              ad debitis iusto!
            </p>
          </div>

          <div className="w-[400px] h-[450px] border shadow-2xl rounded-lg ">
            <img className="rounded-lg" src="./src/assets/a.jpg" alt="" />
            <h1 className="text-white text-3xl font-bold text-center">
              FullStack Developer
            </h1>
            <p className="text-white font-medium px-3 py-2 text-center ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non quas
              perspiciatis repellendus minima eum, laboriosam dignissimos. Non
              fugit quos dolorem atque hic nulla optio adipisci deleniti, nemo
              ad debitis iusto!
            </p>
          </div>

          <div className="w-[400px] h-[450px]  border shadow-2xl rounded-lg ">
            <img className="rounded-lg" src="./src/assets/a.jpg" alt="" />
            <h1 className="text-white text-3xl font-bold text-center">
              FullStack Developer
            </h1>
            <p className="text-white font-medium px-3 py-2 text-center ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non quas
              perspiciatis repellendus minima eum, laboriosam dignissimos. Non
              fugit quos dolorem atque hic nulla optio adipisci deleniti, nemo
              ad debitis iusto!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
