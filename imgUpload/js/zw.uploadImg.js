(function($){
	$.fn.uploadImg = function(){
		$(this).click(function(){
			console.log(1);
			var _this = $(this).parent().find('input');
			_this.click();
			_this.on('change',function(){
			console.log(2); 
			var fr = new FileReader();
			fr.readAsDataURL(this.files[0]);
			var img = new Image();
			fr.onload = function() {
			img.src = this.result;
			console.log(img.src);
							
			img.onload = function() {
				_this.parent().find("img").attr('src',img.src);
				_this.attr('upload','1');
								//待写图片压缩
								/*var ratio = 1;
								if (img.width > img.height) {
									upImg.find("img").addClass("mh");
									ratio = _h / img.height;
								} else {
									upImg.find("img").addClass("mw");
									ratio = _w / img.width;
//								}*/
			
//							var scroll = new IScroll(upImg[0], {
//								zoom : true,
//								scrollX : true,
//								scrollY : true,
//								mouseWheel : true,
//								bounce : false,
//								wheelAction : 'zoom'
//							});
//			
//							if (btn.hasClass("btn-old")) {
//							//	ajaxFileUpload("image_btn1", "#image1");
//								_old.img = img;
//								_old.scroll = scroll;
//								_old.ratio = ratio;
//							}
//							if (btn.hasClass("btn-new")) {
//								//ajaxFileUpload("image_btn2", "#image2");
//								_new.img = img;
//								_new.scroll = scroll;
//								_new.ratio = ratio;
//							}
//			
//							setTimeout(function() {
//								upImg.removeClass("loading").find("img").css("opacity", 1);
//							}, 1000);
							}
						}
					});
					
					
				});
	}
})(jQuery);
