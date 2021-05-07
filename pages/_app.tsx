import '../styles/globals.css'
import {RecoilRoot, useSetRecoilState} from "recoil";
import {loginUserState} from "../states/loginUser";
import {useEffect} from "react";
import * as loginUser from "../lib/loginUser";


function AppInit() {
    const setLoginUser = useSetRecoilState(loginUserState)

    // Middleware
    useEffect(() => {
        (async function () {
            try {
                const user = await loginUser.fetchLoginUser();
                setLoginUser(user);
            } catch {
                setLoginUser(null);
            }
        })();
    }, [])

    return null
}

function MyApp({ Component, pageProps }) {
    return(
        <RecoilRoot>
            <Component {...pageProps} />
            <AppInit />
        </RecoilRoot>
    )
}

export default MyApp