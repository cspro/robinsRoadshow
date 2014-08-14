var roadshow = roadshow || (roadshow = {});

roadshow.App = angular.module('roadshow.App', ['ngDialog']);

roadshow.MainCtrl = function($scope, $timeout, $sce, $compile, ngDialog) {
	
	$scope.slideWidth = 1000;
	$scope.slideHeight = 750;
	$scope.initalScale = 1;
	$scope.childScale = 0.24;
	$scope.topLevelLength = 7;
	$scope.slides = [];
	$scope.ready = false;
	
	$scope.mainTitleSlide = {
		id: 'mainTitleSlide',
		width: 500, //arbitrary, to fit title
		height: $scope.slideHeight,
		rotate: -90,
		scale: $scope.topLevelLength * ($scope.slideWidth/$scope.slideHeight) * 1.15,
		y: -($scope.topLevelLength * $scope.slideHeight) + ($scope.slideHeight * 0.5),
		level: 'titleSlideLevel'
	};
	
	// Defined in external data file
	marcommWhatWeDo.width = 1000; 
	marcommWhatWeDo.height = $scope.slideHeight; 
	marcommWhatWeDo.rotate = -90; 
	marcommWhatWeDo.scale = $scope.mainTitleSlide.scale / 3; 
	marcommWhatWeDo.y = $scope.mainTitleSlide.y - (7.5 * $scope.slideWidth);
	
	marcommWhoWeAre.width = 1000; 
	marcommWhoWeAre.height = $scope.slideHeight; 
	marcommWhoWeAre.rotate = -90; 
	marcommWhoWeAre.scale = $scope.mainTitleSlide.scale / 3; 
	marcommWhoWeAre.y = $scope.mainTitleSlide.y - (12.5 * $scope.slideWidth);
	
	$scope.titleSlides = [marcommWhatWeDo, marcommWhoWeAre];
	
	// Arbitrary size and position
	$scope.overviewSlide = {
		scale: 13,
		y: -($scope.topLevelLength * $scope.slideHeight) + $scope.mainTitleSlide.width + 200, //bumped to accomodate branding strap
		level: 'titleSlideLevel'
	};
	
	var toTitleCase = function(str) {
    return str.replace(/([^\W_]+[^\s-]*) */g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
	};
	
	var initSlide = function(slide, parent) {
		if (parent) {
			slide.section = parent.section;
			slide.subTitle = parent.title;
			slide.level = "generatedSubSlideLevel";
		} else {
			slide.level = slide.level ? slide.level : "generatedTitleSlideLevel";
		}
		if (slide.bodyCopy) {
			slide.bodyCopy = $sce.trustAsHtml(slide.bodyCopy);
		}
		if (slide.directReports) {
			for (var i = 0; i < slide.directReports.length; i++) {
				var dr = slide.directReports[i];
				if (dr.id) {
					dr.src = "images/content/" + slide.section + "/dr/" + dr.id + ".jpg";
					dr.name = toTitleCase(dr.id.replace('_', ' '));
				}
			}
		}
		if (slide.gridItems) {
			for (var i = 0; i < slide.gridItems.length; i++) {
				var gi = slide.gridItems[i];
				if (gi.id && !(gi.src)) {
					gi.src = "images/content/" + slide.section + "/" + gi.id + "_thumbnail.jpg";
					gi.name = toTitleCase(gi.id.replace('_', ' '));
					gi.contentSrc = "images/content/" + slide.section + "/" + gi.id + "_full.jpg";
					if (gi.modalBody) {
						gi.modalBody = $sce.trustAsHtml(gi.modalBody);
					}
				}
			}
		}
		if (slide.children) {
			for (var i = 0; i < slide.children.length; i++) {
				var child = slide.children[i];
				initSlide(child, slide);
			}
		}
		$scope.slideMap[slide.id] = slide;
	};
	
	var initSlides = function() {
		$scope.slideMap = {};
		$scope.slideMap['overviewSlide'] = $scope.overviewSlide;
		$scope.slideMap['mainTitleSlide'] = $scope.mainTitleSlide;
		// traverse top level slides
		for (var i = 0; i < slideArray.length; i++) {
			initSlide(slideArray[i], null);
		}
		for (var i = 0; i < $scope.titleSlides.length; i++) {
			initSlide($scope.titleSlides[i], null);
		}
	};
	
	initSlides();
	
	var setSlidePos = function(slide, parent, x, y, z, depth) {
		if (!parent) {
			slide.w = $scope.slideWidth;
			slide.h = $scope.slideHeight;
			slide.scale = $scope.initalScale;
		} else {
			slide.parent = parent;
			slide.w = parent.childWidth;
			slide.h = parent.childHeight;
			slide.scale = parent.childScale;
		}
		slide.depth = depth;
		slide.x = x;
		slide.y = y;
		slide.z = z;
		slide.rotate = 0;
		$scope.slides.push(slide);
		depth++;
		if (slide.children) {
			// divide evenly by number of children
			slide.childWidth = Math.min(Math.floor(slide.w * $scope.childScale), Math.floor(slide.w / slide.children.length));
			slide.childScale = Math.min((slide.scale * $scope.childScale), (slide.scale * (slide.childWidth / slide.w)));
			slide.childHeight = Math.floor(slide.h * slide.childScale);
			// Hacky manual adjustment to compensate for css scaling inaccuracy
			for (var i = 0; i < slide.children.length; i++) {
				var xAdj = 0;
				var yAdj = 0;
				switch (depth) {
					case 0: 
						xAdj = 0;
						yAdj = 0;
						break;
					case 1:
						xAdj = 1 + i;
						yAdj = -50;
						break;
					case 2: // 1.1.1
						xAdj = 0 + i;
						yAdj = -17;
						break;
					case 3: // 1.1.1.1
						xAdj = 0 + (i*0.75);
						yAdj = 11.5;
						break;
					case 4: // 1.1.1.1.1
						xAdj = 0.5 + (i*0.5);
						yAdj = 8.5;
						break;
				};
				var child = slide.children[i];
				var childX = slide.x + (slide.childWidth * (i+1)) - (slide.childWidth/2) - slide.w/2;
				childX += xAdj;
				var childY = slide.y + (slide.h/2) - Math.ceil(slide.childHeight/2) + yAdj;
				var childZ = slide.z + Math.round(10 * slide.childScale);
				setSlidePos(child, slide, childX, childY, childZ, depth);
			}
		}
	};
	
	var initPositions = function() {
		var depth = 0;
		var spacing = 10;
		for (var i = 0; i < slideArray.length; i++) {
			var slide = slideArray[i];
			var colNum = 1 + (i % $scope.topLevelLength);
			var x = Math.round((colNum * $scope.slideWidth) - ($scope.slideWidth/2)) + (colNum * spacing);
			var rowNum = 1 + Math.floor(i / $scope.topLevelLength);
			var y = Math.round((rowNum * $scope.slideHeight) - ($scope.slideHeight/2)) + (rowNum * spacing) - 2100;
			setSlidePos(slide, null, x, y, i, depth);
		}
		var totalCols = Math.max($scope.topLevelLength, colNum);
		var totalRows = rowNum;
		var fullWidth = (totalCols * $scope.slideWidth) + ((totalCols - 1) * spacing);
		var fullHeight = (totalRows * $scope.slideHeight) + ((totalRows - 1) * spacing);
		$scope.overviewSlide.x = 0.5 * fullWidth;
		$scope.mainTitleSlide.x = 0.5 * fullWidth + 300; // bumped up to account for branding strap at bottom
		for (var j=0; j < $scope.titleSlides.length; j++) {
			var slide = $scope.titleSlides[j];
			slide.x = 0.5 * fullWidth;
		}
	};
	
	$scope.getSlideTemplate = function(slide) {
		if (slide.template) {
			return 'partials/' + slide.template + '.html';
		} else {
			return 'partials/slide_section_content.html';
		}
	};
	
	initPositions();
	
	var getSlideDataById = function(id) {
		return $scope.slideMap[id];
	};
	
	//FIXME: Clean up interchangeable references to "Slide" and "Step"
	
	var setCurrLevel = function(id) {
		var slide = getSlideDataById(id);
		$scope.currLevel = slide.level;
	};
	
	$scope.onStepChange = function(e) {
		try {
		// debugger;
		} catch(err) {
			console.log('Error in onStepChange: ' + err);
		}
	};

	var setSlideOpacity = function(slide, coverOpacity, contentOpacity) {
		slide.coverOpacity = coverOpacity ? "opaque" : "transparent";
		slide.contentOpacity = contentOpacity ? "opaque" : "transparent";
	};
	
	var setOpacityStates = function(slide) {
		if (slide.level === "titleSlideLevel") {
			angular.forEach($scope.slideMap, function(s) {
				if (s.level === "generatedTitleSlideLevel") {
					setSlideOpacity(s, true, false);
				} else if (s.level === "generatedSubSlideLevel") {
					setSlideOpacity(s, false, false);
				}
			});
		} else if (slide.level === "generatedTitleSlideLevel") {
			angular.forEach($scope.slideMap, function(s) {
				if (s.level === "generatedTitleSlideLevel") {
					if (s.id !== slide.id) {
						setSlideOpacity(s, true, false);
					}
				} else if (s.level === "generatedSubSlideLevel") {
					if (s.parent.id === slide.id) {
						setSlideOpacity(s, false, true);
					} else {
						setSlideOpacity(s, false, false);
					}
				}
			});
		} else if (slide.level === "generatedSubSlideLevel") {
			angular.forEach($scope.slideMap, function(s) {
				if (s.level === "generatedTitleSlideLevel") {
					if (s.id === slide.parent.id) {
						setSlideOpacity(s, false, true);
					} else {
						setSlideOpacity(s, true, false);
					}
				} else if (s.level === "generatedSubSlideLevel") {
					if (s.parent.id === slide.parent.id) {
						setSlideOpacity(s, false, true);
					} else {
						setSlideOpacity(s, false, false);
					}
				}
			});
		}
		setSlideOpacity(slide, false, true);
		$scope.$apply();
	};
	
	$scope.onStepLeave = function(e) {
		if (e.detail.endingStep) {
			// console.log("    leave " + e.detail.startingStep.id);
			var nextSlide = getSlideDataById(e.detail.endingStep.id);
			setOpacityStates(nextSlide);
			$scope.currSlideId = nextSlide.id;
			$scope.currLevel = nextSlide.level;				
			$scope.$apply();
		}
	};
	
	$scope.onStepEnter = function(e) {
		if (e.detail.startingStep) {
			// Should have already happened on previous stepleave, but sometimes fails; this is a failsafe
			var nextSlide = getSlideDataById(e.detail.endingStep.id);
			setOpacityStates(nextSlide);
			$scope.$apply();
		}
	};
	
	$scope.onImpressInit = function(e) {
		// console.log('onImpressInit.');
		var slide = getSlideDataById(impress().getNext().id);
		setOpacityStates(slide);
		$scope.currSlideId = slide.id;
		$scope.currLevel = slide.level;				
		$scope.$apply();
		$scope.ready = true;
	};
	
	var launchModal = function(item) {
		$scope.modalContentSrc = item.contentSrc;
		$scope.modalCaption = item.caption;
		$scope.modalBodyCopy = item.modalBody;
		$scope.modalLink = item.modalLink;
		$scope.modalOpen = true;
		var content = $compile("<div ng-include=" + item.template + "></div>");
		$scope.modal = ngDialog.open({
				template: item.template,
				scope: $scope,
				className: 'ngdialog-theme-rr'
			});
		$scope.modal.closePromise.then($scope.onModalClose);
	};
	
	$scope.onModalClose = function(data) {
		$scope.modalOpen = false;
		// console.log('modal' + data.id + ' has been closed.');
	};
	
	$scope.onContentItemClick = function(e, item) {
		if (item && item.template) {
			e.stopPropagation();
			e.preventDefault();
			launchModal(item);
		} else if (item && item.url) {
			// placeholder for launching URLs directly from items
			console.log(item.url);
		}
	};
	
	/*
	 * Called after timeout so browser has a chance to render before impress is run
	 */
	$scope.delayedInit = function() {
		impress().init();
		$scope.steps = impress().getSteps();
	};
	
	$timeout(function() {
		$scope.delayedInit();
	}, 500);
	
};

roadshow.App.directive('stepListen', function() {
	return function (scope, elem, attrs) {
		elem.on('impress:stepenter', function(e) {
			// scope.onStepChange(e);
			scope.onStepEnter(e);
		});
		elem.on('impress:stepleave', function(e) {
			// scope.onStepChange(e);
			scope.onStepLeave(e);
		});
	};
});

roadshow.App.directive('impressInit', function() {
	return function (scope, elem, attrs) {
		elem.on('impress:init', function(e) {
			scope.onImpressInit(e);
		});
	};
});

/*
roadshow.App.directive('keydown', function() {
	return function (scope, elem, attrs) {
		elem.bind('keydown', function (e) {
			if ( e.keyCode === 9 || ( e.keyCode >= 32 && e.keyCode <= 34 ) || (e.keyCode >= 37 && e.keyCode <= 40) ) {
				e.preventDefault();
				// console.log('keydown directive: ' + e.keyCode);
			}
		});
	};
});
*/

/*
 * Replace impress.js key handling in order to intercept keys when modal is open
 */
roadshow.App.directive('keyup', function() {
	return function (scope, elem, attrs) {
		elem.bind('keyup', function (e) {
			// console.log('keyup directive: ' + e.keyCode + '; modalOpen: ' + scope.modalOpen);
			if ( e.keyCode === 9 || ( e.keyCode >= 32 && e.keyCode <= 34 ) || (e.keyCode >= 37 && e.keyCode <= 40) ) {
				switch( e.keyCode ) {
					case 33: // pg up
					case 37: // left
					case 38: // up
						if (!scope.modalOpen) {
							impress().prev();
						}
						break;
					case 9:  // tab
					case 32: // space
					case 34: // pg down
					case 39: // right
					case 40: // down
						if (!scope.modalOpen) {
							impress().next();
						}
						break;
				}
        e.preventDefault();
			}
		});
	};
});

