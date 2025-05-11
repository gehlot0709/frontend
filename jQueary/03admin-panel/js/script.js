$(document).ready(function () {
    $(".toggle-aside").click(function(e){
        e.preventDefault();
        $("aside, main").toggleClass("active");
    });
});
