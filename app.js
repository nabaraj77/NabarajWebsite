
$(document).ready(function(){
    $("#form").validate({
        rules: {
            name: {
                required: true,
                minlength :2
            },
            email: {
                required: true
            },
            message:{
                required: true
            }
        },
        //CUSTOM MESSAGES TO DISPLAY
        messages:{
            name:{
                required: "Enter Your Name",
                minlength: "Please Enter the Name greater than two characters."
            },
            email:{
                required: "Enter your Email."
            }
        }

    });
});