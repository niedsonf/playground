'use client'

import { useState } from "react";
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
            <span className="text-base text-gray-300">
                Selected cell: {selectedCell}
            </span>
            <div id="__board__" className="board">
                <div style={{ gridArea: 'letter' }} className="flex bg-gray-700">
                    {Array.from(Array(columnCellQuantity)).map((_, i) => (
                        <span
                            key={`board-coord-letter-${i}`}
                            className="h-16 w-16 grid place-items-center text-gray-300 rotate-180">
                            {String.fromCharCode(65 + i)}
                        </span>
                    ))}
                </div>
                <div style={{ gridArea: 'number' }} className="flex flex-col bg-gray-700">
                    {Array.from(Array(columnCellQuantity)).map((_, i) => (
                        <span
                            key={`board-coord-number-${i}`}
                            className="h-16 w-16 grid place-items-center text-gray-300 rotate-180">
                            {i + 1}
                        </span>
                    ))}
                </div>
                <div style={{ gridArea: 'letter-invert' }} className="flex bg-gray-700">
                    {Array.from(Array(columnCellQuantity)).map((_, i) => (
                        <span
                            key={`board-coord-letter-invert-${i}`}
                            className="h-16 w-16 grid place-items-center text-gray-300">
                            {String.fromCharCode(65 + i)}
                        </span>
                    ))}
                </div>
                <div style={{ gridArea: 'number-invert' }} className="flex flex-col bg-gray-700">
                    {Array.from(Array(columnCellQuantity)).map((_, i) => (
                        <span
                            key={`board-coord-number-invert-${i}`}
                            className="h-16 w-16 grid place-items-center text-gray-300">
                            {i + 1}
                        </span>
                    ))}
                </div>
                <div id='__board__cells__'
                    style={{ gridArea: 'board' }}
                    className={cn(
                        `grid grid-cols-${columnCellQuantity}`,
                        'border-[2px] border-gray-950')}>
                    {Array.from(Array(cells)).map((_, i) => {
                        const cellValueLetter = String.fromCharCode(65 + (i - (Math.floor(i / columnCellQuantity) * columnCellQuantity)));
                        const cellValueNumber = Math.floor(i / columnCellQuantity) + 1
                        const cellValue = `${cellValueLetter}${cellValueNumber}`;
                        return <BoardCell
                            key={`__board__cell__${cellValue}`}
                            id={`__board__cell__${cellValue}`}
                            cellValue={cellValue}
                            onClick={() => setSelectedCell(cellValue)} />
                    })}
                </div>
            </div>
        </section>
    )
}