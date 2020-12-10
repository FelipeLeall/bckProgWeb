import { MatSnackBar } from '@angular/material/snack-bar';
import { FontService } from './../font.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { formatNumber, Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-font-form',
  templateUrl: './font-form.component.html',
  styleUrls: ['./font-form.component.scss']
})
export class FontFormComponent implements OnInit {

  texto: any = {}

  title: string = 'Nova Fonte'

  constructor(
    private fontSrv: FontService,
    private snackBar: MatSnackBar,
    private location: Location,
    private actRoute: ActivatedRoute
  ) { }



  async ngOnInit() {
    // Verifica se existe o parâmetro id na URL
    if (this.actRoute.snapshot.params['id']) {
      try {
        this.texto = await this.fontSrv.obterUm(this.actRoute.snapshot.params['id'])
        this.title = 'Editando Fonte'
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

        if (this.texto._id) {
          await this.fontSrv.atualizar(this.texto)
        }
        else {
          await this.fontSrv.novo(this.texto)
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
