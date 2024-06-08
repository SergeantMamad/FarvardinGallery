import { useState } from "react"
import "../index.css"
import Starfield from "react-starfield"
import { Link } from "react-router-dom"
const Register = () => {
  const [userType, setUserType] = useState("خریداران")
  function handleInput(target) {
    const length = target.value.length
    console.log(length)
    if (length == 4 || length == 9 || length == 14) {
      return (target.value += "-")
    }
  }

  return (
    <div className="flex items-center justify-center h-screen w-screen bg-black">
      <Starfield
        starCount={15000}
        starColor={[0, 0, 0]}
        speedFactor={0.1}
        backgroundColor="#ffffff"
      />
      <div className="flex w-[1200px] h-[92%] z-10">
        <div className="w-1/2 h-full relative">
          <img
            src="/images/nature4.jpeg"
            className="w-full h-full object-cover rounded-tl-lg rounded-bl-lg blur-[1px]"
          />
          <div className="absolute left-1/2 -translate-x-1/2 top-7 text-center w-full">
            <p className="text-3xl text-white font-bold">
              دنیایی از آثار در انتظار شماست
            </p>
            <p className="text-xl text-white font-bold mt-2">
              ثبت نام خود را راحت انجام دهید
            </p>
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 bottom-7 text-center w-full">
            <p className="text-xl text-white font-bold">اکانت ثبت شده دارید؟</p>
            <Link to="/Login">
              <button className="font-bold text-white border border-white h-max px-4 py-2 rounded-lg transition-colors duration-300 hover:bg-stone-700 mx-auto mt-[5px]">
                لاگین کنید
              </button>
            </Link>
          </div>
        </div>
        <div
          className="p-9 bg-neutral-100 w-1/2 overflow-hidden rounded-tr-lg rounded-br-lg text-black"
          dir="rtl"
        >
          <p className="text-3xl font-bold text-emerald-500">ثبت نام کنید</p>
          <div className="mt-[20px] flex justify-center gap-20">
            <button
              onClick={() => setUserType("خریداران")}
              className={`text-2xl font-bold border-b-2 border-neutral-100 pb-2 transition-all duration-500 ${
                userType == "خریداران"
                  ? "border-b-emerald-500"
                  : "border-neutral-100"
              }`}
            >
              خریداران
            </button>
            <button
              onClick={() => setUserType("هنرمندان")}
              className={`text-2xl font-bold border-b-2 border-neutral-100 pb-2 transition-all duration-500 ${
                userType == "هنرمندان"
                  ? "border-b-emerald-500"
                  : "border-neutral-100"
              }`}
            >
              هنرمندان
            </button>
          </div>
          <div
            className={`w-full flex flex-col gap-10 transition-all duration-50 ${
              userType != "خریداران" ? "-translate-x-[100%]" : "translate-x-0"
            }`}
          >
            <div className="flex flex-col mt-[40px] gap-2">
              <label className="mx-auto text-right w-[80%]" htmlFor="name">
                نام و نام خانوادگی
              </label>
              <div className="relative flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-[22px] h-[22px] absolute right-[55px] translate-y-[45%] text-[#848993]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  />
                </svg>
                <input
                  id="name"
                  placeholder="نام و نام خانوادگی"
                  className="outline-none bg-neutral-50-50 py-2 px-8 rounded-lg border border-neutral-300 w-[80%] focus:border-emerald-600 transition-all duration-500 mx-auto "
                />
              </div>
            </div>
            <div className="flex flex-col -mt-[25px] gap-2">
              <label className="mx-auto text-right w-[80%]" htmlFor="phone">شماره تلفن</label>
              <div className="relative flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-[22px] h-[22px] absolute right-[55px] translate-y-[45%] text-[#848993]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                  />
                </svg>

                <input
                  id="phone"
                  placeholder="شماره تلفن"
                  className="outline-none bg-neutral-50-50 py-2 px-8 rounded-lg border border-neutral-300 w-[80%] focus:border-emerald-600 transition-all duration-500 mx-auto"
                />
              </div>
            </div>
            <div className="flex flex-col -mt-[25px] gap-2">
              <label className="mx-auto text-right w-[80%]" htmlFor="username">نام کاربری</label>
              <div className="relative flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-[22px] h-[22px] absolute right-[55px] translate-y-[45%] text-[#848993]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>

                <input
                  id="username"
                  placeholder="نام کاربری"
                  className="outline-none bg-neutral-50-50 py-2 px-8 rounded-lg border border-neutral-300 w-[80%] focus:border-emerald-600 transition-all duration-500 mx-auto"
                />
              </div>
            </div>
            <div className="flex flex-col -mt-[25px] gap-2">
              <label className="mx-auto text-right w-[80%]" htmlFor="password">کلمه عبور</label>
              <div className="relative flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-[22px] h-[22px] absolute right-[55px] translate-y-[45%] text-[#848993]"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                  />
                </svg>

                <input
                  type="password"
                  id="password"
                  placeholder="کلمه عبور"
                  className="outline-none bg-neutral-50-50 py-2 px-8 rounded-lg border border-neutral-300 w-[80%] focus:border-emerald-600 transition-all duration-500 mx-auto"
                />
              </div>
            </div>
            <div className="flex flex-col -mt-[25px] gap-2">
              <label className="mx-auto text-right w-[80%]" htmlFor="email">آدرس ایمیل</label>
              <div className="relative flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-[22px] h-[22px] absolute right-[55px] translate-y-[45%] text-[#848993]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
                <input
                  id="email"
                  type="email"
                  placeholder="آدرس ایمیل"
                  className="outline-none bg-neutral-50-50 py-2 px-8 rounded-lg border border-neutral-300 w-[80%] focus:border-emerald-600 transition-all duration-500 mx-auto"
                />
              </div>
            </div>
            <button className="font-bold text-emerald-500 border border-emerald-500 h-max px-4 py-2 rounded-lg transition-colors duration-300 hover:bg-stone-300 w-[80%] mx-auto">
              ثبت نام
            </button>
            <div>
              <div class="relative flex py-5 items-center w-[80%] mx-auto -mt-[40px]">
                <div class="flex-grow border-t border-gray-400"></div>
                <span class="flex-shrink mx-4 text-gray-400">یا</span>
                <div class="flex-grow border-t border-gray-400"></div>
              </div>
              <div className="flex justify-center gap-4">
                <div className="p-2 bg-neutral-200 rounded-full border border-neutral-100 h-full transition-colors duration-500 hover:border-green-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#000000"
                    viewBox="0 0 32 32"
                  >
                    <path d="M16,2c-7.732,0-14,6.268-14,14,0,6.566,4.52,12.075,10.618,13.588v-9.31h-2.887v-4.278h2.887v-1.843c0-4.765,2.156-6.974,6.835-6.974,.887,0,2.417,.174,3.043,.348v3.878c-.33-.035-.904-.052-1.617-.052-2.296,0-3.183,.87-3.183,3.13v1.513h4.573l-.786,4.278h-3.787v9.619c6.932-.837,12.304-6.74,12.304-13.897,0-7.732-6.268-14-14-14Z"></path>
                  </svg>
                </div>
                <div className="p-2 bg-neutral-200 rounded-full border border-neutral-100 h-full transition-colors duration-500 hover:border-green-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#000000"
                    viewBox="0 0 32 32"
                  >
                    <path
                      d="M29.44,16.318c0-.993-.089-1.947-.255-2.864h-13.185v5.422h7.535c-.331,1.744-1.324,3.22-2.813,4.213v3.525h4.544c2.647-2.444,4.175-6.033,4.175-10.296Z"
                      opacity=".4"
                    ></path>
                    <path d="M16,30c3.78,0,6.949-1.247,9.265-3.385l-4.544-3.525c-1.247,.84-2.838,1.349-4.722,1.349-3.64,0-6.733-2.456-7.84-5.765l-2.717,2.09-1.941,1.525c2.304,4.569,7.025,7.713,12.498,7.713Z"></path>
                    <path
                      d="M8.16,18.66c-.28-.84-.445-1.731-.445-2.66s.165-1.82,.445-2.66v-3.615H3.502c-.955,1.884-1.502,4.009-1.502,6.275s.547,4.391,1.502,6.275h3.332s1.327-3.615,1.327-3.615Z"
                      opacity=".4"
                    ></path>
                    <path d="M16,7.575c2.062,0,3.895,.713,5.358,2.087l4.009-4.009c-2.431-2.265-5.587-3.653-9.367-3.653-5.473,0-10.195,3.144-12.498,7.725l4.658,3.615c1.107-3.309,4.2-5.765,7.84-5.765Z"></path>
                  </svg>
                </div>
                <div className="p-2 bg-neutral-200 rounded-full border border-neutral-100 h-full transition-colors duration-500 hover:border-green-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#000000"
                    viewBox="0 0 32 32"
                  >
                    <path
                      d="M26.111,3H5.889c-1.595,0-2.889,1.293-2.889,2.889V26.111c0,1.595,1.293,2.889,2.889,2.889H26.111c1.595,0,2.889-1.293,2.889-2.889V5.889c0-1.595-1.293-2.889-2.889-2.889ZM10.861,25.389h-3.877V12.87h3.877v12.519Zm-1.957-14.158c-1.267,0-2.293-1.034-2.293-2.31s1.026-2.31,2.293-2.31,2.292,1.034,2.292,2.31-1.026,2.31-2.292,2.31Zm16.485,14.158h-3.858v-6.571c0-1.802-.685-2.809-2.111-2.809-1.551,0-2.362,1.048-2.362,2.809v6.571h-3.718V12.87h3.718v1.686s1.118-2.069,3.775-2.069,4.556,1.621,4.556,4.975v7.926Z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`w-full flex flex-col gap-10 transition-all duration-5 -translate-y-[93%] ${
              userType != "هنرمندان" ? "translate-x-[100%]" : "translate-x-0"
            }`}
          >
            <div className="flex flex-col mt-[20px] gap-2">
              <label className="mx-auto text-right w-[80%]" htmlFor="nameartist">
                نام و نام خانوادگی
              </label>
              <div className="relative flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-[22px] h-[22px] absolute right-[55px] translate-y-[45%] text-[#848993]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  />
                </svg>
                <input
                  id="nameartist"
                  placeholder="نام و نام خانوادگی"
                  className="outline-none bg-neutral-50-50 py-2 px-8 rounded-lg border border-neutral-300 w-[80%] focus:border-emerald-600 transition-all duration-500 mx-auto "
                />
              </div>
            </div>
            <div className="flex flex-col -mt-[25px] gap-2">
              <label className="mx-auto text-right w-[80%]" htmlFor="phoneartist">شماره تلفن</label>
              <div className="relative flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-[22px] h-[22px] absolute right-[55px] translate-y-[45%] text-[#848993]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                  />
                </svg>

                <input
                  id="phoneartist"
                  placeholder="شماره تلفن"
                  className="outline-none bg-neutral-50-50 py-2 px-8 rounded-lg border border-neutral-300 w-[80%] focus:border-emerald-600 transition-all duration-500 mx-auto"
                />
              </div>
            </div>
            <div className="flex flex-col -mt-[25px] gap-2">
              <label className="mx-auto text-right w-[80%]" htmlFor="usernameartist">نام کاربری</label>
              <div className="relative flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-[22px] h-[22px] absolute right-[55px] translate-y-[45%] text-[#848993]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>

                <input
                  id="usernameartist"
                  placeholder="نام کاربری"
                  className="outline-none bg-neutral-50-50 py-2 px-8 rounded-lg border border-neutral-300 w-[80%] focus:border-emerald-600 transition-all duration-500 mx-auto"
                />
              </div>
            </div>
            <div className="flex flex-col -mt-[25px] gap-2">
              <label className="mx-auto text-right w-[80%]" htmlFor="passwordartist">کلمه عبور</label>
              <div className="relative flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-[22px] h-[22px] absolute right-[55px] translate-y-[45%] text-[#848993]"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                  />
                </svg>

                <input
                  id="passwordartist"
                  type="password"
                  placeholder="کلمه عبور"
                  className="outline-none bg-neutral-50-50 py-2 px-8 rounded-lg border border-neutral-300 w-[80%] focus:border-emerald-600 transition-all duration-500 mx-auto"
                />
              </div>
            </div>
            <div className="flex flex-col -mt-[25px] gap-2">
              <label className="mx-auto text-right w-[80%]" htmlFor="emailartist">آدرس ایمیل</label>
              <div className="relative flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-[22px] h-[22px] absolute right-[55px] translate-y-[45%] text-[#848993]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
                <input
                  type="email"
                  id="emailartist"
                  placeholder="آدرس ایمیل"
                  className="outline-none bg-neutral-50-50 py-2 px-8 rounded-lg border border-neutral-300 w-[80%] focus:border-emerald-600 transition-all duration-500 mx-auto"
                />
              </div>
            </div>
            <div className="flex flex-col -mt-[25px] gap-2">
              <label className="mx-auto text-right w-[80%]" htmlFor="card">شماره کارت</label>
              <div className="relative flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-[22px] h-[22px] absolute right-[55px] translate-y-[45%] text-[#848993]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
                  />
                </svg>
                <input
                  id="card"
                  onInput={(e) => handleInput(e.target)}
                  placeholder="شماره کارت"
                  className="outline-none bg-neutral-50-50 py-2 px-8 rounded-lg border border-neutral-300 w-[80%] focus:border-emerald-600 transition-all duration-500 mx-auto"
                />
              </div>
            </div>

            <button className="font-bold text-emerald-500 border border-emerald-500 h-max px-4 py-2 rounded-lg transition-colors duration-300 hover:bg-stone-300 w-[80%] mx-auto">
              ثبت نام
            </button>
            <div>
              <div class="relative flex py-5 items-center w-[80%] mx-auto -mt-[40px]">
                <div class="flex-grow border-t border-gray-400"></div>
                <span class="flex-shrink mx-4 text-gray-400">یا</span>
                <div class="flex-grow border-t border-gray-400"></div>
              </div>
              <div className="flex justify-center gap-4">
                <div className="p-2 bg-neutral-200 rounded-full border border-neutral-100 h-full transition-colors duration-500 hover:border-green-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#000000"
                    viewBox="0 0 32 32"
                  >
                    <path d="M16,2c-7.732,0-14,6.268-14,14,0,6.566,4.52,12.075,10.618,13.588v-9.31h-2.887v-4.278h2.887v-1.843c0-4.765,2.156-6.974,6.835-6.974,.887,0,2.417,.174,3.043,.348v3.878c-.33-.035-.904-.052-1.617-.052-2.296,0-3.183,.87-3.183,3.13v1.513h4.573l-.786,4.278h-3.787v9.619c6.932-.837,12.304-6.74,12.304-13.897,0-7.732-6.268-14-14-14Z"></path>
                  </svg>
                </div>
                <div className="p-2 bg-neutral-200 rounded-full border border-neutral-100 h-full transition-colors duration-500 hover:border-green-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#000000"
                    viewBox="0 0 32 32"
                  >
                    <path
                      d="M29.44,16.318c0-.993-.089-1.947-.255-2.864h-13.185v5.422h7.535c-.331,1.744-1.324,3.22-2.813,4.213v3.525h4.544c2.647-2.444,4.175-6.033,4.175-10.296Z"
                      opacity=".4"
                    ></path>
                    <path d="M16,30c3.78,0,6.949-1.247,9.265-3.385l-4.544-3.525c-1.247,.84-2.838,1.349-4.722,1.349-3.64,0-6.733-2.456-7.84-5.765l-2.717,2.09-1.941,1.525c2.304,4.569,7.025,7.713,12.498,7.713Z"></path>
                    <path
                      d="M8.16,18.66c-.28-.84-.445-1.731-.445-2.66s.165-1.82,.445-2.66v-3.615H3.502c-.955,1.884-1.502,4.009-1.502,6.275s.547,4.391,1.502,6.275h3.332s1.327-3.615,1.327-3.615Z"
                      opacity=".4"
                    ></path>
                    <path d="M16,7.575c2.062,0,3.895,.713,5.358,2.087l4.009-4.009c-2.431-2.265-5.587-3.653-9.367-3.653-5.473,0-10.195,3.144-12.498,7.725l4.658,3.615c1.107-3.309,4.2-5.765,7.84-5.765Z"></path>
                  </svg>
                </div>
                <div className="p-2 bg-neutral-200 rounded-full border border-neutral-100 h-full transition-colors duration-500 hover:border-green-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#000000"
                    viewBox="0 0 32 32"
                  >
                    <path
                      d="M26.111,3H5.889c-1.595,0-2.889,1.293-2.889,2.889V26.111c0,1.595,1.293,2.889,2.889,2.889H26.111c1.595,0,2.889-1.293,2.889-2.889V5.889c0-1.595-1.293-2.889-2.889-2.889ZM10.861,25.389h-3.877V12.87h3.877v12.519Zm-1.957-14.158c-1.267,0-2.293-1.034-2.293-2.31s1.026-2.31,2.293-2.31,2.292,1.034,2.292,2.31-1.026,2.31-2.292,2.31Zm16.485,14.158h-3.858v-6.571c0-1.802-.685-2.809-2.111-2.809-1.551,0-2.362,1.048-2.362,2.809v6.571h-3.718V12.87h3.718v1.686s1.118-2.069,3.775-2.069,4.556,1.621,4.556,4.975v7.926Z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Register
