import { RiUserLine, RiHeartAddLine } from "react-icons/ri";
import { CiShoppingBasket } from "react-icons/ci";
import { MdOutlinePayment } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router";
import { useState } from "react";
import { FaUserFriends } from "react-icons/fa";

const menu = [
  {
    icon: RiUserLine,
    label: "حساب کاربری",
    route: "account",
  },
  {
    icon: CiShoppingBasket,
    label: " سفر های من",
    route: "orders",
  },
  {
    icon: RiHeartAddLine,
    label: "علاقه‌ مندی‌ ها",
    route: "wishlist",
  },
  {
    icon: FaUserFriends,
    label: "  مسافر ها",
    route: "passengers",
  },
  {
    icon: MdOutlinePayment,
    label: "تراکنش ها",
    route: "payments",
  },
];

export default function UserMenu() {
  const [clicked, setClicked] = useState<string | null>("account");
  console.log("UserMenu rendered");
  return (
    <div className="bg-neutral-white border border-neutral-400 rounded-lg px-3 py-2">
      {menu.map((item) => {
        const Icon = item.icon;
        const isActive = clicked === item.route;

        return (
          <Link
            to={item.route}
            key={item.label}
            onClick={() => setClicked(item.route)}
          >
            <div className="flex justify-between items-center py-3">
              <div
                className={`flex items-center gap-1 ${
                  isActive ? "text-primary" : "text-neutral-text-900 opacity-80"
                }`}
              >
                <Icon size={20} />
                <span
                  className={`text-labelMd ${
                    isActive ? "text-primary" : "text-neutral-text-900"
                  }`}
                >
                  {item.label}
                </span>
              </div>

              <IoIosArrowBack
                size={20}
                className={isActive ? "text-primary" : "text-neutral-text-900"}
              />
            </div>
          </Link>
        );
      })}
    </div>
  );
}
