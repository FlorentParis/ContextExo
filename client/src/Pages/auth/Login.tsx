import { useState } from "react";
import {Link} from "react-router-dom";
import LocalUserInterface from "../../Interfaces/LocalUserInterface";

export default function Login() {

    const [formInput, setFormInput] = useState<LocalUserInterface>({password: "", username: ""})

    const handleChange = ({target}: any) => {
        setFormInput((prev: any) => ({
            ...prev,
            [target.name]: target.value
        }))
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        /* setLocalUser(formInput); */ /* Redux */
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>Username</label>
                <input onChange={handleChange} type="text" />
                <label>Password</label>
                <input onChange={handleChange} type="password" />
                <button type="submit">Confirmer</button>
            </form>
            <Link to="/auth/register">Pas encore de compte ?</Link>
        </>
    )
}