interface Persona{
  nombre: string;
  edad: number;
}

let lista:Persona[]=[];

class Main {
    constructor() {
      let btnanadir = document.getElementById("btnanadir");
      btnanadir.addEventListener("click", (e:Event) => this.add());

      let btnimprimir = document.getElementById("btnimprimir");
      btnimprimir.addEventListener("click", (e:Event) => this.print());

    }
    
    add(){
      let nombreForm = document.getElementById("name").value;
      let edadForm = document.getElementById("age").value;

      let nueva:Persona = {
        nombre: nombreForm,
        edad: edadForm
      }

      lista.push(nueva);
      alert("Elemento añadido");
      document.getElementById("name").value = "";
      document.getElementById("age").value = "";
    }

    print(){
      console.log(lista);
    }

  }
 
new Main();
