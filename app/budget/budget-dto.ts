export class BudgetDTO {
        categoryId: Number;
        cbId: Number;
        budgetAm: Number;
        budgetDate: String; 
        category: String;


    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
