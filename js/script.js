// https://learn.javascript.ru/dom-cheatsheet - Docs
//document.getElementsByClassName('article'); - get elem by class
//document.getElementById(); - get elem by id
//document.querySelectorAll - get all elem by uniq selector
//elem.querySelector(css)- get first elem by uniq selector

/** Получаем DOM элемент из html */
let modal = document.getElementsByClassName('modal')[0],
    close = document.getElementsByClassName('close')[0],
    chooseBtn = document.getElementById('choose'),
    modalBtn = document.getElementById('receive'),
    inputName = document.getElementsByClassName('contactform_name')[0],
    inputMessage = document.getElementsByName('message')[0];

/** Функция - обработчик событий */
function modalEvent(){
    //modal
    modalBtn.addEventListener( 'click', function(){
        modal.style.display = 'block';
    });
    close.addEventListener( 'click', function(){
        modal.style.display = 'none';
    });
    // form modal
    inputName.addEventListener('input', function(){
        //console.info(this.value);
        inputMessage.value = "Меня зовут " + inputName.value + ". И я хочу спросить: ";

        if ( inputName.value === "" ){
            inputMessage.value = "";
        }

    });


    //Эксперименты :)
    function test(){
        let myVar = document.getElementsByName('name')[0];
        console.info(this.myVar);

        myVar.addEventListener('focus', function(){
            console.info(this.value);
            //inputMessage.value = "Меня зовут " + this.value + ". И я хочу спросить: ";
        });

        /**
         * Вопросы:
         * 1) Почему focus, change и другие Events. Почему срабатывает только при клике на поле name?
         * 2) Из той же серии: Как правильно обращаться к элементам, что бы правильно ловить события, или вешать на них события? Есть же еще всякие HTMLInputElement и прочее.
         * 3) Вопросы возник в процеесе. Как в JS влияет регистр при именовании переменных, функциий, классов?
         * 4) Я правильно понял что официальная документация по JS тут?) - https://developer.mozilla.org/en-US/docs/Web/JavaScript
         */
       }
    //test();


}

window.onload = function () {
    modalEvent();
};