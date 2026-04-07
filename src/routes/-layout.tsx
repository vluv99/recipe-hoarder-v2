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
import { Link, type ToPathOption } from "@tanstack/react-router";
import { BadgePlus, BookHeart, HomeIcon } from "lucide-react";
import type { ReactElement, ReactNode } from "react";

export const Layout = ({ children }: { children: ReactNode }) => {
  const createItem = (
    navigateTo: ToPathOption,
    label: string,
    icon: ReactElement<SVGSVGElement>,
  ) => {
    return (
      <SidebarMenuItem>
        <SidebarMenuButton asChild>
          <Link to={navigateTo} className="[&.active]:font-bold">
            {icon}
            <span>{label}</span>
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
    );
  };

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
              {createItem("/", "Home", <HomeIcon />)}
              {createItem("/cookbook", "Cookbook", <BookHeart />)}
              {createItem("/recipe/new", "Add New Recipe", <BadgePlus />)}
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
