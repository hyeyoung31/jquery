$(function(){
	//data-" 로 시작하는 속성들을 하나로 모아 "dataset" 맵(Map)으로 따로 모아서 관리

    const $imgs = $("#gallery img");
    const $search = $("#filter-search");
    const cache = [];

    $imgs.each(function(){
        cache.push({
            element: this,
            text: this.dataset.tags.trim().toLowerCase(),
            alt: this.alt.trim().toLowerCase()
        })
    })
	
   function filter(){
    const $bb=$("#button ul li");	
    const btnName = $(this).val();  

    $bb.each(function(){
        const imgAlt = $(this).text();
        const cname=$(this).attr("id")

        if(imgAlt == 'all'){
            $(".first a").removeClass("active");
              $("#gallery img").show();
          }

       if(btnName == ''){
        $(".first a").addClass("active");
        $("#gallery img").show();
       }

        if(btnName==imgAlt || btnName==cname){
        $(this).addClass("active");
        }else{
            $(this).removeClass("active");
        }
    });

	/*
	test () 메서드는 주어진 문자열이 정규 표현식을 만족하는지 판별하고, 
	그 여부를 true 또는 false 로 반환
	*/
    const query = this.value.trim().toLowerCase();
    cache.forEach(function(img){
        //  let index = 0;
        let index;
          let eng = /[a-zA-Z]/;
          if(query) {
              if(eng.test(query)) {
                  index = img.alt.indexOf(query);
              } else {
                  index = img.text.indexOf(query);
              }
          }
          img.element.style.display = index === -1 ? "none" : "";
      })
   }
   $search.on("keyup", filter);

   const tagged = {};
   $("#gallery img").each(function(){
       const img = this;
       const tags = $(this).data('tags');

       if(tags) {
           tags.split(',').forEach(function(tagName){
               if(tagged[tagName] == null) {
                   tagged[tagName] = [];
               } 
               tagged[tagName].push(img);
           });
       }
   });

   $(".first a").on("click", function(){
    $("#button li").removeClass("active");
    $(this).addClass("active");
    $("#gallery img").show();
    return false;
   });

   $.each(tagged, function(tagName) {
    $("#button li").on("click", function(){
        $(".first a").removeClass("active");
        const aa = $(this).text();
        $(this).addClass("active").siblings().removeClass("active");
        $("#gallery img").hide().filter(tagged[aa]).show();
    });
  }); 
});