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
        genre_selected: "All",
        isSort: "no"
    },

    methods:{

        sort_cd(){

            if(this.isSort == "no"){
                // Se seleziona no, mostra l'array originale
                return this.cd_array;
                console.log("Visualizzo Array Originale");
            } else if( this.isSort == "asc" ){
                // Se seleziona asc, copia l'array originale in uno nuovo e ordina quest'ultimo
                let asc = this.cd_array.slice();
                console.log(asc);
                asc.sort(function (a, b) {
                    return a.year - b.year;
                });
                return asc;

            } else if( this.isSort == "desc" ){
                // Se seleziona desc, copia l'array originale in uno nuovo e ordina quest'ultimo in ordine decrescente
                let desc = this.cd_array.slice();
                console.log(desc);
                desc.sort(function (a, b) {
                    return b.year - a.year;
                });
                return desc;
            };
        }
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
