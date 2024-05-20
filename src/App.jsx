import { useContext, useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"
import Slider from "./components/Slider.jsx"
import MainArts from "./components/MainArts.jsx"
import Specific from "./components/Specific.jsx"
import { Link } from "react-router-dom"
import { LikeContext } from "./providers/LikeProvider.jsx"
import Navbar from "./components/Navbar.jsx"

function App() {
  const [category, setCategory] = useState(false)

  return (
    <div>
      <Navbar />
      <Slider />
      <div dir="rtl" className="px-40 mt-[150px]">
        <p className="text-4xl text-black font-semibold">
          پرفروش ترین نقاشی های امروز
        </p>
        <p className="text-gray-500 font-semibold mt-4">
          گالری فروردین، گلچینی از پروفروش ترین نقاشی های امروز را در اختیار شما
          قرار داده
        </p>
        <MainArts />
        <p className="text-4xl text-black font-semibold mt-10">
          دسته های دیگر را میپسندید؟
        </p>
        <div className="flex justify-between">
          <p className="text-gray-500 font-semibold mt-4">
            تنوع آثار هنری گالری فرودین فقط به نقاشی محدود نمیشود
          </p>
          <button
            onClick={() => setCategory((prevCategory) => !prevCategory)}
            className="text-gray-500 hover:text-black transition-colors duration-300"
          >
            دسته های {category == true ? "کمتر" : "بیشتر"}
          </button>
        </div>
        <div
          style={{
            height: category == true ? "1390px" : "670px",
          }}
          className="grid grid-cols-3 gap-x-20 gap-y-10 mt-10 h-[670px] overflow-y-hidden imageGrid"
        >
          <div className="relative z-10 overflow-hidden h-[670px] w-[480px] gridItem">
            <div className="w-[480px] h-[670px]">
              <img
                src="/images/photography.jpg"
                className="w-full h-full object-cover mx-auto transition-all rounded-md"
              />
            </div>
            <div className="bg-zinc-100 right-[36px] w-5/6 h-[100px] z-30 text-center flex items-center justify-center rounded-t-xl gridParagraph relative">
              <p className="text-5xl text-emerald-500 font-semibold">عکاسی</p>
            </div>
          </div>
          <div className="relative z-10 overflow-hidden h-[670px] w-[480px] gridItem">
            <div className="w-[480px] h-[670px]">
              <img
                src="/images/khatati.jpg"
                className="w-full h-full object-cover mx-auto transition-all rounded-md"
              />
            </div>
            <div className="bg-zinc-100 right-[36px] w-5/6 h-[100px] z-30 text-center flex items-center justify-center rounded-t-xl gridParagraph relative">
              <p className="text-5xl text-emerald-500 font-semibold">خطاطی</p>
            </div>
          </div>
          <div className="relative z-10 overflow-hidden h-[670px] w-[480px] gridItem">
            <div className="w-[480px] h-[670px]">
              <img
                src="/images/drawing.jpg"
                className="w-full h-full object-cover mx-auto transition-all rounded-md"
              />
            </div>
            <div className="bg-zinc-100 right-[36px] w-5/6 h-[100px] z-30 text-center flex items-center justify-center rounded-t-xl gridParagraph relative">
              <p className="text-5xl text-emerald-500 font-semibold">طراحی</p>
            </div>
          </div>
          <div className="relative z-10 overflow-hidden h-[670px] w-[480px] gridItem">
            <div className="w-[480px] h-[670px]">
              <img
                src="/images/statue.jpg"
                className="w-full h-full object-cover mx-auto transition-all rounded-md"
              />
            </div>
            <div className="bg-zinc-100 right-[36px] w-5/6 h-[100px] z-30 text-center flex items-center justify-center rounded-t-xl gridParagraph relative">
              <p className="text-5xl text-emerald-500 font-semibold">
                مجسمه سازی
              </p>
            </div>
          </div>
          <div className="relative z-10 overflow-hidden h-[670px] w-[480px] gridItem">
            <div className="w-[480px] h-[670px]">
              <img
                src="/images/collage.jpg"
                className="w-full h-full object-cover mx-auto transition-all rounded-md"
              />
            </div>
            <div className="bg-zinc-100 right-[36px] w-5/6 h-[100px] z-30 text-center flex items-center justify-center rounded-t-xl gridParagraph relative">
              <p className="text-5xl text-emerald-500 font-semibold">کلاژ</p>
            </div>
          </div>
          <div className="relative z-10 overflow-hidden h-[670px] w-[480px] gridItem">
            <div className="w-[480px] h-[670px]">
              <img
                src="/images/carpet.jpg"
                className="w-full h-full object-cover mx-auto transition-all rounded-md"
              />
            </div>
            <div className="bg-zinc-100 right-[36px] w-5/6 h-[100px] z-30 text-center flex items-center justify-center rounded-t-xl gridParagraph relative">
              <p className="text-5xl text-emerald-500 font-semibold">
                تابلو فرش
              </p>
            </div>
          </div>
        </div>
        <p className="text-4xl text-black font-semibold mt-10">
          دسته بندی بر اساس موضوعات خاص
        </p>
        <p className="text-gray-500 font-semibold mt-4">
          سیستم دسته بندی پیاده سازی شده در گالری فروردین، شمارا در یافتن هرچه
          بهتر دسته بندی موردنظرتان یاری میکند
        </p>
        <Specific />
        <p className="text-4xl text-black font-semibold mt-10">
          تصویر برتر امروز
        </p>
      </div>
      <div className="w-full h-[950px]">
        <img
          src="/images/Imageoftheday.jpeg"
          className="w-full h-full object-cover mt-[50px]"
        />
      </div>
      <div dir="rtl" className="px-40">
        <p className="text-gray-500 font-semibold mt-4">
          خانه شنی اثر محمدرضا کلهر
        </p>
        <p className="text-4xl text-black font-semibold mt-10">
          هنرمندان برتر گالری فروردین را بیشتر بشناسید
        </p>
        <div className="flex justify-between">
          <div className="flex flex-col">
            <div className="w-[700px] h-[600px]">
              <img
                src="/images/vincentvangogh.jpg"
                className="w-full h-full object-contain my-auto"
              />
            </div>
            <div className="flex justify-between">
              <p className="text-3xl text-black font-semibold -mt-14">
                ونسان ون گوگ
              </p>
              <button className="text-gray-500 hover:text-black transition-colors duration-300 -mt-20">
                مشاهده بیوگرافی کامل و آثار
              </button>
            </div>
            <p className="text-black mt-5 w-[700px] text-justify">
              وینسنت وَن گوگ یا وینسنت ویلم فان خوخ (زادهٔ ۳۰ مارس ۱۸۵۳ –
              درگذشتهٔ ۲۹ ژوئیهٔ ۱۸۹۰) نقاش پست‌امپرسیونیسم هلندی بود که کار او
              تأثیر گسترده‌ای بر هنر سده ۲۰ میلادی داشت. کارهای او شامل شب پر
              ستاره، تک‌چهره، خودنگاره، چشم‌انداز، طبیعت بی‌جان، سرو، کشتزار
              گندم و گل‌های آفتابگردان است. او از کودکی به نقاشی علاقه داشت ولی
              تا اواخر دههٔ دوم زندگی‌اش نقاشی نکرد. او بسیاری از کارهای شناخته‌
              شده‌اش را در دو سال آخر زندگی‌اش تکمیل کرد. وی در یک دهه بیش از
              ۲٬۱۰۰ کار هنری تولید کرد که شامل ۸۶۰ نقاشی رنگ روغن و بیش از ۱٬۳۰۰
              نقاشی با آبرنگ، طراحی و چاپ می‌شود.
            </p>
          </div>
          <div className="flex flex-col">
            <div className="w-[700px] h-[600px]">
              <img
                src="/images/Kasraeian.jpg"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex justify-between">
              <p className="text-3xl text-black font-semibold -mt-14">
                نصرالله کسرائیان
              </p>
              <button className="text-gray-500 hover:text-black transition-colors duration-300 -mt-20">
                مشاهده بیوگرافی کامل و آثار
              </button>
            </div>
            <p className="text-black mt-5 w-[700px] text-justify">
              نصرالله کسراییان در سال ۱۳۲۳ در خرم‌آباد به دنیا آمد. پدرش
              کتابفروشی داشت و این سبب می‌شد که کتابهای زیادی جهت مطالعه در
              دسترس نصرالله بود. از سال ۱۳۴۵ عکاسی را آغاز کرد. فارغ‌التحصیل
              رشته حقوق از دانشگاه تهران است. از او به عنوان پدر عکاسی قوم‌شناسی
              و مردم‌نگاری ایران نام می‌برند. کسرائیان با سفر به نقاط مختلف
              ایران و عکس برداری آنها را در مجموعه‌هایی مختلف منتشر کرده‌است.
              برخی از آثار مهم وی عبارت است از مجموعه عشایر ایران و کتاب تخت
              جمشید که با همکاری مهرداد بهار جمع‌آوری شده‌است. کسرائیان همچنین
              در مجله ژنو نیز فعالیت می‌کند.
            </p>
          </div>
        </div>
        <button className="text-lg font-bold text-emerald-500 border border-emerald-500 h-max px-4 py-2 w-1/6 mt-8 mx-auto rounded-lg transition-colors duration-300 hover:bg-zinc-200">
          مشاهده هنرمندان بیشتر
        </button>
        <p className="text-4xl text-black font-semibold mt-10">
          چرا گالری فروردین؟
        </p>
        <div className="flex w-full justify-between mt-[60px]">
          <div className="flex flex-col gap-5 bg-zinc-100 rounded-lg p-3 px-5 shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-16 h-16 text-emerald-500 border rounded-full p-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
              />
            </svg>
            <p className="text-3xl text-black font-semibold">فروش راحت تر</p>
            <p className="w-[400px]">
              گالری فروردین با داشتن تعداد مشتریان بالا کار فروش را برای
              هنرمندان راحت تر میکند
            </p>
          </div>
          <div className="flex flex-col gap-5 bg-zinc-100 rounded-lg p-3 px-5 shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-16 h-16 text-emerald-500 border rounded-full p-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
              />
            </svg>

            <p className="text-3xl text-black font-semibold">مشاورین آنلاین</p>
            <p className="w-[400px]">
              مشاورین با تجربه گالری فروردین باعث شده اند که در هنگام فروش یا
              خرید اثر هنری دچار اشتباه نشوید
            </p>
          </div>
          <div className="flex flex-col gap-5 bg-zinc-100 rounded-lg p-3 px-5 shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-16 h-16 text-emerald-500 border rounded-full p-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3"
              />
            </svg>
            <p className="text-3xl text-black font-semibold">آثار هنری متنوع</p>
            <p className="w-[400px]">
              هنرمندان با استعدادی که آثار هنری خود را در گالری فروردین به فروش
              میرسانند در همه زمینه های هنری فعالیت دارند
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-[300px] relative mt-20">
        <img
          src="images/Colosseum.jpg"
          className="w-full h-full object-cover blur-[1px]"
        />
        <div
          className="w-[500px] h-[230px] bg-zinc-100 absolute top-10 right-20 rounded-lg p-10"
          dir="rtl"
        >
          <div className="flex flex-col">
            <p className="text-lg font-bold text-justify">
              با وارد کردن آدرس ایمیل خود میتوانید روزانه از پیشنهادات کاری ویژه
              و همچنین آثار هنری خاص با خبر شوید
            </p>
            <div className="flex justify-between">
              <input
                className="outline-none bg-zinc-100 py-2 px-4 rounded-lg border border-emerald-500 w-[80%] focus:border-emerald-600 transition-all duration-500 mt-14"
                placeholder="آدرس ایمیل خود را وارد کنید"
              />
              <button className="text-lg font-bold text-emerald-500 border border-emerald-500 h-max px-4 py-2 w-1/6 mt-14 mx-auto rounded-lg transition-colors duration-300 hover:bg-zinc-200">
                ثبت
              </button>
            </div>
          </div>
        </div>
      </div>
      <div dir="rtl" className="px-40">
        <p className="text-4xl text-black font-semibold mt-10">
          نظرات هنرمندان و مشتریان
        </p>
        <div className="flex w-full justify-between mt-[60px] loopcarousel">
          <div className="flex flex-col gap-5 bg-zinc-100 rounded-lg p-3 px-5 shadow-lg">
            <svg
              fill="#00FA9A"
              className="w-12 h-12"
              viewBox="0 -5 34 34"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m2.4 24h7.2l4.8-9.6v-14.4h-14.4v14.4h7.2zm19.2 0h7.2l4.8-9.6v-14.4h-14.4v14.4h7.2z" />
            </svg>
            <p className="w-[400px] font-semibold text-xl text-justify">
              گالری فروردین به معنای واقعی زندگی من را تغییر داد، نمی دانم چطور
              از دست اندرکاران این سایت تشکر کنم...
            </p>
            <p className="text-gray-500 text-sm font-semibold">
              سارا احمدزاده ، هنرمند از اصفهان
            </p>
          </div>
          <div className="flex flex-col gap-5 bg-zinc-100 rounded-lg p-3 px-5 shadow-lg">
            <svg
              fill="#00BFFF"
              className="w-12 h-12"
              viewBox="0 -5 34 34"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m2.4 24h7.2l4.8-9.6v-14.4h-14.4v14.4h7.2zm19.2 0h7.2l4.8-9.6v-14.4h-14.4v14.4h7.2z" />
            </svg>
            <p className="w-[400px] font-semibold text-xl text-justify">
              کیفیت اکثر آثاری که در گالری فروردین به فروش میروند، بالاست و همین
              باعث شده همه اثر های هنری خانه خودم را از گالری فروردین خریداری
              کنم
            </p>
            <p className="text-gray-500 text-sm font-semibold">
              عرفان پورزمانی ، خریدار از مشهد
            </p>
          </div>
          <div className="flex flex-col gap-5 bg-zinc-100 rounded-lg p-3 px-5 shadow-lg">
            <svg
              fill="#FF1493"
              className="w-12 h-12"
              viewBox="0 -5 34 34"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m2.4 24h7.2l4.8-9.6v-14.4h-14.4v14.4h7.2zm19.2 0h7.2l4.8-9.6v-14.4h-14.4v14.4h7.2z" />
            </svg>
            <p className="w-[400px] font-semibold text-xl text-justify">
              تا قبل از اینکه پلتفرم گالری فروردین تشکیل شود از برنامه های رقیب
              استفاده میکردم که کار را سخت کرده بودند،اما گالری فروردین کار را راحت کرده است.
            </p>
            <p className="text-gray-500 text-sm font-semibold">
              مریم فرهمند ، هنرمند از تهران
            </p>
          </div>
        </div>
      </div>
      <div
        className="bg-zinc-800 text-white h-max flex justify-center py-2 mt-20 items-center gap-20"
        dir="rtl"
      >
        <p className="text-xl font-bold">شرکت های همکار</p>
        <div className="max-w-5xl flex gap-24">
          <div className="h-[70px] w-[120px]">
            <img
              src="images/the-web-works.png"
              className="h-full w-full object-contain grayscale"
            />
          </div>
          <div className="h-[70px] w-[120px]">
            <img
              src="images/space-cube.png"
              className="h-full w-full object-contai grayscale"
            />
          </div>
          <div className="h-[70px] w-[120px]">
            <img
              src="images/fast-banana.png"
              className="h-full w-full object-contain grayscale"
            />
          </div>
          <div className="h-[70px] w-[120px]">
            <img
              src="images/cheshire-county-hygiene-services.png"
              className="h-full w-full object-contain grayscale"
            />
          </div>
          <div className="h-[70px] w-[120px]">
            <img
              src="images/auto-speed.png"
              className="h-full w-full object-contain grayscale"
            />
          </div>
          <div className="h-[70px] w-[120px]">
            <img
              src="images/crofts-accountants.png"
              className="h-full w-full object-contain grayscale"
            />
          </div>
        </div>
      </div>
      <div className="bg-black text-white h-max py-10" dir="rtl">
        <div className="flex justify-between max-w-6xl mx-auto">
          <div className="flex flex-col gap-3">
            <p className="font-bold text-3xl">تیم گالری فروردین</p>
            <p className="transition-colors duration-300 border-b border-b-black hover:border-b-emerald-500 hover:text-emerald-500 pb-[2px] w-max">
              درباره ما
            </p>
            <p className="transition-colors duration-300 border-b border-b-black hover:border-b-emerald-500 hover:text-emerald-500 pb-[2px] w-max">
              اعضای تیم
            </p>
            <p className="transition-colors duration-300 border-b border-b-black hover:border-b-emerald-500 hover:text-emerald-500 pb-[2px] w-max">
              موقعیت های شغلی
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="font-bold text-3xl">پشتیبانی</p>
            <p className="transition-colors duration-300 border-b border-b-black hover:border-b-emerald-500 hover:text-emerald-500 pb-[2px] w-max">
              پشتیبانی فروش
            </p>
            <p className="transition-colors duration-300 border-b border-b-black hover:border-b-emerald-500 hover:text-emerald-500 pb-[2px] w-max">
              پشتیبانی فنی
            </p>
            <p className="transition-colors duration-300 border-b border-b-black hover:border-b-emerald-500 hover:text-emerald-500 pb-[2px] w-max">
              حمل و نقل کالا
            </p>
            <p className="transition-colors duration-300 border-b border-b-black hover:border-b-emerald-500 hover:text-emerald-500 pb-[2px] w-max">
              شرایط برگشت وجه
            </p>
            <a
              href="tel:+02112531925"
              className="transition-colors duration-300 border-b border-b-black hover:border-b-emerald-500 hover:text-emerald-500 pb-[2px] w-max"
            >
              02112531925
            </a>
          </div>
          <div className="flex flex-col gap-3">
            <p className="font-bold text-3xl">سرویس ها</p>
            <p className="transition-colors duration-300 border-b border-b-black hover:border-b-emerald-500 hover:text-emerald-500 pb-[2px] w-max">
              باشگاه مشتریان
            </p>
            <p className="transition-colors duration-300 border-b border-b-black hover:border-b-emerald-500 hover:text-emerald-500 pb-[2px] w-max">
              باشگاه هنرمندان
            </p>
            <p className="transition-colors duration-300 border-b border-b-black hover:border-b-emerald-500 hover:text-emerald-500 pb-[2px] w-max">
              خرید و فروش حضوری
            </p>
            <p className="transition-colors duration-300 border-b border-b-black hover:border-b-emerald-500 hover:text-emerald-500 pb-[2px] w-max">
              مبادله آثار هنری
            </p>
            <p className="transition-colors duration-300 border-b border-b-black hover:border-b-emerald-500 hover:text-emerald-500 pb-[2px] w-max">
              شعبه مرکزی اصفهان
            </p>
            <p className="transition-colors duration-300 border-b border-b-black hover:border-b-emerald-500 hover:text-emerald-500 pb-[2px] w-max">
              شعبه فرعی تهران
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="font-bold text-3xl">ما را دنبال کنید</p>
            <div className="flex gap-4">
              <div className="p-2 bg-zinc-800 rounded-full border border-black transition-colors duration-500 hover:border-green-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="#ffffff"
                >
                  <path d="M10.202,2.098c-1.49,.07-2.507,.308-3.396,.657-.92,.359-1.7,.84-2.477,1.619-.776,.779-1.254,1.56-1.61,2.481-.345,.891-.578,1.909-.644,3.4-.066,1.49-.08,1.97-.073,5.771s.024,4.278,.096,5.772c.071,1.489,.308,2.506,.657,3.396,.359,.92,.84,1.7,1.619,2.477,.779,.776,1.559,1.253,2.483,1.61,.89,.344,1.909,.579,3.399,.644,1.49,.065,1.97,.08,5.771,.073,3.801-.007,4.279-.024,5.773-.095s2.505-.309,3.395-.657c.92-.36,1.701-.84,2.477-1.62s1.254-1.561,1.609-2.483c.345-.89,.579-1.909,.644-3.398,.065-1.494,.081-1.971,.073-5.773s-.024-4.278-.095-5.771-.308-2.507-.657-3.397c-.36-.92-.84-1.7-1.619-2.477s-1.561-1.254-2.483-1.609c-.891-.345-1.909-.58-3.399-.644s-1.97-.081-5.772-.074-4.278,.024-5.771,.096m.164,25.309c-1.365-.059-2.106-.286-2.6-.476-.654-.252-1.12-.557-1.612-1.044s-.795-.955-1.05-1.608c-.192-.494-.423-1.234-.487-2.599-.069-1.475-.084-1.918-.092-5.656s.006-4.18,.071-5.656c.058-1.364,.286-2.106,.476-2.6,.252-.655,.556-1.12,1.044-1.612s.955-.795,1.608-1.05c.493-.193,1.234-.422,2.598-.487,1.476-.07,1.919-.084,5.656-.092,3.737-.008,4.181,.006,5.658,.071,1.364,.059,2.106,.285,2.599,.476,.654,.252,1.12,.555,1.612,1.044s.795,.954,1.051,1.609c.193,.492,.422,1.232,.486,2.597,.07,1.476,.086,1.919,.093,5.656,.007,3.737-.006,4.181-.071,5.656-.06,1.365-.286,2.106-.476,2.601-.252,.654-.556,1.12-1.045,1.612s-.955,.795-1.608,1.05c-.493,.192-1.234,.422-2.597,.487-1.476,.069-1.919,.084-5.657,.092s-4.18-.007-5.656-.071M21.779,8.517c.002,.928,.755,1.679,1.683,1.677s1.679-.755,1.677-1.683c-.002-.928-.755-1.679-1.683-1.677,0,0,0,0,0,0-.928,.002-1.678,.755-1.677,1.683m-12.967,7.496c.008,3.97,3.232,7.182,7.202,7.174s7.183-3.232,7.176-7.202c-.008-3.97-3.233-7.183-7.203-7.175s-7.182,3.233-7.174,7.203m2.522-.005c-.005-2.577,2.08-4.671,4.658-4.676,2.577-.005,4.671,2.08,4.676,4.658,.005,2.577-2.08,4.671-4.658,4.676-2.577,.005-4.671-2.079-4.676-4.656h0"></path>
                </svg>
              </div>
              <div className="p-2 bg-zinc-800 rounded-full border border-black transition-colors duration-500 hover:border-green-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="#ffffff"
                >
                  <path
                    d="M16,2c-7.732,0-14,6.268-14,14s6.268,14,14,14,14-6.268,14-14S23.732,2,16,2Zm6.489,9.521c-.211,2.214-1.122,7.586-1.586,10.065-.196,1.049-.583,1.401-.957,1.435-.813,.075-1.43-.537-2.218-1.053-1.232-.808-1.928-1.311-3.124-2.099-1.382-.911-.486-1.412,.302-2.23,.206-.214,3.788-3.472,3.858-3.768,.009-.037,.017-.175-.065-.248-.082-.073-.203-.048-.29-.028-.124,.028-2.092,1.329-5.905,3.903-.559,.384-1.065,.571-1.518,.561-.5-.011-1.461-.283-2.176-.515-.877-.285-1.574-.436-1.513-.92,.032-.252,.379-.51,1.042-.773,4.081-1.778,6.803-2.95,8.164-3.517,3.888-1.617,4.696-1.898,5.222-1.907,.116-.002,.375,.027,.543,.163,.142,.115,.181,.27,.199,.379,.019,.109,.042,.357,.023,.551Z"
                    fill-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <div className="p-2 bg-zinc-800 rounded-full border border-black transition-colors duration-500 hover:border-green-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="#ffffff"
                >
                  <path d="M18.42,14.009L27.891,3h-2.244l-8.224,9.559L10.855,3H3.28l9.932,14.455L3.28,29h2.244l8.684-10.095,6.936,10.095h7.576l-10.301-14.991h0Zm-3.074,3.573l-1.006-1.439L6.333,4.69h3.447l6.462,9.243,1.006,1.439,8.4,12.015h-3.447l-6.854-9.804h0Z"></path>
                </svg>
              </div>
              <div className="p-2 bg-zinc-800 rounded-full border border-black transition-colors duration-500 hover:border-green-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="#ffffff"
                >
                  <path d="M31.331,8.248c-.368-1.386-1.452-2.477-2.829-2.848-2.496-.673-12.502-.673-12.502-.673,0,0-10.007,0-12.502,.673-1.377,.37-2.461,1.462-2.829,2.848-.669,2.512-.669,7.752-.669,7.752,0,0,0,5.241,.669,7.752,.368,1.386,1.452,2.477,2.829,2.847,2.496,.673,12.502,.673,12.502,.673,0,0,10.007,0,12.502-.673,1.377-.37,2.461-1.462,2.829-2.847,.669-2.512,.669-7.752,.669-7.752,0,0,0-5.24-.669-7.752ZM12.727,20.758V11.242l8.364,4.758-8.364,4.758Z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <hr className="mt-10" />
      </div>
      <div className="bg-black flex items-center -mt-5">
        <p className="text-white mx-auto mb-5">
          طراحی و کد نویسی شده با ♡ توسط محمد حسین - 1403
        </p>
      </div>
    </div>
  )
}

export default App
