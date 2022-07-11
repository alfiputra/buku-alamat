import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DetailAlamatComponent } from './detail-alamat/detail-alamat.component';
import { DialogKonfirmasiComponent } from './dialog-konfirmasi/dialog-konfirmasi.component';
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

  detailAlamat() {
    const dialogRef = this.dialog.open(DetailAlamatComponent, {
      width: "450px",
    });
  }

  konfirmasiHapus() {
    const dialogRef = this.dialog.open(DialogKonfirmasiComponent, {
      width: "450px",
    });
    dialogRef.afterClosed().subscribe(res => {
      console.log(res);
    });
  }
}
