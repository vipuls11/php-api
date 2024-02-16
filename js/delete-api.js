// Delete Reccord

$(document).on("click",".delete-btn",function(){
    if(confirm("Do you really want to delete this record ?")){
        var StudentId = $(this).data("did");
        var obj = {sid : StudentId};
        var myJSON = JSON.stringify(obj); 
        var row = this;
        console.log(myJSON);

	$.ajax({
            url: 'http://localhost/php%20api/delete-api.php',
            type: "POST",
            data: myJSON,
            success: function(data){
                // console.log(data, "szcfsdgdfhgd")
                    message(data.message, data.status);
                    if(data.status == true){

                        $(row).closest("tr").fadeOut();
                    }                  
             
            }
        });
    }
});