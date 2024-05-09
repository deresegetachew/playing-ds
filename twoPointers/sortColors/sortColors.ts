// o(n) square
// export function sortColors(colors: number[]): number[]{
//     let p0: number = 0
//     let p2 = colors.length-1;

//     while(p0 < p2){
//         if(colors[p0] > colors[p0+1]){

//             const temp = colors[p0+1]
//             colors[p0+1] = colors[p0]
//             colors[p0] = temp
//             p0--;
//         }
//         else
//             p0++;
//     }

//     return colors;
// }


//p0 points to where 0 ends
// p2 points to where 2 starts
// we move using p1

export function sortColors(colors: number[]): number[] {
  let p0 = 0;
  let p1 = 0;
  let p2 = colors.length - 1;

  while (p1 <= p2) {
    let temp;
    if(colors[p1] === 0){
        temp = colors[p0]
        colors[p0] = colors[p1]
        colors[p1] = temp

        p0++
        p1++
    }
    else if(colors[p1] === 1){
        p1++;
    }
    else if(colors[p1] === 2){
        temp = colors[p2]
        colors[p2] = colors[p1]
        colors[p1] = temp

        p2--;
    }
  }
  return colors;
}
