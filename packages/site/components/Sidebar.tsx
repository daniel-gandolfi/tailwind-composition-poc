import dynamic from "next/dynamic";
import React, { createElement, useState } from "react";
const IslandMounter = dynamic(() => Promise.all([
    import("@daniel-gandolfi/island/dist/main.css"),
    import("@daniel-gandolfi/island/dist/index.js")
]).then(() => (() => null)), {ssr: false})

export default function Sidebar() {
    return <>
        <div className="js-datetime-display" />
        <div id="latest-posts" />
        <IslandMounter />
    </>
}