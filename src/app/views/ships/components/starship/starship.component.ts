import { Component, OnInit, Input } from '@angular/core';
import { appAnimations } from 'src/app/core/animations/animations';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from 'src/app/shared/components/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-starship',
  templateUrl: './starship.component.html',
  styleUrls: ['./starship.component.scss'],
  animations: appAnimations
})
export class StarshipComponent implements OnInit {

  @Input() ship: any;

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '500px',
      data: {
        icon: 'edit',
        title: 'Modal de ejemplo',
        message: 'Texto de ejemplo para realizar acciones',
        cancelText: 'Cancelar',
        confirmText: 'Aceptar'
      }
    });
    dialogRef.afterClosed().subscribe((response) => {
      if (response) {
        alert('Clickaste aceptar');
      } else {
        alert('Clickaste cancelar');
      }
    });
  }

}
