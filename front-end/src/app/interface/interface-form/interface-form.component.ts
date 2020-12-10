import { MatSnackBar } from '@angular/material/snack-bar';
import { InterfaceService } from './../interface.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { formatNumber, Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-interface-form',
  templateUrl: './interface-form.component.html',
  styleUrls: ['./interface-form.component.scss']
})
export class InterfaceFormComponent implements OnInit {

  interface: any = {}

  title: string = 'Nova Cor'

  constructor(
    private interfaceSrv: InterfaceService,
    private snackBar: MatSnackBar,
    private location: Location,
    private actRoute: ActivatedRoute
  ) { }



  async ngOnInit() {
    // Verifica se existe o parâmetro id na URL
    if (this.actRoute.snapshot.params['id']) {
      try {
        this.interface = await this.interfaceSrv.obterUm(this.actRoute.snapshot.params['id'])
        this.title = 'Editando Cor'
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

        if (this.interface._id) {
          await this.interfaceSrv.atualizar(this.interface)
        }
        else {
          await this.interfaceSrv.novo(this.interface)
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
