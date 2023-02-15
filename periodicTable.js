var alkEarthMet = document.getElementsByClassName('alkalineEarthMetals');
var transitionMetals = document.getElementsByClassName('transitionMetals');
var nonmetals = document.getElementsByClassName('nonmetals');
var alkaliMetals = document.getElementsByClassName('alkaliMetals');
var halogens = document.getElementsByClassName('halogens');
var noblegas = document.getElementsByClassName('noblegas');
var postTransitionMetal = document.getElementsByClassName('postTransitionMetal');
var lanthanides = document.getElementsByClassName('lanthanides');
var metalloids = document.getElementsByClassName('metalloids');
var actinides = document.getElementsByClassName('actinides');

function btnAlkEarthMet() {
    var t = document.getElementById("alkEarthMet");

    if(t.value =="OFF") {
        t.value = "ON";
    } else if (t.value == "ON") {
        t.value = "OFF";
    }

    for (i = 0; i < alkEarthMet.length; i++) {
        if(t.value == "ON") {
            t.style.backgroundColor = '#009cc7';
            t.style.color = '#ffffff';
            alkEarthMet[i].style.backgroundColor = '#009cc7';
            alkEarthMet[i].style.color = '#ffffff';
        } else if (t.value == "OFF"){
            t.style.backgroundColor = null;
            alkEarthMet[i].style.backgroundColor = null;
            alkEarthMet[i].style.color = null;
        }
    } 
}

function btntransMetal() {
    var t = document.getElementById("transMetal");

    if(t.value =="OFF") {
        t.value = "ON";
    } else if (t.value == "ON") {
        t.value = "OFF";
    }

    for (i = 0; i < transitionMetals.length; i++) {
        if(t.value == "ON") {
            t.style.backgroundColor = '#ff8000';
            t.style.color = '#1d222b';
            transitionMetals[i].style.backgroundColor = '#ff8000';
            transitionMetals[i].style.color = '#1d222b';
        } else if (t.value == "OFF"){
            t.style.backgroundColor = '#1d222b';
            t.style.color = '#ffffff';
            transitionMetals[i].style.backgroundColor = null;
            transitionMetals[i].style.color = null;
        }
    }
}

function btnnonMetals() {
    var t = document.getElementById("nonmetals");

    if(t.value =="OFF") {
        t.value = "ON";
    } else if (t.value == "ON") {
        t.value = "OFF";
    }

    for (i = 0; i < nonmetals.length; i++) {
        if(t.value == "ON") {
            t.style.backgroundColor = '#f5be25';
            t.style.color = '#1d222b';
            nonmetals[i].style.backgroundColor = '#f5be25';
            nonmetals[i].style.color = '#1d222b';
        } else if (t.value == "OFF"){
            t.style.backgroundColor = '#1d222b';
            t.style.color = '#ffffff';
            nonmetals[i].style.backgroundColor = null;
            nonmetals[i].style.color = null;
        }
    }
}

function btnAlakaliMetals() {
    var t = document.getElementById("alkaliMetals");

    if(t.value =="OFF") {
        t.value = "ON";
    } else if (t.value == "ON") {
        t.value = "OFF";
    }

    for (i = 0; i < alkaliMetals.length; i++) {
        if(t.value == "ON") {
            t.style.backgroundColor = '#fe1110';
            t.style.color = '#ffffff';
            alkaliMetals[i].style.backgroundColor = '#fe1110';
            alkaliMetals[i].style.color = '#ffffff';
        } else if (t.value == "OFF"){
            t.style.backgroundColor = '#1d222b';
            t.style.color = '#ffffff';
            alkaliMetals[i].style.backgroundColor = null;
            alkaliMetals[i].style.color = null;
        }
    }
}

function btnHalogens() {
    var t = document.getElementById("halogens");

    if(t.value =="OFF") {
        t.value = "ON";
    } else if (t.value == "ON") {
        t.value = "OFF";
    }

    for (i = 0; i < halogens.length; i++) {
        if(t.value == "ON") {
            t.style.backgroundColor = '#00803b';
            t.style.color = '#ffffff';
            halogens[i].style.backgroundColor = '#00803b';
            halogens[i].style.color = '#ffffff';
        } else if (t.value == "OFF"){
            t.style.backgroundColor = '#1d222b';
            t.style.color = '#ffffff';
            halogens[i].style.backgroundColor = null;
            halogens[i].style.color = null;
        }
    }
}

function btnNobleGas() {
    var t = document.getElementById("noblegas");

    if(t.value =="OFF") {
        t.value = "ON";
    } else if (t.value == "ON") {
        t.value = "OFF";
    }

    for (i = 0; i < noblegas.length; i++) {
        if (t.value == "ON") {
            t.style.backgroundColor = '#6f25a1';
            t.style.color = '#ffffff';
            noblegas[i].style.backgroundColor = '#6f25a1';
            noblegas[i].style.color = '#ffffff';
        } else if (t.value == "OFF") {
            t.style.backgroundColor = '#1d222b';
            t.style.color = '#ffffff';
            noblegas[i].style.backgroundColor = null;
            noblegas[i].style.color = null;
        }
    }
}

function btnPostTransMetal() {
    var t = document.getElementById("postTransMetal");

    if(t.value =="OFF") {
        t.value = "ON";
    } else if (t.value == "ON") {
        t.value = "OFF";
    }

    for (i = 0; i < postTransitionMetal.length; i++) {
        if(t.value == "ON") {
            t.style.backgroundColor = '#006daf';
            t.style.color = '#ffffff';
            postTransitionMetal[i].style.backgroundColor = '#006daf';
            postTransitionMetal[i].style.color = '#ffffff';
        } else if (t.value == "OFF"){
            t.style.backgroundColor = '#1d222b';
            t.style.color = '#ffffff';
            postTransitionMetal[i].style.backgroundColor = null;
            postTransitionMetal[i].style.color = null;
        }
    }
}

function btnLanthanides() {
    var t = document.getElementById("lanthanides");

    if(t.value =="OFF") {
        t.value = "ON";
    } else if (t.value == "ON") {
        t.value = "OFF";
    }

    for (i = 0; i < lanthanides.length; i++) {
        if(t.value == "ON") {
            t.style.backgroundColor = '#cf6142';
            t.style.color = '#1d222b';
            lanthanides[i].style.backgroundColor = '#cf6142';
            lanthanides[i].style.color = '#1d222b';
        } else if (t.value == "OFF"){
            t.style.backgroundColor = '#1d222b';
            t.style.color = '#ffffff';
            lanthanides[i].style.backgroundColor = null;
            lanthanides[i].style.color = null;
        }
    }
}

function btnMetalloids() {
    var t = document.getElementById("metalloids");

    if(t.value =="OFF") {
        t.value = "ON";
    } else if (t.value == "ON") {
        t.value = "OFF";
    }

    for (i = 0; i < metalloids.length; i++) {
        if(t.value == "ON") {
            t.style.backgroundColor = '#c41d3d';
            t.style.color = '#ffffff';
            metalloids[i].style.backgroundColor = '#c41d3d';
            metalloids[i].style.color = '#ffffff';
        } else if (t.value == "OFF"){
            t.style.backgroundColor = '#1d222b';
            t.style.color = '#ffffff';
            metalloids[i].style.backgroundColor = null;
            metalloids[i].style.color = null;
        }
    }
}

function btnActinides() {
    var t = document.getElementById("actinides");

    if(t.value =="OFF") {
        t.value = "ON";
    } else if (t.value == "ON") {
        t.value = "OFF";
    }

    for (i = 0; i < actinides.length; i++) {
        if(t.value == "ON") {
            t.style.backgroundColor = '#567735';
            t.style.color = '#1d222b';
            actinides[i].style.backgroundColor = '#567735';
            actinides[i].style.color = '#1d222b';
        } else if (t.value == "OFF"){
            t.style.backgroundColor = '#1d222b';
            t.style.color = '#ffffff';
            actinides[i].style.backgroundColor = null;
            actinides[i].style.color = null;
        }
    }
}


