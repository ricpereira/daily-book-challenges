window.addEventListener("load", function() {
    var button = document.getElementById("challenge-button");
    button.addEventListener('click', function(event) {
        var data = JSON.parse(JSON.stringify(challenges));
        var result_challenge = data.challenges[Math.floor(Math.random() * data.challenges.length)];
        document.getElementById('challenge-result').innerText = result_challenge;
    });
});