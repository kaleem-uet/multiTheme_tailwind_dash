import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";
import { Bell, Search, Settings, Slash } from "lucide-react";
import { SidebarTrigger } from "../ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Input } from "../ui/input";

export default function Topbar() {
  return (
    // <div className="flex flex-row justify-between items-center">

    //   <div className="flex flex-row items-center gap-3">
    //     <Avatar>
    //       <AvatarImage src="https://github.com/shadcn.png" />
    //       <AvatarFallback>CN</AvatarFallback>
    //     </Avatar>
    //     <div className="w-[53px] text-[#67748e] text-sm font-semibold font-['Open Sans']">
    //       Director
    //     </div>
    //     <span className=" cursor-pointer ">
    //       <Settings />
    //     </span>
    //     <div className="relative inline-flex items-center">
    //       <Bell className="w-6 h-6 text-foreground hover:text-muted-foreground cursor-pointer transition-colors duration-200" />
    //       <div className="absolute -top-2 -right-2 inline-flex items-center justify-center">
    //         <div className="w-5 h-5 bg-destructive rounded-full flex items-center justify-center">
    //           <span className="text-[10px] font-semibold text-destructive-foreground">
    //             99
    //           </span>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="flex flex-row justify-between items-center">
      <div>
        <SidebarTrigger />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Pages</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <Slash />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink href="/components">Dashboard</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <span className=" text-base font-bold font-['Open Sans']">
          Dashboard
        </span>
      </div>
      <div className="flex flex-row items-center gap-3">
        <div className="relative">
          <Input
            type="email"
            placeholder="Search"
            className="h-10 bg-white rounded-lg border border-[#d2d6da] pl-10"
          />
          <div className="absolute inset-y-0 left-3 flex items-center text-gray-400">
            <Search />
          </div>
        </div>

        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="text-sm font-semibold font-['Open Sans']">Director</div>

        <span className="cursor-pointer ">
          <Settings />
        </span>
        <div className="relative inline-flex items-center">
          <Bell className="w-6 h-6 text-foreground hover:text-muted-foreground cursor-pointer transition-colors duration-200" />
          <div className="absolute -top-2 -right-2 inline-flex items-center justify-center">
            <div className="w-5 h-5 bg-destructive rounded-full flex items-center justify-center">
              <span className="text-[10px] font-semibold text-destructive-foreground">
                99
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
