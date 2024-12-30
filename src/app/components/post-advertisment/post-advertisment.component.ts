import { Component, inject, Inject, OnInit } from '@angular/core';
import { UploadImageService } from 'src/app/appservices/upload-image.service';
import { finalize } from 'rxjs/operators';
import { Firestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Advertisment } from 'src/app/models/advertisment';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-post-advertisment',
  templateUrl: './post-advertisment.component.html',
  styleUrls: ['./post-advertisment.component.scss']
})
export class PostAdvertismentComponent {
onFileSelected(arg0: any) {
throw new Error('Method not implemented.');
}
  selectedFile: File ;
  downloadURL: string | null = null;
  productForm: FormGroup;

  constructor(private fb: FormBuilder,private uploadimage:UploadImageService,private toaster:ToastrService) {
    this.productForm = this.fb.group({
      title: [null, Validators.required],
      price: [0, [Validators.required]], // Wrap price in an array for validators
      category: ['', Validators.required],
      description: ['', Validators.required],
      userName: ['', Validators.required],
      createDate: [null, Validators.required], // Change to Date type
      status: ['', Validators.required],
      photo: ['',Validators.required], 
      modified_Date: [null], // Set default value to null for Date
      postedBy: [''] 
    });
  }

  postAdd() {
    if (this.productForm.valid && this.selectedFile) {
      console.log(this.productForm.value);
      this.uploadimage.postAdd(this.selectedFile,this.productForm.value).subscribe({
        next:(response)=>{
          console.log(response);
          this.toaster.success("Add Posted Successfully")
        },
        error:(err)=>{
          console.log(err);
          this.toaster.error("Error will posting the Add");
        }
      })
      
    }
  }
  onFileChange(event: any) {
    const file: File = event.target.files[0];
      console.log('Selected file:', file.name);
      // You can further handle the file, e.g., upload it to a server
      this.selectedFile=file;
   
  }

}
