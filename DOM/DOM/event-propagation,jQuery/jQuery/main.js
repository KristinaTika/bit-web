$(function () {
    /*
    var middle = parseInt($("li").length / 2 + 1);
    console.log(middle);
    $("li:first").addClass("redline")
    $("li").addClass("toupper");
    $("li.active").css("color", "green");
    $("li:nth-child("+middle+")").css("background-color", "blue");
*/



    var a = [
        "https://i2.wp.com/www.rangolidesignsimages.com/wp-content/uploads/2016/09/di-9.jpg?fit=720%2C540&ssl=1&resize=200%2C200", "https://wi-images.condecdn.net/image/Py4n61pV3wz/crop/200/square/f/gettyimages-453434171.jpg", "http://www.epoksan.rs/wp-content/uploads/2013/09/images-3.jpg", "https://www.ucdavis.edu/sites/default/files/styles/panopoly_image_square/public/images/article/gettyimages-484880634.jpg?itok=w4FJ9Ey3", "https://i1.wp.com/www.rangolidesignsimages.com/wp-content/uploads/2016/09/Simple-dot-rangoli-design-5.jpg?fit=350%2C350&ssl=1&resize=200%2C200"
    ];

    var div = $("<div>");
    a.forEach(function (link) {
        div.append("<img src='" + link + "'>");
    });
    $("body").append(div);

    div.before("<h3>Photo Gallery</h3>");

    $("img").each(function () {
        var image = $(this);

        image.height(parseInt(Math.random() * (400 - 100) + 100)) + "px";
        image.width(parseInt(Math.random() * (300 - 100) + 100)) + "px";

        if (parseInt(image.width()) < 200) {
            image.css("border", "5px solid green");
        } else {
            return false;
        }
    });



})

