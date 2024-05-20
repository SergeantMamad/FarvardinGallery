import { useState } from "react"
import { showpageobj } from "../components/Showpageobj"
import Navbar from "../components/Navbar"

const ShowPage = () => {
  const [imageIndex, setimageIndex] = useState(1)
  return (
    <div>
      <Navbar />
      <div dir="rtl" className="px-36 py-36">
        <div className="flex">
          <div className="w-[700px] h-[840px] bg-stone-100 relative p-8 rounded-lg shadow-lg">
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
            <p className="font-bold text-5xl">شب پرستاره</p>
            <div className="flex mt-3 justify-between">
              <div className="flex justify-start gap-5">
                <p className="font-bold text-lg text-gray-500">
                  اثری از ونسانت ونگوک
                </p>
                <p className="font-bold text-lg text-gray-500">
                  25,500 میلیون تومان
                </p>
              </div>
              <p className="font-bold text-lg text-gray-500">30 در 30 سانتی متر</p>
            </div>
            <p className="font-bold text-lg mt-2 text-justify">
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
            <p className="font-bold text-lg mt-2 text-justify">
            </p>

            <div className="flex mt-3 justify-evenly gap-5 w-full">
              <button className="font-bold text-emerald-500 border border-emerald-500 px-4 py-2 rounded-lg transition-colors duration-300 hover:bg-stone-300 w-full">
                خرید
              </button>
              <button className="font-bold text-stone-600 border border-stone-600 px-4 py-2 rounded-lg transition-colors duration-300 hover:bg-stone-300 w-full">
                ارسال پیشنهاد
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ShowPage
