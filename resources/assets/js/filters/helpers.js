/**
 * Changes value to past tense.
 * Simple filter does not support irregular verbs such as eat-ate, fly-flew, etc.
 * http://jsfiddle.net/bryan_k/0xczme2r/
 *
 * @param {String} value The value string.
 */
Vue.filter('past-tense', function(value) {
    // Slightly follows http://www.oxforddictionaries.com/us/words/verb-tenses-adding-ed-and-ing
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    if(!value) {
        return;
    }

    var last = value.toLowerCase().substr(value.length - 1),
        secondLast = value.toLowerCase().substr(value.length - 2, 1),
        thirdLast = value.toLowerCase().substr(value.length - 3, 1),
        lastTwo = value.toLowerCase().substr(value.length - 2),
        lastThree = value.toLowerCase().substr(value.length - 3),
        inArray = function(ar, value) {
            return ar.indexOf(value) != -1
        };

    // participle or already past tense, don't want
    if(lastThree === 'ing' || lastTwo === 'ed') {
        return value;
    }

    // Ends in 'e', simply add the 'd'
    if(last === 'e') {
        return value + 'd';
    }

    // Ends in 'c', add the 'ked'
    if(last === 'c') {
        return value + 'ked';
    }

    // Ends with consonant, vowel, consonant. I'm simple, double consonant and add 'ed'
    if(!inArray(vowels, thirdLast) && inArray(vowels, secondLast) && !inArray(vowels, last)) {
        return value + last + 'ed';
    }

    return value + 'ed';
});

/**
 * Vue filter to convert a slug to a more human friendly form.
 *
 * @param {String} value The value string.
 */
Vue.filter('humanable', function(value) {
    var words = value.split(/[-_]+/g);
    var results = [];
    for(var i=0; i < words.length; i++) {
        var letter = words[i].charAt(0).toUpperCase();
        results.push(letter + words[i].slice(1));
    }
    return results.join(' ');
});

/**
 * Vue filter to convert the given value to percent.
 * http://jsfiddle.net/bryan_k/qauf3qyh/
 *
 * @param {String} value    The value string.
 * @param {Number} decimals The number of decimal places.
 */
Vue.filter('percentage', function(value, decimals) {
    if(!value) {
        value = 0;
    }

    if(!decimals) {
        decimals = 0;
    }

    value = value * 100;
    value = Math.round(value * Math.pow(10, decimals)) / Math.pow(10, decimals);
    value = value + '%';
    return value;
});


/**
 * Vue filter to round the decimal to the given place.
 * http://jsfiddle.net/bryan_k/3ova17y9/
 *
 * @param {String} value    The value string.
 * @param {Number} decimals The number of decimal places.
 */
Vue.filter('round', function(value, decimals) {
    if(!value) {
        value = 0;
    }

    if(!decimals) {
        decimals = 0;
    }

    value = Math.round(value * Math.pow(10, decimals)) / Math.pow(10, decimals);
    return value;
});


/**
 * Vue filter to convert the given value to whole dollars, no change.
 * http://jsfiddle.net/bryan_k/2t6bqqfc/
 *
 * @param {String} value The value string.
 */
Vue.filter('no-change', function(value, symbol) {
    if(!value) {
        value = 0;
    }

    if(!symbol) {
        symbol = '$';
    }

    value = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',').split('.')[0];
    return symbol + value;
});

/**
 * Vue filter to make a simple timestamp for an ISO date.
 * http://jsfiddle.net/bryan_k/44kqtpeg/
 *
 * @param {String} value The value string.
 */
Vue.filter('timestamp', function(value) {
    var parts = value.split(' ');
    var date = parts[0];
    var time = parts[1];

    date = date.split('-');
    time = time.split(':');

    if(parseInt(time[0], 10) > 12) {
        var hour = parseInt(time[0], 10) % 12;
    }
    else {
        var hour = parseInt(time[0], 10);
    }

    hour = hour < 10 ? '0' + hour : hour;

    return '[' + date[1] + '/' + date[2] + ' ' + hour + ':' + time[1] + ']';
});

/**
 * Vue filter to truncate a string to the specified length.
 * @param {String} value The value string.
 */
Vue.filter('truncate', function(value, length) {
    if(value.length < length) {
        return value;
    }

    length = length - 3;

    return value.substring(0, length) + '...';
});