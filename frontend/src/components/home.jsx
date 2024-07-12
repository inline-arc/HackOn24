import React from "react";
import { Search } from 'lucide-react';
import { useWalletStore } from "../utils/usewallet";
import { useFormStore } from "../utils/useform";


export default function Home() {

  const formData = useFormStore((state) => state.formData);
  
  const wallet = useWalletStore(state => state.wallet);

    return (
        <> 
    <div class="flex min-h-screen bg-[#17101f] [background:radial-gradient(150%_300%_at_50%_10%,#000_30%,#63e_100%)]">
    <div class="w-1/5 p-6 border-r-2 border-[#2f2334]">
    <div class="flex items-center mb-6 size-12 gap-2">
      <img src="https://media.licdn.com/dms/image/D4E0BAQH8C2rq-gomdg/company-logo_200_200/0/1714460779107/floqer_logo?e=1728518400&v=beta&t=vq19ZxmTrZN4UCHEzTeH3YgJq9dZt1GpGFrkIHklKjc" alt="logo" class="rounded-md" />
      <span class="hero ml-2 text-2xl font-bold text-neutral-200 font-inter typo">NewsBlock</span>
    </div>
    {/* <nav class="space-y-6">
      <a href="#" class="flex items-center text-white font-semibold text-xl p-4 gap-2">
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1ob3VzZSI+PHBhdGggZD0iTTE1IDIxdi04YTEgMSAwIDAgMC0xLTFoLTRhMSAxIDAgMCAwLTEgMXY4Ii8+PHBhdGggZD0iTTMgMTBhMiAyIDAgMCAxIC43MDktMS41MjhsNy01Ljk5OWEyIDIgMCAwIDEgMi41ODIgMGw3IDUuOTk5QTIgMiAwIDAgMSAyMSAxMHY5YTIgMiAwIDAgMS0yIDJINWEyIDIgMCAwIDEtMi0yeiIvPjwvc3ZnPg==" alt="home-icon" class="mr-2 size-6" />
        Home
      </a>
    </nav> */}
  </div>
  
  
  <div class="flex-1">
<nav class="flex px-5 py-3 text-[#2f2334] border-b-2 border-[#2f2334] bg-transparent" aria-label="Breadcrumb">
  <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
    <li class="inline-flex items-center">
      <a href="#" class="inline-flex items-center text-md font-semibold text-gray-400">
        Home
      </a>
    </li>
    <li>
      <div class="flex items-center">
        <svg class="rtl:rotate-180 block w-3 h-3 mx-1 text-gray-400 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
        </svg>
        <a href="#" class="ms-1 text-md font-semibold text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">News</a>
      </div>
    </li>
    
  </ol>
</nav>

  </div>
  
      


  {/* search bar */}
  <div class="w-1/3 p-6 border-l-2 border-[#2f2334]">
  <div class="flex items-center gap-4 p-4 border-2 border-[#2f2334] rounded-lg mb-6">
    <img src="https://github.com/MetaMask/brand-resources/raw/master/SVG/SVG_MetaMask_Icon_Color.svg" alt="avatar"
      class="inline-block relative object-cover object-center !rounded-full w-12 h-12" />
     
    <div>
      <h6 class="block font-sans text-md antialiased font-semibold leading-relaxed tracking-normal text-inherit text-slate-200">
        {formData.firstName} {formData.lastName} ({formData.userName})
      </h6>
      <p class="block font-sans text-sm antialiased font-normal leading-normal text-slate-400">
        <p>User ID : {wallet}</p>
      </p>
    </div>
  </div>
    <div class="flex items-center mb-4 p-0 gap-2">
      <input type="text" placeholder="Search by Address / Txn Hash / Block / Token /" class="w-full p-2 rounded-lg bg-transparent text-[#d6cdda] m-2 border-2 border-[#2f2334] !outline-none" />
      <button className="group relative inline-flex h-11 items-center justify-center overflow-hidden rounded-md border-2 border-[#2f2334] px-2 font-semibold text-neutral-200"><Search size={32} strokeWidth={2.25}/><div class="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]"><div class="relative h-full w-8 bg-white/20"></div></div></button>
      
    </div>
    <div class="flex space-x-4 gap-4 items-center ml-2">
    <button class="group relative inline-flex h-10 items-center justify-center overflow-hidden rounded-md bg-[#7c65c1] px-8 font-semibold text-white"><span>Login</span><div class="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]"><div class="relative h-full w-8 bg-white/20"></div></div></button>
    <button class="group relative inline-flex h-10 items-center justify-center overflow-hidden rounded-md bg-[#7c65c1] px-8 font-semibold text-white"><span>Connect</span><div class="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]"><div class="relative h-full w-8 bg-white/20"></div></div></button>
    
    </div>
  </div>
</div>


        </>
    );
}