new Vue({

    el: '#app',

    data: {
        lists: [],
        taches: "",
        inportance: Object
    },

    methods: {
        addList () {
            this.lists.push([this.taches, this.inportance]);
        },
        openModal () {
            $('.ui.modal')
            .modal({
                blurring: true
            })
            .modal('show')
            ;
        }
    }

})