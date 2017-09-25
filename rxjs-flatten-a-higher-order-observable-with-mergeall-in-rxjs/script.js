const clickObservable = Rx.Observable
  .fromEvent(document, 'click');

const clockObservable = clickObservable
  .map(click => Rx.Observable.interval(1000))
  .mergeAll(3);

// flattening
// Observable<Observable<number>> ---> Observable<number>

/*
--------+--------+------------------------
        \        \
         -0-1-2-3 -0-1-2-3-4-5-6
         
         mergeAll
         
----------0-1-2-3-405162738495...
*/

clockObservable
  .subscribe(x => console.log(x) || displayInPreview(x));

  
// display in plunker preview
function displayInPreview(string) {
  var newDiv = document.createElement("div"); 
  var newContent = document.createTextNode(string); 
  newDiv.appendChild(newContent);
  document.body.appendChild(newDiv)
}