import { MatSnackBar } from '@angular/material/snack-bar';
import { TurmaService } from '../turma.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-turmalist',
  templateUrl: './turmalist.component.html',
  styleUrls: ['./turmalist.component.scss']
})
export class TurmaListComponent implements OnInit {

  turmas: any = []

  // Configurando quais dados serão exibidas
  displayedColumns: string[] = ['nome','curso','professor','dias_semana','horario','sala_aula','editar','excluir'] 
  // displayedColumns: string[] = ['nome','carga_horaria','nivel','valor_turma'] 

  constructor(
    private turmaSrv : TurmaService,
    private snackBar : MatSnackBar
    ) { }

  async ngOnInit() {
    this.turmas = await this.turmaSrv.listar()
    console.log(this.turmas)
  }

  async excluir(id: string){
    if(confirm("Deseja realmente excluir ?")){
      try{
        await this.turmaSrv.excluir(id)
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
