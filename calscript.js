(function() {
   let buttons = document.querySelectorAll(".btn");
   let screen = document.querySelector(".calscreen");
   let clear = document.querySelector(".btn-red");
   let equal = document.querySelector(".btn-green");

   //getting each of buttons value
   buttons.forEach(function(btnvalue){
        btnvalue.addEventListener("clickde", function(e){
            let value = e.target.dataset.num;
            screen.value += value;
        })

        equal.addEventListener("click", function(e){
            if (screen.value === ''){
                screen.setAttribute("placeholder", "enter value")
            } else {
                let answer = eval(screen.value);
                screen.value = answer;
            }
        })

        clear.addEventListener("click", function(e){
            screen.value = "";
        })
        
   });
   

})();