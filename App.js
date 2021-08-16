import React, { useState, useEffect } from 'react'
import { useFetch } from './useFetch'
import Follower from './Follower'
function App() {
  const {data,loading} = useFetch()
  const [ page,setPage] = useState(0)
  const [followers,setfollowers] = useState([])
  // console.log(data)
  const handlePage = (i)=>{
    setPage(i)
  }
  useEffect(()=>{
    if(loading)   return  
    setfollowers(data[page])
  },[loading,page])

  //  useEffect(() => {
  //   if (loading) return
  //   setFollowers(data[page])
  // }, [loading, page])
const handleNext = ()=>{
  const newPage = page + 1
  if (newPage > followers.length - 1){
    return setPage(0)
  }
  setPage(newPage)
}
const handlePrev = ()=>{
  const newPage = page - 1
  if (newPage === -1){
    return setPage(followers.length - 1)
  }
  setPage(newPage)
}
  if(loading){
    return <div className="section-title">
              <h1>Loading...</h1>
              <div className="underline"></div>
          </div>
  }
  return <main>
    <div className="section-title">
        <h1>Pagination</h1>
        <div className="underline"></div>
    </div>
    <section className="followers">
      <div className="container">
      {
        followers.map((person,i)=>{
          return <Follower {...person} key={i} />
        })
        
      }
      </div>
      <div className="btn-container">
      <button className="prev-btn" onClick={handlePrev}>Prev</button>
        {
          data.map((item,i)=>{
            return <button
            key={i}
            className={`page-btn  ${i === page ? 'active-btn' : ''}`}
            onClick={()=>handlePage(i)}
            >
              {i+1}
            </button>
          })
        }
      <button className="next-btn" onClick={handleNext}>Next</button>
      </div>
    </section>
  </main>
}

export default App
