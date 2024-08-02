import React, { useEffect, useState } from 'react'
import Card from "../card/Card";

export default function TopTV() {

    let[data,setData]=useState([])
    let getData=async()=>{

    
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YmU5NzBjZmQ1NmE0ZGE0MGUxMjMzMDIwMmIyMWZkYiIsIm5iZiI6MTcyMjQ4MTA5Mi4zOTAwOTMsInN1YiI6IjY2YWFmOGI1NTE4YjgzYjc2MDg4MWVlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nz0R8wMusJ5E2wQn333KPtavh4rcNxb90k7_VMyTmEE'
            }
          };
    
      
      await fetch('https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1', options)
        .then(response => response.json())
        .then(response => {
            console.log(response.results);
            setData(response.results)
        })
        .catch(err => console.error(err));

    }
    useEffect(()=>{getData()},[])
  return (
    <>
      <div class="row container m-auto top-movies">
        {data.map((e) => (
            
            <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 mt-3">
            <Card title={e.name} poster={e.poster_path} />
            </div>
         
        ))}
      </div>
    </>
  )
}
