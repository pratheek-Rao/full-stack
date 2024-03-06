var button = document.querySelector('#btn1');
var title = document.querySelector("#title")
button.addEventListener('click',function()
{
    console.log('you clicked me');
    title.style.backgroundColor='blue';
    
});



var radios1 = document.querySelector('#radio1')

radios1.addEventListener('click',function()
{
    
    radios1.style.backgroundColor='green';

});

var radios2 = document.querySelector('#radio2')

radios2.addEventListener('click',function()
{
    
    radios2.style.backgroundColor='yellow';

});
