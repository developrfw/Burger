$(function() {
    $(".devour-the-burger").on("click", function(event) {
         let id = $(this).data("burgerid");
         let id2 = $(this).data("burgerstate");
         console.log(id, id2);

         var devouredState = {
              devoured: 1
         };

         $.ajax("/api/burgers/" + id, {
              type: "PUT",
              data: devouredState
         }).then(function() {
              console.log("changed sleep to", devouredState);
         
              location.reload();
         });
    });

 
    $(".add-burger").on("click", function(event) {
         event.preventDefault();
         console.log($("[name=burger-name]").val());

         var newBurger = {
              burger_name: $("#burger-to-order").val(),
              devoured: 0
         };
 
         console.log(newBurger);

         $.ajax("/api/burgers", {
              type: "POST",
              data: newBurger
         }).then(function() {
              console.log("created new burger");
           
              location.reload();
         });
    });
});
