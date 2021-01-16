$(function () {
  $(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newburger = {
      burger_name: $("#bu").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newburger
    }).then(
      function () {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
  
  $(".change-devoured").on("click", function(event) {
    var id = $(this).data("id");
    // var newBurger = $(this).attr("data-order");

    var newBurger= {
      devoured: true
    };
    console.log(id)
    console.log(newBurger)
    
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newBurger
    }).then(
      function() {
                location.reload();
      }
    );
  });
})