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
                'h-16 w-16 border border-gray-950 cursor-pointer',
                +cellNumber & 1
                    ? (cellLetter.charCodeAt(0) & 1 ? 'bg-gray-300' : 'bg-gray-950')
                    : (cellLetter.charCodeAt(0) & 1 ? 'bg-gray-950' : 'bg-gray-300'),
                className
            )}
            {...props}>

        </div>
    )
}