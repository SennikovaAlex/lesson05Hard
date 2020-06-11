let arr = ['4568345', '19458701087', '276459149', '987027301', '1000000000', '2335236124', '4659709707'];

for (let i=0; i<arr.length; i++) {
    let arrElement = arr[i];
    if (arrElement[0] == 2 || arrElement[0] == 4) {
        console.log(arrElement);
    }
}


for (let i=2; i<=100; i++) {
function check () {
    for (let j = 2; j <= i; j++) {
        
        if (i % j == 0 && i !== j ) {
           return false
            }

    }}
let chekIn = check ();
if (chekIn !== false) {console.log(i + '   Делители этого числа: 1 и ' + i)}
}