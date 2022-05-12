import { UserAccout } from "../interfaces";
import { decodeJWT } from "./decodeJWT";

class UserStore {

    public cache: null | UserAccout = null;
    private key: string = "FLEXBOARD_USER_ACCOUNT";

    constructor() {
        const account: UserAccout | null = this.parseCache(this.key);
        if (account) {
            this.cache = account;
        }
    }

    isExpired(): boolean {
        if (!this.cache) {
            return true;
        }

        return Date.now() > (this.cache.exp * 1000);
    }

    isAvailable(): boolean {
        return !!this.cache;
    }

    hasCache(): boolean {
        return Boolean(this.cache);
    }
    
    setCache(value: string): void {
        localStorage.setItem(this.key, value);
        this.cache = this.parseCache(this.key);
    }

    getCache(): UserAccout | null {
        return this.cache;
    }

    parseCache(key: string): UserAccout | null {
        const cache: string = localStorage.getItem(key);

        if (cache) {
            try {
            const accountJSON: UserAccout = decodeJWT(cache);
            return accountJSON;
            } catch(e) {
                this.clear();
                return null;
            }
        }

        return null;
    }

    clear(): void {
        localStorage.clear();
    }
}

export const userStore: UserStore = new UserStore();