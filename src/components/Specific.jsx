import { useEffect, useState } from "react"
import { specificObj } from "./Specificobj"
const Specific = ({ liked, setLiked }) => {
  const [specificCategory, setspecificCategory] = useState("طبیعت")
  const [content, setContent] = useState(null)
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
      setLiked((prevLiked) => prevLiked.filter((prevLike) => prevLike.id != id))
    }
  }
  let data = <div></div>
  return (
    <div className="flex flex-col">
      <div className="flex justify-start gap-4 mt-2">
        <button
          className={`text-sm px-2 py-1 rounded-2xl ${
            specificCategory == "طبیعت"
              ? "bg-zinc-100 text-emerald-500"
              : "bg-zinc-200"
          }`}
          onClick={() => setspecificCategory("طبیعت")}
        >
          طبیعت
        </button>
        <button
          className={`text-sm px-2 py-1 rounded-2xl ${
            specificCategory == "دریا"
              ? "bg-zinc-100 text-emerald-500"
              : "bg-zinc-200"
          }`}
          onClick={() => setspecificCategory("دریا")}
        >
          دریا
        </button>
        <button
          className={`text-sm px-2 py-1 rounded-2xl ${
            specificCategory == "حیوانات"
              ? "bg-zinc-100 text-emerald-500"
              : "bg-zinc-200"
          }`}
          onClick={() => setspecificCategory("حیوانات")}
        >
          حیوانات
        </button>
        <button
          className={`text-sm px-2 py-1 rounded-2xl ${
            specificCategory == "روستا"
              ? "bg-zinc-100 text-emerald-500"
              : "bg-zinc-200"
          }`}
          onClick={() => setspecificCategory("روستا")}
        >
          روستا
        </button>
      </div>
      <div className="flex mt-5 justify-between scroll-smooth relative overflow-x-hidden">
        {Object.keys(specificObj).map((index) => {
          if (specificObj[index].specificCategory == specificCategory) {
            return (
              <div className="min-w-[390px] min-h-[510px] bg-zinc-100 rounded-lg">
                <div className="p-2 py-8 rounded-t-lg wall">
                  <img
                    src={`${specificObj[index].image}`}
                    className="w-[350px] h-[330px] object-contain mx-auto transition-all hover:scale-105 border-[10px] border-black bg-white shadow-xl"
                    alt=""
                  />
                </div>
                <div className="mt-2">
                  <p className="text-xl text-center font-bold">
                    {specificObj[index].name}
                  </p>
                  <div className="flex justify-between px-3">
                    <p className="text-sm font-semibold">
                      نوع اثر : {specificObj[index].category}
                    </p>
                    <p className="text-sm font-semibold">
                      هنرمند : {specificObj[index].artist}
                    </p>
                  </div>
                  <div className="flex justify-between px-3 mb-7 mt-1">
                    <p className="text-sm font-semibold">
                      {specificObj[index].price} میلیون تومان
                    </p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className={`w-6 h-6 text-emerald-500 cursor-pointer hover:fill-emerald-300 ${
                        liked.find(
                          (liked) => liked.id == specificObj[index].id
                        ) && "fill-emerald-500"
                      }`}
                      onClick={() =>
                        handleLiked(
                          specificObj[index].id,
                          specificObj[index].name,
                          specificObj[index].image,
                          specificObj[index].category,
                          specificObj[index].artist
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
            )
          } else return
        })}
      </div>
      <button className="text-lg font-bold text-emerald-500 border border-emerald-500 h-max px-4 py-2 w-1/4 mt-5 mx-auto rounded-lg transition-colors duration-300 hover:bg-zinc-200 ">
       آثار بیشتر با دسته بندی {specificCategory}
      </button>
    </div>
  )
}
export default Specific
