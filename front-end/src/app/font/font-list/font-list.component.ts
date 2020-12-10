import { MatSnackBar } from '@angular/material/snack-bar';
import { FontService } from './../font.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-font-list',
  templateUrl: './font-list.component.html',
  styleUrls: ['./font-list.component.scss']
})
export class FontListComponent implements OnInit {

  texto: any = []

  // Configurando quais dados serão exibidas
  displayedColumns: string[] = ['font','font_link','editar','excluir'] 
  // displayedColumns: string[] = ['nome','carga_horaria','nivel','valor_font'] 

  constructor(
    private fontSrv : FontService,
    private snackBar : MatSnackBar
    ) { }

  async ngOnInit() {
    this.texto = await this.fontSrv.listar()
    console.log(this.texto)
  }

  async excluir(id: string){
    if(confirm("Deseja realmente excluir ?")){
      try{
        await this.fontSrv.excluir(id)
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
