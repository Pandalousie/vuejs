new Vue({

    el: '#app',

    data: {
        message: "Bienvenue sur mon site utilisant du vueJs",
        link: "http://www.google.com",
        title_link: "Lien vers google",
        isSuccess: false,
        isLangage: false,
        langages: ["HTML5", "CSS3", "JQUERY", "JAVASCRIPT", "VUEJS", "SEMANTIC UI"]

    },

    methods: {
        openSuccess () {
            this.isSuccess = true;
        },
        closeSuccess () {
            this.isSuccess = false;
        },
        showLangage () {
            this.isLangage = true;
        },
        hideLangage () {
            this.isLangage = false;
        }
    }

})