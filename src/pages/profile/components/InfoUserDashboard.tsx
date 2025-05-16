import { cn } from "@/lib/utils";
import { BiEdit } from "react-icons/bi";

interface Item {
  title: string;
  firstLabel: string;
  firstValue: string;
  secondLabel: string;
  secondValue: string;
}

interface InfoProps {
  item: Item;
  className?: string;
}

export default function InfoUserDashboard({ className, item }: InfoProps) {
  return (
    <main>
      <div className="min-h-[185px] bg-neutral-white border border-neutral-400 rounded-lg p-3 lg:p-6 ">
        <div className=" flex items-center justify-between mb-6">
          <p className="md:text-labelLg lg:text-titleSm">{item.title}</p>

          <div className=" flex items-center gap-1">
            <p className="text-primary text-labelMd lg:text-labelLg">
              ویرایش اطلاعات
            </p>
            <BiEdit className="text-primary" size={20} />
          </div>
        </div>

        <div className={cn("flex flex-col gap-6", className)}>
          <div className=" flex items-center justify-start gap-8">
            <p className="text-neutral-text-900 text-labelLg">
              {item.firstLabel}
            </p>
            <p className="text-neutral-text-400 text-labelLg">
              {item.firstValue}
            </p>
          </div>
          <div className=" flex items-center justify-start gap-8">
            <p className="text-neutral-text-900 text-labelLg">
              {item.secondLabel}
            </p>
            <p className="text-neutral-text-400 text-labelLg">
              {" "}
              {item.secondValue}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
