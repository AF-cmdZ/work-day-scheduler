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
        $('.notification').addClass('show');
        // Timeout to remove notifification after 4 seconds
        setTimeout(function () {
            $('.notification').removeClass('show');
        }, 4000);
})
});

function hourBlockUpdate() {
    // gets the current number hour of the day in military time
    var currentHour = moment().hours();
    // loop over all the time-block divs
    $('.time-block').each(function () {
        var blockHour = parseInt($(this).attr('id').split('-')[1]);

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