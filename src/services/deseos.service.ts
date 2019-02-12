import { Injectable } from "@angular/core";
import { Lista } from "../models";


@Injectable()

export class DeseosService {

	listas: Lista[] = [];

	constructor() {

		this.cargarStorage();
		// console.log('deseos service inicializado');
		// const lista1 = new Lista('planeta marte');
		// const lista2 = new Lista('planeta tierra');

		// this.listas.push(lista1, lista2);

		// console.log(this.listas);
	}

	agregarLista(lista: Lista) {
		this.listas.push( lista );
		this.guardarStorage();
	}

	
	borrarLista( lista:Lista ) {
		this.listas = this.listas.filter( listaData => {
			return listaData.id !== lista.id;
		});

		this.guardarStorage();
	}

	guardarStorage () {
		// convertir a string para guardar en localStorage
		localStorage.setItem('data', JSON.stringify(this.listas));
		// console.log('data', JSON.stringify(this.listas));
	}

	cargarStorage() {
		if( localStorage.getItem('data') ) {
			// convertir en arreglo(array) para mostrar en pantalla
			this.listas = JSON.parse(localStorage.getItem('data'));
		} else {
			this.listas = [];
		}
		
	}

}