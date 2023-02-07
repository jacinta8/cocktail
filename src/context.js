import React, { useState, useEffect, useContext, useCallback } from "react"

const AppContext = React.createContext({
  loading: true,
  items: [],
  error: false,
})

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
const AppProvider = (props) => {
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("a")
  const [items, setItems] = useState([])

  const fetchedData = useCallback(async () => {
    try {
      setLoading(true)
      const response = await fetch(`${url}${searchTerm}`)
      if (!response.ok) {
        throw new Error("Failed to fetch Cocktail List!")
      }
      const data = await response.json()
      setItems(data.drinks)
      // console.log("data", data)
    } catch (err) {
      console.log(err.message)
    }
    setLoading(false)
  }, [searchTerm])
  useEffect(() => {
    fetchedData()
  }, [searchTerm, fetchedData])

  return (
    <AppContext.Provider
      value={{
        loading,
        items,
        setSearchTerm,
      }}
    >
      {props.children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
export { AppContext, AppProvider }
