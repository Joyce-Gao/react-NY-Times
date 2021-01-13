import React from 'react'
import { Header } from '../components/header'
import { List } from '../components/List'
import {  NYAPPKEY } from '../constants/Common'
const Homepage = () => {
   
    return (
        <>
            <Header />
            <div className="top-speace">
                <List url={`/svc/topstories/v2/home.json?api-key=${NYAPPKEY}`} />
            </div>
        </>
    )
}
export default Homepage;
