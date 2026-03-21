import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
    SidebarProvider, SidebarTrigger
} from "../components/ui/sidebar.tsx";
import {TooltipProvider} from "@/components/ui/tooltip.tsx";


const RootLayout = () => (
    <TooltipProvider>
    <SidebarProvider>
        <Sidebar>
            <SidebarHeader />
            <SidebarContent>
                <SidebarGroup>
                    <Link to="/" className="[&.active]:font-bold">
                        Home
                    </Link>
                    <Link to="/about" className="[&.active]:font-bold">
                        About
                    </Link>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter />
        </Sidebar>
        <main className='flex flex-1 min-w-0'>
            <SidebarTrigger />
            <Outlet />
            <TanStackRouterDevtools />
        </main>
    </SidebarProvider>
    </TooltipProvider>
)

export const Route = createRootRoute({ component: RootLayout })
