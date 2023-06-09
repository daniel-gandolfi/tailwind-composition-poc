import React from "react";
import dynamic from 'next/dynamic'
import Sidebar from "@/components/Sidebar";
const Badge = dynamic(() => import("@daniel-gandolfi/library").then(x => x.Badge), {ssr:false});


export default function Home() {
  return (
    <main className="grid grid-cols-12	 min-h-screen p-24 ">
      <div className="flex  flex-col items-center justify-between col-span-9 max-h-screen">
        <h1 className="text-6xl">This is a <span className="text-secondaryLight">test</span></h1>
        <Badge className="w-12 h-12">0</Badge>
        <button className="btn-primary p-3 text-white">
          Useless btn (tailwind components test)
        </button>
        <a href="#">This is a link</a>
        <b className="text-asdasd">
          A colorful test&nbsp;
          <span className="js-datetime-display"/>
        </b>
      </div>
      <div className="col-span-3">
          <Sidebar />
      </div>
    </main>
  )
}
