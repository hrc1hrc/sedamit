import { useState, useEffect } from "react"
import './App.css';
import PostForm from "./PostForm";
import Loader from "./Loader";

function App() {
  const [processes, setProcesses] = useState([{}])
  const [data, setData] = useState({
    ip: "", username: "", password: ""
  })

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api")
      const data = await res.json()
      console.log(data)
      setProcesses(data)
    }
    fetchData()
  }, [])


  const handleFormSubmit = async () => {
    const res = await fetch("/api", {
      method: "POST",
      headers: { "Content-type": "application/json; charset=UTF-8" },
      body: JSON.stringify({ "ip": data.ip, "username": data.username, "password": data.password })
    })
    const data = await res.json()
    console.log(data)
    setProcesses("")
    getLatestProcesses()
  }

  const getLatestProcesses = async () => {
    const res = await fetch("/api")
    const data = await res.json()
    setProcesses(data)
  }


  return (
    <div className="container">
      <h1>Izvidnik serverskih procesa</h1>
      <PostForm onFormSubmit={handleFormSubmit} />
      <div>
        <div>{processes.output ? processes.output : <Loader />}</div>
      </div>
    </div>
  );
}

export default App;
