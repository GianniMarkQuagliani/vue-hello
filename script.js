const { createApp } = Vue;

createApp({
    data () {
        return {
            // creo un messaggio di default
            message: 'Hello Vue!',
            // creo un array vuoto
            myArray: []

        }
    }
}).mount('#app')