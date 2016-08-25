export default{
    methods: {
        scrollToBottom(selector, animated, animateTime){
            var $element = $(selector);
            var scrollHeight = $element.prop("scrollHeight");
            if (animated) {
                if (!animateTime) {
                    animateTime = 1000;
                }
                $element.animate({scrollTop: scrollHeight}, animateTime);
            } else {
                $element.scrollTop(scrollHeight);
            }
        }
    }
}