"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  Calendar,
  Home,
  Inbox,
  LogOut,
  Search,
  Settings,
  User,
} from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function AppSidebar() {
  const { theme } = useTheme();
  const pathname = usePathname();
  // Menu items.
  const items = [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: Home,
    },
    {
      title: "Manage",
      url: "/manage",
      icon: Inbox,
    },
    {
      title: "Billing",
      url: "#",
      icon: Calendar,
    },
    {
      title: "ACCOUNT PAGES",
      url: "#",
      icon: Calendar,
    },
    {
      title: "Search",
      url: "#",
      icon: Search,
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings,
    },
  ];

  const profileItems = [
    {
      title: "Profile",
      url: "/profile",
      icon: User,
    },
    {
      title: "Sign Out",
      url: "#",
      icon: LogOut,
    },
  ];

  const themeStyles = {
    light: {
      sidebarBg: "bg-[#f8f9fa]",
      menuBg: "bg-[#cb0c9f]",
      text: "text-[#67748e]",
      hoverText: "hover:text-[#252f40]",
    },
    dark: {
      sidebarBg: "bg-[#1c1c1c]",
      menuBg: "bg-[#252525]",
      text: "text-[#ffffff]",
      hoverText: "hover:text-[#f0f0f0]",
    },
    // Add styles for other themes as needed
  };
  const currentTheme = themeStyles[theme] || themeStyles.light;

  return (
    <Sidebar collapsible="icon">
      <SidebarContent className="ml-2 sidebar border-r border-sidebar-border">
        <SidebarGroup>
          <SidebarGroupLabel className="mb-4 h-auto">
            <div className="flex flex-row items-center mt-3 gap-1">
              <svg
                width="32"
                height="27"
                viewBox="0 0 32 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="Vector"
                  d="M31.9312 25.4146L29.7628 17.777V1.1469C29.7628 0.512522 29.2503 0 28.6159 0H3.38407C2.74969 0 2.23717 0.512522 2.23717 1.1469V17.777L0.0688094 25.4146C-0.199996 26.1637 0.351951 26.9522 1.14761 26.9522H30.8524C31.648 26.9522 32.2 26.1637 31.9312 25.4146ZM4.8177 2.58053H27.1823V16.7376H4.8177V2.58053ZM13.0001 24.3717L13.2904 23.0456H18.6773L18.9676 24.3717H13.0001ZM21.0284 24.3717L20.3439 21.2643C20.3152 21.1317 20.1969 21.0385 20.0643 21.0385H11.907C11.7708 21.0385 11.6561 21.1317 11.6274 21.2643L10.9429 24.3717H3.04717L4.56323 19.0314H27.4368L28.9528 24.3717H21.0284Z"
                  fill="#1C1C1C"
                />
              </svg>

              <div className="w-[127px] text-[#141414] text-sm font-semibold font-['Open Sans']">
                CPSS Dashboard
              </div>
            </div>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <div
                    className={`w-full h-[55px]  flex items-center ${
                      pathname === item.url
                        ? "bg-white rounded-lg shadow-md"
                        : "bg-[#cb0c9f"
                    }`}
                  >
                    <Link
                      href={item.url}
                      className="w-full flex items-center p-2"
                    >
                      <div
                        className={`w-8 h-8 rounded-lg shadow flex justify-center items-center ${
                          pathname === item.url ? "bg-[#cb0c9f]" : ""
                        }`}
                      >
                        <item.icon />
                      </div>

                      <span
                        className={`ml-4 text-sm font-normal font-['Open Sans'] ${
                          pathname === item.url
                            ? "text-[#252f40] font-semibold"
                            : "text-[#67748e] hover:text-[#252f40]"
                        }`}
                      >
                        {item.title}
                      </span>
                    </Link>
                  </div>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel className="text-[13px] font-bold font-['Open Sans'] text-[#67748e]">
            Profile Pages
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {profileItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <div
                    className={`w-full h-[55px]  flex items-center ${
                      pathname === item.url
                        ? "bg-white rounded-lg shadow-md"
                        : "bg-[#cb0c9f"
                    }`}
                  >
                    <Link
                      href={item.url}
                      className="w-full flex items-center p-2"
                    >
                      <div
                        className={`w-8 h-8 rounded-lg shadow flex justify-center items-center ${
                          pathname === item.url ? "bg-[#cb0c9f]" : ""
                        }`}
                      >
                        <item.icon />
                      </div>

                      <span
                        className={`ml-4 text-sm font-normal font-['Open Sans'] ${
                          pathname === item.url
                            ? "text-[#252f40] font-semibold"
                            : "text-[#67748e] hover:text-[#252f40]"
                        }`}
                      >
                        {item.title}
                      </span>
                    </Link>
                  </div>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
