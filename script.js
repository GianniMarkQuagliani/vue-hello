const { createApp } = Vue;

createApp({
    data () {
        return {
            // creo un messaggio di default
            message: 'Hello Vue!',

        }
    }
}).mount('#app')