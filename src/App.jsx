import { useState } from "react"
import "./App.css"
import Slider from "./components/Slider.jsx"
import MainArts from "./components/MainArts.jsx"
import Specific from "./components/Specific.jsx"
import Navbar from "./components/Navbar.jsx"
import Footer from "./components/Footer.jsx"
import { Link } from "react-router-dom"

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
          <Link to="/Khatati">
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
          </Link>
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
      <Footer />
    </div>
  )
}

export default App
