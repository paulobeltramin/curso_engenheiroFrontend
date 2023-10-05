
$(document).ready(function () {

    $("#form").on("submit", function (e) {
        e.preventDefault();

        const tasks = $("#task").val();

        const lists = `<li>${tasks}</li>`;


        $(tasks).appendTo(lists);
        $(lists).appendTo("ul");


        $('li').on("click", function () {

            $(this).attr("class", "decoration")

        });

    });

});

