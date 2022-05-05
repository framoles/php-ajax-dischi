const app = new Vue({
    el: "#app",
    data() {
        return {
            array: Array,
            genere: Array
        }
    },
    mounted() {
        /* chiamata api su database.php + salvataggio dei generi disponibili su array */

        axios.get("http://localhost/php-ajax-dischi/database.php").then((risp) => {
            if (risp.status == 200) {
                this.array = risp.data;
                const support = [];
                this.array.forEach((element) => {

                    if (!support.includes(element.genre)) {
                        support.push(element.genre);
                    }

                });
                this.genere = support;
            }
        })
            .catch(err => console.log(err));

    },
    methods: {
        /* metodo per filtrare i generi tramite chiamata api con parametri  */
        displaySelected(event) {
            axios.get("http://localhost/php-ajax-dischi/database.php", { params: { filtergenre: event.target.value } }).then(risp => {
                if (risp.status == 200) { this.array = risp.data }
            })
                .catch(err => console.log(err));
        }
    }

});