import {NgModule} from "@angular/core";
import {MatButtonModule} from "@angular/material/button";
import { MatToolbarModule} from "@angular/material/toolbar";
import {MatStepperModule} from "@angular/material/stepper";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatInputModule} from "@angular/material/input";
import { MatCardModule} from "@angular/material/card";
import { MatIconModule} from "@angular/material/icon";

const Material =[
  MatButtonModule,
  MatToolbarModule,
  MatStepperModule,
  MatFormFieldModule,
  MatGridListModule,
  MatInputModule,
  MatCardModule,
  MatIconModule
];

@NgModule({
  imports:[Material],
  exports:[Material]
})
export class MaterialModule{

}
