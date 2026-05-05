'use client'

import { cn } from "@/app/lib/utils";
import Link from "next/link"
import { usePathname } from "next/navigation";

type NavItemProps = {
    label : string,
    href : string
}

export const NavItem = ({ label, href }: NavItemProps) => {
    const pathName = usePathname()

    const isActive = pathName === href;

    return (    
        <Link href={href} className= {cn(
            "text-white flex items-center gap-2 font-medium font-mono",
            isActive && "text-white"
        )}>
            <span className="text-stone-400">#</span>
                {label}
        </Link>
    )
}