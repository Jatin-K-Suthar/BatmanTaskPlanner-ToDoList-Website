$('input').keypress(function(event){
    if(event.which === 13) {
        var toDoText = $(this).val();
        $('ul').append('<li> <span><i class="fa-solid fa-check-to-slot"></i>' + toDoText + '</span> <i class="fa-sharp fa-solid fa-trash"></i> </li>');
        $(this).val('');
    }
});

$('ul').on('click', '.fa-trash', function(event){
    $(this).parent().fadeOut(0, function(){
        $(this).remove();
    });
    event.stopPropagation();
})

$('ul').on('click', '.fa-check-to-slot', function(event) {
    $(this).parent().toggleClass('task-cleared');
})