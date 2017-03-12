export class BalanceDTO {
    data:Array<lineItem> =new Array<lineItem>();
    labels:Array<string>;

    //constructor(values: Object = {}) {
    //    Object.assign(this, values);    
    //}
    constructor(_data: Array<lineItem>, _labels: Array<string>) {
        var arrayLength = _data.length;
        for (var i = 0; i < arrayLength; i++) {
        let LI = new lineItem(_data[i].data, _data[i].label);
        this.data.push(LI);
        }

        let _labelsSplit: Array<string>;
        this.labels=_labels;

        
    }
        fromJSON(json)
    {
        for (var propName in json)
        this[propName]=json[propName];
        return this;
    }
}

export class lineItem {
    data:Array<any>;
    label:string;

    constructor(_data: Array<number>, _label: string) {
        this.data=_data;
        this.label=_label;

        
    }


}

