"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"
import { Menu, Tag, HelpCircle, FileText, Info, ChevronDown, Building2, Package } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { useState } from "react"

export function SiteHeader() {
  const [servicesOpen, setServicesOpen] = useState(false)

  const services = [
    {
      href: "/3D-architecture-visualization-studio",
      label: "ArchViz Render",
      icon: Building2,
      description: "Photoreal 3D renders & CGI walkthroughs",
    },
    {
      href: "/3d-product-rendering",
      label: "3D Product Rendering",
      icon: Package,
      description: "Studio-quality product visuals",
    },
    {
      href: "/",
      label: "3D Product Animation",
      icon: Package,
      description: "Motion-led storytelling for products",
    },
  ]

  const links = [
    { href: "#pricing", label: "Pricing", icon: Tag },
    { href: "faq", label: "FAQ", icon: HelpCircle },
    { href: "#blog", label: "Blog", icon: FileText },
    { href: "About", label: "About", icon: Info },
  ]

  return (
    <header className="sticky top-0 z-50 p-4">
      <div className="container mx-auto max-w-4xl">
        <div className="flex h-14 items-center justify-between px-6 bg-white/95 backdrop-blur-md border border-text/10 rounded-full shadow-sm">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-1.5">
            <Image src="/icons/boresover-logo.svg" alt="Bore'sOver logo" width={24} height={24} className="h-6 w-6" />
            <span className="font-semibold tracking-wide text-text">Bore&apos;sOver</span>
          </Link>

          {/* Desktop Nav with Services Dropdown */}
          <nav className="hidden items-center gap-6 text-sm text-text/80 md:flex">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className="bg-transparent text-text/80 hover:text-primary data-[state=open]:text-primary
                               hover:bg-transparent focus:bg-transparent
                               data-[state=open]:bg-transparent data-[state=open]:hover:bg-transparent
                               data-[active=true]:bg-transparent"
                  >
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[280px] gap-2 p-3 bg-white/98 backdrop-blur-xl border border-text/20 rounded-lg shadow-lg">
                      {services.map((service) => (
                        <li key={service.href}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={service.href}
                              className="group relative flex items-start gap-3 rounded-xl p-3 transition-all
                                         hover:bg-primary/5 hover:ring-1 hover:ring-primary/30
                                         hover:shadow-[0_0_0_1px_rgba(54,124,221,0.15),0_0_20px_rgba(54,124,221,0.1)]
                                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                            >
                              <service.icon className="h-5 w-5 text-primary mt-0.5 shrink-0 group-hover:text-primary/80" />
                              <div>
                                <div className="text-sm font-medium text-text group-hover:text-primary">
                                  {service.label}
                                </div>
                                <p className="text-xs text-text/60 mt-0.5">{service.description}</p>
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-primary transition-colors">
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex">
            <Button
              asChild
              className="bg-primary text-white font-medium rounded-lg px-6 py-2.5
                         hover:bg-primary/90 hover:shadow-md hover:scale-[1.02]
                         transition-all"
            >
              <Link href="#contact">Chat With Us</Link>
            </Button>
          </div>

          {/* Mobile Nav */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-text/20 bg-white/90 text-text hover:bg-gray-50"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-white border-text/20 p-0 w-64 flex flex-col">
                {/* Brand Header */}
                <div className="flex items-center gap-1.5 px-4 py-4 border-b border-text/10">
                  <Image src="/icons/boresover-logo.svg" alt="Bore'sOver logo" width={24} height={24} className="h-6 w-6" />
                  <span className="font-semibold tracking-wide text-text text-lg">Bore&apos;sOver</span>
                </div>

                {/* Nav Links */}
                <nav className="flex flex-col gap-1 mt-2 text-text">
                  <Collapsible open={servicesOpen} onOpenChange={setServicesOpen}>
                    <CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-3 hover:bg-primary/5 hover:text-primary transition-colors">
                      <div className="flex items-center gap-3">
                        <span className="inline-flex items-center justify-center w-5 h-5 text-text/60">
                          <Building2 className="h-4 w-4" />
                        </span>
                        <span className="text-sm">Services</span>
                      </div>
                      <ChevronDown
                        className={`h-4 w-4 text-text/60 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                      />
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <div className="flex flex-col bg-primary/5 border-l-2 border-primary/30 ml-4">
                        {services.map((service) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            className="flex items-center gap-3 pl-8 pr-4 py-2.5 hover:bg-primary/10 hover:text-primary transition-colors"
                          >
                            <service.icon className="h-4 w-4 text-primary/70" />
                            <span className="text-sm">{service.label}</span>
                          </Link>
                        ))}
                      </div>
                    </CollapsibleContent>
                  </Collapsible>

                  {links.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className="flex items-center gap-3 px-4 py-3 hover:bg-primary/5 hover:text-primary transition-colors"
                    >
                      <span className="inline-flex items-center justify-center w-5 h-5 text-text/60">
                        <l.icon className="h-4 w-4" />
                      </span>
                      <span className="text-sm">{l.label}</span>
                    </Link>
                  ))}
                </nav>

                {/* CTA Button at Bottom */}
                <div className="mt-auto border-t border-text/10 p-4">
                  <Button
                    asChild
                    className="w-full bg-primary text-white font-medium rounded-lg px-6 py-2.5
                               hover:bg-primary/90 hover:shadow-md hover:scale-[1.02]
                               transition-all"
                  >
                    <Link href="#contact">Chat With Us</Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
