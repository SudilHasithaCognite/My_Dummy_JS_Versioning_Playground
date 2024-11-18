//  main feature 
export function testing(n){
    let prev = 0
    let next = 1
    for(let i; i <= n; i++){
        let temp = prev 
        prev = next
        next = temp + next
    }
    return next
}