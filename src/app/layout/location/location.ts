export class Location{
    public constructor(
 public id: number,
 public organizationid: number,
 public name: string,
 public description: string,
 public address1: string,
 public address2: string,
 public city: string,
public state: string,
public zip: string,
public country: string,
public website: string,
public phone1: string,
public phone2: string,
public fax: string,
public isactive: boolean,
public createdby: string,
public createddate:Date,
public modifiedby:number,
public modifieddate:Date,



    ){}
}
