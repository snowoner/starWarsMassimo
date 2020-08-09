import { of } from 'rxjs';
export class MatDialogMock {

  response = true;
  open() {
    return {
      afterClosed: () => of(this.response)
    };
  }

  close() {}
}
