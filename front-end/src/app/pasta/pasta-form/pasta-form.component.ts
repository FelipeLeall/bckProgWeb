import { AnotacaoService } from './../../anotacao/anatacao.service';
import { PastaService } from './../pasta.service';
import { UsuarioService } from './../../usuario/usuario.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-pasta-form',
  templateUrl: './pasta-form.component.html',
  styleUrls: ['./pasta-form.component.scss']
})
export class PastaFormComponent implements OnInit {

  // Variável para armazenar os dados do registro
  pasta: any = {}  // Objeto vazio, nome no SINGULAR

  title : string = 'Nova Pasta'

  // Variáveis para armazenar as listagens de objetos relacionados
  usuarios : any = []
  anotacoes : any = []

  constructor(

    private  anotacaoSrv: AnotacaoService,
    private usuarioSrv: UsuarioService,
    private pastaSrv: PastaService,
    private snackBar : MatSnackBar,
    private location : Location,
    private actRoute : ActivatedRoute
  ) { }

  async ngOnInit() {
    // Verifica se existe o parâmetro id na URL (rota)
    if(this.actRoute.snapshot.params['id']) {
      try {
        // 1) Acionar o back-end para buscar esse registro
        // e disponibilizá-lo para edição        
        this.pasta = await this.pastaSrv.obterUm(this.actRoute.snapshot.params['id'])
        // 2) Mudar o título da página
        this.title = 'Editando Pasta'
      }
      catch(erro) {
        console.log(erro)
        this.snackBar.open('ERRO: não foi possível carregar dados para edição.',
          'Que pena!', { duration: 5000 })
      }
    }
    // Carrega as listagens das entidades relacionadas
    this.carregarDados()
  }

  async carregarDados() {
    try {

      this.usuarios = await this.usuarioSrv.listar()
      this. anotacoes = await this.anotacaoSrv.listar()
    }
    catch(erro) {
      console.log(erro)
      this.snackBar.open(`ERRO: não foi possível carregar todos os dados 
        necessários para a página.`, 'Que pena', { duration: 5000 })
    }
  }

  async salvar(form: NgForm) {
    //console.log(this.turma)
    //return
    if(form.valid) {
      try {
        // 1) Salvar os dados no back-end
        // Se o turma já existir (caso de edição), ele já terá
        // o atributo _id
        if(this.pasta._id) {
          await this.pastaSrv.atualizar(this.pasta) // Atualização
        }
        else {
          await this.pastaSrv.novo(this.pasta)
        }
        // 2) Dar o feedback para o usuário
        this.snackBar.open('Dados salvos com sucesso.', 'Entendi',
          { duration: 5000 })
        // 3) Voltar ao componente de listagem
        this.location.back()
      }
      catch (erro) {
        console.log(erro)
        this.snackBar.open('ERRO: não foi possível salvar os dados.', 'Que pena!',
          { duration: 5000 })
      }
      
    }
  }

  voltar(form: NgForm) {
    let result = true
    // form.dirty = formulário "sujo", não salvo (via código)
    // form.touched = o conteúdo de algum campo foi alterado (via usuário)
    if(form.dirty && form.touched) {
      result = confirm('Há dados não salvos. Deseja realmente voltar?')
    }

    if(result) this.location.back()

  }

}
