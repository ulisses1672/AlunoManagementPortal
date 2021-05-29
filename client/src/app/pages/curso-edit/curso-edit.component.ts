// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { CursoService } from '../../services/curso.service';
import { AlunoService } from '../../services/aluno.service';
// Import Models
import { Curso } from '../../domain/aluno-management-portal_db/curso';
import { Aluno } from '../../domain/aluno-management-portal_db/aluno';

// START - USED SERVICES
/**
* cursoService.create
*	@description CRUD ACTION create
*
* cursoService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
* cursoService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id resource
*
* alunoService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a Curso
 */
@Component({
    selector: 'app-curso-edit',
    templateUrl: 'curso-edit.component.html',
    styleUrls: ['curso-edit.component.css']
})
export class CursoEditComponent implements OnInit {
    item: Curso;
    list_aluno: Aluno[];
    model: Curso;
    formValid: Boolean;

    constructor(
    private cursoService: CursoService,
    private alunoService: AlunoService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new Curso();
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.cursoService.get(id).subscribe(item => this.item = item);
            }
            // Get relations
            this.alunoService.list().subscribe(list => this.list_aluno = list);
        });
    }


    /**
     * Save Curso
     *
     * @param {boolean} formValid Form validity check
     * @param Curso item Curso to save
     */
    save(formValid: boolean, item: Curso): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.cursoService.update(item).subscribe(data => this.goBack());
            } else {
                this.cursoService.create(item).subscribe(data => this.goBack());
            } 
        }
    }

    /**
     * Go Back
     */
    goBack(): void {
        this.location.back();
    }


}



