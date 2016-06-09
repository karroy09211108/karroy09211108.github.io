require("./lib/spa.min.js");
require("./lib/swiper-3.3.1.min.js");
require("./views/guide.js");
require("./views/list.js");
require("./views/shopping.js");
require("./views/my.js");
require("./views/home.js");
require("./views/index.js");

//配置视图信息
var isVisited = SPA.util.storage('isVisited');
var indexView = "";
if(isVisited){
	indexView = "index";
}else{
	indexView = "guide";
}
SPA.config({
	indexView: indexView 
})
