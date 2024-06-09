import axios from 'axios'
import React, { useEffect, useState } from 'react'

const View = () => {
    const [quote,setData]=useState(
        {"quotes":[]}
    )
    const fetchData=()=>{
        axios.get("https://dummyjson.com/quotes").then(
            (response)=>{
                console.log(response.data)
                setData(response.data)
            }
        ).catch()
    }

    useEffect(()=>{fetchData()},[])
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                {quote.quotes.map(
                    (value,index)=>
                    {
                        return <div class="card">
                                <div class="card-header">
                                    Featured
                                </div>
                                    <div class="card-body">
                                        <h5 class="card-title">{value.id}</h5>
                                        <p class="card-text">{value.quote}</p>
                                        <p class="card-text">{value.author}</p>
                                        <a href="#" class="btn btn-success">More!</a>
                                    </div>
                            </div>
                    }
                )

                }
                </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default View