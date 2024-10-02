$(document).ready(function(){
    $('.header__burger').click(function(event){
        $('.header__burger,.header__inner-wrapp').toggleClass('active');
        $('body').toggleClass('lock');
    });
});