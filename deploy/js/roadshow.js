var roadshow = roadshow || (roadshow = {});

roadshow.App = angular.module('roadshow.App', []);

roadshow.MainCtrl = function($scope, $timeout, $sce) {
	
	$scope.slideWidth = 1000;
	$scope.slideHeight = 750;
	$scope.initalScale = 1;
	$scope.childScale = 0.24;
	$scope.topLevelLength = 7;
	$scope.slides = [];
	$scope.ready = false;
	// $scope.bodyClass = 'upperLevel';
	$scope.titleSlide = {
		width: 500, //arbitrary, to fit title
		height: $scope.slideHeight,
		rotate: -90,
		scale: $scope.topLevelLength * ($scope.slideWidth/$scope.slideHeight),
		y: -($scope.topLevelLength * $scope.slideHeight) + ($scope.slideHeight * 0.5)
	};
	// Arbitrary size and position
	$scope.overviewSlide = {
		scale: 12,
		y: -($scope.topLevelLength * $scope.slideHeight) + $scope.titleSlide.width
	};
	
	var rand = function(min, max) {
		return min + Math.random() * (max - min);
	};
	
	var getRandomColor = function() {
		var h = rand(1, 360);
		var s = rand(20, 60);
		var l = rand(20, 50);
		return 'hsl(' + h + ',' + s + '%,' + l + '%)';
	};
	
	var setSlidePos = function(slide, parent, x, y, z, depth) {
		if (!parent) {
			slide.w = $scope.slideWidth;
			slide.h = $scope.slideHeight;
			slide.scale = $scope.initalScale;
		} else {
			slide.w = parent.childWidth;
			slide.h = parent.childHeight;
			slide.scale = parent.childScale;
			slide.section = parent.section;
			slide.subTitle = parent.title;
			slide.body = $sce.trustAsHtml(slide.body);
		}
		slide.depth = depth;
		slide.x = x;
		slide.y = y;
		slide.z = z;
		slide.rotate = 0;
		$scope.slides.push(slide);
		slide.bgColor = getRandomColor(); //'#'+(Math.random()*0xFFFFFF<<0).toString(16);
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
						yAdj = 0;
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
		for (var i = 0; i < slideMap.length; i++) {
			var slide = slideMap[i];
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
		$scope.titleSlide.x = 0.5 * fullWidth;
	};
	
	$scope.getSlideTemplate = function(slide) {
		if (slide.template) {
			return 'partials/' + slide.template + '.html';
		} else {
			return 'partials/slide_default.html';
		}
	};
	
	$scope.getSlideId = function(slide) {
		return;
	};
	
	initPositions();
	
	$scope.delayedInit = function() {
		impress().init();
		$scope.steps = impress().getSteps();
	};
	
	$scope.onStepChange = function(e) {
		// debugger;
		console.log('onStepChange. Event type: ' + e.type + '. startingStep: ' + e.detail.startingStep.id + '. endingStep: ' + e.detail.endingStep.id);
		var endingId = e.detail.endingStep.id;
		$scope.currSlide = endingId;
		if (endingId == 'overviewSlide' || endingId == 'titleSlide') {
			$scope.bodyClass = 'upperLevel';
		} else {
			$scope.bodyClass = 'lowerLevel';
		}
		$scope.$apply();
	};
	
	$scope.onImpressInit = function(e) {
		console.log('onImpressInit.');
		var stepId = impress().getNext().id;
		if (stepId == 'overviewSlide' || stepId == 'titleSlide') {
			$scope.bodyClass = 'upperLevel';
		} else {
			$scope.bodyClass = 'lowerLevel';
		}
		$scope.ready = true;
		$scope.$apply();
	};
	
	$timeout(function() {
		$scope.delayedInit();
	}, 500);
};

roadshow.App.directive('stepListen', function() {
	return function (scope, elem, attrs) {
		elem.on('impress:stepenter', function(e) {
			scope.onStepChange(e);
		});
		elem.on('impress:stepleave', function(e) {
			scope.onStepChange(e);
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
$(document).ready(function() {
    $(document).on('impress:stepenter', function(e) {
    	debugger;
        var currentSlide = $(e.target).attr('id');
             if (currentSlide === 'slide2') {
            setTimeout(api.next, 2000);
        } else if (currentSlide === 'slide3') {
            window.location = 'http://www.google.com/';
        }
    });
});
*/