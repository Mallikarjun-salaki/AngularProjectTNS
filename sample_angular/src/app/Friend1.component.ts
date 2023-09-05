import { TemplateBindingParseResult } from '@angular/compiler';
import {Component,OnInit} from '@angular/core';
import { InteractionService } from './interaction.service';

@Component({
    selector:'app-friend1',
    templateUrl:'./Friend1.component.html',
    styleUrls:['./Friend1.component.css']
})
export class Friend1Component
{
    //service injection
    constructor(private interactionService: InteractionService)
    {
    }

    greetMorning()
    {
        this.interactionService.sendMessage("Hello Friend Good Morning")
    }

    greetEvening()
    {
        this.interactionService.sendMessage("Hello Friend Good Evening")
    }
}