import React from "react";

export default function Post() {
    return(
        <>
        <nav class="flex items-center justify-between bg-black p-4">
  <div class="flex items-center">
    <img src="https://media.licdn.com/dms/image/D4E0BAQH8C2rq-gomdg/company-logo_200_200/0/1714460779107/floqer_logo?e=1728518400&v=beta&t=vq19ZxmTrZN4UCHEzTeH3YgJq9dZt1GpGFrkIHklKjc" alt="Logo with side text" class="h-12 mr-2" />
    <span class="text-white hero text-2xl ">Newsblock</span>
  </div>
  <button class="group relative inline-flex h-10 items-center justify-center overflow-hidden rounded-md bg-neutral-200 px-8 font-semibold text-neutral-950"><span>Mint</span><div class="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]"><div class="relative h-full w-8 bg-white/20"></div></div></button>
</nav>
        <div className="w-full h-screen [background:radial-gradient(150%_300%_at_50%_10%,#000_30%,#63e_100%)]">
        <div className="flex flex-col items-start justify-center pt-20 mx-20 gap-4   px-10">
        <textarea className="w-full  resize-none bg-transparent focus:outline-none text-3xl text-white" placeholder="Title"></textarea>
        <textarea className=" post resize-none bg-transparent border-none focus:outline-none text-xl text-white w-screen" placeholder="Write your post here"></textarea>
        </div>
        </div>
        </>
    );
}