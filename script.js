const { createApp } = Vue;

// creo l'app
createApp({
    // messaggio
    data () {
        // creo un oggetto
        return {
            // creo un messaggio di default
            message: 'Hello Vue!',
            // url dell'immagine
            imageUrl: 'https://unsplash.it/300/300?image=15'
        }
    }
}).mount('#app') // metto l'app