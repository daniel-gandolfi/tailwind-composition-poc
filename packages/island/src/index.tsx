import React from "react"
import {createRoot} from "react-dom/client"
import "./index.css"
import {LatestPosts as LatestPostsInternal} from "./LatestPosts"

export const LatestPosts = LatestPostsInternal
if (typeof window !== "undefined") {
    !("island" in window) && Object.defineProperty(window, "island", {
        value: LatestPosts
    })
} else if (typeof global !== "undefined") {
    !("island" in global) && Object.defineProperty(global, "island", {
        value: LatestPosts
    })
}
function render() {
    const node = document.getElementById("latest-posts");
    createRoot(node).render(<LatestPosts />)
}

render() 