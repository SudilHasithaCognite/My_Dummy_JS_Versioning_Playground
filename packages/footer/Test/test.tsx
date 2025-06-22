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

cons test('fibbonacci', () => {
    expect(testing(5)).toBe(5)
    expect(testing(10)).toBe(55)
    expect(testing(15)).toBe(610)
    expect(testing(20)).toBe(6765)
}