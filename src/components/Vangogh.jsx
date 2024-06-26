import { useContext, useRef } from "react"
import { LikeContext } from "../providers/LikeProvider"
import { vanGoghObj } from "./Vangoghobj"

const Vangogh = () => {
  const VangoghRef = useRef(null)
  const { liked, setLiked } = useContext(LikeContext)
  function scrollRight() {
    return (VangoghRef.current.scrollLeft += 360)
  }
  function scrollLeft() {
    return (VangoghRef.current.scrollLeft -= 360)
  }

  function handleLiked(id, title, pic, category, artist) {
    console.log(id)
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
    <div className="relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        onClick={() => scrollLeft()}
        className="w-12 h-12 absolute -left-6 z-10 top-1/3 bg-emerald-500 p-2 rounded-full cursor-pointer hover:bg-black hover:text-white duration-300 transition-colors"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        onClick={() => scrollRight()}
        className="w-12 h-12 absolute top-1/3 z-10 -right-7 bg-emerald-500 p-2 rounded-full cursor-pointer hover:bg-black hover:text-white duration-300 transition-colors"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
        />
      </svg>
      <div
        className="flex mt-10 gap-7 scroll-smooth relative overflow-x-hidden"
        ref={VangoghRef}
      >
        {Object.keys(vanGoghObj).map((index) => (
          <div className="min-w-[350px] bg-zinc-100">
            <div className="p-2 py-8 wall">
              <img
                src={`${vanGoghObj[index].image}`}
                className="w-[210px] h-[210px] object-contain mx-auto transition-all hover:scale-125 border-[10px] border-black bg-white shadow-xl"
                alt=""
              />
            </div>
            <div className="mt-2">
              <p className="text-lg text-center font-bold">
                {vanGoghObj[index].name}
              </p>
              <div className="flex justify-between px-3">
                <p className="text-sm font-semibold">
                  نوع رنگ : {vanGoghObj[index].color}
                </p>
                <p className="text-sm font-semibold">
                  {vanGoghObj[index].price} میلیون تومان
                </p>
              </div>
              <div className="flex justify-end px-3 mb-7 mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={`w-6 h-6 text-emerald-500 cursor-pointer hover:fill-emerald-300 ${
                    liked.find((liked) => liked.id == vanGoghObj[index].id) &&
                    "fill-emerald-500"
                  }`}
                  onClick={() =>
                    handleLiked(
                      vanGoghObj[index].id,
                      vanGoghObj[index].name,
                      vanGoghObj[index].image,
                      vanGoghObj[index].category,
                      vanGoghObj[index].artist
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
  )
}
export default Vangogh
