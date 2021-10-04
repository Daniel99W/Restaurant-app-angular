export class Product
{
    private _id: number;
   
    private _productName: string;
    
    private _price: number;

    private _userId?: number;
    
    constructor(id:number,productName:string,price:number,userId:number | undefined)
    {
        this._id = id; 
        this._productName = productName;
        this._price = price;
        this._userId = userId;
    }

    public get id(): number 
    {
        return this._id;
    }
    public set id(value: number) 
    {
        this._id = value;
    }

    public get productName(): string 
    {
        return this._productName;
    }
    public set productName(value: string) 
    {
        this._productName = value;
    }

    public get price(): number 
    {
        return this._price;
    }
    public set price(value: number) 
    {
        this._price = value;
    }

    public get userId(): number | undefined
    {
        return this._userId;
    }
    public set userId(value: number | undefined) 
    {
        this._userId = value;
    }

}