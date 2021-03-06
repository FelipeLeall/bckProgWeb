import { MatSnackBar } from '@angular/material/snack-bar';
import { UsuarioService } from './../usuario.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.scss']
})
export class UsuarioListComponent implements OnInit {

  usuario: any = []

  // Configurando quais dados serão exibidas
  displayedColumns: string[] = ['nickname','email','editar','excluir']
 

  constructor(
    private fontSrv : UsuarioService,
    private snackBar : MatSnackBar
    ) { }

  async ngOnInit() {
    this.usuario = await this.fontSrv.listar()
    console.log(this.usuario)
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
