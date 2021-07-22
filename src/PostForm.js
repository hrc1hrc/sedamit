import React, { useState } from 'react'

const PostForm = ({ onFormSubmit }) => {
    const [data, setData] = useState("")
    const [ip, setIp] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const submit = (e) => {
        e.preventDefault()
        onFormSubmit()
    }

    const handle = (e) => {
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }

    return (
        <div>
            <form onSubmit={(e) => submit(e)}>
                <input type="text" onChange={(e) => handle(e)} id="ip" value={data.ip} placeholder="server ip adress" />
                <input type="text" onChange={(e) => handle(e)} id="username" value={data.username} placeholder="username" />
                <input type="text" onChange={(e) => handle(e)} id="password" value={data.password} placeholder="password" />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default PostForm
