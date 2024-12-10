// import { Input } from "@/components/ui/input";
// import Image from "next/image";
// import React from "react";
// import laptop from "../../assets/curved6.png";
// import { Button } from "@/components/ui/button";
// import { Label } from "@/components/ui/label";
// import { Switch } from "@/components/ui/switch";
// export default function Login() {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
//       <div className="gap-3">
//         <h1 className="text-[#252f40] text-3xl md:text-5xl font-bold font-['Open Sans']">
//           Computer Shop System
//         </h1>
//         <h2 className="text-[#ff0080] text-2xl md:text-4xl font-bold font-['Open Sans']">
//           Sign In
//         </h2>
//         <h4 className="text-[#8392ab] font-normal font-['Open Sans']">
//           Enter the email and password provided to log in.
//         </h4>
//         <div className="gap-3 mt-7">
//           <div>
//             <Label htmlFor="email">Email</Label>
//             <Input type="text" placeholder="Email" className="w-full" />
//           </div>
//           <div className="mt-4">
//             <Label htmlFor="password">Password</Label>
//             <Input
//               type="password"
//               placeholder="Password"
//               className="mt-2 w-full"
//             />
//           </div>
//           <div className="flex items-center space-x-2 mt-4">
//             <Switch id="remember-me" />
//             <Label
//               htmlFor="remember-me"
//               className="text-[#252f40] text-sm font-normal font-['Open Sans']"
//             >
//               Remember me
//             </Label>
//           </div>
//           <Button
//             variant="outline"
//             className="mt-6 flex items-center justify-center w-full h-10 bg-gradient-to-br from-[#ff0080] to-[#7928ca] rounded-lg shadow hover:opacity-3"
//           >
//             <span className="text-white text-sm font-bold font-['Open Sans']">
//               SIGN IN
//             </span>
//           </Button>
//         </div>
//       </div>
//       <div className="hidden md:block">
//         <Image src={laptop} alt="img" className="w-full h-auto" />
//       </div>
//     </div>
//   );
// }

import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";
import laptop from "../../assets/curved6.png";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import login from "../../assets/login.png";
export default function Login() {
  return (
    <div className="flex h-screen">
      {/* Left Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-10 md:px-20">
        <h1 className="text-[#252f40] text-3xl md:text-5xl font-bold font-['Open Sans']">
          Computer Shop System
        </h1>
        <h2 className="text-[#ff0080] text-2xl md:text-4xl font-bold font-['Open Sans'] mt-4">
          Sign In
        </h2>
        <h4 className="text-[#8392ab] font-normal font-['Open Sans'] mt-2">
          Enter the email and password provided to log in.
        </h4>

        <div className="mt-8">
          {/* Email Input */}
          <div className="mb-4">
            <Label htmlFor="email" className="text-sm font-medium">
              Email
            </Label>
            <Input type="text" placeholder="Email" className="w-full mt-1" />
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <Label htmlFor="password" className="text-sm font-medium">
              Password
            </Label>
            <Input
              type="password"
              placeholder="Password"
              className="w-full mt-1"
            />
          </div>

          {/* Remember Me */}
          <div className="flex items-center space-x-2 mb-6">
            <Switch id="remember-me" />
            <Label
              htmlFor="remember-me"
              className="text-[#252f40] text-sm font-normal"
            >
              Remember me
            </Label>
          </div>

          {/* Sign In Button */}
          <Button
            variant="outline"
            className="w-full h-12 bg-gradient-to-br from-[#ff0080] to-[#7928ca] text-white rounded-lg shadow-lg text-sm font-bold"
          >
            SIGN IN
          </Button>
        </div>
      </div>

      {/* Right Section (Image) */}
      <div className="hidden md:flex w-1/2 items-center justify-center relative">
        <Image
          src={login}
          alt="Laptop"
          className="w-full h-screen object-cover"
          style={{
            // clipPath: "polygon(55% 0, 100% 0, 100% 100%, 80% 100%, 0 100%)",
            borderBottomLeftRadius: "70px", // Adjust the radius as needed
          }}
        />
      </div>
    </div>
  );
}
