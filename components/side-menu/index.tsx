'use client'

import { cn } from "@/utils/cn";
import { Coffee, Dice6, Mouse, Rotate3D } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function SideMenu() {
    const pathname = usePathname()

    return (
        <aside className={cn(
            'absolute left-0 w-4 flex items-center h-full bg-gray-600',
            'group hover:w-40 transition-all z-20',
            'after:content-[""] after:absolute after:top-0 after:right-0 after:h-[10%] after:w-[1px] after:bg-green-400',
            'before:content-[""] before:absolute before:bottom-0 before:right-0 before:h-[10%] before:w-[1px] before:bg-green-400',
            'hover:after:h-[30%] hover:before:h-[30%] after:transition-all before:transition-all after:duration-500 before:duration-500'
        )}>
            <div className={cn(
                'absolute left-0 clip-side-menu-arrow-wrapper h-[40%] w-10 bg-gray-600',
                'group-hover:left-40 transition-all')} />
            <nav className={cn(
                'flex flex-col items-center justify-center gap-10 z-30',
                'absolute -right-4'
            )}>
                <Link
                    data-active={pathname === '/'}
                    href='/'
                    className="side-menu-link">
                    <span className="side-menu-span">
                        Home
                    </span>
                    <Coffee size={24} />
                </Link>
                <Link
                    data-active={pathname === '/board'}
                    href='/board'
                    className="side-menu-link">
                    <span className="side-menu-span">
                        Board
                    </span>
                    <Dice6 size={24} />
                </Link>
                <Link
                    data-active={pathname === '/3d-card'}
                    href='/3d-card'
                    className="side-menu-link">
                    <span className="side-menu-span">
                        3D Card
                    </span>
                    <Rotate3D size={24} />
                </Link>
                <Link
                    data-active={pathname === '/mouse-follower'}
                    href='/mouse-follower'
                    className="side-menu-link">
                    <span className="side-menu-span">
                        Mouse Follower
                    </span>
                    <Mouse size={24} />
                </Link>
            </nav>
        </aside>
    )
}