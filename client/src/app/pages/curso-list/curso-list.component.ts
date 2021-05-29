import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// Import Services
import { CursoService } from '../../services/curso.service';
// Import Models
import { Curso } from '../../domain/aluno-management-portal_db/curso';

// START - USED SERVICES
/**
* cursoService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
* cursoService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component shows a list of Curso
 * @class CursoListComponent
 */
@Component({
    selector: 'app-curso-list',
    templateUrl: './curso-list.component.html',
    styleUrls: ['./curso-list.component.css']
})
export class CursoListComponent implements OnInit {
    list: Curso[];
    search: any = {};
    idSelected: string;
    constructor(
        private cursoService: CursoService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.cursoService.list().subscribe(list => this.list = list);
    }

    /**
     * Select Curso to remove
     *
     * @param {string} id Id of the Curso to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected Curso
     */
    deleteItem() {
        this.cursoService.remove(this.idSelected).subscribe(data => this.list = this.list.filter(el => el._id !== this.idSelected));
    }

}
