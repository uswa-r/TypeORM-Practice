import { Component, OnInit } from '@angular/core';
import { createConnection, Connection, CustomRepositoryCannotInheritRepositoryError } from 'typeorm';

@Component({
  selector: 'app-type-orm',
  templateUrl: './type-orm.component.html',
  styleUrls: ['./type-orm.component.css']
})
export class TypeOrmComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


const myUser = await respository.findOne({where: {name:"Troy"}});
await respository.delete(mymUser.id);
}
