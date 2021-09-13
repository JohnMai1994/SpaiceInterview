import './App.css';
import React, {useEffect, useState} from "react";
import Users from "./components/user";
import Price from "./components/price";


import Users2 from "./components/user2";


function App() {
    const [result, setResult] = useState(
        {
            "users": [],
            "images": [],
            "coordinates": {},
            "price": "0"
        });


    useEffect(() => {
        fetch(" https://bs-random-json.vercel.app/api/data")
            .then(res => res.json())
            .then(result => setResult(result)
            )
    }, [])


    return (
        <div>

            {/*V1*/}
            {/*<Users users={result.users}/>*/}

            {/*V2*/}
            <Users2 users={result.users}/>

            <Price price={result.price}/>


        </div>
    );
}

export default App;
