// Event listener for keypress events on the input field
$('input').keypress(function(event){
    // Check if the pressed key has a key code of 13 (Enter key)
    if(event.which === 13) {
        // Get the text entered in the input field
        var toDoText = $(this).val();
        // Append a new list item to the unordered list
        $('ul').append('<li> <span><i class="fa-solid fa-check-to-slot"></i>' + toDoText + '</span> <i class="fa-sharp fa-solid fa-trash"></i> </li>');
        // Clear the input field after adding the task
        $(this).val('');
    }
});

// Event listener for click events on the unordered list, targeting the trash icon
$('ul').on('click', '.fa-trash', function(event){
    // Fade out and remove the parent list item
    $(this).parent().fadeOut(0, function(){
        $(this).remove();
    });
    event.stopPropagation();
})

// Event listener for click events on the unordered list, targeting the check icon
$('ul').on('click', '.fa-check-to-slot', function(event) {
    // Toggle the 'task-cleared' class to mark the task as completed or uncompleted
    $(this).parent().toggleClass('task-cleared');
})