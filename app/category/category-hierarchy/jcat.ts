export class JCat {
public id: number;
public name: string;
public creditAm: number;
public debitAm: number;
public budgetAm: number;
public kids: number;

public children:Array<JCat> =new Array<JCat>();
public parentNames:Array<string> =new Array<string>();
public visible:string;
public newRow:boolean;
public net:number;
public pct:number;
public remainingBudget:number;
public netAdjusted:number;

    constructor(_id: number, _name: string, _creditAm: number, _debitAm: number, _budgetAm: number, _remainingBudget: number, _netAdjusted: number,
        _parentNames: Array<string>, _newRow: boolean, _kids: number, _children?: Array<JCat>
    ) {

        this.id=_id;
        this.name=_name;
        this.creditAm=_creditAm;
        this.debitAm=_debitAm;
        this.budgetAm=_budgetAm;
        this.parentNames=_parentNames;
        this.kids=_kids;
        this.visible='visible';
        this.newRow=_newRow;
        this.net=_creditAm-_debitAm;
        this.remainingBudget=_remainingBudget;
        this.netAdjusted=_netAdjusted;

        if (!isNaN(this.net/this.budgetAm) && isFinite(this.net/this.budgetAm))
        {
            this.pct=this.net/this.budgetAm;
        }
        else
        {
           this.pct=0.0;
        }

        if (_children!=null)
            {
            var arrayLength = _children.length;
            for (var i = 0; i < arrayLength; i++) {
            let child = new JCat(_children[i].id, _children[i].name, _children[i].creditAm, _children[i].debitAm, _children[i].budgetAm, _children[i].remainingBudget, _children[i].netAdjusted,
             _children[i].parentNames, _children[i].newRow, _children[i].kids, _children[i].children);
            this.children.push(child);
            }
        }
        
    }

}
