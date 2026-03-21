import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader, SidebarMenuButton, SidebarMenuItem,
    SidebarProvider, SidebarTrigger
} from "../components/ui/sidebar.tsx";
import {TooltipProvider} from "@/components/ui/tooltip.tsx";
import {HomeIcon, NotebookTabs} from "lucide-react";


const RootLayout = () => (
    <TooltipProvider>
    <SidebarProvider>
        <Sidebar collapsible="icon">
            <SidebarHeader>
                <div className='flex justify-end'>
                    <SidebarTrigger />
                </div>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                            <Link to="/" className="[&.active]:font-bold">
                                <HomeIcon />
                                <span>Home</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                            <Link to="/about" className="[&.active]:font-bold">
                                <NotebookTabs/>
                                <span>About</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter />
        </Sidebar>
        <main className='flex flex-1 min-w-0 flex-col'>
            <header className='flex md:hidden'><SidebarTrigger /></header>
            <Outlet />
            <TanStackRouterDevtools />
        </main>
    </SidebarProvider>
    </TooltipProvider>
)

export const Route = createRootRoute({ component: RootLayout })
