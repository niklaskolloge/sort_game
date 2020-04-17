import { Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  
  title = 'Das Sortierspiel';
  
  todo = [
    "test",
    "test2"
  ];

  done = [
    
  ];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
} 

interface event{
  name: string;
  year: number;
}

const  timeline: event[] = [ 
  {name: "… ist die Titanic gesunken?", year: 1912},
  {name: "… war die Novemberrevolution?", year: 1918},
  {name: "… wurde das Grab von Tutanchamun gefunden?", year: 1922},
  {name: "… ist die Queen geboren?", year: 1926},
  {name: "… war die Erfindung von Penicillin?", year: 1928},
  {name: "… begann der Chacokrieg?", year: 1932},
  {name: "… war die Machtergreifung von Adolf Hitler?", year: 1933},
  {name: "… war der Angriff auf Pearl Harbour?", year: 1941},
  {name: "… wurde das Grundgesetz verabschiedet?", year: 1949},
  {name: "… ist Angela Merkel geboren?", year: 1954},
  {name: "… hat der Vietnamkrieg begonnnen?", year: 1955},
  {name: "… war das Gründungsjahr der Beatles?", year: 1957},
  {name: "… wurde unser Gymnasium eröffnet?", year: 1958},
  {name: "... war das Wembley Tor?", year: 1966},
  {name: "… war die erste Mondlandung?", year: 1969},
  {name: "… fanden die 20. Olympischen Spiele in München statt?", year: 1973},
  {name: "… war die Watergate Affäre (Rücktritt Nixon)?", year: 1974},
  {name: "… Entführung der Landshut?", year: 1977},
  {name: "… hat Reihold Messner den Mount Everest bestiegen?", year: 1978},
  {name: "… gab es das Misstrauensvotum gegen Helmut Schmidt?", year: 1982},
  {name: "… kam das Motorola Dynatac 8000 raus?", year: 1983},
  {name: "… hat Boris Becker das erste Mal Wimbleden gewonnen?", year: 1985},
  {name: "… war die tollkühne Landung auf dem Roten Platz?", year: 1987},
  {name: "… war das Attentat auf Wolfgang Schäuble?", year: 1990},
  {name: "… ist Freddy Mercoury gestorben?", year: 1991},
  {name: "… kam Schindlers Liste in die Kinos?", year: 1994},
  {name: "… wurde Dolly geboren?", year: 1996},
  {name: "… ist Lady Diana gestorben?", year: 1997},
  {name: "… ist das erste Harry Potter Buch herausgekommen (deutsche Version)?", year: 1998},
  {name: "… war es MCMXCIX?", year: 1999},
  {name: "… gab es einen Spendenaffäre um Altkanzler Kohl?", year: 2000},
  {name: "… war Gotteskrieger das Wort des Jahres?", year: 2001},
  {name: "… ist der Euro eingeführt worden?", year: 2002},
  {name: "… war der Jahrhundertsommer in Deutschland?", year: 2003},
  {name: "… wann tötete eine Fludwelle über 200k Menschen in Südostasien?", year: 2004},
  {name: "… wurde der A380 herausgegeben?", year: 2005},
  {name: "… wurde Miro Klose mit 5 Toren Torschützenkönig?", year: 2006},
  {name: "… war der Sturm Kyrill?", year: 2007},
  {name: "… hat Peter Fox das Album Stadtaffe veröffentlicht?", year: 2008},
  {name: "… war etwas mit Karsten los?", year: 2009},
  {name: "… war der Unfall bei Wetten dass…?", year: 2010},
  {name: "… kam alles Anders?", year: 2011},
  {name: "… war Costa Concordia?", year: 2012},
  {name: "… wurde die Gruppe bei WA gegründet?", year: 2013},
  {name: "… ist das Flugzeug MH370 verschwunden?", year: 2014},
  {name: "… ist die Germanwings-Maschine abgestürzt?", year: 2015},
  {name: "… war die Wikileaks Affäre?", year: 2016},
  {name: "… ist Trump als Präsident der USA vereidigt worden?", year: 2017},
  {name: "… ist der HSV aus der 2. Liga abgestiegen?", year: 2018},
  {name: "… ist Daniel Küblböck von der Kreuzfahrtschiff gefallen?", year: 2019},

];

// Sort by year

const sortByYear =  (timeline: event[]) =>
  timeline.sort((eventA: event, eventB: event) => 
  {

      if(eventA.year > eventB.year) return 1;
      if(eventA.year < eventB.year) return 0;
      return 0;

  })

const sortedByYear = sortByYear(timeline);
console.log(sortedByYear);

