import { useEffect, useState } from "react";

interface MousePosition {
    mouseX: number;
    mouseY: number;
}

export function useMousePosition() {
    const [mousePosition, setMousePosition] = useState<MousePosition>({ mouseX: 0, mouseY: 0 });

    useEffect(() => {
        const updateMousePosition = (ev: any) => {
            setMousePosition({ mouseX: ev.clientX, mouseY: ev.clientY });
        };
        addEventListener('mousemove', updateMousePosition);
        return () => {
            removeEventListener('mousemove', updateMousePosition);
        };
    }, []);

    return mousePosition;
}