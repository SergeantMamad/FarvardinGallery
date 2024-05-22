import { useRef } from "react"
import { artistsobj } from "./Artistsobj"
const Similar = () => {
  const similarArtistsRef = useRef(null)
  function scrollRight() {
    return (similarArtistsRef.current.scrollLeft += 360)
  }
  function scrollLeft() {
    return (similarArtistsRef.current.scrollLeft -= 360)
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
        className="flex mt-10 gap-28 scroll-smooth relative overflow-x-hidden"
        ref={similarArtistsRef}
      >
        {Object.keys(artistsobj).map((index) => (
          <div
            style={{
              background: `linear-gradient(rgba(255,255,255,.9), rgba(255,255,255,.95)), url(${artistsobj[index].nationalitypic})`,
              backgroundRepeat: "none",
              backgroundSize: "cover",
              backgroundPosition: 'center'
            }}
            className={`flex flex-col gap-3 border p-3 rounded-lg min-w-[206px]`}
          >
            <img
              src={`${artistsobj[index].profile}`}
              className="w-[100px] h-[100px] object-cover rounded-full border-2 border-emerald-500 mx-auto"
            />
            <div className="flex items-center justify-center gap-3">
              <p className="text-lg font-semibold text-right">{artistsobj[index].name}</p>
              <p className="text-xs font-semibold text-right text-gray-500">
              {artistsobj[index].nationality}، {artistsobj[index].type}
              </p>
            </div>
            <button className="font-bold text-emerald-500 border border-emerald-500 px-4 py-2 rounded-lg transition-colors duration-300 hover:bg-stone-300 w-full">
              دنبال کنید
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Similar
