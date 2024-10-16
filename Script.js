// 1.
// function hisobla(arr) {
//     var sum = 0
//     for (var i = 0; i < arr.length; i++) {
//         sum += arr[i]
//     }
//     return sum
// }
// var a = [1,2,3,5,4,7]
// console.log(hisobla(a))


// 2
// function engKichik(arr) {
//     var sum = arr[0];
//     for (var i = 1; i < arr.length; i++) {
//         if (arr[i] < sum) {
//             sum = arr[i]
//         }
//     }
//     return sum
// }
//  var ar = [1,5,8,8,2]
//  console.log(engKichik(ar)) 

// 3  Funksiya yozing, u massiv ichidagi barcha string elementlar uzunligini qaytarsin.

// 4 Funksiya yozing, u berilgan raqamli massivni kamayish tartibida tartiblab chiqsin.

// function kamayish(arr) {
//     return arr.sort((a, b) => b - a)
// }
// var a = [2,7,98,5,2,5]
// console.log(kamayish(a))

// 5

// function birlashtir(arr1, arr2) {
//     return arr1.concat(arr2)

// }
// var a = [5,8,2,5,8,5]
// var b = [5,2,8,,4,5,5]
//    console.log(a,b)

// 6

// function musbat(arr) {
//     let sum = []
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > 0) {
//             sum.push(arr[i])
//         }
//     }
//     return sum.reverse()
// }
// var a = [5,8,5,2,5,8,55,51]
// console.log(musbat(a,b))

// 7**Massivdagi musbat sonlarni topish**  
//  Funksiya yozing, u massivdagi musbat sonlarni filtrlab, qaytarsin.




// 8

// function newelement(arr, elem) {
//     let sum = []
//     for (let i = 0; i < arr.length; i++) {
//         sum.push(arr[i] + elem)
//     }
//     return sum
// }

// var a= [4,4,5,8,5,6,45,56,6,3,2,5]
// var b= [,8,5,6,6,8,5]
// console.log(newelement(a,b))

// 9

// function ajrat(arr) {
//     let musbat = []
//     let manfiy = []
    
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > 0) {
//             musbat.push(arr[i])
//         } else if (arr[i] < 0) {
//             manfiy.push(arr[i])
//         }
//     }
    
//     return [musbat, manfiy]
// }
// var a = [1,5,8,6,2,8,5,6]
// console.log(ajrat(a))

// 12
// function aa(arr) {
//     var juft = []
//     var toq = []
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             juft.push(arr[i])
//         } else{
//             toq.push(arr[i])
//         }
//     }
//     return juft
// }

// var  b = [6,5,8,1,4,6,5,8,7]
// console.log(aa(b))



// 14. **Massiv elementlarining kvadratini olish**  
//     Funksiya yozing, u massivning har bir elementini kvadrat qilib yangi massiv qaytarsin.


// function Kvadrati(arr) {
//     var kvadratMassiv = []
//     for (var i = 0; i < arr.length; i++) {
//         kvadratMassiv.push(arr[i] * arr[i])
//     }
//     return kvadratMassiv
// }

// var massiv = [1, 2, 3, 4, 5]
// console.log(Kvadrati(massiv))

// 15. **Massivdagi har bir elementni ikki barobar oshirish**  
//     Funksiya yozing, u massivdagi har bir elementni 2 marta oshirib yangi massiv qaytarsin.

// function ikkiBarobar(arr) {
//     var o = [];
//     for (var i = 0; i < arr.length; i++) {
//         o.push(arr[i] * 2)
//     }
//     return o
// }

// var b = [1, 2, 3, 4, 5]
// console.log(ikkiBarobar(b))


// 16. **Massivdan undefined va null qiymatlarni olib tashlash**  
//     Funksiya yozing, u massiv ichidagi `null` va `undefined` qiymatlarni olib tashlasin.

// function remov(arr) {
//     var b = []
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] !== null && arr[i] !== undefined) { 
//             b.push(arr[i])
//         }
//     }
//     return b
// }

// var q = [1, 7, 2, 8, 3, null, 4, undefined, 5, null]
// console.log(remov(q))

// 17. **Massivdagi stringlarni bosh harfga o'girish**  
//     Funksiya yozing, u stringlardan iborat massivning har bir elementini bosh harf bilan boshlansin.

// 18. **Massiv ichidagi aniq qiymatlarning sonini hisoblash**  
//    Funksiya yozing, u berilgan massivda ma'lum bir qiymat nechta marta uchrashganini aniqlasin.

// 19. **Massivni qo'shib, elementlarni kiritish**  
//    Funksiya yozing, u berilgan massivning o'rtasiga yangi elementlarni qo'shsin.

// function aaa(arr, yangiElementlar) {
//     var a = Math.floor(arr.length / 2)
//     var b = arr.slice(0, a)
//     var c = arr.slice(a)
//     return b.concat(yangiElementlar, c)
// }

// var d = [1, 2, 3, 4, 5]
// var e = ['A', 'B', 'C']
// console.log(aaa(massiv, yangiElementlar))


// 20. **Massiv ichidagi barcha stringlarni uzunliklari bo'yicha tartiblash**  
//    Funksiya yozing, u stringlardan tashkil topgan massivni uzunliklari bo'yicha tartiblasin.

// 21. **Massivdagi eng uzun stringni topish**  
//    Funksiya yozing, u massivdagi eng uzun stringni qaytarsin.

// 22. **Massiv elementlarini vergul bilan birlashtirish**  
//    Funksiya yozing, u massiv ichidagi elementlarni vergul bilan ajratib, bitta string sifatida qaytarsin.

// function verg(arr) {
//     return arr.join(', ');
// }

// var a = ['salom', 'dunyo', 'dsjknk,', 'hello', 'world'];
// console.log( verg(a))


// 23. **Massiv ichida faqat raqamlar qoldirish**  
//    Funksiya yozing, u massiv ichidan faqat raqamli elementlarni qoldirib, yangi massiv hosil qilsin.

// function raqam(arr) {
//     var a = []
//     for (var i = 0; i < arr.length; i++) {
//         if (typeof arr[i] === 'number') { 
//             a.push(arr[i])
//         }
//     }
//     return a
// }

// var b = [1, 'dkjscmlkdsa', 3, 5845,5,56, 5, 'nkckj', 7]
// console.log(raqam(b))


// 24. **Massivning oxirgi n elementlarini olish**  
//     Funksiya yozing, u massivning oxirgi `n` ta elementini qaytarsin.