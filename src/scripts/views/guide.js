var guideTpl = require('../tpl/guide.string');
////定义一个视图
SPA.defineView('guide',{
	html:guideTpl,
	//添加插件
	plugins:['delegated'],
	//绑定事件
	bindActions:{
		'goto.index':function(){
			console.log(0);
			SPA.open('index');
			SPA.util.storage('isVisited',true);
		}
	},
	//给视图绑定事件
	bindEvents:{
		'beforeShow':function(){
			var guideSwiper = new Swiper('#guide-swiper',{
				loop:false,
				autoplay:2000
			})
		}
	}
});
