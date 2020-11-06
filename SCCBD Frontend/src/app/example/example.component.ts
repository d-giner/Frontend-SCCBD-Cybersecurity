import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CryptoService } from 'src/services/CryptoService';
import { cyberSecurity } from '../controllers/cyberSecurity';
import { DataReceived } from '../models/DataReceived';

@Component({
  selector: 'example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {
  textsList: string[];
  showList: boolean = false;
  dataReceived = new DataReceived;

  myForm1 = new FormGroup({
    texttoadd: new FormControl('', Validators.required)
  });

  postNewText(values) {
    // Clase auxiliar para mandar el string del input del formulario como JSON
    console.log(">> Criptograma enviado desde el cliente...");
    console.log(`Esto lo que envía el cliente en claro: ${values.texttoadd}`);
    let dataToSend = cyberSecurity.addToEncrypt(values.texttoadd);

    this.exampleService.postNewText(dataToSend).subscribe(res => {
      console.log(res);
      this.myForm1.reset();
    },
      err => {
        console.log(err);
      });
  }

  getTexts() {
    this.exampleService.getTexts().subscribe(res => {
      let resSTR = JSON.stringify(res);
      let resJSON = JSON.parse(resSTR);
      console.log(">> Criptograma recibido desde el servidor...");

      let message: string = cyberSecurity.addToDecrypt(resJSON.cipherText, resJSON.iv);
      var splitted = message.split(",");
      this.textsList = splitted;
      this.showList = true;
    },
      err => {
        console.log(err);
      });
  }

  constructor(private exampleService: CryptoService) { }

  ngOnInit(): void {
  }

}
