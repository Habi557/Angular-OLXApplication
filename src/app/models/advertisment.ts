import { ImageUrl } from "./ImageUrl";

export interface Advertisment {
         title : String ;
         price : Number;
         category : String ;
         description :  String ;
         userName :  String ;
         createDate :Date;
         status :  String  ;
         photo : ImageUrl[]  ;
         modified_Date: Date | null; 
         postedBy : String ;
         initialImageValue:number
}