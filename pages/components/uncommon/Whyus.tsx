import React from "react";

const Whyus = () => {
  return (
    <>
      <div className="min-h-screen">
        <div className="flex items-center justify-center py-10 text-3xl font-bold">
          WHY US 
        </div>
        <div className="flex items-center justify-center py-10 text-xl font-bold text-gray-600 px-32">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ullamcorper a lacus vestibulum sed. Scelerisque eleifend donec pretium
          vulputate sapien. Eu lobortis elementum nibh tellus molestie. Quis
          varius quam quisque id diam. Aliquam sem et tortor consequat id porta
          nibh venenatis cras.
        </div>
        <div className="flex items-center justify-center gap-52 py-24">
          <div className="group h-96 w-80 [perspective:1000px]">
            <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0">
                <img
                  src="/lion.jpeg" //Photo Card 1
                  className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
                />
              </div>

              <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                <div className="text-4xl">CARD 1 TEXT</div>
              </div>
            </div>
          </div>
          <div className="group h-96 w-80 [perspective:1000px]">
            <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0">
                <img
                  src="/monkey.jpeg" //Photo Card 2
                  className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
                />
              </div>

              <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                <div className="text-4xl"> CARD 2 TEXT </div>
              </div>
            </div>
          </div>
          <div className="group h-96 w-80 [perspective:1000px]">
            <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0">
                <img
                  src="/tiger.jpeg" //Photo Card 3
                  className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
                />
              </div>

              <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                <div className="text-4xl"> CARD 3 TEXT </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Whyus;
