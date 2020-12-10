import { MatSnackBar } from '@angular/material/snack-bar';
import { InterfaceService } from './../interface.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-interface-list',
  templateUrl: './interface-list.component.html',
  styleUrls: ['./interface-list.component.scss']
})
export class InterfaceListComponent implements OnInit {

  interface: any = []

  // Configurando quais dados serão exibidas
  displayedColumns: string[] = ['name_theme','color','desc','editar','excluir']
  // displayedColumns: string[] = ['nome','carga_horaria','nivel','valor_font'] 

  constructor(
    private fontSrv : InterfaceService,
    private snackBar : MatSnackBar
    ) { }

  async ngOnInit() {
    this.interface = await this.fontSrv.listar()
    console.log(this.interface)
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
