import Link from "next/link"
import {
  Home,
  LineChart,
  Menu,
  Package,
  Search,
  ShoppingCart,
  Users,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"
import {ModeToggle} from "@/components/common/DarkModeToggle";
import {Input} from "@/components/ui/input";
import { NavItem } from "./Container"


interface ViewProps {
  children: React.ReactNode
  searchKey: string
  setSearchKey: (searchKey: string) => void
  navItems: NavItem[]
}

export default function View({
  children,
  searchKey,
  setSearchKey,
  navItems,
}: ViewProps) {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Image src="/icons/code.svg" className="h-6 w-6" width={24} height={24} alt="logo"></Image>
              <span className="">Working Tools</span>
            </Link>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              {navItems.map((item, index) => {
                const isActive = index === 0

                return (
                  <Link
                    key={item.title}
                    href={item.href}
                    className={`
                      flex items-center gap-3 rounded-lg px-3 py-2  transition-all hover:text-primary
                      ${isActive ? "bg-muted text-primary" : "text-muted-foreground"}
                    `}
                  >
                    <item.icon className="h-4 w-4" />
                    {item.title}
                  </Link>
                )
              })}
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">

              <nav className="grid gap-2 text-lg font-medium">
                <Link
                  href="#"
                  className="flex items-center gap-2 text-lg font-semibold"
                >
                  <Image src="/icons/code.svg" className="h-6 w-6" width={24} height={24} alt="logo"></Image>
                  <span className="sr-only">Working Tools</span>
                </Link>

                <div className="block w-full md:hidden relative mt-8 mb-4">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"/>
                  <Input
                    type="search"
                    placeholder="Search tools..."
                    className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                    value={searchKey}
                    onChange={(e) => setSearchKey(e.target.value || "")}
                  />
                </div>
                {navItems.map((item, index) => {
                  const isActive = index === 0

                  return (
                    <Link
                      key={item.title}
                      href={item.href}
                      className={`
                        flex items-center gap-4 rounded-xl px-3 py-2 hover:text-foreground
                        ${isActive ? "bg-muted text-primary" : "text-muted-foreground"}
                      `}
                    >
                      <item.icon className="h-5 w-5"/>
                      {item.title}
                    </Link>
                  )
                })}
              </nav>
            </SheetContent>
          </Sheet>
          <div className="w-full flex-1">
            <form>
              <div className="hidden md:block relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"/>
                <Input
                  type="search"
                  placeholder="Search tools..."
                  className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                  value={searchKey}
                  onChange={(e) => setSearchKey(e.target.value || "")}
                />
              </div>
            </form>
          </div>
          <ModeToggle/>

        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          {children}
        </main>
      </div>
    </div>
  )
}
