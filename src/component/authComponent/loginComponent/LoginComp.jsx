import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()

        setEmailError(false)
        setPasswordError(false)

        if (email === '') {
            setEmailError(true)
        }
        if (password === '') {
            setPasswordError(true)
        }

        if (email && password) {
            console.log(email, password)
        }
    }

    return (
        <div className="w-auto h-[280px] flex flex-col">
            <form autoComplete="off" onSubmit={handleSubmit}>
                <h2 className="pb-4">Giriş Yap</h2>
                <TextField
                    label="Email"
                    onChange={e => setEmail(e.target.value)}
                    required
                    variant="outlined"
                    color="secondary"
                    type="email"
                    sx={{ mb: 3 }}
                    fullWidth
                    value={email}
                    error={emailError}
                />
                <TextField
                    label="Password"
                    onChange={e => setPassword(e.target.value)}
                    required
                    variant="outlined"
                    color="secondary"
                    type="password"
                    value={password}
                    error={passwordError}
                    fullWidth
                    sx={{ mb: 3 }}
                />
                <Button className="w-full !rounded-full !bg-[#d21937] !text-slate-200" variant="outlined" color="secondary" type="submit">Giriş</Button>
            </form>
            <div className=" inline-block text-right text-sm my-5"> Hesap oluşturmak için
                <Link className="text-[#d21937] mx-2 underline" to="/register">Tıklayınız</Link></div>
        </div>
    );
}

export default Login;