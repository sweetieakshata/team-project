import { Component, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Designation } from "./designation";

import { DesignationdataService } from "src/app/layout/designation/designationdata.service";
import { HttpClient } from "@angular/common/http";
import { Message } from 'primeng/components/common/api';
import { MessageService } from 'primeng/components/common/messageservice';

import { ConfirmationService } from "primeng/api";
@Component({
    selector: "app-designation",
    templateUrl: "./designation.component.html",
    styleUrls: ["./designation.component.scss"]
})
export class DesignationComponent implements OnInit {
    config: any;
    collection = { count: 50, data: [] };
    constructor(
        private http: HttpClient,
        private modalService: NgbModal,
        private _data: DesignationdataService,
        private messageService: MessageService,
        private confirmationService: ConfirmationService
    ) {
        for (var i = 0; i < this.collection.count; i++) {
            this.collection.data.push(
              {
                id: i + 1,
                value: "items number " + (i + 1)
              }
            );
          }

        this.config = {
            itemsPerPage: 20,
            currentPage: 1,
            totalItems: this.collection.count
          };

    }
    updatedItem: number;
    title = "Designations";
    msgs: Message[] = [];
    closeResult: string;
    selectedDesignationOption: string;
    name: string;
    msg = "Are You Sure!";
    description: string;
    id: number;
    arrDesig: Designation[] = [];
    editId: number;
    editName: string;
    editDescription: string;
    item: string;
    loading:boolean=true;

    getDesig() {
        this._data.getDesignations().subscribe((data: Designation[]) => {
            this.arrDesig = data;
            this.loading=false;
            console.log(this.arrDesig);
        });
    }

    pageChanged(event){
        this.config.currentPage = event;
      }


    ngOnInit() {
        this.loading=true;
        this.getDesig();
    }

    onSearch(value) {
        console.log(value);
        if (value != "") {
            this.arrDesig = this.arrDesig.filter(x => x.name.startsWith(value));
        } else {
            this._data.getDesignations().subscribe(
                (data: Designation[]) => {
                    this.arrDesig = data;
                },
                function(error) {
                    alert(error);
                },
                function() {}
            );
        }
    }

    // Add modal
    openAdd(content, passedTitle) {
        this.selectedDesignationOption = passedTitle;
        this.name = "";
        this.description = "";
        this.modalService.open(content);
    }

    // Edit modal popup
    openEdit(content, passedTitle, i, arr) {
        console.log(arr.id);
        this.id = arr.id;
        this.selectedDesignationOption = passedTitle;
        // console.log(i);
        this.name = this.arrDesig[i].name;
        this.description = this.arrDesig[i].description;
        // console.log('updating');
        this.updatedItem = i;

        this.modalService.open(content);
    }

    // delete
    onDesigDelete(id: number) {
        this._data.deleteDesignation(id).subscribe((data: any) => {
            // alert('successfully deleted');
            this.ngOnInit();
        });
    }

    onFormSubmit(f) {
        if (this.selectedDesignationOption == "Add") {
            console.log(this.id);
            this._data.addDesignation(f.value).subscribe((data: any) => {
                console.log(f.value);
                this.msgs=[];
                this.msgs.push({ severity: 'success', summary: 'success', detail:'record added' });
                this.getDesig();
            });
        } else {
            console.log(f.value);
            console.log(f.value.name);
            var req = {
                id: this.id,
                description: f.value.Description,
                name: f.value.Name
            };
            console.log(req);
            this._data.editDesignation(req).then(
                res => {
                    if (res) {
                        this.msgs=[];

                        this.msgs.push({ severity: 'success', summary: 'success', detail:'record updated' });

                        this.getDesig();
                    } else {

                    }
                },
                error => {}
            );
        }

        this.modalService.dismissAll();
    }

    confirmDelete(id: number) {
        console.log(id);
        this.confirmationService.confirm({
            message: "Are you sure that you want to proceed?",
            header: "Confirmation",
            icon: "pi pi-exclamation-triangle",
            accept: () => {
                this.onDesigDelete(id);
                // this.msgs = [{severity:'info', summary:'Confirmed', detail:'You have accepted'}];
            },
            reject: () => {
                // this.msgs = [{severity:'info', summary:'Rejected', detail:'You have rejected'}];
            }
        });
    }
}
