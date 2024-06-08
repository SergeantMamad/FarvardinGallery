import { useEffect, useState } from "react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { useNavigate } from "react-router-dom"

const Buy = () => {
  const navigate = useNavigate()
  const [fields, setFields] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
    dargah: "",
  })
  return (
    <div>
      <Navbar />
      <div>
        <div className="flex justify-around px-12 py-14">
          <div className="h-max p-4 pb-10 bg-stone-100 w-[600px] flex flex-col items-center shadow-xl rounded-md border border-gray-300/20">
            <div className="w-[90%] bg-sky-800 p-2 mx-auto text-center rounded-md shadow-md">
              <p className="text-center font-semibold text-white">
                اطلاعات سفارش
              </p>
            </div>
            <div className="w-[90%] h-[550px] mt-4">
              <img
                className="w-full h-full object-cover rounded-md"
                src="/images/StarryNight.jpg"
              />
            </div>
            <p className="text-center text-stone-500 text-sm mt-2">
              شب پرستاره بر فراز رن از ونسان ونگوگ
            </p>
            <div className="border border-t border-stone-200 w-[90%] border-dashed mt-2" />
            <div className="flex-col gap-2 w-[90%]" dir="rtl">
              <div className="justify-between mt-3 flex">
                <p>قیمت</p>
                <p>32,000,000 میلیون تومان</p>
              </div>
              <div className="justify-between mt-3 flex">
                <p>مالیات بر ارزش افزوده</p>
                <p>5,000,000 میلیون تومان</p>
              </div>
              <div className="justify-between mt-3 flex">
                <p>هزینه تحویل</p>
                <p>850,000 هزار تومان</p>
              </div>
            </div>
            <div className="border border-t border-stone-200 w-[90%] mt-3" />
            <div className="justify-between mt-3 flex w-[90%]" dir="rtl">
              <p>هزینه کل</p>
              <p>37,850,000 میلیون تومان</p>
            </div>
          </div>
          <div className="h-max flex flex-col gap-[40px] w-[50%]" dir="rtl">
            <p className="text-4xl font-semibold">اطلاعات پرداخت</p>
            <div className="flex flex-col">
              <div className="flex flex-col gap-4">
                <label htmlFor="name" className="text-right opacity-60">
                  نام و نام خانوادگی
                </label>
                <input
                  id="name"
                  onInput={(e) => {
                    setFields((prevFields) => ({
                      ...prevFields,
                      name: e.target.value,
                    }))
                  }}
                  value={fields.name}
                  placeholder="نام و نام خانوادگی"
                  className="outline-none bg-neutral-50-50 py-2 px-2 rounded-lg border border-neutral-300 focus:border-emerald-600 transition-all duration-500"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-col gap-4">
                <label htmlFor="email" className="text-right opacity-60">آدرس ایمیل</label>
                <input
                  id="email"
                  onInput={(e) => {
                    setFields((prevFields) => ({
                      ...prevFields,
                      email: e.target.value,
                    }))
                  }}
                  type="email"
                  value={fields.email}
                  placeholder="آدرس ایمیل"
                  className="outline-none bg-neutral-50-50 py-2 px-2 rounded-lg border border-neutral-300 focus:border-emerald-600 transition-all duration-500"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-col gap-4">
                <label htmlFor="phone" className="text-right opacity-60">شماره تلفن</label>
                <input
                  id="phone"
                  onInput={(e) => {
                    setFields((prevFields) => ({
                      ...prevFields,
                      phoneNumber: e.target.value,
                    }))
                  }}
                  value={fields.phoneNumber}
                  placeholder="شماره تلفن"
                  className="outline-none bg-neutral-50-50 py-2 px-2 rounded-lg border border-neutral-300 focus:border-emerald-600 transition-all duration-500"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-col gap-4">
                <label htmlFor="address" className="text-right opacity-60">آدرس محل سکونت</label>
                <input
                  id="address"
                  onInput={(e) => {
                    setFields((prevFields) => ({
                      ...prevFields,
                      address: e.target.value,
                    }))
                  }}
                  value={fields.address}
                  placeholder="آدرس محل سکونت"
                  className="outline-none bg-neutral-50-50 py-2 px-2 rounded-lg border border-neutral-300 focus:border-emerald-600 transition-all duration-500"
                />
              </div>
            </div>
            <p className="text-2xl font-semibold">انتخاب درگاه پرداخت</p>
            <div className="flex justify-between">
              <div
                onClick={(e) => {
                  setFields((prevFields) => ({
                    ...prevFields,
                    dargah: "Sadad",
                  }))
                }}
                className={`w-[130px] h-[80px] border rounded-md cursor-pointer transition-all duration-300 ${fields.dargah == "Sadad" && "border-green-500"}`}
              >
                <img
                  src="/images/Sadad.png"
                  className="object-contain w-full h-full p-2"
                />
              </div>
              <div
                onClick={(e) => {
                  setFields((prevFields) => ({
                    ...prevFields,
                    dargah: "Parsian",
                  }))
                }}
                className={`w-[130px] h-[80px] border rounded-md cursor-pointer transition-all duration-300 ${fields.dargah == "Parsian" && "border-green-500"}`}
              >
                <img
                  src="/images/Parsian.png"
                  className="object-contain w-full h-full p-2"
                />
              </div>
              <div
                onClick={(e) => {
                  setFields((prevFields) => ({
                    ...prevFields,
                    dargah: "Sep",
                  }))
                }}
                className={`w-[130px] h-[80px] border rounded-md cursor-pointer transition-all duration-300 ${fields.dargah == "Sep" && "border-green-500"}`}
              >
                <img
                  src="/images/SEP.png"
                  className="object-contain w-full h-full p-2"
                />
              </div>
              <div
                onClick={(e) => {
                  setFields((prevFields) => ({
                    ...prevFields,
                    dargah: "Behpardakht",
                  }))
                }}
                className={`w-[130px] h-[80px] border rounded-md cursor-pointer transition-all duration-300 ${fields.dargah == "Behpardakht" && "border-green-500"}`}
              >
                <img
                  src="/images/Behpardakht.png"
                  className="object-contain w-full h-full p-2"
                />
              </div>
            </div>
            <button disabled={!Object.keys(fields).every((index) => (fields[index] !== ""))} className="font-bold text-emerald-500 border border-emerald-500 px-4 py-2 rounded-lg transition-colors duration-300 hover:bg-stone-300 w-full disabled:border-gray-500 disabled:text-gray-500 disabled:cursor-not-allowed" onClick={() =>navigate('/thankyou')}>
              ثبت سفارش
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default Buy
