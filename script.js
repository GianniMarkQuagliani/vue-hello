const { createApp } = Vue;

createApp({
    data () {
        return {
            // creo un messaggio di default
            message: 'Hello Vue!',
            imageUrl: 'https://unsplash.it/300/300?image=15'
        }
    }
}).mount('#app')