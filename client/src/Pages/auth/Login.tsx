import {Link} from "react-router-dom";

export default function Login() {
    return (
        <>
            <form>
                <label>Username</label>
                <input type="text" />
                <label>Password</label>
                <input type="password" />
            </form>
            <Link to="/auth/register">Pas encore de compte ?</Link>
        </>
    )
}