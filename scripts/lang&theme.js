// // /*
// // * Прототип объекта
// // * Object.create()
// // * [[Prototype]], __proto__
// // */


// // // const baseSalary = 30000;
// // // const rate = 3;
// // // const overtime = 10;

// // // const getWage = (salary, rate, overtime) => {
// // //     return salary + rate * overtime;
// // // }

// // // console.log(getWage(baseSalary, rate, overtime));

// // // const employee = {
// // //     baseSalary: 30000,
// // //     rate: 3,
// // //     overtime: 10,
// // //     getWage() {
// // //         return this.baseSalary + this.rate * this.overtime;
// // //     }
// // // }

// // // console.log(employee.getWage());


// // // const objA = {
// // //     x: 1,
// // //     y: 2,
// // // };

// // const objB = {
// //     z: 10,
// // };

// // const objA = Object.create(objB);

// // objA.x = 1;
// // objA.y = 2;
// // objA.t = 5;

// // console.dir(objA);
// // console.log(objA);

// // console.log(objA.z);


// // const objC = Object.create(objA);

// // console.log(objC);

// // objA.k = 8;

// // console.log(objC.x)
// // console.log(objC.y)
// // console.log(objC.z)


// // const objD = Object.create(objA);

// // console.log(objD);

// // // const test = {}; // Object.create(Object)

// // const x = {}; // Object

// // console.log(x);

// // /**
// //  * Правило поиска свойств в цепочке прототипов
// //  */



// const en = {
//     name: 'language',
//     theme: 'theme',
//     settings: 'settings:',
// }

// const ua = {
//     name: 'Мова',
//     theme: 'тема',
//     settings: 'налаштування'

// }

// // const ru = {
// //     name: 'Новые релизы',
// // }

// const refs = {
//     ua: document.querySelector('#set-item-button-ukr'),
//     // ru: document.querySelector('#ru'),
//     en: document.querySelector('#set-item-button-eng'),
//     name: document.querySelector('.set-item-name-text'),
//     theme: document.querySelector('#set-item-name-text-2'),
//     settings: document.querySelector('#settings-text-of-box')

//     // link: document.querySelector('link[rel="stylesheet"]'),
// }

// refs.en.addEventListener('click',(event) =>{
//     console.log('english');
//     // refs.name.textContent = en.name;
//     // refs.theme.textContent = en.theme;
//     // refs.settings.textContent = en.settings;
// });

// refs.ua.addEventListener('click',(event) =>{
//     refs.name.textContent = ua.name;
//     refs.theme.textContent = ua.theme;
//     refs.settings.textContent = ua.settings;
// });

// // refs.ua.addEventListener('click', getLanguage);
// // refs.ru.addEventListener('click', getLanguage);

// function getLanguage (event) {

// console.log('wgwefewf');

//     if (event.target.id === 'en') {

    
//     // refs.name.textContent = JSON.parse(localStorage.getItem('language')).name;
// }
// }


// // const cards = [
// //     {
// //         name: '',
// //         desc: '',
// //         prior: '',
// //     },
// //     {
// //         name: '',
// //         desc: '',
// //         prior: '',
// //     },
// //     {
// //         name: '',
// //         desc: '',
// //         prior: '',
// //     },
// // ];




// // 1. написать функцию которая будет по клику на кнопку щаписывать в localStor мову
// // 2.  



// // console.log(refs.link);
// // console.log(refs.en.dataset.theme);

// // refs.en.addEventListener('click', setTheme);
// // refs.ua.addEventListener('click', setTheme);
// // refs.ru.addEventListener('click', setTheme);

// // function setTheme (event){
// //     localStorage.setItem('theme', event.target.dataset.theme);
// //     refs.link.href = `css/${event.target.dataset.theme}-theme.css`;
// // };


// // // (function(){
// // //     const theme = localStorage.getItem('theme');
// // //     console.log(theme);

// // //     refs.link.href = `css/${theme}-theme.css`;
    
// // // }())


// // const theme = localStorage.getItem('theme');
// // refs.link.href = `css/${theme}-theme.css`;



// // // refs.link.href = localStorage.getItem('theme') 
// // //     ? localStorage.getItem('theme') 
// // //     : refs.link.href;

console.log(232332);