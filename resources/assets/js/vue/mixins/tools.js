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
        redirectToUrl(url){
            window.location.href = url;
        },
        objectToFormData(item){
            var form_data = new FormData();

            for (var key in item) {
                form_data.append(key, item[key]);
            }

            return form_data;
        }
    }
}