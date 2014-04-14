Ti.Map = require('ti.map');
exports.create = function(_pindata) {
	var self = Ti.Map.createAnnotation({
		latitude : _pindata.latitude,
		longitude : _pindata.longitude,
		leftView : Ti.UI.createImageView({
			width : 100,
			height : 100,
			image : _pindata.thumb
		}),
		title : _pindata.title,
		subtitle : 'Freiheit für Josef!',
		image : '/appicon.png'
	});
	console.log(_pindata.thumb);
	return self;
};
