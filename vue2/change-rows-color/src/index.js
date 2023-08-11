import $ from 'jquery'
import './index.less'
import Png from '@/images/1.png'
$(function () {
    $('li:even').css('background-color', 'red')
    $('li:odd').css('background-color', 'yellow')
    const Img = document.createElement('img')
    Img.style.width= '200px'
    Img.style.height= '200px'
    Img.src = Png
    document.body.append(Img)
})

function Info(target) { 
    target.info = 'info'
 }

 @Info
 class Peson {}
 const p = new Peson()


 console.log(p);