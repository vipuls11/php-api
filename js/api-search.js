// Live Search Record

$("#search").on("keyup", function(){
    var search_term = $(this).val();

    $("#load-table").html("");

    $.ajax({
        url: 'http://localhost/php%20api/search-api.php=' + search_term,
        type: "GET",
        success: function(data){
            if(data.status == false){
                $("#load-table").append("<tr><td colspan='6'><h2>"+data.message+"</h2></td></tr>");
            }else{
                $.each(data, function(key, value){
                  console.log(data)
                  $("#load-table").append("<tr>" 
                    +"<td>"+value.id+"</td>"
                    +"<td>"+value.name+"</td>"
                    +"<td>"+value.age+"</td>"
                    +"<td>"+value.
                      city+"</td>"
                    +"<td><button class='edit-btn' data-eid='"+value.id+"' data-bs-toggle='modal' data-bs-target='#exampleModal'>Edit</button></td>"
                    //+"<td>"+data.message+"</td>"
                    +"<td><button class='delete-btn' data-did='"+value.id+"'>Delete</button></td>"
                   // +"<td>"+data.message+"</td>"
                    +"</tr>");
                })
              }
        }
    })
});
 