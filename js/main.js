const minesweeper;
const carsjr;
const zart;
const nova;


$('.arrow').on('click',function(evt){
    console.log(evt.target.name)
    $(`#${evt.target.name}-pic`).attr('src','img/carsjr menue.png')
})