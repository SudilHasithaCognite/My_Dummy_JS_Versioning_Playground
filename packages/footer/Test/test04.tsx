export const changeCoinsAlgo = (coins: number[], target: number): number[][] => {
  const result: number[][] = [];
  const backtrack = (start: number, currentCombination: number[], currentSum: number) => {
    if (currentSum === target) {
      result.push([...currentCombination]);
      return;
    }
    if (currentSum > target) {
      return;
    }
    for (let i = start; i < coins.length; i++) {
      currentCombination.push(coins[i]);
      backtrack(i, currentCombination, currentSum + coins[i]);
      currentCombination.pop();
    }
  };
  backtrack(0, [], 0);
  return result;
}
// const coins = [1, 2, 5];
// const target = 5;
// console.log(changeCoinsAlgo(coins, target));