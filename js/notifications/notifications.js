var people = [];

loadJson("/js/notifications/people.json", function(content) {
    people = JSON.parse(content);
		startAnimation();
});

function loadJson(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

function startAnimation() {
    setInterval(function() {
        slideUp();

        setTimeout(function() {
            slideDown();
        }, 5000);
    }, 15000);
}

function slideDown() {
    var element = document.getElementById("f-notification");

    if(!element) { return; }

    element.classList.remove("slide-up");
    element.classList.add("slide-down");
}

function slideUp() {
    var element = document.getElementById("f-notification");

    if(!element) { return; }

    setPersonInfo();

    element.classList.remove("slide-down");
    element.classList.add("slide-up");
}

function selectRandomPerson() {
    var p = people[Math.floor(Math.random() * people.length)];
    var peopleLS = JSON.parse(localStorage.getItem("people")) ? JSON.parse(localStorage.getItem("people")) : [];

    if(peopleLS.length == people.length) {
        peopleLS = [];
        localStorage.setItem("people", JSON.stringify(peopleLS));
    }

    var foundPerson = false;
    peopleLS.forEach(function(person) {
        if(person.Id == p.Id) {
            foundPerson = true;
        }
    });

    if(!foundPerson) { return p; }
    else { return selectRandomPerson(); }
}

function setPersonInfo() {
    var person = selectRandomPerson();

    savePerson(person);

    var name = document.getElementsByClassName("f-notification-text-name")[0];
    var time = document.getElementsByClassName("f-notification-text-time")[0];
    var product = document.getElementsByClassName("f-notification-text-product")[0];
    var localization = document.getElementsByClassName("f-notification-text-localization")[0];

    if(!name || !time || !product || !localization) { return; }

    name.innerHTML = person.Nome;
    localization.innerHTML = person.Cidade + "-" + person.Estado;
    time.innerHTML = person.Tempo;
}

function savePerson(p) {
    var peopleLS = JSON.parse(localStorage.getItem("people")) ? JSON.parse(localStorage.getItem("people")) : [];

    peopleLS.push(p);

    localStorage.setItem("people", JSON.stringify(peopleLS));
}
