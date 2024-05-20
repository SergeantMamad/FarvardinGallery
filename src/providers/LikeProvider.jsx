import { createContext, useState } from "react"

export const LikeContext = createContext(null)
const LikeProvider = ({ children }) => {
  const [liked, setLiked] = useState([])
  return (
    <LikeContext.Provider value={{ liked, setLiked }}>
      {children}
    </LikeContext.Provider>
  )
}
export default LikeProvider
