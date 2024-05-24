import { vegetableList } from "./vegetables.model";


export class cart_product {
    verdura: vegetableList ;
    acquisti: number = 0;
    

    constructor(verdura:vegetableList) {
        this.verdura = verdura
        
    }

    acquistato(nuoviAcquisti:number): void{
        this.acquisti += nuoviAcquisti
    }

}
