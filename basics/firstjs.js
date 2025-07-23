
   function myFunction() {
    var str = "Hello World!!";
    
    // Output to an element instead of document.write
    document.getElementById("output").innerHTML = "<b>" + str + "<br/></b>First Javascript Program";

    console.log(str); // Still logs to console
}
