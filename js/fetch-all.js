$(document).ready(function(){
    // Fetch All Records
    $.ajax({
     url : 'http://localhost/php%20api/api-fetch-all.php',
     type : "GET",
      success : function(data){
       // console.log(data);
      if(data.status == false){
        $("#load-table").append("<tr><td colspan='6'><h2>"+data.message+"</h2></td></tr>");
      }
      else
      {
        $.each(data, function(key, value){
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
    });
  });
   loadTable();