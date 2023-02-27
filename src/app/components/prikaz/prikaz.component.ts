import { Component, OnInit } from '@angular/core';
import { ProizvodService } from 'src/app/services/proizvod.service';
import { MatTableDataSource } from '@angular/material/table';
import { Proizvod } from 'src/app/model/proizvod';

@Component({
  selector: 'app-prikaz',
  templateUrl: './prikaz.component.html',
  styleUrls: ['./prikaz.component.css']
})
export class PrikazComponent implements OnInit {

  constructor(private servis:ProizvodService) { }

  ngOnInit(): void {
    this.servis.getData().subscribe((data)=>{
      console.log(data);
      this.dataSource.data=data;
    })
  }

  dataSource= new MatTableDataSource<Proizvod>();
  

  displayedColumns: string[] = ['id', 'naziv', 'boja', 'cena','kategorija','datumKreiranja','slika'];

}
