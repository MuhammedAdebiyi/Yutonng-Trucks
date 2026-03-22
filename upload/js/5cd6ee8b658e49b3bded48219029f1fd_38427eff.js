$(function () {
    $(".messforma > div > div").click(function () {
        $(this).addClass("in");
    });
    $(".messforma input,.messforma textarea").blur(function () {
        var $inputval = $(this).val();
        if ($inputval !== "") {
            console.log(this)
            $(this).parents(".s_form1").addClass("in");
        } else {
            $(this).parents(".s_form1").removeClass("in");
        }
    });
});
