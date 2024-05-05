$(function(){
    const tagged = {};                   
    $("#gallery img").each(function(){    		  
         const img = this;     
         const tags = $(this).data('tags');       

         if(tags){
              tags.split(',').forEach(function(tagName){ 
                    if (tagged[tagName] == null) {           
                         tagged[tagName] = [];              
                    }
                            tagged[tagName].push(img);     
                  });
              }				
     });

     $.each(tagged, function(tagName) {      
          $('select').on("change",function(){
               const aa=$(this).val(); 
             
               if(aa==""){
                    $("#gallery img").show();  
              }else{

              $("#gallery img").hide().filter(tagged[aa]).show();
              }  

          });
     });
     
});