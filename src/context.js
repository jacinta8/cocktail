import React, { useState, useEffect, useContext } from "react"

const AppContext = React.createContext({
  loading: false,
  items: [],
  error: false,
})

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
const AppProvider = (props) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [items, setItems] = useState([])

  const fetchedData = async () => {
    try {
      setLoading(true)
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error("Failed to fetch Cocktail List!")
      }
      const data = await response.json()
      setItems(data.drinks)
    } catch (err) {
      setError(err.message)
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchedData()
  }, [])

  return (
    <AppContext.Provider
      value={{
        loading,
        error,
        items,
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
