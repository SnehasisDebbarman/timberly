
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Link, useLocation } from "react-router-dom"
import { ArrowLeftRight, Boxes, LayoutDashboard, Package, User } from "lucide-react"
const sidebarNavItems = [
    {
        title: "Dashboard",
        href: "/dashboard/home",
        icon: () => <LayoutDashboard />
    },
    {
        title: "Products",
        href: "/dashboard/products",
        icon: () => <Package />
    },
    {
        title: "Transactions",
        href: "/dashboard/transactions",
        icon: () => <ArrowLeftRight />
    },
    {
        title: "Stocks",
        href: "/dashboard/stocks",
        icon: () => <Boxes />
    },
    {
        title: "Customers",
        href: "/dashboard/customers",
        icon: () => <User />
    },
]


export default function SidebarNav() {
    const location = useLocation();
    const { pathname } = location;
    return (
        <aside id="default-sidebar" className="fixed top-0 left-0 z-40 h-screen transition-transform -translate-x-full bg-gray-50 w-44 sm:translate-x-0" aria-label="Sidebar">
            <h2 className="pt-4 text-3xl font-semibold text-center josefin-slab-500">Timberly</h2>
            <div className="h-full px-3 py-4 overflow-y-auto dark:bg-gray-800">
                <ul className="space-y-2 font-medium">
                    {sidebarNavItems.map((item) => (
                        <li className="w-full">
                            <Link
                                key={item.href}
                                to={item.href}
                                className={cn(
                                    buttonVariants({ variant: "ghost" }),
                                    pathname === item.href
                                        ? "bg-gray-200 hover:bg-muted"
                                        : "hover:bg-transparent hover:underline",
                                    "justify-start gap-3 w-full"
                                )}
                            >
                                {item.icon()}
                                {item.title}
                            </Link>
                        </li>
                    ))}

                </ul>
            </div>
        </aside>)
}