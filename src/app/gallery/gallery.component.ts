import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GalleryService } from 'src/services/gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  pagePhotos:any;
  currentPage:number=1;
  size:number=5;
  totalPages:number;
  pages:Array<number>=[];
  motCle:string="";

  constructor(private galleryService: GalleryService) { }

  ngOnInit(): void {
  }

  onSearch(dataForm){
    this.galleryService.search(dataForm.motCle,this.size,this.currentPage)
             .subscribe((data: any)=>{
                this.pagePhotos=data;
                this.totalPages=data.totalHits/this.size;
                if(data.totalHits % this.size != 0) {
                  this.totalPages = Math.trunc(this.totalPages)+1;
                } 
                this.pages = new Array(this.totalPages);
              }, error=>{
                console.log(error)
              })      
  }

  goToPage(index){
    this.currentPage=index+1;
    this.onSearch({motCle:this.motCle});
  }

}
