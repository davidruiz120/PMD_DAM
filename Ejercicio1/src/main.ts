interface Persona{
  nombre: string;
  edad: number;
}

let lista:Persona[]=[];

class Main {
    constructor() {
      let btnanadir = <HTMLInputElement>document.getElementById("btnanadir");
      btnanadir.addEventListener("click", (e:Event) => this.add());

      let btnimprimir = <HTMLInputElement>document.getElementById("btnimprimir");
      btnimprimir.addEventListener("click", (e:Event) => this.print());

    }
    
    add(){
      let nombreForm: string = document.getElementById("name").value;
      let edadForm: number = document.getElementById("age").value;

      let nueva:Persona = {
        nombre: nombreForm,
        edad: edadForm
      }

      lista.push(nueva);
      alert("Elemento añadido");
      (<HTMLInputElement>document.getElementById("name")).value = "";
      (<HTMLInputElement>document.getElementById("age")).value = "";
    }

    print(){
      //console.log(lista);
      let tablasalida = <HTMLInputElement>document.getElementById("tablabody");

      while (tablasalida.firstChild) { // Primero elimino lo que hay en la tabla
        tablasalida.removeChild(tablasalida.firstChild);
      }

      lista.forEach((item, index) => { // Con este bucle, recorro el array y lo muestro en la tabla
        //console.log("N:"+item.nombre+"  E:"+item.edad+"  I:"+index);
        let html: string = '<tr><td>'+item.nombre+'</td><td>'+item.edad+'</td></tr>';
        tablasalida.insertAdjacentHTML('beforeend', html);  
        
        
      });
    }

  }
 
new Main();
