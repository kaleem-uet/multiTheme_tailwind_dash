import { Database } from "lucide-react";
import React from "react";
import { Card } from "../ui/card";

export default function StatsCard() {
  return (
    <div className=" grid grid-cols-1 gap-2 md:grid-cols-4 xs:grid-cols-1">
      {/* Card 1 */}
      <Card className="w-full">
        <div className="p-5 flex justify-between items-center">
          <div>
            <div className="text-[#67748e] text-sm font-semibold font-['Open Sans']">
              Today’s Money
            </div>
            <div className="text-xl font-bold font-['Open Sans']">$77,000</div>
            <div className="text-[#82d616] text-sm font-bold font-['Open Sans']">
              +10%
            </div>
          </div>
          <div className="w-[40px] h-[40px] flex justify-center items-center bg-gradient-to-br from-[#ff0080] to-[#7928ca] rounded-lg shadow">
            <Database className="text-white" />
          </div>
        </div>
      </Card>

      {/* Card 2 */}
      <Card className="w-full">
        <div className="p-5 flex justify-between items-center">
          <div>
            <div className="text-[#67748e] text-sm font-semibold font-['Open Sans']">
              New Clients
            </div>
            <div className="text-xl font-bold font-['Open Sans']">45</div>
            <div className="text-[#82d616] text-sm font-bold font-['Open Sans']">
              +5%
            </div>
          </div>
          <div className="w-[40px] h-[40px] flex justify-center items-center bg-gradient-to-br from-[#17c964] to-[#006d77] rounded-lg shadow">
            <Database className="text-white" />
          </div>
        </div>
      </Card>

      {/* Card 3 */}
      <Card className="w-full">
        <div className="p-5 flex justify-between items-center">
          <div>
            <div className="text-[#67748e] text-sm font-semibold font-['Open Sans']">
              Sales
            </div>
            <div className="text-xl font-bold font-['Open Sans']">$24,000</div>
            <div className="text-[#82d616] text-sm font-bold font-['Open Sans']">
              +12%
            </div>
          </div>
          <div className="w-[40px] h-[40px] flex justify-center items-center bg-gradient-to-br from-[#2193b0] to-[#6dd5ed] rounded-lg shadow">
            <Database className="text-white" />
          </div>
        </div>
      </Card>

      {/* Card 4 */}
      <Card className="w-full">
        <div className="p-5 flex justify-between items-center">
          <div>
            <div className="text-[#67748e] text-sm font-semibold font-['Open Sans']">
              Expenses
            </div>
            <div className="text-xl font-bold font-['Open Sans']">$18,000</div>
            <div className="text-[#e74c3c] text-sm font-bold font-['Open Sans']">
              -3%
            </div>
          </div>
          <div className="w-[40px] h-[40px] flex justify-center items-center bg-gradient-to-br from-[#ff4e50] to-[#f9d423] rounded-lg shadow">
            <Database className="text-white" />
          </div>
        </div>
      </Card>
    </div>
  );
}
