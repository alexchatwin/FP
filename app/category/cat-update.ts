export class CatUpdate {
    transId: number;
    categoryId: number;
    effectiveDt: Date;
    isRefund: boolean;
    parentCategoryId: number;
    transCat1: string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}