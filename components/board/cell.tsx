import { cn } from "@/utils/cn";
import { HTMLAttributes } from "react";

interface BoardCellInterface extends HTMLAttributes<HTMLDivElement> {
    cellValue: string;
}

export function BoardCell({ cellValue, className, ...props }: BoardCellInterface) {
    const [cellLetter, cellNumber] = cellValue.split('');

    return (
        <div
            className={cn(
                'h-16 w-16 cursor-pointer hover:outline outline-2 -outline-offset-8 outline-green-400 hover:animate-pulse',
                +cellNumber & 1
                    ? (cellLetter.charCodeAt(0) & 1 ? 'bg-gray-300' : 'bg-gray-950')
                    : (cellLetter.charCodeAt(0) & 1 ? 'bg-gray-950' : 'bg-gray-300'),
                className
            )}
            {...props}>

        </div>
    )
}