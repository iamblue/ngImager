'use strict';
angular.module('ngimager',[])
	.service('imager',function($window){
		var window = $window;

		var imager = function (elem,imgr_){
			
		};
		this.utils = {},
		this.utils.foreach = function(){

		},
		this.events = {},
		this.events.EventEmitter = function(){

		},
		this.imager = imager,
	
		imager.prototype = new this.events.EventEmitter(),
		imager.prototype.emitResizeEvent = function(){

		}, 
		imager.prototype.requestAnimationFrame = function(){
			return(window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || setTimeout).bind(window);
		},
		imager.prototype.cancelAnimationFrame = function(){
			return(window.cancelAnimationFrame || mozcancelAnimationFrame || window.webkitcancelAnimationFrame || window.mscancelAnimationFrame || setInterval).bind(window);
		}
	})
	.directive('ngImgr',['imager',function(imager){
		return {
			replace: true,
			restrict: "AE",
			link: function (scope, elem, attr) {
				console.log(imager)
				
		
			}
		}
	}])