import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TambahAlamatComponent } from './tambah-alamat/tambah-alamat.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'buku-alamat';
  constructor(public dialog: MatDialog) { }
  buatAlamat() {
    const dialogRef = this.dialog.open(TambahAlamatComponent, {
      width: "450px",
    });
  }
}
