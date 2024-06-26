import { AfterViewInit, Component, EventEmitter, Inject, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Advertise } from 'src/app/pages/models/Advertise';
import { GetAdvertismentsService } from 'src/app/pages/services/get-advertisments.service';
import {MatDialog} from '@angular/material/dialog';



/////// 2nd components imports
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UpdateAdvertismentService } from 'src/app/pages/services/update-advertisment.service';

@Component({
  selector: 'app-alladvertisemt',
  templateUrl: './alladvertisemt.component.html',
  styleUrls: ['./alladvertisemt.component.scss']
})
export class AlladvertisemtComponent  implements OnInit{
  advertisementList :any[]=[];

constructor(private getAdvertisementService:GetAdvertismentsService,public dialog: MatDialog){}
 edit(editValue:Advertise) {
  const dialogRef = this.dialog.open(EditDialogContent,{ height:'auto',width:'350px' ,data: {
  editValue 
  }});
   
    dialogRef.afterClosed().subscribe(result => {

      console.log(`Dialog result: ${result}`);
    });

}

  ngOnInit(): void {
    this.getAdvertisementService.getAdvertisements().subscribe({
      next:(respone:any)=>{
        console.log(respone);
        this.advertisementList=respone;
      },
      error:(err)=>{
        console.log("error")
      }
    })
  }



    

}
@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: './edit-dialog.html'
})
export class EditDialogContent{

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private updateService : UpdateAdvertismentService){
    // this.editAdvertisement.title=data.editValue.title;
    // this.editAdvertisement.price=data.editValue.price;
    // this.editAdvertisement.description=data.editValue.description;
    // this.editAdvertisement.category=data.editValue.category;


  }
  
  update(){
    this.updateService.update(this.data).subscribe({
      next:(respo) =>{

      },
      error:(err)=>{
        console.log("error")
      }

    });
    
  }

 

}



