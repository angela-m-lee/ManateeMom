$("#enter").on("click", function (){
    points.starts();
})

var button = {
    start: function () {
        $("#subwrapper").prepend('<h2> Push it real good </h2>');
        $("#enter").remove();
    }
};