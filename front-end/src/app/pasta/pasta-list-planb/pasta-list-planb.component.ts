import { PastaService } from './../pasta.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-pasta-list-planb',
  templateUrl: './pasta-list-planb.component.html',
  styleUrls: ['./pasta-list-planb.component.scss']
})
export class PastaListPlanbComponent implements OnInit {

  pastas: any = []

  // Configurando quais dados serão exibidas
  // listFolders: string[] = ['text','usuario_id','pasta_id','interface_id','texto_id','editar','excluir'] 


  constructor(
    private pastaSrv : PastaService,
    private snackBar : MatSnackBar

    ) { }

  async ngOnInit() {
    this.pastas = await this.pastaSrv.listar()
    console.log(this.pastas)

  }

  async excluir(id: string){
    if(confirm("Deseja realmente excluir ?")){
      try{
        await this.pastaSrv.excluir(id)
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
