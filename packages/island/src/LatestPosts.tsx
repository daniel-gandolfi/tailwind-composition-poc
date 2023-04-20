import React,{ useEffect, useState } from "react";
import {Post} from "./Post"

export type PostDto = {
  "userId": number,
  "id": number,
  "title": string,
  "body":string 
};
function fetchPosts(signal: AbortSignal) : Promise<PostDto[]>{
    return fetch("https://jsonplaceholder.typicode.com/posts", {
        signal
    }).then(res => res.json())
}
const initialPosts = new Array(12).map((_,i) => ({
    id: -i,
    userId: -i,
    title: "",
    body: ""
}))
export function LatestPosts() {
    const [postInfo,setPostInfo] = useState<{
        loading: boolean
        posts: PostDto[]
    }>({
        loading: true,
        posts: initialPosts
    })
    useEffect(() => {
        if (!postInfo.posts || postInfo.posts === initialPosts){
            const controller = new AbortController();

            fetchPosts(controller.signal).then((posts) => {
                setPostInfo({
                    posts,
                    loading: false
                })
            })

            return () => {
                controller.abort()
            }
        }
    }) 

    return <div>
        {postInfo.posts.map(post => {return  <React.Fragment key={post.id}>
            <Post loading={postInfo.loading} title={post.title} body={post.body} />
            {/* testing tailwind "custom" classes dedup */}
            <div className="h-[2em]" />
        </React.Fragment>
        })}
    </div>
}