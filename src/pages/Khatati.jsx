import { useContext, useEffect, useState } from "react"
import Footer from "../components/Footer"
import { Khatatiobj } from "../components/Khatatiobj"
import Navbar from "../components/Navbar"
import { Slider } from "@mui/material"
import { LikeContext } from "../providers/LikeProvider"

const Khatati = () => {
  const [saleType, setSaleType] = useState("all")
  const [orientation, setOrientation] = useState(null)
  const [price, setPrice] = useState([0, 42])
  const { liked, setLiked } = useContext(LikeContext)
  function handleLiked(id, title, pic, category, artist) {
    if (!liked.find((liked) => liked.id == id)) {
      setLiked((prevLiked) => [
        ...prevLiked,
        {
          id: id,
          title: title,
          pic: pic,
          category: category,
          artist: artist,
        },
      ])
    } else {
      setLiked((prevLiked) =>
        prevLiked.filter((prevLike) => prevLike.id !== id)
      )
    }
  }
  return (
    <div>
      <Navbar />
      <div className="w-full h-[340px] relative">
        <img
          src="/images/khatati1.jpg"
          className="w-full h-full object-cover blur-[2px]"
        />
        <div className="flex flex-col text-black absolute left-1/2 text-center -translate-x-1/2 top-2/4 p-4 bg-[#ffffffa1] rounded-lg gap-3 w-1/3">
          <p className="text-3xl font-bold">خرید آثار خطاطی</p>
          <p className="text-xl">با کیفیت ترین خطاطی ها را اینجا بیابید</p>
        </div>
      </div>
      <div dir="rtl" className="px-36 py-28">
        <p className="text-4xl text-black font-semibold">
          پر بازدید ترین اثر های ماه گذشته
        </p>
        <div className="grid grid-cols-3 gap-4 mx-auto w-full mt-7">
          <div className="w-[500px] h-[300px]">
            <img
              src="/images/khatati2.jpg"
              className="w-full h-full object-cover"
            />
            <p className="text-sm font-semibold mt-2 text-gray-500">
              از احمد عبدالله زاده
            </p>
          </div>
          <div className="w-[500px] h-[300px]">
            <img
              src="/images/khatati3.jpg"
              className="w-full h-full object-cover"
            />
            <p className="text-sm font-semibold mt-2 text-gray-500">
              از رضا علیخانی
            </p>
          </div>
          <div className="w-[500px] h-[300px]">
            <img
              src="/images/khatati4.jpg"
              className="w-full h-full object-cover"
            />
            <p className="text-sm font-semibold mt-2 text-gray-500">
              از داریوش صباح
            </p>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="min-h-max w-max relative mt-20">
            <div className="sticky top-24 h-[830px] w-[300px] border rounded-lg z-[5] flex p-3 shadow-md bg-gray-50">
              <div className="flex flex-col">
                <p className="text-2xl font-bold">جست و جو</p>
                <div className="relative w-full mt-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 absolute top-1/2 -translate-y-[55%] right-[8px] opacity-50"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    />
                  </svg>
                  <input
                    className="outline-none bg-stone-100 w-full py-2 px-9 rounded-lg border border-transparent focus:border-emerald-500 transition-all duration-500"
                    placeholder="جست و جو کنید"
                    dir="rtl"
                  ></input>
                </div>
                <p className="font-semibold mt-3">جست و جو بر اساس</p>
                <div className="flex justify-start gap-7">
                  <div className="flex items-center gap-2 mt-2">
                    <label>همه</label>
                    <input
                      type="radio"
                      name="type"
                      className="accent-emerald-500"
                      defaultChecked
                    />
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <label>نام هنرمند</label>
                    <input
                      type="radio"
                      name="type"
                      className="accent-emerald-500"
                    />
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <label>نام اثر</label>
                    <input
                      type="radio"
                      name="type"
                      className="accent-emerald-500"
                    />
                  </div>
                </div>
                <div className="border-b mt-3" />
                <p className="text-2xl font-bold mt-3">نوع خط</p>
                <div className="grid grid-cols-2 justify-items-start">
                  <div className="flex items-center gap-2 mt-2">
                    <label>نستعلیق</label>
                    <input type="checkbox" className="accent-emerald-500" />
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <label>کوفی</label>
                    <input type="checkbox" className="accent-emerald-500" />
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <label>ثلث</label>
                    <input
                      type="checkbox"
                      defaultChecked
                      className="accent-emerald-500"
                    />
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <label>نسخ</label>
                    <input type="checkbox" className="accent-emerald-500" />
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <label>محقق</label>
                    <input type="checkbox" className="accent-emerald-500" />
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <label>تعلیق</label>
                    <input
                      type="checkbox"
                      defaultChecked
                      className="accent-emerald-500"
                    />
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <label>توقیع</label>
                    <input type="checkbox" className="accent-emerald-500" />
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <label>ریحان</label>
                    <input
                      type="checkbox"
                      defaultChecked
                      className="accent-emerald-500"
                    />
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <label>سایر خط ها</label>
                    <input type="checkbox" className="accent-emerald-500" />
                  </div>
                </div>
                <div className="border-b mt-3" />
                <p className="text-2xl font-bold mt-3">نوع فروش</p>
                <div className="w-full h-[40px] bg-stone-200 mt-3 grid grid-cols-3 text-center rounded-2xl p-2">
                  <button
                    onClick={() => setSaleType("all")}
                    className={`h-[30px] font-semibold -mt-1 py-1 text-sm rounded-xl hover:bg-stone-300 transition-colors duration-500 ${
                      saleType == "all" &&
                      "text-emerald-500 bg-black hover:bg-black"
                    }`}
                  >
                    همه
                  </button>
                  <button
                    onClick={() => setSaleType("auction")}
                    className={`h-[30px] font-semibold -mt-1 py-1 text-sm rounded-xl hover:bg-stone-300 transition-colors duration-500 ${
                      saleType == "auction" &&
                      "text-emerald-500 bg-black hover:bg-black"
                    }`}
                  >
                    مزایده ای
                  </button>
                  <button
                    onClick={() => setSaleType("public")}
                    className={`h-[30px] font-semibold -mt-1 py-1 text-sm rounded-xl hover:bg-stone-300 transition-colors duration-500 ${
                      saleType == "public" &&
                      "text-emerald-500 bg-black hover:bg-black"
                    }`}
                  >
                    حضوری
                  </button>
                </div>
                <div className="border-b mt-3" />
                <div className="mt-3 flex items-center gap-2">
                  <p className="text-2xl font-bold">قیمت</p>
                  <p className="text-sm text-stone-400">(میلیون تومان)</p>
                </div>
                <div className="flex justify-between mt-3">
                  <input
                    value={price[1]}
                    onChange={(e) => {
                      e.target.value >= 0 &&
                        e.target.value <= 42 &&
                        setPrice((prevValue) => [
                          prevValue[0],
                          Number(e.target.value),
                        ])
                    }}
                    placeholder="میلیون"
                    className="outline-none bg-neutral-50-50 py-2 px-4 rounded-lg border border-neutral-300 focus:border-emerald-600 transition-all duration-500 w-1/3 text-center"
                  />
                  <input
                    value={price[0]}
                    onChange={(e) => {
                      e.target.value >= 0 &&
                        e.target.value <= 42 &&
                        setPrice((prevValue) => [
                          Number(e.target.value),
                          prevValue[1],
                        ])
                    }}
                    placeholder="میلیون"
                    className="outline-none bg-neutral-50-50 py-2 px-4 rounded-lg border border-neutral-300 focus:border-emerald-600 transition-all duration-500 w-1/3 text-center"
                  />
                </div>
                <Slider
                  onChange={(e) => setPrice(e.target.value)}
                  className="mt-3"
                  size="small"
                  max={42}
                  min={0}
                  value={price}
                />
                <div className="border-b mt-3" />
                <p className="text-2xl font-bold mt-3">جهت</p>
                <div className="flex justify-start mt-3 gap-10">
                  <button
                    className={`p-1 rounded-lg w-[40px] h-[40px] border flex items-center ${
                      orientation == "Portrait" && "border-emerald-500"
                    }`}
                    value={"Portrait"}
                    onClick={(e) =>
                      setOrientation((prevValue) =>
                        prevValue == "Portrait" ? null : "Portrait"
                      )
                    }
                  >
                    <div className="w-[20px] h-[30px] bg-black mx-auto" />
                  </button>
                  <button
                    className={`p-1 rounded-lg w-[40px] h-[40px] border flex items-center ${
                      orientation == "Landscape" && "border-emerald-500"
                    }`}
                    value={"Landscape"}
                    onClick={(e) =>
                      setOrientation((prevValue) =>
                        prevValue == "Landscape" ? null : "Landscape"
                      )
                    }
                  >
                    <div className="w-[30px] h-[20px] bg-black" />
                  </button>
                  <button
                    className={`p-1 rounded-lg w-[40px] h-[40px] border flex items-center ${
                      orientation == "Square" && "border-emerald-500"
                    }`}
                    onClick={(e) => {
                      setOrientation((prevValue) =>
                        prevValue == "Square" ? null : "Square"
                      )
                    }}
                  >
                    <div className="w-[30px] h-[30px] bg-black" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-5">
            {Object.keys(Khatatiobj).map((index) => (
              <div className="min-w-[350px] bg-zinc-100 ml-[32px] mt-20">
                <div className="p-2 py-8 wall">
                  <img
                    src={`${Khatatiobj[index].image}`}
                    className="w-[210px] h-[210px] object-contain mx-auto transition-all hover:scale-125 border-[10px] border-black bg-white shadow-xl"
                    alt=""
                  />
                </div>
                <div className="mt-2">
                  <p className="text-lg text-center font-bold">
                    {Khatatiobj[index].name}
                  </p>
                  <div className="flex justify-between px-3">
                    <p className="text-sm font-semibold">
                      هنرمند : {Khatatiobj[index].artist}
                    </p>
                  </div>
                  <div className="flex justify-between px-3 mb-7 mt-1">
                    <p className="text-sm font-semibold">
                      {Khatatiobj[index].price} میلیون تومان
                    </p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className={`w-6 h-6 text-emerald-500 cursor-pointer hover:fill-emerald-300 ${
                        liked.find(
                          (liked) => liked.id == Khatatiobj[index].id
                        ) && "fill-emerald-500"
                      }`}
                      onClick={() =>
                        handleLiked(
                          Khatatiobj[index].id,
                          Khatatiobj[index].name,
                          Khatatiobj[index].image,
                          Khatatiobj[index].category,
                          Khatatiobj[index].artist
                        )
                      }
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default Khatati
