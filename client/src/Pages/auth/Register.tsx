import { useEffect, useState } from "react";
import { signupUser } from "../../features/userSlice";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { useNavigate } from "react-router-dom";
import LocalUserInterface from "../../Interfaces/LocalUserInterface";

export default function Register() {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const [formInput, setFormInput] = useState<LocalUserInterface>({password: "", username: ""})

    const handleChange = ({target}: any) => {
        setFormInput((prev: any) => ({
            ...prev,
            [target.name]: target.value
        }))
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        dispatch(signupUser(formInput));
        navigate('/');
    };

    return (
        <>
            <form onSubmit={handleSubmit} method="POST">
                <label>Username</label>
                <input onChange={handleChange} name="username" type="text" />
                <label>Password</label>
                <input onChange={handleChange} name="password" type="password" />
                <button type="submit">Confirmer</button>
            </form>            
        </>
    );
};