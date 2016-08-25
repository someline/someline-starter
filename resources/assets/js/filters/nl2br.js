/**
 * Created by Libern on 26/7/16.
 */
export default {
    read: function (val) {
        return val.replace(new RegExp('\r?\n', 'g'), '<br />');
    },
}