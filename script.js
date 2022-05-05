const app = new Vue({
    el: "#app",
    data() {
        return {
            array: Array
        }
    },
    mounted() {
        axios.get("http://localhost/php-ajax-dischi/database.php").then(risp => this.array = risp.data);
    }

});