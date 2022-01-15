import React , {useState, useEffect} from 'react';

function Hello() {

    const [name, setName] = useState("David");
    const [counter, setCounter] = useState(0);

    useEffect(()=> {
        alert("Number of clicks: " + counter )
    }, [counter])

    function increment(){
        setCounter(counter+1)
    }

    return <div>
        <h1>Counting... {counter} .</h1>
        <button onClick={increment}>Increment</button>
    </div>
}

export default Hello