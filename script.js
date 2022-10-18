const compile=()=>{
    const hmtl=document.getElementById("html");
    const css=document.getElementById("css");
    const js=document.getElementById("js");
    const result=document.getElementById("result").contentWindow.document;
    
    const show=document.getElementById("show");
    show.addEventListener("click",function(){
        result.open();
        result.writeln(
            hmtl.value
            +"<style> "+css.value+" </style>"
            +"<script> "+js.value+" </script>"
        );

        result.close();

    });
    document.body.onkeyup=function()
    {
        // result.open();
        // result.writeln(
        //     hmtl.value
        //     +"<style> "+css.value+" </style>"
        //     +"<script> "+js.value+" </script>"
        // );

        // result.close();
    }
}
compile();