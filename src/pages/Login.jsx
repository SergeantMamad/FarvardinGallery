import { useState } from "react"
import "../index.css"
import Starfield from "react-starfield"
import { Link } from "react-router-dom"

const Login = () => {
  return (
    <div className="flex items-center justify-center h-screen w-screen bg-black">
      <Starfield
        starCount={15000}
        starColor={[0, 0, 0]}
        speedFactor={0.1}
        backgroundColor="#ffffff"
      />
      <div className="flex w-[1200px] h-[60%] z-10">
        <div
          className="p-9 bg-neutral-100 w-1/2 rounded-tl-lg rounded-bl-lg text-black"
          dir="rtl"
        >
          <p className="text-3xl font-bold text-emerald-500">وارد شوید</p>
          <div className={`w-full flex flex-col gap-10 mt-[100px]`}>
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
                  id="password"
                  type="password"
                  placeholder="کلمه عبور"
                  className="outline-none bg-neutral-50-50 py-2 px-8 rounded-lg border border-neutral-300 w-[80%] focus:border-emerald-600 transition-all duration-500 mx-auto"
                />
              </div>
            </div>
            <button className="font-bold text-emerald-500 border border-emerald-500 h-max px-4 py-2 rounded-lg transition-colors duration-300 hover:bg-stone-300 w-[80%] mx-auto">
              ورود
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
        <div className="w-1/2 h-full relative">
          <img
            src="/images/ocean1.jpg"
            className="w-full h-full object-cover rounded-tr-lg rounded-br-lg blur-[1px]"
          />
          <div className="absolute left-1/2 -translate-x-1/2 top-7 text-center w-full">
            <p className="text-3xl text-white font-bold">
              دنیایی از آثار در انتظار شماست
            </p>
            <p className="text-xl text-white font-bold mt-2">
              به راحتی به اکانت خود وارد شوید
            </p>
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 bottom-7 text-center w-full">
            <p className="text-xl text-white font-bold">اکانتی ندارید؟</p>
            <Link to="/register">
              <button className="font-bold text-white border border-white h-max px-4 py-2 rounded-lg transition-colors duration-300 hover:bg-stone-700 mx-auto mt-[5px]">
                ثبت نام کنید
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Login
