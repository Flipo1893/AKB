function checkAnswers() {
    let a1 = document.getElementById("q1").value;
    let a2 = document.getElementById("q2").value;
    let a3 = document.getElementById("q3").value;
 
    // Richtige Antworten:
    let correct1 = (a1 == 8);
    let correct2 = (a2 == 2);
    let correct3 = (a3 == 2);
 
    let resultBox = document.getElementById("result");
 
    if (correct1 && correct2 && correct3) {
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