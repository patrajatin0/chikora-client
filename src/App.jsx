import { useEffect, useState } from 'react'
import Product from './components/Product'
import './App.css'

function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    async function fetchdata() {
      try {
        const data = await fetch("https://chikora-server.onrender.com/api/product")
        const json = await data.json()
        console.log(json.map((c) => (c.productName)));
        setData(json)
      } catch (error) {
        console.error("Error fetching data:", error);
      }


    }
    fetchdata()
  }, [])

  return (
    <>
      <div className='bg-gray-600 pt-24' >
        <div className='flex flex-wrap gap-4 justify-center '>{data.map((product, index) => (<div ><Product key={index} productData={product} /></div>))}</div>
      </div>

    </>
  )
}

export default App
