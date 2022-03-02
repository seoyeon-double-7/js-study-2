// 2단부터 입력한 단까지 곱하는 함수
function gu(ip){
    console.log(`2단부터 ${ip}까지의 곱은`)
    for(let i=2; i<=ip; i++){
        for(let j=1; j<=9; j++){
            console.log(`${i} * ${j} = ${i*j}`)
        }
    }
}
let input = prompt('2단부터 몇단 까지 곱할 것인가요?')
gu(input)
