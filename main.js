
document.forms['uczen'].addEventListener('submit', e => {       //zmieniasz event "submit" formularza na własny
    e.preventDefault()      //zapobiegasz resetowaniu się formularza po przez blokowanie odświeżenia strony / możesz to usunąć i przetestować jak dokładnie to działa
    var form = document.forms['uczen']
    var name = form['name'].value
    var email = form['email'].value
    var date = form['date'].value

    if(!name) {     //sprawdzasz czy jest imie
        alert('wpisz imię i nazwisko')
    } else if(name.indexOf(' ') == -1 || name[name.indexOf(' ') + 1] == undefined) {    //sprawdzasz czy jest nazwisko po imieniu / name.indexOf(' ') == -1 (sprawdzasz czy posiada spacje) || (lub) name[name.indexOf(' ') + 1] == undefined (sprawdzasz czy jest jakaś litera po spacji)
        alert('samo imie lub samo nazwisko nie wystarczy')
    } else if(!email) {     //sprawdzasz czy pole daty jest puste
        alert('wpisz email')
    } else if(!date) {      //sprawdzasz czy pole daty jest puste
        alert('wpisz datę')
    } else {
        form.submit()   //wysyłasz formularz / zatwierdzasz kiedy wszystko jest dobre
    }
})