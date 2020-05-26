// click event
$('#btn-1').click(function() {
    $(this).removeClass('btn-primary').addClass('btn-danger').text('Register');
});

// toggle effect
$('#btn-2').click(function () {
    if($(this).hasClass('btn-success')){
        $(this).removeClass('btn-success').addClass('btn-danger').text('logout');
    }
    else{
        $(this).removeClass('btn-danger').addClass('btn-success').text('login');
    }
});

// change Event
$('#range-1').on('input',function() {
    let theAmount = new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format($(this).val());
    $('#amount').text(theAmount);
});
