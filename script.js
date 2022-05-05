const app = new Vue({
    el: "#app",
    data() {
        return {
            array: Array,
            genre: Array
        }
    },
    mounted() {
        axios.get("http://localhost/php-ajax-dischi/database.php").then(risp => this.array = risp.data);

    },
    methods: {
        displaySelected(event) {
            axios.get("http://localhost/php-ajax-dischi/database.php", { params: { filtergenre: event.target.value } }).then(risp => this.array = risp.data);
        }
    }

});