import { Injectable } from '@angular/core';

declare const window: any;

@Injectable()
export class WebWorkerService {

  constructor() { }


  runTask(task: Function): Worker {
    let code = task.toString();
    code = code.substring(code.indexOf('{') + 1, code.lastIndexOf('}'));

    const blob = new Blob([code], { type: "application/javascript" });

    return new Worker(window.URL.createObjectURL(blob));
  }

}
