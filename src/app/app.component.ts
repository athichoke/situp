import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  shuffle(input: string): string[] {
    const results: string[] = [];
    const uniqueResults: string[] = [];

    function permute(arr: string[], index: number): void {
      if (index === arr.length) {
        results.push(arr.join(''));
        return;
      }

      for (let i = index; i < arr.length; i++) {
        [arr[index], arr[i]] = [arr[i], arr[index]]; // Swap elements
        permute(arr, index + 1);
        [arr[index], arr[i]] = [arr[i], arr[index]]; // Restore original order
      }
    }

    const inputArray = input.split('');
    permute(inputArray, 0);

    for(let i = 0; i < results.length; i++) {
      if(uniqueResults.indexOf(results[i]) === -1) {
        uniqueResults.push(results[i]);
      }
    }

    return uniqueResults;
  }


  findOdd(arr: number[]) {
    let counter = 0;
    for(let i = 0; i < arr.length; i++) {
      for(let j = 0; j < arr.length; j++) {
        if(arr[i] === arr[j]) {
          counter++;
        }
      }
      if(counter < 2) {
        return arr[i];
      } else {
        counter = 0;
      }
    }
    return 'none';
  }

  countSmileys(arr: string[]): number {
    let counter = 0;
    const pattern = /[:;][-~]?[)D]/;
    for(let i = 0; i < arr.length; i++) {
      if(pattern.test(arr[i])) {
        counter++;
      }
    }
    return counter;
  }

}
