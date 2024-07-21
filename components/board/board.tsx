'use client'

import { HTMLAttributes, useState } from "react";
import { BoardCell } from "./cell";
import { cn } from "@/utils/cn";

interface BoardInterface {
    cells: number;
}

export function Board({ cells }: BoardInterface) {
    const [selectedCell, setSelectedCell] = useState<string>('');

    const columnCellQuantity = Math.sqrt(cells);
    if (columnCellQuantity % 1 !== 0) {
        throw new Error("The number of cells must be a square number");
    }

    return (
        <section className="flex flex-col gap-6">
            <span className="text-base text-gray-950">
                Selected cell: {selectedCell}
            </span>
            <div id='__board__'
                className={cn(
                    `grid grid-cols-${columnCellQuantity}`,
                    'border border-gray-950')}>
                {Array.from(Array(cells)).map((_, i) => {
                    const cellValueLetter = String.fromCharCode(65 + (i - (Math.floor(i / columnCellQuantity) * columnCellQuantity)));
                    const cellValueNumber = Math.floor(i / columnCellQuantity) + 1
                    const cellValue = `${cellValueLetter}${cellValueNumber}`;
                    return <BoardCell
                        key={`__board__cell__${cellValue}`}
                        id={`__board__cell__${cellValue}`}
                        cellValue={cellValue}
                        onClick={() => setSelectedCell(cellValue)}
                    />
                })}
            </div>
        </section>
    )
}