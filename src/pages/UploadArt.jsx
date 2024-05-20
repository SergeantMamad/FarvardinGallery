import { useEffect, useRef, useState } from "react"
import ArtistSide from "../components/ArtistSide"

const UploadArt = () => {
  const selectBoxUnitRef = useRef(null)
  const selectBoxArtRef = useRef(null)
  const [image, setImage] = useState([])
  const [currentImage, setCurrentImage] = useState({})
  function handelSelectBox(currentTag) {
    if (currentTag.current.value != "" && currentTag == selectBoxUnitRef) {
      currentTag.current.className =
        "appearance-none border border-emerald-500 bg-neutral-50 w-[40%] px-4 rounded-lg transition-all duration-500 focus:border-emerald-600 outline-none"
    } else if (
      currentTag.current.value != "" &&
      currentTag == selectBoxArtRef
    ) {
      currentTag.current.className =
        "appearance-none border border-emerald-500 bg-neutral-50 py-2 px-4 rounded-lg transition-all duration-500 focus:border-emerald-600 outline-none"
    }
  }

  function handleFileInput(e) {
    const file = e.target.files[0]
    if (file) {
      for (let i = 0; i < e.target.files.length; i++) {
        setImage((prevImage) => [
          ...prevImage,
          {
            src: URL.createObjectURL(e.target.files[i]),
          },
        ])
      }
    }
  }
  return (
    <div>
      <div className="flex" dir="rtl">
        <ArtistSide />
        <div className="p-8 flex gap-5">
          <div className="bg-stone-100 h-max w-[1100px] rounded-lg shadow-sm p-5">
            <p className="text-3xl font-bold text-emerald-500">اطلاعات کلی</p>
            <div className="flex items-center w-full mt-5 justify-around">
              <div className="flex flex-col gap-2 w-1/3">
                <label className="text-right text-sm font-semibold">
                  نام اثر
                </label>
                <input
                  placeholder="نام اثر"
                  className="outline-none bg-neutral-50-50 py-2 px-4 rounded-lg border border-neutral-300 focus:border-emerald-600 transition-all duration-500"
                />
              </div>
              <div className="flex flex-col gap-2 w-1/4 mr-10">
                <label className="text-right text-sm font-semibold">
                  نوع اثر
                </label>
                <select
                  ref={selectBoxArtRef}
                  onChange={() => handelSelectBox(selectBoxArtRef)}
                  defaultValue={""}
                  className="appearance-none border text-gray-400 border-neutral-300 bg-neutral-50 py-2 px-4 rounded-lg transition-all duration-500 focus:border-emerald-600 outline-none"
                >
                  <option value="" disabled>
                    اثر
                  </option>
                  <option value="سانتی متر">نقاشی</option>
                  <option value="عکاسی">عکاسی</option>
                  <option value="طراحی">طراحی</option>
                  <option value="خطاطی">خطاطی</option>
                  <option value="کلاژ">کلاژ</option>
                  <option value="تابلو فرش">تابلو فرش</option>
                  <option value="مجسمه سازی">مجسمه سازی</option>
                </select>
              </div>
              <div className="flex flex-col gap-2 w-1/4 mr-32">
                <label className="text-right text-sm font-semibold">
                  اندازه
                </label>
                <div className="flex justify-between">
                  <input
                    placeholder="طول"
                    className="outline-none bg-neutral-50 py-2 px-4 rounded-lg border border-neutral-300 focus:border-emerald-600 transition-all duration-500 w-1/4"
                  />
                  <input
                    placeholder="عرض"
                    className="outline-none bg-neutral-50 py-2 px-[13px] rounded-lg border border-neutral-300 focus:border-emerald-600 transition-all duration-500 w-1/4"
                  />
                  <select
                    ref={selectBoxUnitRef}
                    onChange={() => handelSelectBox(selectBoxUnitRef)}
                    defaultValue={""}
                    className="appearance-none border text-gray-400 border-neutral-300 bg-neutral-50 w-[40%] px-4 rounded-lg transition-all duration-500 focus:border-emerald-600 outline-none"
                  >
                    <option value="" disabled>
                      واحد
                    </option>
                    <option value="سانتی متر">سانتی متر</option>
                    <option value="متر">متر</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 mt-4">
              <label className="text-right text-sm font-semibold">
                توضیحات
              </label>
              <textarea
                placeholder="توضیحات"
                className="outline-none bg-neutral-50-50 py-2 px-4 rounded-lg border border-neutral-300 focus:border-emerald-600 transition-all duration-500 resize-none h-[300px]"
              />
            </div>
            <div className="flex justify-around mt-4">
              <div className="flex flex-col gap-2 mt-auto">
                <label className="text-right text-sm font-semibold">آدرس</label>
                <textarea
                  placeholder="آدرس"
                  className="outline-none bg-neutral-50-50 py-2 px-4 rounded-lg border border-neutral-300 focus:border-emerald-600 transition-all duration-500 resize-none h-[120px]"
                />
              </div>
              <div className="flex flex-col gap-2 w-1/3 mr-10">
                <label className="text-right text-sm font-semibold">قیمت</label>
                <input
                  placeholder="قیمت"
                  className="outline-none bg-neutral-50-50 py-2 px-4 rounded-lg border border-neutral-300 focus:border-emerald-600 transition-all duration-500"
                />
              </div>
              <div className="flex flex-col w-1/4 mr-32 gap-2">
                <p className="text-right text-sm font-semibold">روش فروش</p>
                <div className="flex justify-between h-1/3">
                  <div className="flex h-full items-center gap-3">
                    <p className="text-right text-sm font-semibold">آنلاین</p>
                    <input
                      type="radio"
                      name="art"
                      className="accent-emerald-500"
                    />
                  </div>
                  <div className="flex h-full items-center gap-3">
                    <p className="text-right text-sm font-semibold">حضوری</p>
                    <input
                      type="radio"
                      name="art"
                      className="accent-emerald-500"
                    />
                  </div>
                  <div className="flex h-full items-center gap-3">
                    <p className="text-right text-sm font-semibold">
                      مزایده ای
                    </p>
                    <input
                      type="radio"
                      name="art"
                      className="accent-emerald-500"
                    />
                  </div>
                </div>
              </div>
            </div>
            <button className="font-bold text-emerald-500 border border-emerald-500 px-4 py-2 rounded-lg transition-colors duration-300 hover:bg-stone-300 w-[353px] mr-[290px] -translate-y-full">
              ارسال
            </button>
          </div>
          <div className="bg-stone-100 h-max w-[450px] rounded-lg shadow-sm p-5">
            <p className="text-3xl font-bold text-emerald-500">عکس ها</p>
            <div class="flex items-center justify-center w-full mt-5">
              <label
                for="dropzone-file"
                class="flex flex-col items-center justify-center w-full h-64 border-2 border-green-500 border-dashed rounded-lg cursor-pointer bg-stone-100 hover:bg-stone-200 transition-colors"
              >
                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-14 h-14 mb-4 text-gray-500 dark:text-gray-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                    />
                  </svg>
                  <p class="mb-2 font-semibold text-sm text-gray-400">
                    برای آپلود عکس خود اینجا را کلیک کنید
                  </p>
                  <p class="mb-2 font-semibold text-xs text-gray-400">
                    تمام فرمت های عکس پشتیبانی میشود
                  </p>
                </div>
                <input
                  onChange={(e) => handleFileInput(e)}
                  id="dropzone-file"
                  type="file"
                  class="hidden"
                  multiple
                />
              </label>
            </div>
            <div className="grid grid-cols-2 mt-3 gap-3 cursor-pointer relative">
              {image.map((images) => (
                <div
                  className="w-[200px] h-[200px] relative imagecontainer"
                  onClick={() =>
                    setCurrentImage({
                      src: images.src,
                    })
                  }
                >
                  <img
                    src={images.src}
                    className="w-full h-full object-cover rounded-md transition-all duration-300 hover:blur-[2px]"
                  />
                  <p className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 text-white opacity-0 text-4xl font-bold z-10 transition-all duration-300">
                    نمایش
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {Object.keys(currentImage).length > 0 && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#00000080] backdrop-blur-[3px] z-50 w-full h-full">
          <div className="h-full w-full flex items-center justify-center">
            <div className="w-[1300px] h-[900px] rounded-md">
              <img
                src={currentImage.src}
                className="object-contain w-full h-full rounded-lg"
              />
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            onClick={() => setCurrentImage({})}
            className="w-6 h-6 absolute top-[11%] right-16 bg-red-500 rounded-md border border-transparent hover:border-emerald-500 transition-all duration-500 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </div>
      )}
    </div>
  )
}
export default UploadArt
