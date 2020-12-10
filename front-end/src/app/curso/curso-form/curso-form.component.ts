import { MatSnackBar } from '@angular/material/snack-bar';
import { CursoService } from './../curso.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { formatNumber, Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-curso-form',
  templateUrl: './curso-form.component.html',
  styleUrls: ['./curso-form.component.scss']
})
export class CursoFormComponent implements OnInit {

  curso: any = {}

  niveis: any = [
    { valor: 'Básico' },
    { valor: 'Intermediário' },
    { valor: 'Avançado' }
  ]

  title: string = 'Novo Curso'

  constructor(
    private cursoSrv: CursoService,
    private snackBar: MatSnackBar,
    private location: Location,
    private actRoute: ActivatedRoute
  ) { }



  async ngOnInit() {
    // Verifica se existe o parâmetro id na URL
    if (this.actRoute.snapshot.params['id']) {
      try {
        this.curso = await this.cursoSrv.obterUm(this.actRoute.snapshot.params['id'])
        this.title = 'Editando curso'
      }
      catch (erro) {
        console.log(erro)
        console.log(erro)
        this; this.snackBar.open('ERRO: não foi possivel alterar os dados', 'Puts kkk', { duration: 3000 })

      }
    }
  }

  async salvar(form: NgForm) {
    if (form.valid) {
      try {

        if (this.curso._id) {
          await this.cursoSrv.atualizar(this.curso)
        }
        else {
          await this.cursoSrv.novo(this.curso)
        }
        this.snackBar.open('Dados salvos comsucesso.', 'Entendi', { duration: 3000 })
        this.location.back()
      }
      catch (erro) {

        console.log(erro)
        this; this.snackBar.open('ERRO: não foi possivel salvar os dados', 'Puts kkk', { duration: 3000 })
      }

    }
  }

  async voltar(form: NgForm) {
    let result = true

    if (form.dirty && form.touched) {
      result = confirm('Há dados não salvos. Deseja realmente voltar')
    }
    if (result) this.location.back()
  }


}
