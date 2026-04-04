import { TooltipProvider } from "@/components/ui/tooltip";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar.tsx";
import { Link } from "@tanstack/react-router";
import { BookHeart, HomeIcon } from "lucide-react";
import type { ReactNode } from "react";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <TooltipProvider>
      <SidebarProvider>
        <Sidebar collapsible="icon">
          <SidebarHeader>
            <div className="flex justify-end">
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
                  <Link to="/cookbook" className="[&.active]:font-bold">
                    <BookHeart />
                    <span>Cookbook</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter />
        </Sidebar>
        <main className="flex flex-1 min-w-0 flex-col">
          <header className="flex md:hidden">
            <SidebarTrigger />
          </header>
          {children}
        </main>
      </SidebarProvider>
    </TooltipProvider>
  );
};
