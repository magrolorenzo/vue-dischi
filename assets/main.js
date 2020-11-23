// Fare una chiamata ajax per recuperare una decina di dischi musicali
// e utilizzando vue, stampare a schermo una card per ogni album.

// L'API da chiamare è: https://flynn.boolean.careers/exercises/api/array/music

// BONUS 1: Creare una select con tutti i generi dei dischi.
// In base al genere che viene selezionato nella select,
// vengono visualizzati i cd corrispondenti.
// N.B.: per fare questo punto non è necessario modificare l'array dei dati

// BONUS 2: Ordinare i dischi per anno di uscita.

var app = new Vue({
    el: "#root",

    data:{
        cd_array: [],
        genres_array:[],
        genre_selected: "All"
    },

    mounted(){

        axios.get("https://flynn.boolean.careers/exercises/api/array/music")
        .then((get_obj) =>{

            this.cd_array = get_obj.data.response;

            console.log(this.cd_array);

            this.cd_array.forEach((cd, i) => {
                if(this.genres_array.includes(cd.genre)){
                }else{
                    this.genres_array.push(cd.genre)
                }
            });

            console.log("Array generi: " + this.genres_array);

        });
    }

});
