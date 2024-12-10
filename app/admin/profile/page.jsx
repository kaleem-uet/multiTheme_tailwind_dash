import Topbar from "@/components/topBar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Bell,
  Edit,
  Group,
  Projector,
  Search,
  Settings,
  Slash,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import profile from "../../assets/profile.png";
import ThemeButtons from "@/components/themeBtn/themeBtn";
import { Separator } from "@/components/ui/separator";
import InfoRow from "@/components/infoRow";
import Link from "next/link";
import SellerRow from "@/components/sellerRow";
export default function page() {
  return (
    <div>
      <div className="relative px-4 py-2 w-full h-[308px] bg-gradient-to-br from-[#ff0080] to-[#7928ca] rounded-xl">
        <div className="flex flex-wrap items-center justify-between px-4 absolute top-60 left-4 right-4 w-[11/12] h-auto md:h-[114px]  bg-white/80 rounded-xl shadow backdrop-blur-[27.18px]">
          <div className="gap-2 flex items-center justify-between ">
            <Image
              width={50} // Numeric value for width
              height={50} // Numeric value for height
              src={profile} // Assuming `profile` is a valid imported path or URL
              className="rounded-md" // Tailwind CSS class for small rounded corners
              alt="Profile picture of the user"
            />
            <div>
              <h5 className="text-[#141414] text-2xl font-semibold font-['Open Sans']">
                Nguyen Van Khuong
              </h5>
              <h6 className="text-[#8c8c8c] text-sm font-semibold font-['Open Sans']">
                Director
              </h6>
            </div>
          </div>
          <div className="gap-1 md:flex md:items-center  flex-wrap ">
            <div className="gap-2 flex items-center justify-center w-[113px] h-[34px] bg-white rounded-lg shadow">
              <Group />
              <div className="text-[#67748e] text-sm font-semibold font-['Open Sans']">
                Overview
              </div>
            </div>
            <div className="gap-2 flex items-center justify-center">
              <Projector />
              <div className="text-[#67748e] text-sm font-semibold font-['Open Sans']">
                Projects
              </div>
            </div>
            <div className="gap-2 flex items-center justify-center">
              <Projector />
              <div className="text-[#67748e] text-sm font-semibold font-['Open Sans']">
                Projects
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-32 mb-12 gap-3 grid grid-cols-12">
        <Card className="col-span-12 md:col-span-7 p-9">
          <div className="flex flex-row justify-between items-center">
            <span className="text-[#252f40] text-base font-semibold font-['Open Sans']">
              Profile Information
            </span>
            <Edit />
          </div>
          <div className="mt-4 mb-4">
            <span className="text-[#67748e] text-sm font-normal font-['Open Sans'] leading-[21px]">
              Directors are responsible for overseeing the development of an
              organization&apos;s business goals and objectives. They typically
              work to increase business revenue, identify and develop business
              opportunities, and expand the company&apos;s presence and its
              brands.
            </span>
          </div>
          <Separator className="my-4" />
          <div className="flex flex-col gap-2">
            <InfoRow label="Full Name:" value="Nguyen Van Khuong" />
            <InfoRow label="Mobile:" value="(+84) 866 069 999" />
            <InfoRow label="Email:" value="khuongnv@cpss.com" />
            <InfoRow label="Password:" value="*************" />
            <InfoRow
              label="Address:"
              value="999 Tran Hoang, Ninh kieu, Can Tho, Viet Nam"
            />
          </div>
        </Card>
        <Card className="col-span-12 md:col-span-5 overflow-auto h-[400px]">
          <div className="p-9">
            <div className="text-[#252f40] text-base font-semibold font-['Open Sans']">
              Seller
            </div>
            <SellerRow name="Trung Hien" desc="Have a great afternoon…" />
            <SellerRow name="Trung Hien" desc="Have a great afternoon…" />
            <SellerRow name="Trung Hien" desc="Have a great afternoon…" />
            <SellerRow name="Trung Hien" desc="Have a great afternoon…" />
            <SellerRow name="Trung Hien" desc="Have a great afternoon…" />
            <SellerRow name="Trung Hien" desc="Have a great afternoon…" />

            <SellerRow name="Trung Hien" desc="Have a great afternoon…" />

            <SellerRow name="Trung Hien" desc="Have a great afternoon…" />
            <SellerRow name="Trung Hien" desc="Have a great afternoon…" />
          </div>
        </Card>
      </div>
    </div>
  );
}
