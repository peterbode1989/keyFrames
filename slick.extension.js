/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.9.0
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
/* global window, document, define, jQuery, setInterval, clearInterval */
(function(factory) {
	'use strict';
	if (typeof define === 'function' && define.amd) {
		define(['jquery'], factory);
	} else if (typeof exports !== 'undefined') {
		module.exports = factory(require('jquery'));
	} else {
		factory(jQuery);
	}
})(function($) {
	'use strict';
	var SlickExtension = window.SlickExtension || {};

	SlickExtension = (function() {
		function SlickExtension(element) {
			console.log(element);
		}

		return SlickExtension;
	})();

	$.fn.slickExtension = function() {
		var _ = this,
			opt = arguments[0],
			l = _.length,
			i;
		for (i = 0; i < l; i++) {
			if (typeof opt == 'object' || typeof opt == 'undefined')
				_[i].slickExtension = new SlickExtension(_[i], opt);
		}
		return _;
	};
});
