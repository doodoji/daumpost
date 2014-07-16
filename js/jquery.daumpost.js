daum.Postcode && jQuery && (function( $ ) {
	'use strict';
	/** 
	 * @constructor
	 * @param {Object} options
	 * @param {Element} el
	 */
	function Postcode ( options, el ) {
		var completeDfd = new $.Deferred(),
			resizeDfd = new $.Deferred(),
			completeCallbacks = [],
			resizeCallbacks = [],
			origComplete,
			origResize;

		options = options || {};

		origComplete = options.oncomplete;
		origResize = options.onresize;

		options.oncomplete = function( data ) {
			origComplete && origComplete( data );
			completeDfd.resolve( data );
		};
		options.onresize = function( data ) {
			origResize && origResize( data );
			resizeDfd.notify( data );
		};

		completeDfd.done(function( data ) {
			var func;

			while ( func = completeCallbacks.shift() ) {
				func && func( data );
			}
		});
		resizeDfd.progress(function ( data ) {
			$.each(resizeCallbacks, function( _, func ) {
				func && func( data );
			});
		});

		this.width = function( w ) {
			options.width = w;
			return this;
		};

		this.height = function( h ) {
			options.height = h;
			return this;
		};

		this.oncomplete = function( func ) {
			if ( typeof func == 'function' ) {
				completeCallbacks[completeCallbacks.length] = func;
			}
			return this;
		};

		if ( el ) {
			this.onresize = function( func ) {
				if ( typeof func == 'function' ) {
					resizeCallbacks[resizeCallbacks.length] = func;
				}
				return this;
			};
		}

		this.show = function() {
			if ( el ) {
				new daum.Postcode( options ).embed( el );
				return $( el );
			} else {
				new daum.Postcode( options ).open();
				return $;
			}
		};
	}

	$.daumpost = function( options ) {
		var pc = new Postcode( options );
		return pc;
	};

	$.fn.daumpost= function( options ) {
		var pc = new Postcode( options, this );
		return pc; 
	};
})( jQuery );
