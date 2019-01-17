$("#button").on("click", function (){
    button.start();
});

var button = {
    start: function () {
        $("#button").remove();
        $("#subwrapper").prepend('<h2> Push it real good! </h2>');
    }
};

