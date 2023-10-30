import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

export interface DialogData {
  title: string;
  message: string;
  isError: boolean;
}

@Component({
  selector: 'app-bottom-right-modal',
  templateUrl: './bottom-right-modal.component.html',
  styleUrls: ['./bottom-right-modal.component.scss'],
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatIconModule],
})
export class BottomRightModalComponent {
  @Input() title: string = '';
  @Input() message: string = '';

  constructor(
    public dialogRef: MatDialogRef<BottomRightModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
