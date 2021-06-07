$(document).ready(function () {
    // button click
    $('.saveBtn').on('click', function () {
        // get value of appointment text area
        var value = $(this).siblings('.description').val();
        // get the id of the time-block which is the time
        var time = $(this).parent().attr('id');

        // save these above values into local storage
        localStorage.setItem(time, value);

        // notification that item was saved
        $('.notification').addClass('isVisible');
        // Timeout to remove notifification after 4 seconds
        setTimeout(function () {
            $('.notification').removeClass('isVisible');
        }, 4000);
})
});

function hourBlockUpdate() {
    // gets the current number hour of the day in military time
    var currentHour = moment().hours();
    // loop over all the time-block divs
    $('.time-block').each(function () {
        var blockHour = parseInt($(this).attr('id'));

        // check if we have time has passed current hour
        if(blockHour < currentHour) {
            $(this).addClass('past');
        } else if (blockHour === currentHour) {
            $(this).removeClass('past');
            $(this).addClass('present');
        } else {
            $(this).removeClass('past');
            $(this).removeClass('present');
            $(this).addClass('future');
        }
    });
};

hourBlockUpdate();

// checks the current time
var interval = setInterval(hourBlockUpdate, 150000);

// loads saved data from local storage 
$('#9 .description').val(localStorage.getItem('9'));
$('#10 .description').val(localStorage.getItem('10'));
$('#11 .description').val(localStorage.getItem('11'));
$('#12 .description').val(localStorage.getItem('12'));
$('#13 .description').val(localStorage.getItem('13'));
$('#14 .description').val(localStorage.getItem('14'));
$('#15 .description').val(localStorage.getItem('15'));
$('#16 .description').val(localStorage.getItem('16'));
$('#17 .description').val(localStorage.getItem('17'));

// displays current day on top of page
var now = moment().format("MMMM Do, YYYY");
$("#currentDay").text(now);