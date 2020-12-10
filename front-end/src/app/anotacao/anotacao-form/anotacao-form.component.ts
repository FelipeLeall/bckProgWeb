import { PastaService } from './../../pasta/pasta.service';
import { UsuarioService } from './../../usuario/usuario.service';
import { FontService } from './../../font/font.service';
import { InterfaceService } from './../../interface/interface.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AnotacaoService } from '../anatacao.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-anotacao-form',
  templateUrl: './anotacao-form.component.html',
  styleUrls: ['./anotacao-form.component.scss']
})
export class AnotacaoFormComponent implements OnInit {

  // Variável para armazenar os dados do registro
  anotacao : any = {}  // Objeto vazio, nome no SINGULAR

  title : string = 'Nova Anotação'

  // Variáveis para armazenar as listagens de objetos relacionados
  interfaces : any = []   // Vetor vazio, nome no PLURAL
  textos : any = [] 
  usuarios : any = []
  pastas : any = []

  // dia = Date.prototype.getDay()
  // mes = Date.prototype.getMonth()
  // ano = Date.prototype.getFullYear()

  // hora = Date.prototype.getHours()
  // minuto = Date.prototype.getMinutes()
  // segundos = Date.prototype.getSeconds()
  // milis = Date.prototype.getMilliseconds()

  // date: Date = `${this.ano}-${this.mes}-${this.dia}T${this.hora}:${this.minuto}:${this.milis}Z`




  constructor(
    private anotacaoSrv : AnotacaoService,
    // Services das entidades relacionadas
    private interfaceSrv : InterfaceService,
    private fontSrv : FontService,
    private usuarioSrv : UsuarioService,
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
        this.anotacao = await this.anotacaoSrv.obterUm(this.actRoute.snapshot.params['id'])
        // 2) Mudar o título da página
        this.title = 'Editando turma'
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
      this.interfaces = await this.interfaceSrv.listar()
      this.textos = await this.fontSrv.listar()
      this.usuarios = await this.usuarioSrv.listar()
      this.pastas = await this.pastaSrv.listar()
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
        if(this.anotacao._id) {
          await this.anotacaoSrv.atualizar(this.anotacao) // Atualização
        }
        else {
          await this.anotacaoSrv.novo(this.anotacao)
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
