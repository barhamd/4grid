
jQuery(document).ready(function(){

    /* Enables #container to be resizable. Also links #grid to resize at the same time. */
    $(function() {
        $("#container").resizable({
            alsoResize: "#grid"
        });
    });

    /* Enables #container to be draggable */
    $(function() {
        $("#container").draggable({
            handle: "p", containment:"document"
        });
    });

    /* Tracks current x,y coordinates of the mouse */
    $("#grid").mousemove(function(e) {
        var xpixel = e.pageX; /* The pixel coordinate on the x-axis */
        var ypixel = e.pageY; /* The pixel coordinate on the y-axis */
        $("#current").text("Current:" + "(" + xpixel + "," + ypixel + ")");
    });
})

