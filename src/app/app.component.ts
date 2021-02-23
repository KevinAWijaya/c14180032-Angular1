import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  board = [
      ["*", "*", "*", "*", "*"],
      ["*", "*", "*", "*", "*"],
      ["*", "*", "*", "*", "*"],
      ["*", "*", "*", "*", "*"],
      ["*", "*", "*", "*", "*"]
  ]
  baris = 0;
  kolom = 0;
  turn = 1;
  win = false;

  REFRESH(pt : Number){
    if (this.baris <= 4 && this.kolom <= 4){
      if (this.board[this.baris][this.kolom]=="*"){
        if(this.turn == 0){
          this.board[this.baris][this.kolom]="0"
          this.CHECK();
          this.turn = 1
        }
        else if(this.turn == 1){
          this.board[this.baris][this.kolom]="1"
          this.CHECK();
          this.turn = 0
        }
      }
    }
  }

  hasil = "";
  CHECK(){
    // check kolom
    for (let i = 0;i<5;i++){ 
      if (this.board[i][0] == this.board[i][1] &&
      this.board[i][0] == this.board[i][2] &&
      this.board[i][0] == this.board[i][3] && 
      this.board[i][0] != "*"){
        this.win = true;
        this.hasil = "PLAYER " + this.turn +" WIN";
        return 0;
      }
      else if(this.board[i][1] == this.board[i][2] &&
      this.board[i][1] == this.board[i][3] &&
      this.board[i][1] == this.board[i][4] && 
      this.board[i][1] != "*"){
        this.win = true;
        this.hasil = "PLAYER " + this.turn +" WIN";
        return 0;
      }
    }
    // check baris
    for (let i = 0;i<5;i++){ 
      if (this.board[0][i] == this.board[1][i] &&
      this.board[0][i] == this.board[2][i] &&
      this.board[0][i] == this.board[3][i] && 
      this.board[0][i] != "*"){
        this.win = true;
        this.hasil = "PLAYER " + this.turn +" WIN";
        return 0;
      }
      else if(this.board[1][i] == this.board[2][i] &&
      this.board[1][i] == this.board[3][i] &&
      this.board[1][i] == this.board[4][i] && 
      this.board[1][i] != "*"){
        this.win = true;
        this.hasil = "PLAYER " + this.turn +" WIN";
        return 0;
      }
    }
  }


}
