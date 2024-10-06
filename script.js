var i=0;
var j=1;
setInterval(function(){
    var titles=['a____', 'as___', 'ast__', 'astr_', 'astra', 'astr_', 'ast__', 'as___', 'a____', '____', 's___', 'sa__', 'sag_', 'sage', 'sag_', 'sa___', 's_____', '_______', 'e_______', 'el______', 'ele_____', 'elev____', 'eleve___', 'eleven__', 'elevent_', 'eleventh', 'elevent_', 'eleven__', 'eleve___', 'elev____', 'ele____', 'el____', 'e_____', '_____'];
    if(i===titles.length) {
        i=0;
    }
    document.title = titles[i];
    i++;
}, 200);

setInterval(function(){
    var names=['astra','sage','eleventh'];
    if(j===names.length){
        j=0;
    }
    document.getElementById('title').innerHTML = names[j];
    j++;
}, 1108);


$('#games').hover(
    function(){
        $('#infohover').text("geometry dash, celeste, minecraft, incremental games and a LOT more");
    },
    function(){
        $('#infohover').text("");
    }
);
$('#music').hover(
    function(){
        $('#infohover').text("jazz, jersey club, kendrick, tyler the creator, childish gambino, hiatus kaiyote, ...");
    },
    function(){
        $('#infohover').text("");
    }
);

// list of all fun facts
var funFacts = [
    'my birthday is the 26th of may.',
    "i have made web idle/incremental games for fun, and that's how I got decent at html/css/js.",
    "i'm currently getting a degree in computer engineering.",
    'i speak portuguese, english and a tiny bit of french.',
    "i've been making music for more than 5 years.",
    "i've been playing geometry dash for like 8 years at this point and i'm somehow not bored of it.",
    'astra = jersey club, sage = soulhop, eleventh = anything else.',
    "my favorite incremental of all time is called dodecadragons.",
    "i've played an unhealthy amount of minecraft in my life.",
    "i absolutely despise any sort of seafood.",
    "the song playing right now is an extended version of 1:47 of rise by tyler the creator.",
    'my favorite tyler song is ifhy.',
    "i like cherry bomb. that's it.",
    "i've made fnf music before and it's not something i like to remember LOL.",
    "my life goal is to know a lot of programming languages, so i can work on both websites (backend or frontend) and also make games.",
    "there is a specific combination of keys you can press on this website... however that combination doesn't do anything."
]
function genFunFact(){
    var ran = Math.random()
    document.getElementById("randomfact").innerHTML = funFacts[~~(funFacts.length * ran)];
}

window.onload = function(){
    genFunFact();
}