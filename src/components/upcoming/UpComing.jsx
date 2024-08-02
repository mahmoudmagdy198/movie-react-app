import React, { useEffect, useState } from 'react'
import Card from "../card/Card";

export default function UpComing() {
  
  
    let[data,setData]=useState([])
    let getData=async()=>{

    
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YmU5NzBjZmQ1NmE0ZGE0MGUxMjMzMDIwMmIyMWZkYiIsIm5iZiI6MTcyMjQ4MTA5Mi4zOTAwOTMsInN1YiI6IjY2YWFmOGI1NTE4YjgzYjc2MDg4MWVlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nz0R8wMusJ5E2wQn333KPtavh4rcNxb90k7_VMyTmEE'
            }
          };
    
      
      await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
        .then(response => response.json())
        .then(response => {
            setData(response.results)
        })
        .catch(err => console.error(err));

    }
    useEffect(()=>{getData()},[])
  return (
    <>
      <div class="row container m-auto top-movies">
        <h1 class="fw-bolder m-4 text-center">Upcoming Movies</h1>
        {data.map((e) => (
            
            <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 mt-3">
            <Card title={e.title} poster={e.poster_path} id={e.id} />
            </div>
         
        ))}
      </div>
    </>
  )
}
