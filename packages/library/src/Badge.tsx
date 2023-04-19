import React,{PropsWithChildren} from "react";
export const defaultBadgeClassName = "w-8 h-8"

export function Badge({
    className,
    children
}: PropsWithChildren<{
    className: string
}>) {
    return <div className={"bg-misty-blue text-black rounded-full grid place-items-center border-black border shadow-md " + className}>
        {children}
    </div>
}