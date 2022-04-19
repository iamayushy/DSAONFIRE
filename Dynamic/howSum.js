function howSum(target, nums,main=[], gb){
  if(target === 0) return main
  if(target < 0) return null

  for(let n of nums){
      const res = howSum(target - n, nums,main, gb)
      if(res !== null){
          [...main.push([...res, n])]
          gb.push(main)
      }
  }
  return null
}
let gb = []
let arr = [5, 2, 7]
console.log(howSum(7, arr, gb));
console.log(gb)