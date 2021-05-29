import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// Import Services
import { AvaliacaoService } from '../../services/avaliacao.service';
// Import Models
import { Avaliacao } from '../../domain/aluno-management-portal_db/avaliacao';

// START - USED SERVICES
/**
* avaliacaoService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
* avaliacaoService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component shows a list of Avaliacao
 * @class AvaliacaoListComponent
 */
@Component({
    selector: 'app-avaliacao-list',
    templateUrl: './avaliacao-list.component.html',
    styleUrls: ['./avaliacao-list.component.css']
})
export class AvaliacaoListComponent implements OnInit {
    list: Avaliacao[];
    search: any = {};
    idSelected: string;
    constructor(
        private avaliacaoService: AvaliacaoService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.avaliacaoService.list().subscribe(list => this.list = list);
    }

    /**
     * Select Avaliacao to remove
     *
     * @param {string} id Id of the Avaliacao to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected Avaliacao
     */
    deleteItem() {
        this.avaliacaoService.remove(this.idSelected).subscribe(data => this.list = this.list.filter(el => el._id !== this.idSelected));
    }

}
