import './App.css';
import React, {useEffect, useState} from "react";
import User from "./components/user";
import Price from "./components/price";


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


            <User users={result.users}/>
            <Price price={result.price}/>


        </div>
    );
}

export default App;
