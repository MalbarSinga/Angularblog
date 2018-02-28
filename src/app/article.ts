import * as momentum from 'moment';
//ON IMPORTE TOUT LE CONTENU DE MOMENTUM SOUS LALIAS DE MOMENT
// on commence la classe par le mot cle export
export class Article {
    id:number;
    title:string;
    description:string;
    author:string;
    //mon objet date sera de type momentum
    //cest a dire le nom de mon obejt mMoement
    date:momentum.Moment;

    constructor(id: number , title:string ,description?: string,author:string='singa'){
       //on met un point d'interofation pour rendre optionnel le parametre
        this.id=id;
        this.author = author;
        this.description = description;
        this.title = title;
        this.date = momentum();
        // mon format de date desiree serait de moment().format('MMMM Do YYYY, h:mm:ss a'); // February 27th 2018, 11:16:22 pm

    }
}
