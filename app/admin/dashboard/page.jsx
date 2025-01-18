import { ComponentChart } from "@/components/dashboard/charts/barChart";
import { SaleChart } from "@/components/dashboard/charts/saleChart";
import StatsCard from "@/components/dashboard/statsCard";
import ThemeButtons from "@/components/themeBtn/themeBtn";
import Topbar from "@/components/topBar";
import { Card } from "@/components/ui/card";
import { Database } from "lucide-react";

export default function page() {
  return (
    <div className="w-full">
      <StatsCard />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-4">
        <ComponentChart />
        <SaleChart />
        <Card>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi
          ullam dignissimos recusandae hic quod, esse, iusto nobis incidunt, est
          saepe provident quam nulla. Nihil delectus aspernatur doloremque
          veritatis, ipsum id!
        </Card>
        <Card>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi
          ullam dignissimos recusandae hic quod, esse, iusto nobis incidunt, est
          saepe provident quam nulla. Nihil delectus aspernatur doloremque
          veritatis, ipsum id!
        </Card>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque et
          dolor mollitia perspiciatis voluptas consequuntur. Fuga quo at ullam
          tempore atque quidem est nemo illum blanditiis, necessitatibus
          repellendus, culpa nostrum?
        </div>
      </div>
    </div>
  );
}
