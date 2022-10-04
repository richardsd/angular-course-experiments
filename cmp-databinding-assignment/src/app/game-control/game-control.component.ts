import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output('playingGame') playingGameEvent: EventEmitter<{ inc: number }> = new EventEmitter();
  private counter: number = 0;
  private intervalId: any;

  constructor() { }

  ngOnInit(): void {
  }

  startGame() {
    console.log('Game Started!');
    this.intervalId = setInterval(() => {
      this.counter += 1;
      this.playingGameEvent.emit({ inc: this.counter });
    }, 1000);
  }

  stopGame() {
    console.log('Game stoped!');
    clearInterval(this.intervalId);
  }

}
