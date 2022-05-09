export class HookClass {
    private callbacks: Set<Function> = new Set();

    setCallback(callback: Function): void {
        if (this.callbacks.has(callback) === false) {
            this.callbacks.add(callback);
        }
    }
    
    invokeCallbacks() {
        const nounce: number = Math.random();
        this.callbacks.forEach((callback: Function) => {
            if (callback && typeof callback === "function") {
                callback(nounce);
            }
        })
    }
}