// import { Outlet, useLocation } from "react-router";
// import Stepper from "@/pages/checkout/components/Stepper";

export default function Checkout() {
  return <div>Checkout</div>;
}

// const steps = [
//   { path: "select-passengers", label: "مشخصات" },
//   { path: "review", label: "تایید اطلاعات" },
//   { path: "payment", label: "پرداخت" },
//   { path: "ticket", label: "صدور بلیط" },
// ];

// export default function CheckpointLayout() {
//   const location = useLocation();
//   const currentStep = steps.findIndex((step) =>
//     location.pathname.includes(step.path)
//   );

//   return (
//     <div className="container mx-auto p-4 bg-primary-50 min-h-screen">
//       {/* سکشن ثابت Stepper */}
//       <section className="mb-8">
//         <Stepper
//           steps={[
//             { label: "انتخاب تور", path: "/checkpoint/select-tour" },
//             { label: "مشخصات مسافران", path: "/checkpoint/passengers" },
//             { label: "تأیید اطلاعات", path: "/checkpoint/review" },
//             { label: "پرداخت", path: "/checkpoint/payment" },
//             { label: "صدور بلیت", path: "/checkpoint/ticket" },
//           ]}
//           currentStep={currentStep}
//         />
//         ;
//       </section>

//       {/* بخش متغیر: محتوای مراحل با توجه به Route */}
//       <section>
//         <Outlet />
//       </section>
//     </div>
//   );
// }

// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //

// <div className=" w-full bg-primary-50 min-h-screen pt-3 pb-7">
//   <div className=" flex justify-center items-center">
//     <p className="flex justify-center items-center bg-primary-50  px-4 py-2 text-titleSm mt-4 text-primary  border-b border-b-primary">
//       لیست مسافران
//     </p>
//   </div>

//   <div className=" mt-6 min-h-[185px] w-11/12 mx-auto  border border-neutral-400 rounded-lg p-3 lg:p-6 bg-neutral-white">
//     <h3 className="flex justify-start items-center  px-5 py-2 text-labelLg md:text-titleSm my-4 text-primary  rounded-lg">
//       مسافر یک - سرپرست :
//     </h3>

//     <div className=" flex  flex-col gap-8 ">
//       <InputForm label="نام و نام خانوادگی" />
//       <div className="flex md:items-center md:flex-row flex-col gap-8">
//         <InputForm label="کد ملی" />
//         <InputDatePicker />
//       </div>
//     </div>
//   </div>
//   <div className=" mt-6 min-h-[185px] w-11/12 mx-auto  border border-neutral-400 rounded-lg p-3 lg:p-6 bg-neutral-white">
//     <h3 className="flex justify-start items-center  px-5 py-2 text-labelLg md:text-titleSm my-4 text-primary  rounded-lg">
//       مسافر دو :
//     </h3>

//     <div className=" flex  flex-col gap-8 ">
//       <InputForm label="نام و نام خانوادگی" />
//       <div className="flex md:items-center md:flex-row flex-col gap-8">
//         <InputForm label="کد ملی" />
//         <InputDatePicker />
//       </div>
//     </div>
//   </div>
//   <div className=" mt-6 min-h-[185px] w-11/12 mx-auto  border border-neutral-400 rounded-lg p-3 lg:p-6 bg-neutral-white">
//     <h3 className="flex justify-start items-center  px-5 py-2 text-labelLg md:text-titleSm my-4 text-primary  rounded-lg">
//       مسافر سه :
//     </h3>

//     <div className=" flex  flex-col gap-8 ">
//       <InputForm label="نام و نام خانوادگی" />
//       <div className="flex md:items-center md:flex-row flex-col gap-8">
//         <InputForm label="کد ملی" />
//         <InputDatePicker />
//       </div>
//     </div>
//   </div>

//   <div className=" flex items-center justify-center gap-4 mt-6">
//     <Button className=" px-8 py-2">ادامه خرید</Button>
//   </div>
// </div>;
