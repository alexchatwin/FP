export class Category {
    categoryId: Number;
    transCat1: String;
    parentCategoryId: Number;
    parentTransCat1: String; 

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
