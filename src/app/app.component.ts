import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div class="container" style="margin-top: 30px;">
  <h1>Todo App</h1>
  <hr>
  <div class="form-group">
    <label for="work">Yapılacak İş</label>
    <input type="text" class="form-control"
    id="work" name="work">
  </div>
  <div class="form-group mt-2">
  `

})
export class AppComponent {
  title = 'my-layout';
}
