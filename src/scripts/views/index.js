//var indexTpl = require('../tpl/index.string');
//document.body.innerHTML += indexTpl; 
//var IScroll = require('../lib/iscroll-probe.js');
//console.log(IScroll);
//window.onload = function(){
//	console.log(0);
//	var myScroll = new IScroll('#index-scroll');
//}
//var mySwiper = new Swiper('.swiper-container', {
//	autoplay: 2000,
//	loop: true
//})
var indexTpl = require('../tpl/index.string');
SPA.defineView('index',{
	html:indexTpl,
	plugins:['delegated'],
	//子视图的嵌套定义
	modules:[{
		name:'content',
		container:'.m-index-container',
		views:['home','list','shopping','my'],
		defaultTag:'home'
	}], 
	
	
	bindActions:{
		'switch.view':function(e){
			//视图切换方法
			this.modules.content.launch(e.data.tag);
		}
//		'exit':function(){
//			this.hide();
//		}
	},
	bindEvents:{
		'beforeShow':function(){
			var indexSwiper = new Swiper('#index-swiper',{
				autoplay:2000,
				loop:true
			})
		}
	}
})
