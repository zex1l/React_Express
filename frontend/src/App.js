import {useEffect, useState} from "react";

const App = () => {
    const [data, setData] = useState()

    useEffect(() => {
        fetch("http://localhost:5000/api", {
            headers: {
                'Content-Type': 'application/json'
                }}
        )
            .then(res => res.json())
            .then(res => console.log(res))

    }, [])


  return (
    <div className="App">
      Hello
    </div>
  );
}
export default App;
