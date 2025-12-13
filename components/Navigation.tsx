"use client"

import * as React from "react"
import Link from "next/link"
import { CircleCheckIcon, CircleHelpIcon, CircleIcon, Menu, X } from "lucide-react"
import { useIsMobile } from "@/hooks/use-mobile"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const services = [
    { title: "ACP Cladding", href: "/acp-cladding", description: "High-quality ACP cladding for commercial and residential exteriors." },
    { title: "HPL Cladding", href: "/services/hpl-cladding", description: "Durable and aesthetic HPL cladding panels for modern designs." },
    { title: "WPC Cladding", href: "/services/wpc-cladding", description: "Weather-resistant WPC cladding suitable for all outdoor applications." },
    { title: "Aluminium Rafters", href: "/services/aluminium-rafters", description: "Premium aluminium rafters used in ceilings, façades and décor." },
    { title: "Signboards", href: "/sign-boards", description: "LED signs, glow signs, acrylic letters, retro boards and more." },
    { title: "Glass Work", href: "/glass-work", description: "Glass partitions, facades, railings and custom-designed structural glazing." },
]

export function NavigationBar() {
    const isMobile = useIsMobile()
    const [open, setOpen] = React.useState(false)

    return (
        <div className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-xl">

            {/* TOP BAR */}
            <div className="container flex items-center justify-between py-3">

                {/* LOGO */}
                <Link href="/" className="flex items-center gap-2 font-bold text-xl">
                    <img src="/images/logo.png" alt="Raichuri Arts Logo" className="h-9 w-auto" />
                    <span className="hidden sm:block">Raichuri Arts</span>
                </Link>




                {/* DESKTOP MENU */}
                {!isMobile && (
                    <NavigationMenu viewport={isMobile} className="w-full h-[80px]">
                        <NavigationMenuList className="flex items-center gap-6 ml-6">

                            <NavigationMenuItem>
                                <NavigationMenuLink asChild className={`${navigationMenuTriggerStyle()} font-semibold text-base`}>
                                    <Link href="/">Home</Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="font-semibold text-base">Services</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid gap-3 sm:w-[400px] md:w-[500px] md:grid-cols-2 p-2">
                                        {services.map((service) => (
                                            <ListItem key={service.title} title={service.title} href={service.href}>
                                                {service.description}
                                            </ListItem>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="font-semibold text-base">Company</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[300px] gap-4 p-4">
                                        <li>
                                            <LinkBlock title="About Us" href="/about">Learn more about Raichuri Arts.</LinkBlock>
                                            <LinkBlock title="Projects" href="/projects">Explore our completed works.</LinkBlock>
                                            <LinkBlock title="Contact" href="/contact">Get in touch for quotes.</LinkBlock>
                                        </li>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            <NavigationMenuItem className="hidden md:block">
                                <NavigationMenuTrigger className="font-semibold text-base">Quick Links</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[200px] gap-2 p-4">
                                        <LinkIcon href="/get-quote" icon={<CircleHelpIcon />}>Get a Quote</LinkIcon>
                                        <LinkIcon href="/gallery" icon={<CircleIcon />}>Gallery</LinkIcon>
                                        <LinkIcon href="/testimonials" icon={<CircleCheckIcon />}>Testimonials</LinkIcon>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>



                        </NavigationMenuList>
                    </NavigationMenu>
                )}
                <div className="flex items-center gap-2">
                    <Link
                        href="/acp-cladding"
                        className="px-2 py-1 text-sm sm:px-3 sm:py-2 sm:text-base bg-yellow-500 hover:bg-yellow-300 font-semibold rounded-md"
                    >
                        ACP Cladding
                    </Link>

                    <Link
                        href="/led-signboards"
                        className="px-2 py-1 text-sm sm:px-3 sm:py-2 sm:text-base bg-yellow-500 hover:bg-yellow-300 font-semibold rounded-md"
                    >
                        <div className="bg-linear-to-r rounded-sm px-1 sm:px-2 text-amber-50 from-purple-500 via-red-500 to-orange-500">
                            LED Sign Boards
                        </div>
                    </Link>
                </div>

                {/* PHONE (Desktop Only) */}
                {!isMobile && (
                    <div className="font-bold text-primary bg-primary/10 px-4 py-2 mx-3 rounded-lg shadow-sm">
                        📞 +91 83091 89670
                    </div>
                )}

                {/* HAMBURGER BUTTON (Mobile) */}
                {isMobile && (
                    <button onClick={() => setOpen(!open)} className="p-2 rounded-lg bg-white shadow">
                        {open ? <X size={28} /> : <Menu size={28} />}
                    </button>
                )}

            </div>

            {/* MOBILE MENU DROPDOWN */}
            {isMobile && open && (
                <div className="bg-white border-t shadow-md animate-in slide-in-from-top duration-200">
                    <div className="flex flex-col p-4 gap-4">

                        <Link href="/" className="font-semibold text-lg">Home</Link>

                        <div>
                            <div className="font-semibold text-lg mb-1">Services</div>
                            <div className="flex flex-col gap-2">
                                {services.map((s) => (
                                    <Link key={s.title} href={s.href} className="text-sm text-muted-foreground">
                                        {s.title}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <div>
                            <div className="font-semibold text-lg mb-1">Company</div>
                            <div className="flex flex-col gap-2">
                                <Link href="/about-us">About Us</Link>
                                <Link href="/projects">Projects</Link>
                                <Link href="/contact">Contact</Link>
                            </div>
                        </div>

                        <Link href="/get-quote" className="font-semibold bg-yellow-500 text-black px-4 py-2 rounded-md">
                            Get a Quote
                        </Link>

                        <div className="font-bold text-primary bg-primary/10 px-4 py-2 rounded-lg shadow-sm mt-2">
                            📞 +91 83091 89670
                        </div>
                    </div>
                </div>
            )}



        </div>
    )
}


function ListItem({ title, children, href }: any) {
    return (
        <li>
            <NavigationMenuLink asChild>
                <Link href={href} className="block p-2 rounded-md hover:bg-accent transition">
                    <div className="text-base font-semibold">{title}</div>
                    <p className="text-muted-foreground text-sm leading-tight">{children}</p>
                </Link>
            </NavigationMenuLink>
        </li>
    )
}

function LinkBlock({ title, href, children }: any) {
    return (
        <NavigationMenuLink asChild>
            <Link href={href} className="block mb-3">
                <div className="font-semibold">{title}</div>
                <div className="text-muted-foreground text-sm">{children}</div>
            </Link>
        </NavigationMenuLink>
    )
}

function LinkIcon({ href, icon, children }: any) {
    return (
        <NavigationMenuLink asChild>
            <Link href={href} className="flex items-center gap-2 font-medium">
                {icon} {children}
            </Link>
        </NavigationMenuLink>
    )
}



export default function PaintedLink({ href, children }: any) {
    return (
        <div className="relative inline-block">
            <img
                src={"/images/brush.png"}
                className="absolute inset-0 -z-10 w-full h-full object-contain"
            />

            <Link href={href} className="relative font-semibold text-base px-3 py-1">
                {children}
            </Link>
        </div>

    );
}
