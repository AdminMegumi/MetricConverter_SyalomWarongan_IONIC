import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage {
  function dis(panj){
    console.log(panj.value)
    if(panj.value == "Panjang") {
      document.getElementById("sat1").disabled = false;
      document.getElementById('sat2').disabled = false;
      document.getElementById('num').disabled = false;
    } else {
      document.getElementById("sat1").disabled = true;
      document.getElementById('sat2').disabled = true;
      document.getElementById('num').disabled = true;
    }
  };


  ///script perhitungan///

  constructor(); {

    var val = document.getElementById('metrik').value;
    var input = document.getElementById('num');
    var result = document.getElementById('res');
    var inputType = document.getElementById('sat1');
    var resultType = document.getElementById('sat2');

    var inputTypeValue, resultTypeValue;

    input.addEventListener("keyup", myResult);
    inputType.addEventListener("change", myResult);
    resultType.addEventListener("change", myResult);

    function myResult() {

    inputTypeValue = inputType.value;
    resultTypeValue = resultType.value;
      
      if (inputTypeValue === 'meter' && resultTypeValue === 'kilometer') {
        result.value = Number(input.value) * 0.001;
      } else if (inputTypeValue === 'meter' && resultTypeValue === 'centimeter') {
        result.value = Number(input.value) * 100;
      } else if (inputTypeValue === 'meter' && resultTypeValue === 'meter') {
        result.value = input.value;
      }

      if (inputTypeValue === 'meter' && resultTypeValue === 'dekameter') {
        result.value = Number(input.value) * 0.1;
      } else if (inputTypeValue === 'meter' && resultTypeValue === 'hektometer') {
        result.value = Number(input.value) * 0.01;
      } else if (inputTypeValue === 'meter' && resultTypeValue === 'desimeter') {
        result.value = Number(input.value) * 10;
      } else if (inputTypeValue === 'meter' && resultTypeValue === 'milimeter') {
        result.value = Number(input.value) * 1000;
      }

      if (inputTypeValue === 'kilometer' && resultTypeValue === 'meter') {
        result.value = Number(input.value) * 1000;
      } else if (inputTypeValue === 'kilometer' && resultTypeValue === 'centimeter') {
        result.value = Number(input.value) * 100000;
      } else if (inputTypeValue === 'kilometer' && resultTypeValue === 'kilometer') {
        result.value = input.value;
      }

      if (inputTypeValue === 'kilometer' && resultTypeValue === 'dekameter') {
        result.value = Number(input.value) * 100;
      } else if (inputTypeValue === 'kilometer' && resultTypeValue === 'hektometer') {
        result.value = Number(input.value) * 10;
      } else if (inputTypeValue === 'kilometer' && resultTypeValue === 'desimeter') {
        result.value = Number(input.value) * 10000;
      } else if (inputTypeValue === 'kilometer' && resultTypeValue === 'milimeter') {
        result.value = Number(input.value) * 1000000;
      }

      if (inputTypeValue === 'centimeter' && resultTypeValue === 'kilometer') {
        result.value = Number(input.value) * 0.00001;
      } else if (inputTypeValue === 'centimeter' && resultTypeValue === 'meter') {
        result.value = Number(input.value) * 0.001;
      } else if (inputTypeValue === 'centimeter' && resultTypeValue === 'centimeter') {
        result.value = input.value;
      }

      if (inputTypeValue === 'milimeter' && resultTypeValue === 'kilometer') {
        result.value = Number(input.value) * 0.000001;
      } else if (inputTypeValue === 'milimeter' && resultTypeValue === 'meter') {
        result.value = Number(input.value) * 0.001;
      } else if (inputTypeValue === 'milimeter' && resultTypeValue === 'centimeter') {
        result.value = Number(input.value) * 0.1;
      } else if (inputTypeValue === 'milimeter' && resultTypeValue === 'milimeter') {
        result.value = input.value;
      }

      if (inputTypeValue === 'milimeter' && resultTypeValue === 'dekameter') {
        result.value = Number(input.value) * 0.0001;
      } else if (inputTypeValue === 'milimeter' && resultTypeValue === 'desimeter') {
        result.value = Number(input.value) * 0.01;
      } else if (inputTypeValue === 'milimeter' && resultTypeValue === 'hektometer') {
        result.value = Number(input.value) * 0.00001;
      }

      if (inputTypeValue === 'dekameter' && resultTypeValue === 'kilometer') {
        result.value = Number(input.value) * 0.01;
      } else if (inputTypeValue === 'dekameter' && resultTypeValue === 'meter') {
        result.value = Number(input.value) * 10;
      } else if (inputTypeValue === 'dekameter' && resultTypeValue === 'centimeter') {
        result.value = Number(input.value) * 1000;
      } else if (inputTypeValue === 'dekameter' && resultTypeValue === 'dekameter') {
        result.value = input.value;
      }

      if (inputTypeValue === 'dekameter' && resultTypeValue === 'milimeter') {
        result.value = Number(input.value) * 10000;
      } else if (inputTypeValue === 'dekameter' && resultTypeValue === 'desimeter') {
        result.value = Number(input.value) * 100;
      } else if (inputTypeValue === 'dekameter' && resultTypeValue === 'hektometer') {
        result.value = Number(input.value) * 0.1;
      }

      if (inputTypeValue === 'hektometer' && resultTypeValue === 'kilometer') {
        result.value = Number(input.value) * 0.1;
      } else if (inputTypeValue === 'hektometer' && resultTypeValue === 'meter') {
        result.value = Number(input.value) * 100;
      } else if (inputTypeValue === 'hektometer' && resultTypeValue === 'centimeter') {
        result.value = Number(input.value) * 10000;
      } else if (inputTypeValue === 'hektometer' && resultTypeValue === 'hektometer') {
        result.value = input.value;
      }

      if (inputTypeValue === 'hektometer' && resultTypeValue === 'milimeter') {
        result.value = Number(input.value) * 100000;
      } else if (inputTypeValue === 'hektometer' && resultTypeValue === 'desimeter') {
        result.value = Number(input.value) * 1000;
      } else if (inputTypeValue === 'hektometer' && resultTypeValue === 'dekameter') {
        result.value = Number(input.value) * 10;
      }

      if (inputTypeValue === 'desimeter' && resultTypeValue === 'kilometer') {
        result.value = Number(input.value) * 0.0001;
      } else if (inputTypeValue === 'desimeter' && resultTypeValue === 'meter') {
        result.value = Number(input.value) * 0.1;
      } else if (inputTypeValue === 'desimeter' && resultTypeValue === 'centimeter') {
        result.value = Number(input.value) * 10;
      } else if (inputTypeValue === 'desimeter' && resultTypeValue === 'desimeter') {
        result.value = input.value;
      }

      if (inputTypeValue === 'desimeter' && resultTypeValue === 'milimeter') {
        result.value = Number(input.value) * 100;
      } else if (inputTypeValue === 'desimeter' && resultTypeValue === 'hektometer') {
        result.value = Number(input.value) * 0.001;
      } else if (inputTypeValue === 'desimeter' && resultTypeValue === 'dekameter') {
        result.value = Number(input.value) * 0.01;
      }
    }
  }

}
