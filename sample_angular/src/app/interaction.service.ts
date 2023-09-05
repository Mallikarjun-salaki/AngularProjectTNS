import {Injectable} from '@angular/core';
import { Subject } from 'rxjs';

@Injectable(
    {
        providedIn:'root'
    }
)
export class InteractionService
{
        private msgSource=new Subject<string>();

        greeting$=this.msgSource.asObservable();

        sendMessage(message:string)
        {
            this.msgSource.next(message);
        }
}
