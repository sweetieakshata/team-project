import { OnInit, Component } from "@angular/core";
import { DisplayUser } from "./user";
import { HttpClient } from "@angular/common/http";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { UserService } from "./user.service";
import { Pageinfo } from "./pageinfo";
import * as _ from "lodash";

@Component({
    selector: "app-user",
    templateUrl: "./user.component.html",
    styleUrls: ["./user.component.scss"]
})
export class UserComponent implements OnInit {
    page: Pageinfo;
    pageno: number = 1;
    config: any;
    search: string;
    constructor(
        private http: HttpClient,
        private modalService: NgbModal,
        private _data: UserService
    ) {}

    count:number;
    isText:boolean = false;
    updatedItem: number;
    title = "Users";
    closeResult: string;
    selectedUserOption: string;
    msg = "Are You Sure!";
    arrUser: DisplayUser[] = [];
    // msgs: Message[] = [];

    firstName: string;
    lastName: string;
    displayName: string;
    gender: string;
    dob: Date;
    address: string;
    city: string;
    state: string;
    email: string;
    supervisor: string;
    loading: boolean = true;
    documentsdata: any;
    errormsg: string;
    searchstr:string;
    public input:string;

    ngOnInit() {
        this.loading = true;
        this.getusers();
    }

    onsearchresult(searchstring){
        if(searchstring.length > 0)
        {
            this.isText = true;
        }
        else{
            this.isText = false;
        }
        this._data.getsearch(searchstring).subscribe(
            (data:DisplayUser[])=>
            {
                this.arrUser=data['members'];
                this.count = this.arrUser.length;
                console.log(this.count);
            }
        );
    }
    pageChanged(event) {
        this.config.currentPage = this.page.currentPage + 1;
        this.pageno = this.config.currentPage;
        this.pageno = event;
        this.getusers();
    }

    getusers() {
        this._data.getUsers(this.pageno).subscribe((data: DisplayUser[]) => {
            this.arrUser = data["members"];
            this.loading = false;
            console.log(this.arrUser);
            this.page = data["pagerInfo"];
            this.count = this.arrUser.length;
            this.config = {
                itemsPerPage: this.page.itemsPerPage,
                currentPage: this.page.currentPage,
                totalItems: this.page.totalItems
            };
        });
    }

    // Add modal
    openAdd(content, passedTitle) {
        this.selectedUserOption = passedTitle;
        this.firstName = "";
        this.lastName = "";
        this.modalService.open(content);
    }
}




