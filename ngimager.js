'use strict';
angular.module('ngimager',[])
	.service('imager',function($window,$rootScope){
		var window = $window;
		var body = document.body;
		var documentElement = document.documentElement;
		var setInfo = function(){
			$rootScope.$$width = window.innerWidth || 0;
			$rootScope.$$height = window.innerHeight || 0;
			window.onresize = function(){
				setInfo();
			}
		};

		var getScrollHeight = function(){
			return (body.scrollHeight || documentElement.scrollHeight || 0);
		};
		var getScrollTop = function(){
			return (body.scrollTop || documentElement.scrollTop || 0);
		};
		
		var init =function (){
			getScrollHeight();
			getScrollTop();
			requestAnimationFrame(init);
		};

		this.utils = {},
		this.utils.foreach = function(){
			
		};
		this.replaceArr = function(arr){
		  return arr.sort(function(a,b){return a-b});
		};
		this.requestAnimationFrame = function(){
			return(window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || setTimeout);
		};
		this.cancelAnimationFrame = function(){
			return(window.cancelAnimationFrame || window.mozcancelAnimationFrame || window.webkitcancelAnimationFrame || window.mscancelAnimationFrame || window.msRequestAnimationFrame ||setInterval);
		};
		this.init = function(){
			setInfo();
			requestAnimationFrame(init);
		}
		this.init();
	})
	.factory('_resize',function(imager){
		console.log(imager);
	})
	.factory('_scroll',function(imager){
		console.log(imager);
	})
	.directive('ngImgrClick',['imager', function(){
		return{
			replace: true,
			restrict: "AE",
			link: function(scope, elem, attr){
				console.log(scope+elem+attr);
			}
		};
	}])
	.directive('ngImgr',['imager','_resize', function(imager,_resize){
		return {
			restrict: 'AE',
			replace:true,
			link: function (scope, elem, attr) {
				if(attr.ngSize){
					var blob = attr.ngSize.split(',');		
					blob = imager.replaceArr(blob);
				}else{
					var blob = []
				}
				var _cw = elem[0].clientWidth;
				var _b = [];
				angular.forEach(blob, function(v,k,i){
					if(v > _cw){
						if (!blob[k]){
							_b.push(blob[0]);
						}else{
							_b.push(blob[k]);	
						}
					}
				});
				if(_b.length==0){
					_b.push(blob[blob.length-1])	
				}
				scope.width = _b[0];
			}
		};
	}])