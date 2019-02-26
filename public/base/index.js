var measureTool,
	lsbasemap = null;
$(document).ready(function() {
	Lg.init();
	/****用户登录信息处理**/
	usermanage.user_cookie();
	/***加载用户头像****/
	usermanage.loadUserImage();
	/****判断是否是触屏，如果是不是触屏则false，绘制时候用***/
	L.Browser.touch = (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0));
	//先加载地图，然后再加载页面相关东西，再加载其他的
	windowInit.init();
	/***Awt气象服务调用****/
	weatherTool.getWeatherData();
	/***沿海气象功能调用****/
	weatherTool.weahterChoose();
	/****全量船舶展示*****/
	LS.mymap.addLayer(movemarker);
	// LS.mymap.addLayer(clickMarker);
	shipLayers.globalShipSprite = $('#globalSprite')[0];
});