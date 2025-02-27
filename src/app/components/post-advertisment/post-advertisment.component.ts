import { ChangeDetectorRef, Component, inject, Inject, OnInit } from '@angular/core';
import { UploadImageService } from 'src/app/appservices/upload-image.service';
import { finalize } from 'rxjs/operators';
import { Firestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Advertisment } from 'src/app/models/advertisment';
import { ToastrService } from 'ngx-toastr';
import { LoaderService } from 'src/app/appservices/loader.service';


@Component({
  selector: 'app-post-advertisment',
  templateUrl: './post-advertisment.component.html',
  styleUrls: ['./post-advertisment.component.scss']
})
export class PostAdvertismentComponent implements OnInit {
  categoryList: any[];
  selectedFile: File;
  productForm: FormGroup;
  listOfImages: File[] = [];

  public file: any;
  urls: any[] = [];
  multiples: any[] = [];

  constructor(private fb: FormBuilder, private uploadimage: UploadImageService, private toaster: ToastrService, private cf: ChangeDetectorRef,private loaderService:LoaderService) {
    this.productForm = this.fb.group({
      title: [null, Validators.required],
      price: [0, [Validators.required]], // Wrap price in an array for validators
      category: ['', Validators.required],
      description: ['', Validators.required],
      userName: ['', Validators.required],
      createDate: [null, Validators.required], // Change to Date type
      status: ['', Validators.required],
      photo: [[], Validators.required],
      modified_Date: [null], // Set default value to null for Date
      postedBy: ['']
    });
  }
  ngOnInit(): void {
    this.uploadimage.getAllCategorys().subscribe({
      next:(response:any)=>{
        console.log(response);
        
           this.categoryList=response;
      },
      error:(err)=> {
        this.toaster.error("Failed loading the  Categorys");
      }
    })
  }

  postAdd() {
    if (this.productForm.valid) {
      this.loaderService.show();
      console.log(this.productForm.value);
      this.productForm.patchValue({ photo: [] })
      this.uploadimage.postAdd(this.listOfImages, this.productForm.value).subscribe({
        next: (response) => {
          console.log(response);
        //  this.productForm.reset();
          this.listOfImages = [];
          this.multiples=[];
          this.loaderService.hide();
          this.toaster.success("Add Posted Successfully");
          
        },
        error: (err) => {
          console.log(err);
          let response = err.error.message;
          let result = response.replace(/^.*?:\s*"?/, "").replace(/"$/, "");
          console.log(result); // Output: Token Expired Login again
          this.loaderService.hide();
          this.toaster.error(result)

        }
      })

    }
  }
  /* onFileChange(event: any) {
     const file: File = event.target.files[0];
       console.log('Selected file:', file.name);
       // You can further handle the file, e.g., upload it to a server
       this.selectedFile=file;
    
   }*/
  onFileChange(event) {
    this.file = event.target.files && event.target.files.length;
    if (this.file > 0 && this.file < 5) {
      let i: number = 0;
      for (const singlefile of event.target.files) {
        var reader = new FileReader();
        reader.readAsDataURL(singlefile);
        //this.urls.push(singlefile);
        this.cf.detectChanges();
        i++;
        console.log(this.urls);
        reader.onload = (event) => {
          const url = (<FileReader>event.target).result as string;
          this.multiples.push(url);
          this.cf.detectChanges();
        };
        console.log(singlefile);
      }
      this.listOfImages.push(event.target.files[0]);
    }
  }

}
