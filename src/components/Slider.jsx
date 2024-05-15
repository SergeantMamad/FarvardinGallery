import { useEffect, useState } from "react"
import { slideObj } from "./Sliderobj"
import "../App.css"
const objSize = Object.keys(slideObj).length
const Slider = () => {
  const [slideN, setSlideN] = useState(1)
  useEffect(() => {
    const Timer = setInterval(() => {
      slideN == objSize ? setSlideN(1) : setSlideN((prevSlide) => prevSlide + 1)
    }, 4000)
    return () => {
      clearInterval(Timer)
    }
  }, [slideN])


  return (
    <div className="w-full h-[700px] relative">
      {Object.keys(slideObj).map((index) => (
        <div
          className={`relative slider ${slideN == index ? "active" : ""}`}
          key={index}
        >
          <img
            src={slideObj[index].image}
            className="headerimg object-cover w-full h-[700px] absolute translate-y-[80px]"
          />
          <div
            className="absolute right-10 w-max h-max translate-y-[200px] opacity-90 shadow-2xl bg-white rounded-2xl p-20"
            dir="rtl"
          >
            <p className="text-5xl w-[550px] leading-[70px] font-bold text-justify maintext">
              {slideObj[index].desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Slider
