
let b = document.getElementById("body");


b.addEventListener("mousemove",function() {
    var width = screen.width; 
        //obtener el ancho y alto del elemento "menu": metodos .width() y .height()
        if(width<992){
            $("#nav-").removeClass("caja-2");
        }else{
            $("#nav-").addClass("caja-2");
        }
});


// $(function () {
    
    


//     $(document).ready(function(){
//         let width = screen.width; 
//         //obtener el ancho y alto del elemento "menu": metodos .width() y .height()
//         if(width<992){
//             $("#nav-").removeClass("caja-2");
//         }else{
//             $("#nav-").addClass("caja-2");
//         }
//      });
    
//   });