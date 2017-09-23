//start jquery
$(document).ready(function(){

    // event listener for search button
    $('#search').click(function() {
        //get user input search
        var searchTerm = $('#searchTerm').val();

        //API url
        var url = "http://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&format-json&callback=?";

        $.ajax({
          type:"GET",
          url:url,
          async:false,
          dataType:"json",
          success: function(data) {
            console.log(data[1][0]);
            console.log(data[2][0]);
            console.log(data[3][0]);
          },
          error: function(errorMessage) {
            alert("Error");
          }
        });

    });
});
