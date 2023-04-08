const pattern = (num) => {
    let tara = '';
    for (let i = num; i >= 0; i--) {
        for (let j = 1; j <= i; j++) {
            if(i==num){
                tara="*".repeat(num-1)
            }
            if (j == 1 || j == i) {
                tara = tara + "*"
            } else {
                tara = tara + " ";
            }
        }
        tara = tara + "\n"
    }
    console.log(tara);
}
pattern(10);
// Write a program to display this pattern
// ******
// *   *
// *  *
// * *
// **
// *