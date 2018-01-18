import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatChipsModule, MatGridListModule, MatListModule, MatCardModule, MatButtonModule, MatInputModule, MatTableModule, MatToolbarModule} from '@angular/material';

@NgModule({
    imports: [MatChipsModule, MatGridListModule, MatListModule, MatCardModule, MatToolbarModule, MatTableModule, MatInputModule, MatButtonModule],
    exports: [MatChipsModule, MatGridListModule, MatListModule, MatCardModule, MatToolbarModule, MatTableModule, MatInputModule, MatButtonModule],
})
 
export class MaterialModule {
    
}