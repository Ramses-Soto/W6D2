// Create the 4x4 grid
for (let i = 0; i < 16; i++) {
    const square = $('<div class="square"></div>');
    $('#gridContainer').append(square);
}

// Add click event to each square
$('.square').on('click', function() {
    $(this).toggleClass('clicked');
});