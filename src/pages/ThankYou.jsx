import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const ThankYou = () => {
  return (
    <div>
      <Navbar />
      <div className="w-1/2 mx-auto h-[600px] mt-[200px] flex flex-col items-center gap-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-16 text-emerald-500 "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
        <p className="text-4xl font-bold">پرداخت شما با موفقیت انجام شد</p>
        <p className="font-semibold text-lg">شماره سفارش : 25139</p>
        <p className="opacity-50">
          اطلاعات کامل سفارش به ایمیل شما ارسال شد، در صورت بروز هرگونه مشکل با
          پشتیبانی 24 ساعته گالری فروردین تماس بگیرید
        </p>
        <p className="font-bold mt-10">
          وضعیت فعلی سفارش
        </p>
        <ol className="items-center flex mt-3">
          <li className="relative mb-0">
            <div className="flex items-center relative">
              <div className="z-10 flex items-center justify-center size-8 bg-white rounded-full border border-emerald-500 p-1 absolute left-1/2 -translate-x-1/2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5 text-emerald-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
                  />
                </svg>
              </div>
              <div className="flex w-full h-0.5 bg-gray-700"></div>
            </div>
            <div className="mt-3">
              <div className="h-[10px]" />
              <p className="text-sm font-semibold text-center">
                بسته بندی از محل فروش
              </p>
              <div className="w-[250px]" />
            </div>
          </li>
          <li className="relative mb-0">
            <div className="flex items-center relative">
              <div className="z-10 flex items-center justify-center size-8 bg-white rounded-full border p-1 absolute left-1/2 -translate-x-1/2 border-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                  />
                </svg>
              </div>
              <div className="flex w-full h-0.5 bg-gray-700"></div>
            </div>
            <div className="mt-3">
              <div className="h-[10px]" />
              <p className="text-sm opacity-50 text-center">
                ارسال به شهر سکونت شما
              </p>
              <div className="w-[250px]" />
            </div>
          </li>
          <li className="relative mb-0">
            <div className="flex items-center relative">
              <div className="z-10 flex items-center justify-center size-8 bg-white rounded-full border p-1 absolute left-1/2 -translate-x-1/2 border-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>
              </div>
              <div className="flex w-full h-0.5 bg-gray-700"></div>
            </div>
            <div className="mt-3">
              <div className="h-[10px]" />
              <p className="text-sm opacity-50 text-center">
                ارسال به درب منزل
              </p>
              <div className="w-[250px]" />
            </div>
          </li>
        </ol>
      </div>
      <Footer />
    </div>
  )
}
export default ThankYou
