/**
 * 
 * @param {urls:Array, arg:{Object}} images
 * @param {Object} arg
 * @param {Object} context
 */

var ImageSliderView = function(images, arg, context){
	var autoSlide=false;
	var views = [];
	var i;
	Ti.Gesture.addEventListener('orientationchange',function(e)
	{
	
		// get orienation from event object
		var orientation = getOrientation(e.orientation);
	});
	
	
	for(var k=0,length=images.urls.length; k<length; k++){
		var options = images.arg;
		options.image = images.urls[k];
		views.push(Ti.UI.createImageView(options));
	}
	
	var scrollView = Titanium.UI.createScrollableView({
		views:views,
		showPagingControl:true,
		pagingControlHeight:30,
		maxZoomScale:2.0,
		currentPage:1
	});

	context.add(scrollView);
	
	var activeView = views[0];
	
	scrollView.addEventListener('scroll', function(e)
	{
	    activeView = e.view;  // the object handle to the view that is about to become visible
		i = e.currentPage;
		Titanium.API.info("scroll called - current index " + i + ' active view ' + activeView);
	});
	
	/*	
	// move scroll view left
	var left = Ti.UI.createButton({
		image:'/images/icon_arrow_left.png'
	});
	left.addEventListener('click', function(e)
	{
		if (i == 0) return;
		i--;
		scrollView.scrollToView(i);
	});
	
	// move scroll view right
	var right = Ti.UI.createButton({
		image:'/images/icon_arrow_right.png'
	});
	right.addEventListener('click', function(e)
	{
		if (i == (scrollView.views.length-1)) return;
		i++;
		scrollView.scrollToView(scrollView.views[i]);
	});
	
	*/
	

};
module.exports = ImageSliderView;
