import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Progress } from "@/components/ui/progress";

export default function page() {
  const sellers = [
    {
      name: "Minh Thuan",
      email: "ThuanDM@mail.com",
      budget: "$900,000",
      amount: 550,
      completion: 60,
      progressColor: "bg-blue-500",
    },
    {
      name: "Van Khuong",
      email: "Kaito@mail.com",
      budget: "$800,000",
      amount: 250,
      completion: 30,
      progressColor: "bg-orange-500",
    },
    {
      name: "Tuan Minh",
      email: "MinhVu@mail.com",
      budget: "$600,000",
      amount: 600,
      completion: 100,
      progressColor: "bg-green-500",
    },
    // Add more seller data as needed
  ];
  return (
    // <Card >
    //   <div className="p-4">
    //     <div className="flex flex-row items-center gap-3">
    //       <div className="text-[#141414] text-xl font-semibold font-['Open Sans']">
    //         Manage Seller
    //       </div>
    //       <div className="text-[#67748e] text-sm font-semibold font-['Open Sans']">
    //         done this month
    //       </div>
    //       <div className="w-[28.31px] text-[#17c1e8] text-sm font-bold font-['Open Sans']">
    //         73%
    //       </div>
    //     </div>
    //     <Table className="mt-4">
    //       {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
    //       <TableHeader>
    //         <TableRow className="text-[#8392ab] text-sm font-bold font-['Open Sans']">
    //           <TableHead className="w-[100px]">Invoice</TableHead>
    //           <TableHead className="text-center"> SELLER</TableHead>
    //           <TableHead className="text-center">BUDGET</TableHead>
    //           <TableHead className="text-center">AMOUNT</TableHead>
    //           <TableHead className="text-center">COMPLETION</TableHead>
    //           <TableHead className="text-center">ACTION</TableHead>
    //         </TableRow>
    //       </TableHeader>
    //       <TableBody>
    //         <TableRow>
    //           <TableCell className="text-center w-full">
    //             <div className="flex flex-row items-center gap-2">
    //               <Avatar>
    //                 <AvatarImage src="https://github.com/shadcn.png" />
    //                 <AvatarFallback>CN</AvatarFallback>
    //               </Avatar>
    //               <div className="flex flex-col items-start w-full">
    //                 <h5 className="text-[#141414] text-base font-semibold font-['Open Sans']">
    //                   Minh Thuan
    //                 </h5>
    //                 <h6 className="text-[#8392ab] text-sm font-normal font-['Open Sans']">
    //                   Lorem ipsum dolor sit.
    //                 </h6>
    //               </div>
    //             </div>
    //           </TableCell>
    //           <TableCell className="text-center">Paid</TableCell>
    //           <TableCell className="text-center">Credit Card</TableCell>
    //           <TableCell className="text-center">$1,234.56</TableCell>
    //           <TableCell className="text-center w-full">
    //             <Progress value={100} className="h-2 bg-green-400" />
    //           </TableCell>
    //         </TableRow>
    //       </TableBody>
    //     </Table>
    //     <Table className="mt-4 w-full border border-gray-200 rounded-lg shadow-sm">
    //       <TableHeader>
    //         <TableRow className="bg-gray-100">
    //           <TableHead className="w-[100px] text-left text-sm font-bold text-[#8392ab] font-['Open Sans']">
    //             Invoice
    //           </TableHead>
    //           <TableHead className="text-center text-sm font-bold text-[#8392ab] font-['Open Sans']">
    //             Seller
    //           </TableHead>
    //           <TableHead className="text-center text-sm font-bold text-[#8392ab] font-['Open Sans']">
    //             Budget
    //           </TableHead>
    //           <TableHead className="text-center text-sm font-bold text-[#8392ab] font-['Open Sans']">
    //             Amount
    //           </TableHead>
    //           <TableHead className="text-center text-sm font-bold text-[#8392ab] font-['Open Sans']">
    //             Completion
    //           </TableHead>
    //           <TableHead className="text-center text-sm font-bold text-[#8392ab] font-['Open Sans']">
    //             Action
    //           </TableHead>
    //         </TableRow>
    //       </TableHeader>
    //       <TableBody>
    //         <TableRow className="border-b border-gray-200">
    //           <TableCell className="text-left w-full px-4 py-3">
    //             <div className="flex flex-row items-center gap-4">
    //               <Avatar>
    //                 <AvatarImage src="https://github.com/shadcn.png" />
    //                 <AvatarFallback>CN</AvatarFallback>
    //               </Avatar>
    //               <div className="flex flex-col items-start">
    //                 <h5 className="text-[#141414] text-sm font-semibold font-['Open Sans']">
    //                   Minh Thuan
    //                 </h5>
    //                 <h6 className="text-[#8392ab] text-xs font-normal font-['Open Sans']">
    //                   Lorem ipsum dolor sit.
    //                 </h6>
    //               </div>
    //             </div>
    //           </TableCell>
    //           <TableCell className="text-center px-4 py-3 text-sm text-[#141414] font-normal">
    //             Paid
    //           </TableCell>
    //           <TableCell className="text-center px-4 py-3 text-sm text-[#141414] font-normal">
    //             Credit Card
    //           </TableCell>
    //           <TableCell className="text-center px-4 py-3 text-sm text-[#141414] font-normal">
    //             $1,234.56
    //           </TableCell>
    //           <TableCell className="text-center px-4 py-3">
    //             <Progress
    //               value={100}
    //               className="h-2 bg-green-400 rounded-full"
    //             />
    //           </TableCell>
    //           <TableCell className="text-center px-4 py-3">
    //             <button className="px-4 py-2 text-sm font-semibold text-white bg-[#cb0c9f] rounded-lg shadow hover:bg-[#a80a7f]">
    //               Action
    //             </button>
    //           </TableCell>
    //         </TableRow>
    //         {/* Additional rows can go here */}
    //       </TableBody>
    //     </Table>
    //   </div>

    // </Card>
    <Card className="mt-5">
      <div className="p-5">
        <div className="flex flex-row items-center gap-3">
          <div className="text-[#141414] text-xl font-semibold font-['Open Sans']">
            Manage Seller
          </div>
          <div className="text-[#67748e] text-sm font-semibold font-['Open Sans']">
            done this month
          </div>

          <div className="w-[28.31px] text-[#17c1e8] text-sm font-bold font-['Open Sans']">
            73%
          </div>
        </div>
        <table className="table-auto w-full mt-4">
          <thead>
            <tr className="text-sm text-gray-500 border-b">
              <th className="text-left py-2 px-4">SELLER</th>
              <th className="text-center py-2 px-4">BUDGET</th>
              <th className="text-center py-2 px-4">AMOUNT</th>
              <th className="text-center py-2 px-4">COMPLETION</th>
              <th className="text-center py-2 px-4">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {sellers.map((seller, index) => (
              <tr
                key={index}
                className="text-sm text-gray-800 border-b last:border-0 hover:bg-gray-100 transition"
              >
                <td className="py-3 px-4">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage
                        src={`https://via.placeholder.com/40?text=${seller.name[0]}`}
                      />
                      <AvatarFallback>{seller.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{seller.name}</p>
                      <p className="text-gray-500 text-xs">{seller.email}</p>
                    </div>
                  </div>
                </td>
                <td className="text-center py-3 px-4">{seller.budget}</td>
                <td className="text-center py-3 px-4">{seller.amount}</td>
                <td className="text-center py-3 px-4">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-500 text-xs">
                      {seller.completion}%
                    </span>
                    <Progress
                      value={seller.completion}
                      className={`h-2 rounded-full ${seller.progressColor}`}
                    />
                  </div>
                </td>
                <td className="text-center py-3 px-4">
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <button className="text-gray-500 hover:text-gray-800 transition">
                        •••
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem>Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
