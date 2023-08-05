import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';

  ngOnInit(){
    const cursor = document.querySelector('.cursor');
    document.addEventListener('mousemove', (e) => {
      cursor?.setAttribute("style", "top: "+(e.pageY -13)+"px; left: "+(e.pageX - 13)+"px;");
    })

    document.addEventListener('click', e => {
      cursor?.classList.add('flash-cursor');
      setTimeout(() => {
        cursor?.classList.remove('flash-cursor');
      }, 200);
    })
  }
}
