import { useEffect, useState } from "preact/hooks";
import { GoogleSignInResponse } from "../interfaces";
import { userStore } from "./userStore";

declare global {
    interface Window {
        google: any,
        onGoogleSignInSuccess: () => void
    }
}

class GoogleAuth {
    private clientId: string = "646206867663-n5avbo6sap51864lno5vnrffc8jrlf45";
    private callbacks: Set<Function> = new Set();

    init() {
        window.google.accounts.id.initialize({
            client_id: "646206867663-n5avbo6sap51864lno5vnrffc8jrlf45",
            callback: this.onSignInSuccess.bind(this)
        });
    }

    onSignInSuccess(response: GoogleSignInResponse): void {
        const credential: string = response.credential;
        userStore.setCache(credential);
        const nounce: number = Math.random();
        this.callbacks.forEach((callback: Function) => {
            if (callback && typeof callback === "function") {
                callback(nounce);
            }
        })
    }

    renderButton(): void {
        window.google.accounts.id.renderButton(
            document.getElementById("gbuttondiv"),
            { 
                theme: "outline", 
                size: "large",
                shape: "pill",
            }
        );
    }

    prompt(): void {
        window.google.accounts.id.prompt();
    }

    setCallback(callback: Function): void {
        if (this.callbacks.has(callback) === false) {
            this.callbacks.add(callback);
        }
    }
}

const googleAuth: GoogleAuth = new GoogleAuth();

export const useGoogleAuth = (): { googleAuth: GoogleAuth, nounce: number } => {
    const [nounce, setNounce] = useState(Math.random());

    useEffect(() => {
        googleAuth.setCallback(setNounce);
        googleAuth.init();
    }, []);

    return {googleAuth, nounce};
}