/**
 *
 *
  _____                      _              _ _ _     _   _     _        __ _ _
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|

 * DO NOT EDIT THIS FILE!!
 *
 *  FOR CUSTOMIZE alunoBaseService PLEASE EDIT ../aluno.service.ts
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */
 // DEPENDENCIES
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

// CONFIG
import { environment } from '../../../environments/environment';

// MODEL
import { Aluno } from '../../domain/aluno-management-portal_db/aluno';

/**
 * THIS SERVICE MAKE HTTP REQUEST TO SERVER, FOR CUSTOMIZE IT EDIT ../aluno.service.ts
 */

/*
 * SCHEMA DB aluno
 *
	{
		apelido: {
			type: 'String',
			required : true
		},
		caminhoFoto: {
			type: 'String'
		},
		dataNascimento: {
			type: 'Date'
		},
		nome: {
			type: 'String',
			required : true
		},
		numeroAluno: {
			type: 'Number',
			required : true
		},
		//RELATIONS
		//EXTERNAL RELATIONS
		_aluno: {
			type: Schema.ObjectId,
			ref : "avaliacao"
		},
		_aluno: {
			type: Schema.ObjectId,
			ref : "curso"
		},
	}
 *
 */
@Injectable()
export class AlunoBaseService {

    contextUrl: string = environment.endpoint + '/aluno';
    constructor(
        protected http: HttpClient
        ) { }

    // CRUD METHODS

    /**
    * alunoService.list
    *   @description CRUD ACTION list
    *
    */
    list(): Observable<Aluno[]> {
        return this.http
            .get<Aluno[]>(this.contextUrl)
            .pipe(map(data => data));
    }


    // Custom APIs

}
