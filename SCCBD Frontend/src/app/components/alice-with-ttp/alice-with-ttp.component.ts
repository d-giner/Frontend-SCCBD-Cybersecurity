import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CryptoService } from 'src/services/CryptoService';
import { cyberSecurity } from 'src/app/controllers/cyberSecurity';
import { DataReceived } from 'src/app/models/DataReceived';

@Component({
  selector: 'alice-with-ttp',
  templateUrl: './alice-with-ttp.component.html',
  styleUrls: ['./alice-with-ttp.component.css']
})
export class AliceWithTtpComponent implements OnInit {



  textsList: string[];
  showList: boolean = false;
  dataReceived = new DataReceived;

  myForm1 = new FormGroup({
    texttoadd: new FormControl('', Validators.required)
  });

  postNewMessageToBob(values) {
    // Clase auxiliar para mandar el string del input del formulario como JSON
    console.log(">> Criptograma enviado desde el cliente Alice...");
    console.log(`Esto lo que envía Alice en claro: ${values.texttoadd}`);
    let dataToSend = cyberSecurity.addToEncrypt(values.texttoadd);
    console.log("Este es el cipher :DD: " + dataToSend.cipherText)
    let object = {
      source: 'Alice',
      cipherText: dataToSend.cipherText
    }

    this.cryptoService.postNewMessageToBob(object).subscribe(res => {
      console.log(res);
      this.postIvToTtp(dataToSend.iv);
      this.myForm1.reset();
    },
      err => {
        console.log(err);
      });
  }

  postIvToTtp(iv: object) {
    let object = {
      source: 'Alice',
      iv: iv
    }

    console.log(">> Alice envía el IV a la TTP...");
    this.cryptoService.postIvToTtp(object).subscribe(res => {
      console.log(res);
    },
      err => {
        console.log(err);
      });
  }

  constructor(private cryptoService: CryptoService) { }
  ngOnInit(): void {
  }

}
