export class Transaction {
    transId: number;
    transDt: Date;
    transTyp: string;
    sortCd: string;
    accountNo: number;
    transDesc: string;
    debitAm: number;
    creditAm: number;
    balanceAm: number;
    tcId: number;
    categoryId: number;
    transCat1: string;
    setBy: number;
    effectiveDt: string;
    isRefund: boolean;
    effectiveDt2: Date;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
    //constructor(_transId:Object)
    //{
    //    this.transId = Number(_transId);
    //}

    static fromJSONArray(jsonArray: Array<Transaction>):Transaction[]
    {
        return jsonArray.map(obj => new Transaction(obj));
    }

}
