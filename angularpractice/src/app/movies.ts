import  Theatre  from "./theatre";
export default class Movie{
    constructor(public movieid:any,public title:any, public genre:any,public price:any, public theatre:Theatre,public imageurl:any){
    }
}