import { useEffect, useRef } from "react"
import ArtistSide from "./ArtistSide"

const UploadArt = () => {
  const selectBoxRef = useRef(null)
  function handelSelectBox() {
    if(selectBoxRef.current.value != "") {
        selectBoxRef.current.className="appearance-none border border-emerald-500 bg-neutral-50 w-[40%] px-4 rounded-lg transition-all duration-500 focus:border-emerald-600 outline-none"
    }
  } 
  return (
    <div className="flex" dir="rtl">
      <ArtistSide />
      <div className="p-8 flex gap-5">
        <div className="bg-stone-100 h-[500px] w-[1100px] rounded-lg shadow-sm p-5">
          <p className="text-3xl font-bold text-emerald-500">اطلاعات کلی</p>
          <div className="flex items-center w-full mt-5">
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
              <input
                placeholder="نوع اثر"
                className="outline-none bg-neutral-50-50 py-2 px-4 rounded-lg border border-neutral-300 focus:border-emerald-600 transition-all duration-500"
              />
            </div>
            <div className="flex flex-col gap-4 w-1/4 mr-10">
              <label className="text-right text-sm font-semibold">اندازه</label>
              <div className="flex justify-between">
                <input
                  placeholder="طول"
                  className="outline-none bg-neutral-50 py-2 px-4 rounded-lg border border-neutral-300 focus:border-emerald-600 transition-all duration-500 w-1/4"
                />
                <input
                  placeholder="عرض"
                  className="outline-none bg-neutral-50 py-2 px-[13px] rounded-lg border border-neutral-300 focus:border-emerald-600 transition-all duration-500 w-1/4"
                />
                <select ref={selectBoxRef} onChange={() => handelSelectBox()} defaultValue={""} className="appearance-none border text-gray-400 border-neutral-300 bg-neutral-50 w-[40%] px-4 rounded-lg transition-all duration-500 focus:border-emerald-600 outline-none">
                    <option value="" disabled>واحد</option>
                    <option value="سانتی متر">سانتی متر</option>
                    <option value="متر">متر</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-stone-100 h-[500px] w-[450px] rounded-lg shadow-sm"></div>
      </div>
    </div>
  )
}
export default UploadArt
