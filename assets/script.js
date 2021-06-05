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