import React from "react";

export default function Navbar() {
    return (
        <>
        <div>
  <div class="mx-auto max-w-full py-4 lg:px-8 relative bg-black">
    <div class="relative flex h-16 space-x-10 w-full">
      <div class="flex justify-start"><a class="flex flex-shrink-0 items-center" href="/">
          <img class="block h-12 w-auto" height="60px" src="https://media.licdn.com/dms/image/D4E0BAQH8C2rq-gomdg/company-logo_200_200/0/1714460779107/floqer_logo?e=1728518400&v=beta&t=vq19ZxmTrZN4UCHEzTeH3YgJq9dZt1GpGFrkIHklKjc"/>
        </a>
      </div>
      <div class="flex-shrink-0 flex px-2 py-3 items-center space-x-8 flex-1 justify-end justify-self-end"><a
          class="text-neutral-100 hover:text-lime-700 text-sm font-medium" href="/login">Github</a>
        <a class="text-neutral-950 bg-neutral-100 hover:bg-gray-900 inline-flex items-center justify-center px-3 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm "
          href="/signup">Connect</a>
      </div>
    </div>
  </div>
  </div>
        </>
    );
}