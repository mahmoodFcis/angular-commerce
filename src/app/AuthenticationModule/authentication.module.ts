import {NgModule} from '@angular/core';
import {AuthComponent}  from './auth.component';
import {AuthService} from './auth.service';
@NgModule({
    declarations:[AuthComponent],
    imports:[],
    exports:[],
    providers:[AuthService],
    bootstrap:[AuthComponent]
})
export class AuthenticationModule{

}