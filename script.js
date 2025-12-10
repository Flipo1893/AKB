function checkAnswers() {
    let a1 = document.getElementById("q1").value;
    let a2 = document.getElementById("q2").value;
    let a3 = document.getElementById("q3").value;
    let a4 = document.getElementById("q4").value;
    let a5 = document.getElementById("q5").value;
 
    // Richtige Antworten:
    let correct1 = (a1 == 8);
    let correct2 = (a2 == 2);
    let correct3 = (a3 == 2);
    let correct4 = (a4 == 1000);
    let correct5 = (a5 == 3);
 
    let resultBox = document.getElementById("result");
 
    if (correct1 && correct2 && correct3 && correct4 && correct5) {
    resultBox.style.background = "#32CD32";
    resultBox.style.display = "block";
    resultBox.innerHTML = "Richtig! Der Code zum Öffnen lautet:<br><span class='unlock-code'>5801</span>";
    resultBox.classList.remove("error");
    resultBox.classList.add("success");
 
    } else {
        resultBox.style.display = "block";
        resultBox.textContent = "Noch nicht ganz richtig. Versuche es nochmal!";
        resultBox.style.background = "#ef4444";
    }
}
// Event-Listener für Klicks auf der gesamten Seite
document.addEventListener('click', function(event) {
    // Suche alle Info-Popups
    const allDetails = document.querySelectorAll('.info-popup');

    allDetails.forEach(function(detail) {
        // Prüfen: Ist dieses Popup gerade offen?
        if (detail.hasAttribute('open')) {
            // Prüfen: Hat der Nutzer AUSSERHALB dieses Elements geklickt?
            if (!detail.contains(event.target)) {
                // Dann schliesse es (Attribut entfernen)
                detail.removeAttribute('open');
            }
        }
    });
});