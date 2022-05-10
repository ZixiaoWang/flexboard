export async function sleep(ms: number): Promise<boolean> {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(true), ms);
    });
}