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

            var self = this;
            var lang = this.locale;
            Vue.locale(lang, function () {
                self.isLocaleReady = false;
                return fetch('/locale/' + lang, {
                    method: 'get',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                }).then(function (res) {
                    return res.json();
                }).then(function (json) {
                    if (Object.keys(json).length === 0) {
                        return Promise.reject(new Error('locale empty !!'));
                    } else {
                        return Promise.resolve(json);
                    }
                }).catch(function (error) {
                    self.error = error.message;
                    return Promise.reject();
                })
            }, function () {
                self.isLocaleReady = true;
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