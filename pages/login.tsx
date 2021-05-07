import Layout from "../components/Layout";
import Form from "../components/form";
import {useState, useEffect} from "react";
import {useSetRecoilState} from "recoil";
import {Router} from "next/router";
import fetch from 'isomorphic-unfetch';
import { loginUserState } from "../states/loginUser";
import * as loginUser from "../lib/loginUser"

const Login = () => {
    const setLoginUser = useSetRecoilState(loginUserState)
    const [errorMsg, handleSubmit] = useState('')

    async function handleSubmit(e) {
        e.preventDefault()

        if (errorMsg) setErrorMsg('')

        const body = {
            email: e.currentTarget.email.value,
            password: e.currentTarget.password.value,
        }

        try {
            const res = await fetch('/api/admin/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify(boby),
                credentials: 'include',
            })

            if (res.status === 200) {

                try {
                    const user = await loginUser.fetchLoginUser();
                    setLoginUser(user);
                } catch {
                    setLoginUser(null);
                }

                await Router.push('/')
            } else {
                throw new Error(await res.text())
            }
        } catch (error) {
            console.error('An unexpected error happened occurred:', error)
            setErrorMsg(error.message)
        }
    }

    return (
        <Layout>
            <div className="login">
                <Form islogin errorMessage={errorMsg} onSubmit={handleSubmit} />
            </div>
            <style jsx>{`
        .login {
          max-width: 21rem;
          margin: 0 auto;
          padding: 1rem;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
      `}</style>
        </Layout>
    )
}

export default Login