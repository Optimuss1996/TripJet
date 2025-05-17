import { useAuth } from "@/providers/AuthProvider";
import { supabase } from "@/lib/supabaseClient";
import { Users } from "@/types/types";
import { useState, useEffect } from "react";

export default function Account() {
  const { userProfile } = useAuth();
  const [dataUser, setDataUser] = useState<Users | null>(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      const { data, error } = await supabase
        .from("users")
        .select("*")
        .eq("id", "a0c95e9f-3c28-480e-984f-780d65d6a045")
        .single();

      if (error) {
        console.error("خطا در دریافت اطلاعات کاربر:", error);
      } else {
        setDataUser(data as Users);
      }
    };

    fetchUserProfile();
  }, []);

  console.log("userProfile از context:", userProfile);
  console.log("dataUser از useEffect:", dataUser);

  return (
    <div className="flex flex-col gap-6 w-full">
      {/* اینجا فقط نمایش می‌دیم تا مطمئن شیم */}
      <pre>{JSON.stringify(dataUser, null, 2)}</pre>
    </div>
  );
}
