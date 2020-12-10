import { MatSnackBar } from '@angular/material/snack-bar';
import { CursoService } from './../curso.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cursolist',
  templateUrl: './cursolist.component.html',
  styleUrls: ['./cursolist.component.scss']
})
export class CursolistComponent implements OnInit {

  cursos: any = []

  // Configurando quais dados serão exibidas
  displayedColumns: string[] = ['nome','carga_horaria','nivel','valor_curso', 'editar','excluir'] 
  // displayedColumns: string[] = ['nome','carga_horaria','nivel','valor_curso'] 

  constructor(
    private cursoSrv : CursoService,
    private snackBar : MatSnackBar
    ) { }

  async ngOnInit() {
    this.cursos = await this.cursoSrv.listar()
    console.log(this.cursos)
  }

  async excluir(id: string){
    if(confirm("Deseja realmente excluir ?")){
      try{
        await this.cursoSrv.excluir(id)
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
