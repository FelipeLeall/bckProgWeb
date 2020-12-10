import { MatSnackBar } from '@angular/material/snack-bar';
import { AnotacaoService } from '../anatacao.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-anatacao-list',
  templateUrl: './anatacao-list.component.html',
  styleUrls: ['./anatacao-list.component.scss']
})
export class AnotacaoListComponent implements OnInit {

  anotacao: any = []

  // Configurando quais dados serão exibidas
  displayedColumns: string[] = ['text','usuario_id','pasta_id','interface_id','texto_id','editar','excluir'] 
  // displayedColumns: string[] = ['nome','carga_horaria','nivel','valor_anatacao'] 

  constructor(
    private anatacaoSrv : AnotacaoService,
    private snackBar : MatSnackBar
    ) { }

  async ngOnInit() {
    this.anotacao = await this.anatacaoSrv.listar()
    console.log(this.anotacao)

  }

  async excluir(id: string){
    if(confirm("Deseja realmente excluir ?")){
      try{
        await this.anatacaoSrv.excluir(id)
        // alert("Vai excluir o registro com id="+id)
        this.ngOnInit()
        // Feedback
        this.snackBar.open('Item excluido com sucesso','Entendi',{
          duration:3000
        })
      }
      catch(erro){
        this.snackBar.open('ERRO: Não foi possivel excluir este item','Que pena!',{
          duration:3000
        })

      }
    }
  }

}
