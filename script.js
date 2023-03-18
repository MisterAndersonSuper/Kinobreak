var prog = ['Большой','Форрест Гамп','Хитман: Агент 47','Джон Уик',
'Не пойман - не вор','Мир дикого запада','Бумажный дом','Ходячие Мертвецы',
'Игра в кальмара','Мандолорец','Неисправимый Рон','Митчелы против Роботов',
'Лоракс','Angry Birds','Гадкий Я','Бетмен - Ниндзя','Аниматрица',
'Дитя чудовища','Бетмен: Рыцарь Готема','Унесенные призраками']; 
var $ = document.getElementById;

var page = document.querySelector(".body");
var themeButton = document.querySelector(".themeButton");
let infa = [];
let bu = document.getElementById('btn');
let input = document.getElementById('mySearch');
const rez = document.querySelector(".rez"); 
let ul = document.querySelector(".okno");
let text = document.querySelector(".moSearch");
let okno = document.querySelector(".okno");

// const text = document.querySelector(".text"); 
// const rez = document.querySelector(".rez"); 
 
// text.addEventListener("keyup", function () { 
//   let value = text.value; 
 
//   let result = prog.filter((item) => { 
//     if (value === "") { 
//       return; 
//     } 
//     return item.includes(value); 
//   }); 
//   const final = result 
//     .map((item) => { 
//       return <p>${item}</p>; 
//     }) 
//     .join(""); 
//   rez.innerHTML += final; 
// });
//let ul = document.querySelector(".okno");
//ul.innerHTML = result;




//let icecream = window.matchMedia('(max-with:800px)');
//if (media.matches) {
//    let bigmenu = document.querySelector(".big_menu");
//    bigmenu.style.display = 'none';
//    let hh1 = document.querySelector('.hh1');
//    ph1.textContent = 'Вы сидите на сайте с телефона';
//    hh1.textContent = ph1.value;;
//}







//var picHolder = document.getElementById("picHolder");
//var img = document.createElement("img");
//img.src = "images/stone3.jpg";
//picHolder.appendChild(img);

const movies = [ 
    { 
      name: "Большой", 
      img: "./images/blu-ray-bolshoj_0-600x780.jpg", 
      url: "bolshoi.html", 
    }, 
    { 
      name: "Форрест Гамп", 
      img: "./images/forrest_gamp.jpg", 
      url: "ForestGamp.html", 
    }, 
    { 
        name: "Хитман: Агент 47", 
        img: "./images/Hitman.jpg", 
        url: "hitman.html", 
      }, 
      { 
        name: "Джон Уик", 
        img: "./images/John Wick.jpg", 
        url: "DzonYik.html", 
      }, 
      { 
        name: "Не пойман - не вор", 
        img: "./images/r386x544x4.webp", 
        url: "nepoiman-nevor.html", 
      }, 
      { 
        name: "Мир дикого запада", 
        img: "./images/kxs158YJ.jpg", 
        url: "mirdikogozapada.html", 
      }, 
      { 
          name: "Бумажный дом", 
          img: "./images/29acd78463da54677682c7d405dd0e55.png", 
          url: "bumazniydom.html", 
        }, 
        { 
          name: "Ходячие Мертвецы", 
          img: "./images/1630319-1466383.jpg", 
          url: "hodiatiemertvetsi.html", 
        }, 
        { 
          name: "Игра в кальмара", 
          img: "./images/igra-v-kalmara.jpg", 
          url: "igravkalmara.html", 
        }, 
        { 
          name: "Мандолорец", 
          img: "./images/QppqcNpUKuWNBBhNWe4f_g.jpeg", 
          url: "mandolorets.html", 
        }, 
        { 
            name: "Неисправимый Рон", 
            img: "./images/w1500_50191334.jpg", 
            url: "neispravimiyron.html", 
          }, 
          { 
              name: "Митчелы против Роботов", 
              img: "./images/1652980101855.jp", 
              url: "mitseliprosivrobotov.html", 
            }, 
            { 
              name: "Лоракс", 
              img: "./images/1629659-2045437.jpeg", 
              url: "lorax.html", 
            }, 
            { 
              name: "Angry Birds", 
              img: "./images/163829R1.jpg", 
              url: "angrybirds.html", 
            }, 
            { 
              name: "Гадкий Я", 
              img: "./images/1625891851_gadkij-ja-poster.jpg", 
              url: "gadkiyYa.html",   
            }, 
            { 
                name: "Бетмен - Ниндзя", 
                img: "./images/batman-ninja-cast-autographed-2018-wondercon-poster-eric-bauza-adam-croasdell-tony-hale-tom-kenny-roger-craig-smith-14.jpg", 
                url: "betmenninja.html", 
              }, 
              { 
                  name: "Аниматрица", 
                  img: "./images/107263.jpg", 
                  url: "animatritsa.html", 
                }, 
                { 
                  name: "Дитя чудовища", 
                  img: "./images/6YbUJj5pw2yzmzRAkqtL8XHv007Jgb3CGzNJ442g.jpeg", 
                  url: "ditsiatsudovisa.html", 
                }, 
                { 
                  name: "Бетмен: Рыцарь Готема", 
                  img: "./images/3i1o0sHBP0VUpuSVmkdCRKYoDBC.jpg", 
                  url: "betmenritsargotema.html", 
                }, 
                { 
                  name: "Унесенные призраками", 
                  img: "./images/poster_fr (1).jpg", 
                  url: "unesennieprizrakami.html", 
                }, 
  ]; 
   
  text.addEventListener("keyup", function () { 
    let value = text.value.toUpperCase(); 
   
    let result = movies.filter((item) => { 
      console.log(item.img); 
      if (!value) { 
        return; 
      } 
      return item.name.toUpperCase().includes(value); 
    }); 
    const final = result 
      .map((item) => { 
        return `<div class="sss">
        <a href=${item.url}>
                <div class=""><p >${item.name}</p></div></a> 
        </div>`; 
      }) 
      .join(""); 
    ul.innerHTML = final; 
  });




// text.addEventListener("keyup", function () { 
//   let value = input.value.toUpperCase(); 
 
//   let result = prog.filter((item) => { 
//     if (value === "") { 
//       return; 
//     } 
//     return item.toUpperCase().includes(value); 
//   }); 
//   const final = result 
//     .map((item) => { 
//       return `<li>${item}</li>`; 
//     }) 
//     .join(""); 
//   ul.innerHTML = final; 
// });




//document.querySelector(".button_for_spisok").onclick = function(){
// function ddress() {
//     texxt.appendChild("<ul class='okno'> </ul>");
//     var text = document.getElementById("."),
//     firstParagraph = text.firstElementChild;
//     var p = document.createElement("<ul class='okno'> </ul>");
//     p.innerHTML = "Lorem ipsum <i>dolor sit amet</i>, consectetur adipisicing elit. <b>Natus pariatur</b>, ipsa dolorum adipisci.";
//     text.insertBefore(p, firstParagraph );
// }
// var byt = getElementById("addButton");
// byt.onclick = ddress;


document.querySelector(".button_for_spisok").onclick = function() {
    let bubble = ("<ul class='okno'>vvvvvvv </ul>")
    document.querySelector('.text').append(bubble);
    okno.style.zIndex == 100;
    okno.css({
        zIndex: '100',
        border : '1px solid red'
    });
};


// input.addEventListener('keyup', search);
// function search() {
//     let array;
//     let filter = input.value.toUpperCase();
//     let ul = document.querySelector(".cities");
//     let li = ul.querySelectorAll(".city");
//     for (let i = 0; i < li.length; i++) {
//         array = li[i].getElementsByTagName('p')[0];
//         if (array.innerHTML.toUpperCase().indexOf(filter) > -1){
//             li[i].style.display =''
            
//         }
//         else{
//             li[i].style.display = 'none';
//         }
//     }
// }





/*
input.addEventListener('keyup', search);
function search() {
    let array;
    let filter = input.value.toUpperCase();
    let ul = document.querySelector(".cities");
    let li = ul.querySelectorAll(".city");
    for (let i = 0; i < li.length; i++) {
        array = li[i].getElementsByTagName('p')[0];
        if (array.innerHTML.toUpperCase().indexOf(filter) > -1){
            li[i].style.display =''
            
        }
        else{
            li[i].style.display = 'none';
        }
    }
}
*/


document.querySelector(".bbby").onclick = function() {
    let bubble = ("<img class='bubble' src ='images/107263.jpg'>")
    document.querySelector('body').append(bubble);
};

// document.querySelector(".byttinn").onclick = function() {
//     let coment = document.querySelector('.lil');
//     let text = 'Всё отправлено! в течение дня вы будуте полностью проверены и оформлены';
//     coment.textContent = text;
    
//     let namel = document.querySelector('.name');
//     let poztl = document.querySelector('.pozt');
//     let nomerl = document.querySelector('.nomer');
//     let adresl = document.querySelector('.adres');
//     let name = ''
//     let pozt = ''
//     let nomer = ''
//     let adres = ''
//     name.textContent = namel.value;
//     pozt.textContent = poztl.value;
//     nomer.textContent = nomerl.value;
//     adres.textContent = adresl.value;
//     let com = document.querySelector('.dannie');
//     com.textContent = (infa);
//     let polsovotel = [name, pozt, nomer, adres];
//     infa.push(polsovotel);
// };
//byttinn.addEventListener('click', ress);

document.querySelector(".btn").onclick = function() {
    //let p1 = document.querySelector('.namm');
    //let p2 = document.querySelector('.comm');
    //let text = document.querySelector('.word');
    //let text1 = document.querySelector('.word1');
    //let nick = document.querySelector('.nick');
    //let coment = document.querySelector('.lol');
    //p1.textContent = 'имя пользователя: ';
    //p2.textContent = 'коментарий: ';
    //coment.textContent = text.value;
    //nick.textContent = text1.value;
    var picHolder = document.getElementById("picHolder");
    var img = document.createElement("img");
    img.src = "images/6415362_account_avatar_profile_user_icon.png";
    picHolder.appendChild(img);
}

/*
document.querySelector(".btn").onclick = function() {
    let p1 = document.querySelector('.namm');
    let p2 = document.querySelector('.comm');
    let text = document.querySelector('.word');
    let text1 = document.querySelector('.word1');
    let nick = document.querySelector('.nick');
    let coment = document.querySelector('.lol');
    p1.textContent = 'имя пользователя: ';
    p2.textContent = 'коментарий: ';
    coment.textContent = text.value;
    nick.textContent = text1.value;
};
*/

// let kv2 = true;
// $('.menu_small_icon').on('click', function(){
//     if (kv2){
//         forward();
//     }
//     else {
//         backward();
//     }
// });

// let start = 0;
// let end = 0;
// function forward(){
//     anime({
//         targets: '.menu-small',
//         translateX: ['-100%','0'],
//         easing:'easeInOutQuint',
//         direction: 'alternate',
//         duration: 1000,
//         loop: false,
//         });
//     kv2= false;
// }
// function backward(){
//     anime({
//         targets: '.menu-small',
//         translateX: ['0','-100%'],
//         easing:'easeInOutQuint',
//         direction: 'alternate',
//         duration: 1000,
//         loop: false,
//         });
//     kv2= true;
// }
// $('.container').on('touchstart', function(event){
//     start = event.originalEvent.touches[0].pageX;
// })

// $('.container').on('touchend', function(event){
//     end = event.originalEvent.changedTouches[0].pageX;
//         if (end - start >= 100 && kv2){
//             forward();
//         }
//         else if (start - end >= 100 && !kv2){
//             backward();
//         }
// })

