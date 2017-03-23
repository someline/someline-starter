/**
 * Created by Libern on 26/7/16.
 */
export default{
    methods: {
        nl2br: function (val) {
            if (val) {
                return val.replace(new RegExp('\r?\n', 'g'), '<br />');
            } else {
                return null;
            }
        },
    },
}