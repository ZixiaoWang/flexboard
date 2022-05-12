import { StateUpdater, useEffect, useState } from "preact/hooks";
import { GoogleSignInResponse } from "../interfaces";
import { userStore } from "./userStore";
import { HookClass } from "./hookClass";

declare global {
    interface Window {
        google: any,
        onGoogleSignInSuccess: () => void
    }
}

class GoogleAuth extends HookClass {
    private clientId: string = "646206867663-n5avbo6sap51864lno5vnrffc8jrlf45";

    init() {
        window.google?.accounts?.id.initialize({
            client_id: "646206867663-n5avbo6sap51864lno5vnrffc8jrlf45",
            callback: this.onSignInSuccess.bind(this)
        });
    }

    onSignInSuccess(response: GoogleSignInResponse): void {
        const credential: string = response.credential;
        userStore.setCache(credential);
        this.invokeCallbacks();
    }

    renderButton(): void {
        window.google?.accounts?.id.renderButton(
            document.getElementById("gbuttondiv"),
            { 
                theme: "outline", 
                size: "large",
                shape: "pill",
            }
        );
    }

    prompt(): void {
        window.google?.accounts?.id?.prompt();
    }
}

const googleAuth: GoogleAuth = new GoogleAuth();

export const useGoogleAuth = (): { googleAuth: GoogleAuth, nounce: number, setNounce: StateUpdater<number> } => {
    const [nounce, setNounce] = useState(Math.random());

    useEffect(() => {
        googleAuth.setCallback(setNounce);
        googleAuth.init();
    }, []);

    return {googleAuth, nounce, setNounce};
}