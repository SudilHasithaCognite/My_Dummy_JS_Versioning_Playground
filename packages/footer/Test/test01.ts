const fibbonacci = (n: number): number => {
    let prev = 0;
    let next = 1;
    for (let i = 0; i <= n; i++) {
        let temp = prev;
        prev = next;
        next = temp + next;
    }
    return next;
}
export const testing = (n: number): number => {
    return fibbonacci(n);
}