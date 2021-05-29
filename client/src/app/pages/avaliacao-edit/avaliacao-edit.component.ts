// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { AvaliacaoService } from '../../services/avaliacao.service';
import { AlunoService } from '../../services/aluno.service';
// Import Models
import { Avaliacao } from '../../domain/aluno-management-portal_db/avaliacao';
import { Aluno } from '../../domain/aluno-management-portal_db/aluno';

// START - USED SERVICES
/**
* avaliacaoService.create
*	@description CRUD ACTION create
*
* avaliacaoService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
* avaliacaoService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id resource
*
* alunoService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a Avaliacao
 */
@Component({
    selector: 'app-avaliacao-edit',
    templateUrl: 'avaliacao-edit.component.html',
    styleUrls: ['avaliacao-edit.component.css']
})
export class AvaliacaoEditComponent implements OnInit {
    item: Avaliacao;
    list_aluno: Aluno[];
    model: Avaliacao;
    formValid: Boolean;

    constructor(
    private avaliacaoService: AvaliacaoService,
    private alunoService: AlunoService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new Avaliacao();
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.avaliacaoService.get(id).subscribe(item => this.item = item);
            }
            // Get relations
            this.alunoService.list().subscribe(list => this.list_aluno = list);
        });
    }


    /**
     * Save Avaliacao
     *
     * @param {boolean} formValid Form validity check
     * @param Avaliacao item Avaliacao to save
     */
    save(formValid: boolean, item: Avaliacao): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.avaliacaoService.update(item).subscribe(data => this.goBack());
            } else {
                this.avaliacaoService.create(item).subscribe(data => this.goBack());
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



