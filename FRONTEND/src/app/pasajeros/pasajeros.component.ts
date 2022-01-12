import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';
import Swal from 'sweetalert2';
import { RequestService } from '../services/request.service';

@Component({
  selector: 'app-pasajeros',
  templateUrl: './pasajeros.component.html',
  styleUrls: ['./pasajeros.component.css']
})
export class PasajerosComponent implements OnInit {
  loading=true;
  tipo: any ={}
  items=[];
  ruta :any = 'pasajeros';
  vuelos : any;
  constructor(
    public requestServ: RequestService,
    private modalService:NgbModal) { }
  ngOnInit(): void {
    this.getTipos();

  }
  async getTipos(){
    const response= await this.requestServ.getTipo('pasajeros');
    if(response[0]){
      this.items=response[1];
     
    }else{
      this.requestServ.showAlert(`Error al obtener ${this.ruta}`, "error")
    }
    this.loading=false;
  }

  async getVuelos(){
    const response= await this.requestServ.getTipo('vuelos');
    if(response[0]){
      this.vuelos=response[1];
      console.log(this.vuelos)
    }else{
      this.requestServ.showAlert(`Error al obtener vuelos`, "error")
    }
    this.loading=false;
  }

  async guardar(){
    let response;
    if(this.tipo.edit){
      response= await this.requestServ.updateTipo(this.ruta,this.tipo,this.tipo.passid);
    }else{
      response= await this.requestServ.createTipo(this.ruta,this.tipo);
    }
    this.getTipos()

    if(response){
      this.requestServ.showAlert("Cambios Guardados exitosamente","success");
    } else{
      this.requestServ.showAlert("Error","error");
    }
  }
  async eliminar(id:number){
    Swal.fire({
      title: "¿Seguro que desea eliminarlo?",
      showCancelButton: true,
      confirmButtonColor: "#343A40",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.value) {
        this.eliminarT(id);
      }
    });
  }

  async eliminarT(id:number){
    const response= await this.requestServ.deleteTipo(this.ruta,id);
    if(response){
      this.requestServ.showAlert("Se elimino correctamente", "error")
    }
    this.getTipos();
  }
  


  open(content,tipo){
    if (tipo) {
      this.tipo=tipo;
      this.tipo.passdob = moment(tipo.passdob).format('YYYY-MM-DD'),
      this.tipo={...this.tipo,edit:true}
      console.log(this.tipo)
    }else{
      this.tipo={};
      this.tipo={...this.tipo,edit:false}
    }
    this.modalService.open(content);
  }
}
