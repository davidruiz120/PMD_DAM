"use strict";
var lista = [];
var Main = /** @class */ (function () {
    function Main() {
        var _this = this;
        var btnanadir = document.getElementById("btnanadir");
        btnanadir.addEventListener("click", function (e) { return _this.add(); });
        var btnimprimir = document.getElementById("btnimprimir");
        btnimprimir.addEventListener("click", function (e) { return _this.print(); });
    }
    Main.prototype.add = function () {
        var nombreForm = document.getElementById("name").value;
        var edadForm = document.getElementById("age").value;
        var nueva = {
            nombre: nombreForm,
            edad: edadForm
        };
        lista.push(nueva);
        alert("Elemento añadido");
        document.getElementById("name").value = "";
        document.getElementById("age").value = "";
    };
    Main.prototype.print = function () {
        //console.log(lista);
        var tablasalida = document.getElementById("tablabody");
        while (tablasalida.firstChild) { // Primero elimino lo que hay en la tabla
            tablasalida.removeChild(tablasalida.firstChild);
        }
        lista.forEach(function (item, index) {
            //console.log("N:"+item.nombre+"  E:"+item.edad+"  I:"+index);
            var html = '<tr><td>' + item.nombre + '</td><td>' + item.edad + '</td></tr>';
            tablasalida.insertAdjacentHTML('beforeend', html);
        });
    };
    return Main;
}());
new Main();
