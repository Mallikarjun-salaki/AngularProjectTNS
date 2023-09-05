import { Component, OnInit } from "@angular/core";
import { InteractionService } from "./interaction.service";

@Component({
    selector:'app-friend2',
    templateUrl:'./Friend2.component.html',
    styleUrls:['./Friend2.component.css']
})
export class Friend2Component implements OnInit
{
    //Service injection
    constructor(private interactionService: InteractionService){}

    ngOnInit(): void {
            this.interactionService.greeting$.subscribe(message =>
                {console.log(message)})
    }

}