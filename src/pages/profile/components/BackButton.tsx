import { useNavigate } from "react-router";
import { IoIosArrowForward } from "react-icons/io";

export default function BackButton({ to }: { to: string }) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(to)}
      className="flex items-center gap-2 text-sm text-primary mb-4  cursor-pointer"
    >
      <IoIosArrowForward size={20} />
      بازگشت
    </button>
  );
}
