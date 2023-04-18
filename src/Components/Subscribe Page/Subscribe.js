import React, {useState} from "react";

import Button from "../Button";
import Input from "./Input";
import subscribeStyle from './Subscribe.module.css'
import useFetch from "./API/useFetch";
import Post from "./API/Post";
import Delete from "./API/Delete";

const Subscribe = ()=>{
    const [user, setUser] = useState({
        name: '',
        email:'',
        city: ''
    });

    const handleChange= (e)=>{
        setUser(prevUser => {
            return {...prevUser, [e.target.name]: e.target.value}
        })
    }

    const submit =(e)=>{
        e.stopPropagation()
        e.preventDefault();
        Post({name: user.name,
        email:user.email,
        body: user.city,
        userId: 1,})
       let jsonName = user.name;
       let jsonCity = user.city;
       alert(`Great ${jsonName}, we will send you weather information about ${jsonCity} on your email!`)
       setUser({
        name: '',
        email:'',
        city: ''
    })

    }

    const inputs = [
        {id:1,
        type:'text',
        name:'name',
        placeholder: 'enter your name',
        required: true,
         },
        {id:2,
        type:'email',
        name:'email',
        placeholder: 'enter your email',
        required: true,
        },
        {id:3,
        type:'text',
        name:'city',
        placeholder: 'enter your city of interest',
        required: true,
        }
    ]

    const inputsForm = inputs.map(input =>{
        return (
        <Input {...input} onChange={handleChange} value={user[input.name]} key={input.id}/>
        )
    })

    useFetch('https://jsonplaceholder.typicode.com/comments')


    const handleDelete =(email, event)=>{
        event.stopPropagation();
        event.preventDefault();
        Delete(email)
        alert('You have been unsubscribed');
    }
return(
    <section id='subscribe' className={subscribeStyle.subscribe}>
        <h2 className={subscribeStyle.title}>Subscribe to receive our weather newsletter:</h2>
    <form>
      {inputsForm}
        <Button type="submit" onClick={submit}> Subscribe</Button>
        <Button type='submit' onClick={(event)=>{handleDelete(user.email,event)}}>Unsubscribe</Button>
    </form>
    </section>
    
)
}

export default Subscribe