import { useContext, useState } from "react"
import { LikeContext } from "../providers/LikeProvider"
import { Link } from "react-router-dom"

const Navbar = () => {
  const [login, setLogin] = useState(false)
  const [favPanel, setFavPanel] = useState(false)
  const { liked, setLiked } = useContext(LikeContext)
  return (
    <div className="sticky top-0 w-full z-50 h-[80px] bg-black/95 text-white shadow-2xl backdrop-filter backdrop-blur-[20px]">
      <div className="max-w-[1600px] flex items-center justify-between mx-auto h-full">
        <Link to="/">
          <p className="title text-3xl">گالری فروردین</p>
        </Link>
        <input
          className="outline-none bg-zinc-900 w-[700px] py-2 px-4 rounded-lg border border-zinc-900 focus:border-emerald-500 transition-all duration-500"
          placeholder="جست و جو کنید"
          dir="rtl"
        ></input>
        <button className="text-lg font-bold text-emerald-500 mr-[100px] border border-emerald-500 h-max px-4 py-2 rounded-lg transition-colors duration-300 hover:bg-zinc-900 ">
          <Link to="/upload">ثبت آثار هنری</Link>
        </button>
        <div className="flex justify-between font-bold w-max cursor-pointer">
          <div className="hover:bg-zinc-900 transition-colors duration-300 h-[80px] flex flex-col items-center px-3 art">
            <p className="text-lg mt-[26px]">آثار هنری</p>
            <div className="w-full h-[50px] bg-slate-800 fixed right-0 top-[80px] artsub">
              <div
                className="max-w-[90%] flex justify-start items-center h-full gap-10"
                dir="rtl"
              >
                <p className="hover:text-emerald-500">نقاشی</p>
                <Link to="/Khatati"><p className="hover:text-emerald-500">خطاطی</p></Link>
                <p className="hover:text-emerald-500">عکاسی</p>
                <p className="hover:text-emerald-500">طراحی</p>
                <p className="hover:text-emerald-500">کلاژ</p>
                <p className="hover:text-emerald-500">مجسمه سازی</p>
                <p className="hover:text-emerald-500">تابلوفرش</p>
              </div>
            </div>
          </div>
          <div className="hover:bg-zinc-900 transition-colors duration-300 h-[80px] flex items-center px-3">
            <p className="text-lg transition-colors duration-300">هنرمندان</p>
          </div>
          <div
            className="hover:bg-gray-900 transition-colors duration-300 h-[50px] rounded-lg flex flex-col items-center px-3 my-auto cursor-pointer hover:text-emerald-500 relative"
            onClick={() => setFavPanel((prev) => !prev)}
          >
            <p className="absolute right-2 top-[2px] z-30 bg-slate-800 px-1 text-xs rounded-[4px]">
              {liked.length}
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`w-6 h-6 mt-[12px]`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
            <div
              style={{
                height:
                  liked.length > 0 ? liked.length * 170 + "px" : "max-content",
              }}
              className={`absolute top-[75px] z-20 overflow-y-scroll p-2 gap-5 rounded-md bg-slate-800 max-h-[400px] w-[450px] text-center flex flex-col shadow-2xl transition-all duration-500 opacity-0 ${
                favPanel ? "opacity-100 visible" : "invisible"
              }`}
            >
              {liked.length == 0 ? (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className={`w-20 h-20 text-emerald-500 mx-auto`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                    />
                  </svg>
                  <p className="text-white text-2xl">
                    شما در حال حاضر هیچ علاقه مندی ای ندارید
                  </p>
                  <p className="text-gray-500 text-sm font-light mt-3">
                    بهتر است لیست آثار را جست و جو کنید
                  </p>
                </>
              ) : (
                <>
                  {liked.map((getLikes, index) => (
                    <>
                      <div
                        className="w-full h-[130px] flex gap-5 text-white"
                        key={index}
                        dir="rtl"
                      >
                        <div className="w-[210px] h-[130px]">
                          <img
                            src={`${getLikes.pic}`}
                            className="w-full h-full object-cover mx-auto transition-all rounded-md"
                            alt=""
                          />
                        </div>
                        <div className="flex flex-col w-1/2 gap-3">
                          <p className="text-2xl font-bold mt-[20px] text-right">
                            {getLikes.title}
                          </p>
                          <p className="text-right">از {getLikes.artist}</p>
                          <p className="text-right">
                            با نوع {getLikes.category}
                          </p>
                        </div>
                      </div>
                      {index + 1 !== liked.length && (
                        <hr className="h-0 border-0 border-t border-slate-700 w-2/3 mx-auto" />
                      )}
                    </>
                  ))}
                </>
              )}
            </div>
          </div>
          <div
            onClick={() => setLogin((prevSetOpen) => !prevSetOpen)}
            className="hover:bg-gray-900 transition-colors duration-300 h-[50px] rounded-lg flex flex-col items-center px-3 my-auto cursor-pointer hover:text-emerald-500 relative"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 mt-[12px]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
            <div
              className={`absolute top-[75px] p-2 rounded-md bg-slate-800 h-max w-max flex flex-col shadow-2xl transition-all duration-500 opacity-0 z-50 ${
                login ? "opacity-100 visible" : "invisible"
              }`}
            >
              <button className="text-white py-3 px-6 w-full hover:text-emerald-500 transition-color duration-300 rounded-lg border border-slate-700 hover:bg-slate-900">
                <Link to="/register">ثبت نام</Link>
              </button>
              <button className="text-white py-3 px-6 hover:text-emerald-500 transition-color duration-300 rounded-lg border border-slate-700 hover:bg-slate-900 mt-[5px]">
                <Link to="/login">ورود</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Navbar
