// ilk değer ataması yapıp değişken atamak önemlidir.Çünkü değer atanmamış değişkenlere hafıza ayrılıyor.
// var count = 10;

// console.log('from outside');
// var a = 3; // window.a diyerek a yı bulabiliyoruz. this.a da kullanılabilir

// var b = 6 ;
// console.log(b);

// var b;
// console.log(b); //undefıne verdı cunku deger ataması yapmadık.
// b = 6;
// console.log(b);

// var c = ' '; // undefine vereceğine boş değer verin.

// eger hıc tanımlamadıysak is not defined diyecek

// use strict eger bu yazılı olursa  hata  verecektir.
// s6 ile artık aşağıdaki ifadeyi anlayabiliyor.
// b=6;
// console.log(b)

// var x;
// console.log(x)
// //undefined hatadı verecktir.

// var x=5;
// var y=7;
// y=x;
// console.log(x);
// console.log(y);

// atamalar sağdan sola yapılır önemli

// 4ahmet, your name, they-surname bu ifadeler yanlış değişkenler için
// first_7, value9a, $ahmet bu ifadeler doğrudur. _ ve $ başta kullanabiliriz.

// var for; // hata veriyor Uncaught SyntaxError: Unexpected token 'for'
// for un sadece tek başına kullanılmasına izin vermiyor. örnek forinstance örnek veriyor.

// var aliMehmetSelim =9; //camelcase

// var a = 'ali-mehmet-selim-aasd-asdasd' // kebab case
// var b = 'ali_mehmet_selim_erdo_asd'// snake case

// class Validation // Uppercamel case veya pascal case sınıfları oluştururken büyük harfle başlıyoruz.

// class Validation {
//     SCREAMİNG_SNAKE_CASE // bu kullanım değiştirmeyi düşünmediğiiz değişkenlerde kullanıyoruz.

// }

// const SPEED_LİMİT =120; 

// var a = 10;
// {
//     let b=3; // Uncaught ReferenceError: b is not defined hata verdi
// }
// console.log(a);
// console.log(b);

// var a = 10;
// {
//     let b=3;
//     console.log(b); // bu şekilde yazdığımızda sıkıntı olmuyor.

// }
// console.log(a);

// let sadece skope içinde çalışır dışarıdan erişilemez. 
//Fakat var çalışır. Ama neden istenmiyor çünkü ramde devamlı hafızayı işgal ediyor.
// memorye yüklenmemek için s6 ile let ve const geldi.

// yol();
// functıon yol() {
//     if (true) {
//         var c= 55;
//         let d=4;
//         console.log(c);
//         console.log(d);

//     }
//     console.log(c);
//     console.log(d);
// }


// a=3;
// console.log(a);
// var a; // var ile sonda dahi tanımlansa çalışıyor. hostin varı algılıyor.

// a=3;
// console.log(a);
// let a; // hata veriyor çünkü sonradan tanımlama yok let de

























