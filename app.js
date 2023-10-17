let square__1 = document.querySelector('.square__1'),
    square__2 = document.querySelector('.square__2'),
    square__3 = document.querySelector('.square__3'),
    square__4 = document.querySelector('.square__4'),
    square__5 = document.querySelector('.square__5')    

let square__6 = document.querySelector('.square__6'),
    square__7 = document.querySelector('.square__7'),
    square__8 = document.querySelector('.square__8'),
    square__9 = document.querySelector('.square__9'),
    square__10 = document.querySelector('.square__10')

let square__11 = document.querySelector('.square__11'),
    square__12 = document.querySelector('.square__12'),
    square__13 = document.querySelector('.square__13'),
    square__14 = document.querySelector('.square__14')

let wrapitem1 = document.querySelector('.wrapper__item-1'),
    wrapitem2 = document.querySelector('.wrapper__item-2'),
    wrapitem3 = document.querySelector('.wrapper__item-3'),
    wrapitem4 = document.querySelector('.wrapper__item-4'),
    wrapitem5 = document.querySelector('.wrapper__item-5'),
    wrapitem6 = document.querySelector('.wrapper__item-6'),
    wrapitem7 = document.querySelector('.wrapper__item-7'),
    wrapitem8 = document.querySelector('.wrapper__item-8')

let svetafor = document.querySelector('.svetafor')
let svetafor2 = document.querySelector('.svetafor-2')

square__1.addEventListener ('click', bodyRed)
square__2.addEventListener ('click', bodyPurple)
square__3.addEventListener ('click', bodyDarkred)
square__4.addEventListener ('click', bodyViolet)
square__5.addEventListener ('click', bobyDel)

square__6.addEventListener('click', wrapBgItem1)
square__7.addEventListener('click', wrapBgItem2)
square__8.addEventListener('click', wrapBgItem3)
square__9.addEventListener('click', wrapBgItem4)
square__10.addEventListener('click', wrapBgItem5)
square__11.addEventListener('click', wrapBgItem6)
square__12.addEventListener('click', wrapBgItem7)
square__13.addEventListener('click', wrapBgItem8)
square__14.addEventListener('click', wrapBgDel)

function bodyRed() {
    document.body.style.background = 'red'
}

function bodyPurple() {
    document.body.style.background = 'purple'
}

function bodyDarkred() {
    document.body.style.background = 'darkred'
}

function bodyViolet () {
    document.body.style.background = 'violet'
}

function bobyDel () {
    document.body.style.background = ''
}


function wrapBgItem1 () {
    wrapitem1.style.background = 'wheat'
}

function wrapBgItem2 () {
    wrapitem2.style.background = 'navy'
}

function wrapBgItem3 () {
    wrapitem3.style.background = 'gold'
}

function wrapBgItem4() {
    wrapitem4.style.background = 'greenyellow'
}

function wrapBgItem5() {
    wrapitem5.style.background = 'black'
}

function wrapBgItem6() {
    wrapitem6.style.background = 'darkcyan'
}

function wrapBgItem7() {
    wrapitem7.style.background = 'salmon'
}

function wrapBgItem8() {
    wrapitem8.style.background = 'mediumvioletred'
}

function wrapBgDel() {
    wrapitem1.style.background = ''
    wrapitem2.style.background = ''
    wrapitem3.style.background = ''
    wrapitem4.style.background = ''
    wrapitem5.style.background = ''
    wrapitem6.style.background = ''
    wrapitem7.style.background = ''
    wrapitem8.style.background = ''
}