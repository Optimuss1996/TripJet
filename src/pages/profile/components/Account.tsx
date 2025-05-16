import InfoUserDashboard from "./InfoUserDashboard";

const information = [
  {
    title: "اطلاعات کاربری",
    firstLabel: "نام و نام خانوادگی",
    firstValue: "کوروش صفایی",
    secondLabel: "اطلاعات تماس",
    secondValue: "۰۹۹۶۱۶۰۶۰۷۸",
  },
  {
    title: "اطلاعات مسافرتی",
    firstLabel: "تاریخ تولد",
    firstValue: "۱۳۸۲/۱۱/۰۱",
    secondLabel: " کد ملی",
    secondValue: "۰۰۲۱۳۰۰۸۷۵",
  },
  {
    title: "اطلاعات بانکی",
    firstLabel: "شماره کارت",
    firstValue: "۰۹۹۶۱۶۰۶۰۷۸",
    secondLabel: " شماره حساب",
    secondValue: "۰۹۹۶۱۶۰۶۰۷۸",
  },
];

export default function Account() {
  return (
    <div className=" flex flex-col gap-6 w-full">
      {information.map((item) => (
        <InfoUserDashboard key={item.title} item={item} />
      ))}
    </div>
  );
}
