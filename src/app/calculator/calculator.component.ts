import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})

export class CalculatorComponent {
  public result : string = "a prime number" ;
  public prime = 2;
  count = 0;
  fact = 24;
  title = 'Calculator';

  isPrime() {

    for(let i=1;i<=this.prime;i++){
      if(this.prime%i == 0){
        this.count++;
      }
    }

    if (this.count == 2){
      this.result=" is a prime number";
    }
    else{
      this.result=" is not a prime number";
    }
  }

  factorial(num: number): number {
    if (num == 1)
    {
      this.fact = 1;
      return 1;
    }
    else{
      this.fact = num * this.factorial(num - 1);
      return num * this.factorial(num - 1);
    }
  }
}
