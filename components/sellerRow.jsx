import Image from "next/image";
import Link from "next/link";
import React from "react";
import profile from "../app/assets/profile.png";

export default function SellerRow({ name, desc }) {
  return (
    <div className="flex flex-row justify-between mt-3">
      <div className="flex flex-row gap-3">
        <Image
          alt="Profile"
          src={profile}
          width={50}
          height={50}
          className="rounded-md"
        />
        <div>
          <span className="text-[#252f40] text-sm font-semibold font-['Open Sans']">
            {name}
          </span>
          <div>
            <span className="text-[#67748e] text-xs font-normal font-['Open Sans']">
              {desc}
            </span>
          </div>
        </div>
      </div>

      <div>
        <Link
          href={""}
          className="text-[#cb0c9f] text-xs font-bold font-['Open Sans']"
        >
          REPLY
        </Link>
      </div>
    </div>
  );
}
