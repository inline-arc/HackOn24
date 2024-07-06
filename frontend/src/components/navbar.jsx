import React from "react";

export default function Navbar() {
    return (
        <>
        <div>
  <div class="mx-auto max-w-full py-4 lg:px-8 relative bg-black">
    <div class="relative flex h-16 space-x-10 w-full">
      <div class="flex justify-start"><a class="flex flex-shrink-0 items-center" href="/">
          <img class="block h-12 w-auto" height="64px" src="https://media.licdn.com/dms/image/D4E0BAQH8C2rq-gomdg/company-logo_200_200/0/1714460779107/floqer_logo?e=1728518400&v=beta&t=vq19ZxmTrZN4UCHEzTeH3YgJq9dZt1GpGFrkIHklKjc"/>
        </a>
      </div>
      <div class="flex-shrink-0 flex px-2 py-3 items-center space-x-8 flex-1 justify-end justify-self-end">
          <button className="group relative inline-flex h-10 items-center justify-center overflow-hidden rounded-md border-2 px-8 font-semibold text-neutral-200"><span>Github</span><div class="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]"><div class="relative h-full w-8 bg-white/20"></div></div></button>
          <button class="group relative inline-flex h-10 items-center justify-center overflow-hidden rounded-md bg-neutral-200 px-8 font-semibold text-neutral-950"><span>Connect</span><div class="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]"><div class="relative h-full w-8 bg-white/20"></div></div></button>
      </div>
    </div>
  </div>
  </div>
        </>
    );
}