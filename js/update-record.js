// Update Record

$("#edit-submit").on("click", function(e){
    e.preventDefault();

    var jsonObj = jsonData("#edit-form");
    
    if(jsonObj == false){
        message("All Fields are required.", false);
    }else{
        $.ajax({
            url: 'http://localhost/php%20api/api-update.php', 
            type: 'POST', 
            data:jsonObj,  
            success: function(data){
                message(data.message, data.status);
                // console.log(data)
                if(data.status == true){
                    loadTable();
                    $("#addForm").trigger("reset");
                }
            }
        });
    }
});