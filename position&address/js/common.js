//初始化地图
var map = new AMap.Map('container', {
	showIndoorMap: false,
	disableSocket: true,
	zoom: 8
});

//AMap.plugin(['AMap.ToolBar'], function() {
//	map.addControl(new AMap.ToolBar());
//});

//jshint -W098
function cityPickerReady(cityPicker) {

	window.cityPicker = cityPicker;
	
	//引用domLibaray(Zepto)
	AMapUI.load(['lib/$'], function($) {

		//选中某个城市
		cityPicker.on('citySelected', function(cityInfo) {
			//隐藏城市列表面板
			cityPicker.hideImmediately();

			//清除搜索框内容
			cityPicker.clearSearch();
			notifyCityInfo(cityInfo);
			
		});

//		$('#openBtn').click(function() {
//			cityPicker.toggleShowHide();
//		});
		
		var marker = new AMap.Marker();

		/**
		 * 显示对应的城市信息
		 */
		//jshint -W003
		function notifyCityInfo(cityInfo) {
			window.sessionStorage.setItem('city',cityInfo.name);
//			window.sessionStorage.setItem('lng',cityInfo.lng);
//			window.sessionStorage.setItem('lat',cityInfo.lat);
//			window.sessionStorage.setItem('adcode',cityInfo.adcode);
			location.href = 'position.html?city='+cityInfo.name;
//			$("#selectedCityInfo").html(JSON.stringify(cityInfo, null, 2));
//			marker.setMap(map);
			marker.setPosition([cityInfo.lng, cityInfo.lat]);
			map.setCenter(marker.getPosition());
		}

	});
}

//if (!AMap.UA.mobile) {
//	var div = document.createElement('div');
//	div.className = 'noti-tip';
//
//	div.innerHTML = '请在手机模式下查看本页面';
//
//	document.body.appendChild(div);
//}