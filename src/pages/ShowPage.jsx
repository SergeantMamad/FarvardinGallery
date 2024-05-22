import { useState } from "react"
import { showpageobj } from "../components/Showpageobj"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Vangogh from "../components/Vangogh"
import Similar from "../components/Similar"

const ShowPage = () => {
  const [imageIndex, setimageIndex] = useState(1)
  const [material, setMaterial] = useState("wood1")
  return (
    <div>
      <Navbar />
      <div dir="rtl" className="px-36 py-14">
        <div className="flex">
          <div className="w-[700px] h-[840px] bg-stone-100 relative p-8 shadow-lg">
            <div className="w-[640px] h-[740px] relative">
              {Object.keys(showpageobj).map((object, index) => (
                <>
                  <img
                    src={showpageobj[object].image}
                    className={`w-full h-full object-cover absolute left-0 top-0 transition-all duration-500 ${
                      index + 1 == imageIndex ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </>
              ))}
            </div>
            <div className="flex gap-3 w-full absolute mt-4 justify-center left-0">
              {Object.keys(showpageobj).map((object, index) => (
                <div
                  className={`border border-green-500 h-[16px] w-[16px] rounded-full cursor-pointer ${
                    index + 1 == imageIndex ? "bg-green-500 border-none" : ""
                  }`}
                  onClick={() => setimageIndex(index + 1)}
                />
              ))}
            </div>
          </div>
          <div className="w-[640px] h-[740px] relative text-black flex flex-col mr-44">
            <p className="font-bold text-5xl">شب پرستاره بر فراز رن</p>
            <div className="flex mt-3 justify-between">
              <p className="font-semibold text-lg text-gray-500">
                اثری از ونسانت ونگوک
              </p>
              <p className="font-semibold text-lg text-gray-500">
                30 در 30 سانتی متر
              </p>
            </div>
            <p className="font-semibold text-lg text-gray-500 mt-2">
              25,500 میلیون تومان
            </p>
            <p className="font-semibold text-lg mt-2 text-justify">
              توضیحات: لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
              و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه مجله
              در ستون و سطر آنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان
              جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها و شرایط سخت به پایان رسد و زمان مورد نیاز
              شامل.
            </p>
            <div className="border-t-2 border-dashed border-t-black mt-3" />
            <p className="mt-3 font-semibold text-xl">جنس قاب :</p>
            <div className="flex justify-between w-full mt-3">
              <div className="h-[35px] w-[35px]">
                <img
                  src="/images/texture1.png"
                  className={`w-full h-full rounded-full object-cover cursor-pointer ${
                    material == "wood1" && "border-4 border-emerald-500"
                  }`}
                  onClick={() => setMaterial("wood1")}
                />
              </div>
              <div className="h-[35px] w-[35px]">
                <img
                  src="/images/texture2.jpg"
                  className={`w-full h-full rounded-full object-cover cursor-pointer ${
                    material == "wood2" && "border-4 border-emerald-500"
                  }`}
                  onClick={() => setMaterial("wood2")}
                />
              </div>
              <div className="h-[35px] w-[35px]">
                <img
                  src="/images/texture3.jpg"
                  className={`w-full h-full rounded-full object-cover cursor-pointer ${
                    material == "wood3" && "border-4 border-emerald-500"
                  }`}
                  onClick={() => setMaterial("wood3")}
                />
              </div>
              <div className="h-[35px] w-[35px]">
                <img
                  src="/images/texture4.jpg"
                  className={`w-full h-full rounded-full object-cover cursor-pointer ${
                    material == "wood4" && "border-4 border-emerald-500"
                  }`}
                  onClick={() => setMaterial("wood4")}
                />
              </div>
              <div className="h-[35px] w-[35px]">
                <img
                  src="/images/texture5.jpg"
                  className={`w-full h-full rounded-full object-cover cursor-pointer ${
                    material == "gold" && "border-4 border-emerald-500"
                  }`}
                  onClick={() => setMaterial("gold")}
                />
              </div>
              <div className="h-[35px] w-[35px]">
                <img
                  src="/images/texture6.png"
                  className={`w-full h-full rounded-full object-cover cursor-pointer ${
                    material == "silver" && "border-4 border-emerald-500"
                  }`}
                  onClick={() => setMaterial("silver")}
                />
              </div>
            </div>
            <div className="flex mt-12 justify-evenly gap-5 w-full">
              <button className="font-bold text-emerald-500 border border-emerald-500 px-4 py-2 rounded-lg transition-colors duration-300 hover:bg-stone-300 w-full">
                خرید
              </button>
              <button className="font-bold text-stone-600 border border-stone-600 px-4 py-2 rounded-lg transition-colors duration-300 hover:bg-stone-300 w-full">
                ارسال پیشنهاد
              </button>
            </div>
            <div className="border border-stone-200 w-full h-max mt-3 p-5 rounded-lg flex flex-col gap-2">
              <div className="flex gap-3 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-green-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0-3-3m3 3 3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
                  />
                </svg>
                <p className="font-semibold">یک ماه بازگشت رایگان</p>
              </div>
              <div className="flex gap-3 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-green-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                  />
                </svg>
                <p className="font-semibold">
                  تحویل بین 7 تا 10 روز کاری
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-green-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
                  />
                </svg>
                <p className="font-semibold">
                  قیمت تایین شده توسط هنرمند و کارشناسان خبره
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-green-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
                  />
                </svg>
                <p className="font-semibold">
                  اثر اصل به همراه گواهی اصالت کالا
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <div className="flex justify-between">
            <div className="w-1/2">
              <p className="text-3xl font-bold mt-[20px]">
                اطلاعات بیشتر در مورد اثر
              </p>
              <div className="flex flex-col gap-7 mt-[28px]">
                <div className="flex justify-start border-b pb-2 gap-48">
                  <div className="flex items-center justify-start gap-7">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-[22px] h-[22px]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                      />
                    </svg>
                    <p className="text-lg">نوع اثر</p>
                  </div>
                  <p className="ml-96">نقاشی</p>
                </div>
                <div className="flex justify-start gap-[180px] border-b pb-2">
                  <div className="flex items-center justify-start gap-7">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-[22px] h-[22px]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42"
                      />
                    </svg>
                    <p className="text-lg">نوع رنگ</p>
                  </div>
                  <p>رنگ روغن</p>
                </div>
                <div className="flex justify-start gap-40 border-b pb-2">
                  <div className="flex items-center justify-start gap-7">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-[22px] h-[22px]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5"
                      />
                    </svg>
                    <p className="text-lg">اندازه دقیق</p>
                  </div>
                  <p>32.5 در 31.5 سانتی متر</p>
                </div>
                <div className="flex justify-start gap-[170px] border-b pb-2">
                  <div className="flex items-center justify-start gap-7">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-[22px] h-[22px]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                      />
                    </svg>
                    <p className="text-lg">نوع عرضه</p>
                  </div>
                  <p>آنلاین</p>
                </div>
              </div>
            </div>
            <div className="w-1/2  mr-[70px]">
              <p className="text-3xl font-bold mt-[20px]">
                اطلاعات بیشتر درمورد هنرمند
              </p>
              <div className="flex justify-between mt-4">
                <div className="flex flex-col gap-3 border p-3 rounded-lg artistprofile">
                  <img
                    src="/images/vincentvangogh.jpg"
                    className="w-[100px] h-[100px] object-cover rounded-full border-2 border-emerald-500 mx-auto"
                  />
                  <div className="flex items-center gap-3">
                    <p className="text-lg font-semibold text-right">
                      ونسانت ون گوک
                    </p>
                    <p className="text-xs font-semibold text-right text-gray-500">
                      نقاش، هلند
                    </p>
                  </div>
                  <button className="font-bold text-emerald-500 border border-emerald-500 px-4 py-2 rounded-lg transition-colors duration-300 hover:bg-stone-300 w-full">
                    دنبال کنید
                  </button>
                </div>
                <p className="w-[70%] text-justify">
                  وینسنت وَن گوگ یا وینسنت ویلم فان خوخ (زادهٔ ۳۰ مارس ۱۸۵۳ –
                  درگذشتهٔ ۲۹ ژوئیهٔ ۱۸۹۰) نقاش پست‌امپرسیونیسم هلندی بود که کار
                  او تأثیر گسترده‌ای بر هنر سده ۲۰ میلادی داشت. کارهای او شامل
                  شب پر ستاره، تک‌چهره، خودنگاره، چشم‌انداز، طبیعت بی‌جان، سرو،
                  کشتزار گندم و گل‌های آفتابگردان است. او از کودکی به نقاشی
                  علاقه داشت ولی تا اواخر دههٔ دوم زندگی‌اش نقاشی نکرد. او
                  بسیاری از کارهای شناخته‌ شده‌اش را در دو سال آخر زندگی‌اش
                  تکمیل کرد. وی در یک دهه بیش از ۲٬۱۰۰ کار هنری تولید کرد که
                  شامل ۸۶۰ نقاشی رنگ روغن و بیش از ۱٬۳۰۰ نقاشی با آبرنگ، طراحی و
                  چاپ می‌شود.
                </p>
              </div>
              <p className="text-black text-sm mr-[235px] -mt-[20px] font-semibold hover:text-gray-500 transition-colors duration-500 cursor-pointer">
                مشاهده بیوگرافی کامل و تمام آثار
              </p>
            </div>
          </div>
        </div>
        <p className="text-3xl font-bold mt-16">آثار بیشتر از ونسانت ون گوک</p>
        <Vangogh />
        <p className="text-3xl font-bold mt-16">هنرمندانی شبیه به ون گوک</p>
        <Similar />
      </div>
      <Footer />
    </div>
  )
}
export default ShowPage
