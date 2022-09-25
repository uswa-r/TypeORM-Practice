import { Component, OnInit } from '@angular/core';
import { createConnection, Connection } from 'typeorm';

@Component({
  selector: 'app-type-orm',
  templateUrl: './type-orm.component.html',
  styleUrls: ['./type-orm.component.css']
})
export class TypeOrmComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

const connection = await createConnection({
type:"postgres",
host: "localhost",
port:"5432",
username:"jane-doe",
password:"1234",
database:"jane-db"
});
}
