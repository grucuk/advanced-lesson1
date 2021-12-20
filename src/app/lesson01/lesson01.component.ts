import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson01',
  templateUrl: './lesson01.component.html',
  styleUrls: ['./lesson01.component.scss']
})
export class Lesson01Component implements OnInit {
    public name='Ivan';
    public arr:any=[];
    public word=<any>document.querySelector('.word');
  constructor() { }

  ngOnInit(): void {}
 
  add():void{
    
    if((<any>document.querySelector('.word')).value!=""){
        (<any>document.querySelector('.word')).placeholder="word here ...";
        (<any>document.querySelector('.word')).style.border="1px solid black";
                if((<any>document.querySelector('.sp1')).innerHTML!=""){
                        (<any>document.querySelector('.sp1')).innerHTML+=", "+(<any>document.querySelector('.word')).value;
                this.arr.push((<any>document.querySelector('.word')).value);
                (<any>document.querySelector('.word')).value="";
               
                         }
                else{(<any>document.querySelector('.sp1')).innerHTML=(<any>document.querySelector('.word')).value;
                this.arr.push((<any>document.querySelector('.word')).value);
                (<any>document.querySelector('.word')).value="";
               
                        }
                    }
                       else if((<any>document.querySelector('.word')).value.length===0) {
                        (<any>document.querySelector('.word')).placeholder="Please write a word";
                        (<any>document.querySelector('.word')).style.border="1px solid red";
                    }
            
               
               
    }
    del():void{(<any>document.querySelector('.sp1')).innerHTML="";
    (<any>document.querySelector('.word')).value="";
    (<any>document.querySelector('.word')).placeholder="word here ...";
    (<any>document.querySelector('.word')).style.border="1px solid black"
    }

   cen():void{
        
        
       for(let i in this.arr){

        var regexstring = this.arr[i];

        var regexp = new RegExp(regexstring, "gi");
        
        var str = (<any>document.querySelector('.text')).value.replace(regexp, "*".repeat(this.arr[i].length));
       
        (<any>document.querySelector('.text')).value=str;
                       
       }

    }
  
  }


