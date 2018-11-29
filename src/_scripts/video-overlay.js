'use strict';

// Constructor
var VideoOverlay = function() {
    var videoTriggers = $('.play-button');

    if (videoTriggers.length > 0) {

        var allVideos = $('.video-overlay iframe');
        var videoClose = $('.video-overlay__close');

        videoClose.on('click', function() {
            allVideos.parent().removeClass('-active');
        });

        videoTriggers.on('click', function() {
            var $this = $(this);
            var parent = $this.parents('.js-video-parent');
            var linkedVideo = parent.find('.video-overlay iframe');
            var videoSrc = linkedVideo.data('src');

            allVideos.attr('src', '');
            allVideos.parent().removeClass('-active');
            
            linkedVideo.attr('src', videoSrc);
            linkedVideo.parent().addClass('-active');
        });
    }
};

module.exports = VideoOverlay;