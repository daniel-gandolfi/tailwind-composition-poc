import React,{PropsWithChildren} from "react";
import styles from "./Post.module.css";

export function Post({
    className,
    title,
    body,
    loading
}: PropsWithChildren<{
    className?: string
    title: string
    body: string,
    loading: boolean
}>) {
    return <div className={styles.post + " border-gunmetal-gray border rounded-sm shadow-md flex-col justify-around  overflow-hidden p-2  " + className}>
        <div className={"text-lg h-[2em] overflow-hidden line-clamp-1"}>{loading ? "..." : title}</div>
        <div className={"text-ellipsis h-[1.7em] overflow-hidden"}>{loading ? "..." : body}</div>
    </div>
}