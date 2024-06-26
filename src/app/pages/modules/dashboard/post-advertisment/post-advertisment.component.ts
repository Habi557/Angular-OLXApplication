import { Component } from '@angular/core';
import { canDeactivateInterface } from 'src/app/authentication/guards/candeactivate.guard';
import { Advertise } from 'src/app/pages/models/Advertise';

@Component({
  selector: 'app-post-advertisment',
  templateUrl: './post-advertisment.component.html',
  styleUrls: ['./post-advertisment.component.scss']
})
export class PostAdvertismentComponent implements canDeactivateInterface {

  advertise: Advertise ={
    title: '',
    price: 0,
    category: '',
    description: ''
  };
  formModified(){
    if(this.advertise.title || this.advertise.price || this.advertise.category || this.advertise.description){
       return confirm("Save the changes otherwise data will be discarded");
    }else{
      return true;
    }
  }

  addAdvertise(){}
}
