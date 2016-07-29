import UserList from './vue/components/UserList.vue'

export default {
    data: {
        msg: "hello",
        isLocaleReady: false,
    },
    components: {
        'sl-user-list': UserList,
    },
    methods: {
        initLocale(){
            console.log('Init Locale.');

            var that = this;
            var lang = this.locale;
            Vue.locale(lang, function () {
                that.isLocaleReady = false;
                // get locale data
                return that.$http.get('/locale/' + lang).then((response) => {
                    // success callback
                    var json = response.data;
                    if (Object.keys(json).length === 0) {
                        return Promise.reject(new Error('Locale is empty!'));
                    } else {
                        return Promise.resolve(json);
                    }
                }, (response) => {
                    // error callback
                    that.error = error.message;
                    return Promise.reject();
                });
            }, function () {
                that.isLocaleReady = true;
                Vue.config.lang = lang;
            });

        },
    },
    watch: {},
    events: {},
    created(){
        console.log('Bootstrap.');
        this.initLocale();
    },
    ready(){
        console.log('Ready.');
    }
}