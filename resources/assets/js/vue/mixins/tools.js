export default{
    computed: {},
    methods: {
        nowTimestamp(){
            return moment().unix();
        },
        momentFromDateTime(dateTime){
            return moment(dateTime, 'YYYY-MM-DD HH:mm:ss');
        },
        dateTimeToTimestamp(dateTime){
            return this.momentFromDateTime(dateTime).unix();
        },
        url(path){
            if (path && path.substring(0, 1) != '/') {
                path = '/' + path;
            }
            return this.baseUrl + path;
        },
        redirectToUrl(url){
            window.location.href = url;
        },
        redirectToUrlFromBaseUrl(url){
            window.location.href = this.url(url);
        },
        reloadPage(){
            this.redirectToUrl(window.location);
        },
        objectToFormData(item){
            var form_data = new FormData();

            for (var key in item) {
                form_data.append(key, item[key]);
            }

            return form_data;
        },
        isEmptyObject(object){
            return Object.keys(object).length === 0;
        },
        isMobile(){
            var isMobile = window.matchMedia("only screen and (max-width: 760px)");

            return (isMobile.matches);
        },
    }
}