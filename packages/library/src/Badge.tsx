import React,{PropsWithChildren} from "react";
export const defaultBadgeClassName = "w-8 h-8"

export function Badge({
    className,
    children
}: PropsWithChildren<{
    className: string
}>) {
    return <div className={"bg-secondaryLight font-bold text-gray-50 rounded-full grid place-items-center border-secondary border shadow-md " + className}>
        {children}
    </div>
}