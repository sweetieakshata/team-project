import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LocationService } from './location.service';
import { Location } from './location';
import { ConfirmationService } from 'primeng/api';
import { Message } from 'primeng/components/common/api';
import { MessageService } from 'primeng/components/common/messageservice';


@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {

  constructor(private http: HttpClient,
    private modalService: NgbModal,
    private _data: LocationService,
     private confirmationService: ConfirmationService,
     private messageService: MessageService) { }

  updatedItem: number;
  title = "Locations";
  closeResult: string;
  selectedLocationOption: string;
  arrLocation: Location[] = [];
  item: string;
  loading:boolean=true;

  id: number;
//  organizationid: number;
 name: string;
 description: string;
//  address1: string;
//  address2: string;
//  city: string;
// state: string;
// zip: string;
// country: string;
// website: string;
// phone1: string;
// phone2: string;
// fax: string;
// isactive: boolean;
// createdby: string;
// createddate:Date;
// modifiedby:number;
// modifieddate:Date;


  ngOnInit() {
    this.loading=true;
    this.getLoc();
  }

  getLoc() {
      debugger;
    this._data.getLocations().subscribe((data: Location[]) => {
        this.arrLocation = data;
        this.loading=false;
        console.log(this.arrLocation);
    });
}

openAdd(content, passedTitle) {
    this.selectedLocationOption = passedTitle;
    this.name = "";
    this.description = "";
    this.modalService.open(content);
}

onLocDelete(id: number) {
    this._data.deleteLocations(id).subscribe((data: any) => {
        // alert('successfully deleted');
        this.ngOnInit();
    });
}

confirmDelete(id: number) {
    console.log(id);
    this.confirmationService.confirm({
        message: "Are you sure that you want to proceed?",
        header: "Confirmation",
        icon: "pi pi-exclamation-triangle",
        accept: () => {

            this.onLocDelete(id);
            // this.msgs = [{severity:'info', summary:'Confirmed', detail:'You have accepted'}];
        },
        reject: () => {
            // this.msgs = [{severity:'info', summary:'Rejected', detail:'You have rejected'}];
        }
    });
}
}
