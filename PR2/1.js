let a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
let b = a.filter(function(num){
    return num % 2 ===0;
});
if (b.length>0){
    console.log("Чётные числа:", b);
}
else{
    console.log("В последовательности нет целых чисел.")};