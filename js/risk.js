var outAirPerPerson = 2.5*3.6; // 2.5L/s-person --> 2.5*3.6m3/h-person --> ASHRAE standard
var outAirPerArea = 0.3*3.6;

function setDefault() {
    var roomType = document.getElementById("roomType").value;
    switch (roomType) {
        case "office":
            roomArea = 500.0;
            roomHeight = 3.0;
            occupantDensity = 0.05; // 5persons/100m2 --> ASHRAE standard
            duration = 8.0;
            activityIndex = 1.0;
            inhalation = 0.3;
            outAirPerPerson = 2.5*3.6; // 2.5L/s-person --> 2.5*3.6m3/h-person --> ASHRAE standard
            outAirPerArea = 0.3*3.6;
            break;
        case "conferenceRoom":
            roomArea = 100.0;
            roomHeight = 3.0;
            occupantDensity = 0.05;
            duration = 8.0;
            activityIndex = 1.0;
            inhalation = 0.3;
            outAirPerPerson = 2.5*3.6;
            outAirPerArea = 0.3*3.6;
            break;
        case "classroom":
            roomArea = 100.0;
            roomHeight = 3.0;
            occupantDensity = 0.35;
            duration = 8.0;
            activityIndex = 1.0;
            inhalation = 0.3;
            outAirPerPerson = 5*3.6;
            outAirPerArea = 0.6*3.6;
            break;
        case "hotelGuestRoom":
            roomArea = 25.0;
            roomHeight = 3.0;
            occupantDensity = 0.1;
            duration = 10.0;
            activityIndex = 1.0;
            inhalation = 0.3;
            outAirPerPerson = 2.5*3.6;
            outAirPerArea = 0.3*3.6;
            break;
        case "hotelLobby":
            roomArea = 1308.0;
            roomHeight = 6.0;
            occupantDensity = 0.3;
            duration = 0.5;
            activityIndex = 1.0;
            inhalation = 0.3;
            outAirPerPerson = 3.8*3.6;
            outAirPerArea = 0.3*3.6;
            break;
        case "hotelBistro":
            roomArea = 189.0;
            roomHeight = 6.0;
            occupantDensity = 0.3;
            duration = 1.0;
            activityIndex = 1.0;
            inhalation = 0.3;
            outAirPerPerson = 3.8*3.6;
            outAirPerArea = 0.3*3.6;
            break;
        case "hotelBallroom":
            roomArea = 200.0;
            roomHeight = 6.0;
            occupantDensity = 0.3;
            duration = 2.0;
            activityIndex = 2.0;
            inhalation = 0.7;
            outAirPerPerson = 3.8*3.6;
            outAirPerArea = 0.3*3.6;
            break;
        case "cruiseLineGuestRoom":
            roomArea = 15.0;
            roomHeight = 3.0;
            occupantDensity = 0.1;
            duration = 10.0;
            activityIndex = 1.0;
            inhalation = 0.3;
            outAirPerPerson = 2.5*3.6;
            outAirPerArea = 0.3*3.6;
            break;
        default:
            roomArea = 0.0;
            roomHeight = 0.0;
            occupantDensity = 0.0;
            duration = 0.0;
            activityIndex = 1.0;
            inhalation = 0.3;
            outAirPerPerson = 0.0;
    }
    document.getElementById("roomArea").value = roomArea;
    document.getElementById("roomHeight").value = roomHeight;
    document.getElementById("totalOccupant").value = Math.ceil(occupantDensity * roomArea);
    document.getElementById("duration").value = duration;
    document.getElementById("activity").selectedIndex = activityIndex;
    document.getElementById("inhalation").value = inhalation;
    // document.getElementById("ventRatePerPerson").value = ventRatePerPerson;
    setVent();
}

function setVent()
{
    var supply = 0.0;
    var returnFrac = parseFloat(document.getElementById("returnFrac").value);
    var totalOccupant = parseFloat(document.getElementById("totalOccupant").value);
    var roomArea = parseFloat(document.getElementById("roomArea").value);
    var outAirTotal = parseFloat(outAirPerPerson*totalOccupant + outAirPerArea*roomArea);
    supply = outAirTotal/(1.0 - returnFrac/100.0);
    document.getElementById("supply").value = supply;
}

function setDisease() {
    var disease = document.getElementById("disease").value;
    switch (disease) {
        case "covid":
            quanta = 100.0;
            break;
        case "influenza":
            quanta = 100.0;
            break;
        case "rhinovirus":
            quanta = 5.0;
            break;
        case "tb":
            quanta = 13.0;
            break;
        case "sars":
            quanta = 150.0;
            break;
        case "measles":
            quanta = 3000.0;
            break;
        default:
            quanta = 0.0;
    }
    document.getElementById("quanta").value = quanta;
}

function setActivity() {
    var activity = document.getElementById("activity").value;
    switch (activity) {
        case "sleeping":
            inhalation = 0.3;
            break;
        case "sitting":
            inhalation = 0.3;
            break;
        case "walking":
            inhalation = 0.7;
            break;
        case "running":
            inhalation = 1.6;
            break;
        case "heavy":
            inhalation = 3.0;
            break;
        default:
            inhalation = 0;
    }
    document.getElementById("inhalation").value = inhalation;
}

// let elementsArray = document.querySelectorAll("input");

// elementsArray.forEach(function (elem) {
//     elem.addEventListener("oninput", Calculate());
// });

function SetVentMode()
{
    var ventMode = document.getElementById("ventMode").value;

    switch (ventMode) {
        case "mixing":
            ventEff = 1.0;
            break;
        case "displacement":
            ventEff = 1.5;
            break;
        case "personal":
            ventEff = 5.0;
            break;
        case "displacementPersonal":
            ventEff = 7.5;
            break;
        default:
            ventEff = 0.0;
    }
    document.getElementById("ventEff").value = ventEff;
}

function SetRoomConfiguration()
{
    var roomConfiguration = document.getElementById("roomConfiguration").value;

    switch (roomConfiguration) {
        case "open":
            ventEffRoomConfiguration = 1.0;
            break;
        case "semiopen":
            ventEffRoomConfiguration = 2.5;
            break;
        default:
            ventEffRoomConfiguration = 0.0;
    }
    document.getElementById("ventEffRoomConfiguration").value = ventEffRoomConfiguration;
}

setInterval(
function Calculate() {
    var quanta = parseFloat(document.getElementById("quanta").value);
    var p03_1 = parseFloat(document.getElementById('p03_1').innerHTML.slice(0, -1))/100.0;
    var p1_3 = parseFloat(document.getElementById('p1_3').innerHTML.slice(0, -1))/100.0;
    var p3_10 = parseFloat(document.getElementById('p3_10').innerHTML.slice(0, -1))/100.0;
    var duration = parseFloat(document.getElementById("duration").value);
    var roomArea = parseFloat(document.getElementById("roomArea").value);
    var roomHeight = parseFloat(document.getElementById("roomHeight").value);
    var ventEffRoomConfiguration = parseFloat(document.getElementById("ventEffRoomConfiguration").value);
    var totalOccupant = parseFloat(document.getElementById("totalOccupant").value);
    var infector = parseFloat(document.getElementById("infector").value);
    var inhalation = parseFloat(document.getElementById("inhalation").value);
    var supply = parseFloat(document.getElementById("supply").value);
    var returnFrac = parseFloat(document.getElementById("returnFrac").value/100.0);
    var hvacFrac = parseFloat(document.getElementById("hvacFrac").value/100.0);
    var ventEff = parseFloat(document.getElementById("ventEff").value);
    var airCleaner = parseFloat(document.getElementById("airCleaner").value);
    var uvgi = parseFloat(document.getElementById("uvgi").value);
    var airCleanerFrac = parseFloat(document.getElementById("airCleanerFrac").value/100.0);
    var uvgiFrac = parseFloat(document.getElementById("uvgiFrac").value/100.0);
    
    var filter = document.getElementById("filter").value;

    switch (filter) {
        case "none":
            filterEff03_1 = 0.0;
            filterEff1_3 = 0.0;
            filterEff3_10 = 0.1;
            break;
        case "MERV1":
            filterEff03_1 = 0.0;
            filterEff1_3 = 0.0;
            filterEff3_10 = 0.1;
            break;
        case "MERV2":
            filterEff03_1 = 0.0;
            filterEff1_3 = 0.0;
            filterEff3_10 = 0.1;
            break;
        case "MERV3":
            filterEff03_1 = 0.0;
            filterEff1_3 = 0.0;
            filterEff3_10 = 0.1;
            break;
        case "MERV4":
            filterEff03_1 = 0.0;
            filterEff1_3 = 0.0;
            filterEff3_10 = 0.1;
            break;
        case "MERV5":
            filterEff03_1 = 0.03;
            filterEff1_3 = 0.17;
            filterEff3_10 = 0.2;
            break;
        case "MERV6":
            filterEff03_1 = 0.03;
            filterEff1_3 = 0.17;
            filterEff3_10 = 0.35;
            break;
        case "MERV7":
            filterEff03_1 = 0.09;
            filterEff1_3 = 0.17;
            filterEff3_10 = 0.5;
            break;
        case "MERV8":
            filterEff03_1 = 0.09;
            filterEff1_3 = 0.2;
            filterEff3_10 = 0.7;
            break;
        case "MERV9":
            filterEff03_1 = 0.09;
            filterEff1_3 = 0.35;
            filterEff3_10 = 0.85;
            break;
        case "MERV10":
            filterEff03_1 = 0.09;
            filterEff1_3 = 0.5;
            filterEff3_10 = 0.85;
            break;
        case "MERV11":
            filterEff03_1 = 0.2;
            filterEff1_3 = 0.65;
            filterEff3_10 = 0.85;
            break;
        case "MERV12":
            filterEff03_1 = 0.35;
            filterEff1_3 = 0.8;
            filterEff3_10 = 0.9;
            break;
        case "MERV13":
            filterEff03_1 = 0.5;
            filterEff1_3 = 0.9;
            filterEff3_10 = 0.9;
            break;
        case "MERV14":
            filterEff03_1 = 0.85;
            filterEff1_3 = 0.9;
            filterEff3_10 = 0.9;
            break;
        case "MERV15":
            filterEff03_1 = 0.95;
            filterEff1_3 = 0.95;
            filterEff3_10 = 0.95;
            break;
        case "MERV16":
            filterEff03_1 = 0.75;
            filterEff1_3 = 0.9;
            filterEff3_10 = 0.9;
            break;
        case "HEPA":
            filterEff03_1 = 0.999;
            filterEff1_3 = 0.999;
            filterEff3_10 = 0.999;
            break;
        default:
            filterEff03_1 = 0;
            filterEff1_3 = 0;
            filterEff3_10 = 0;
    }

    var mask1 = document.getElementById("mask1").value;
    switch (mask1) {
        case "cloth":
            mask1Eff = 0.5;
            break;
        case "surgical":
            mask1Eff = 0.75;
            break;
        case "n95":
            mask1Eff = 0.95;
            break;
        case "none":
            mask1Eff = 0.0;
            break;
        default:
            mask1Eff = 0.0;
    }

    var mask2 = document.getElementById("mask2").value;
    switch (mask2) {
        case "cloth":
            mask2Eff = 0.5;
            break;
        case "surgical":
            mask2Eff = 0.75;
            break;
        case "n95":
            mask2Eff = 0.95;
            break;
        case "none":
            mask2Eff = 0.0;
            break;
        default:
            mask2Eff = 0.0;
    }

    var dp03_1 = 0.55; // (0.3+1)/2; geometric mean diameter
    var deposit03_1 = 0.108 * dp03_1 ** 2 * (1 + 0.166 / dp03_1) / roomHeight;
    var dp1_3 = 1.7; // (1 + 3) / 2
    var deposit1_3 = 0.108 * dp1_3 ** 2 * (1 + 0.166 / dp1_3) / roomHeight;
    var dp3_10 = 5.5; //(3 + 10) / 2
    var deposit3_10 = 0.108 * dp3_10 ** 2 * (1 + 0.166 / dp3_10) / roomHeight;
    var deposit = p03_1*deposit03_1 + p1_3*deposit1_3 + p3_10*deposit3_10;
    
    var roomVolumn = roomArea*roomHeight;
    supply = supply * hvacFrac;
    var Qr = supply * returnFrac;
    var Qf = supply - Qr;
    var filterEff = filterEff03_1*p03_1 + filterEff1_3*p1_3 + filterEff3_10*p3_10;
    var filtration = Qr/roomVolumn*filterEff;
    uvgi = uvgi * uvgiFrac;
    airCleaner = airCleaner*airCleanerFrac;
    var eqACH = uvgi + (Qf/roomVolumn + filtration)*ventEff*ventEffRoomConfiguration+deposit+airCleaner/roomVolumn;

    
    var risk = 1 - Math.exp(-1 * infector * quanta * inhalation * duration * (1 - mask1Eff) * (1 - mask2Eff) / roomVolumn/eqACH);
    risk = 100*risk;
    risk = risk.toFixed(3);

    var riskUnsteady = 1 - Math.exp(-1 * infector * quanta * inhalation * (1 - mask1Eff) * (1 - mask2Eff) / roomVolumn*((eqACH*duration + Math.exp(-1*duration*eqACH)-1)/eqACH**2));
    riskUnsteady = 100*riskUnsteady;
    riskUnsteady = riskUnsteady.toFixed(3);
    // self.probability = 1 - math.exp(-1*self.infective*self.quanta*self.inhalation*self.duration*
    //                             (1 - self.mask1)*(1 - self.mask2)/self.V/eqACH)

    var modelValue;
    var models = document.getElementsByName("simModel");
    for (var i = 0, length = models.length; i < length; i++) 
    {
        if(models[i].checked)
        {
            modelValue = models[i].value;
        }
    }
    if (modelValue == "steady")
    {
        var risk0 = risk;
    }
    else
    {
        var risk0 = riskUnsteady;
    }
    document.getElementById("risk").innerHTML = risk0 + '%';
    // document.getElementById("stickyBarMini").innerHTML = risk + '%';
}
,100);

function WellsRiley()
{

}


var strategies = 0;
var s = document.getElementsByName("strategy");

function addStrategy()
{
    if (strategies<s.length)
    {
        s[strategies].style.display = "block";
        strategies+=1;
    }
    
}

function deleteStrategy()
{
    if (strategies>0)
    {
        strategies-=1;
        s[strategies].style.display = "none";
    }   
    
}


mybutton = document.getElementById("myBtn");
var stickyBar = document.getElementById("stickyBar");
var sticky = stickyBar.offsetTop;




// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
} else {
    mybutton.style.display = "none";
}


if (window.pageYOffset >= sticky && window.innerWidth >=600) {
    stickyBar.classList.add("sticky")
  } else {
    stickyBar.classList.remove("sticky");
  }
}



// When the user clicks on the button, scroll to the top of the document
function topFunction() {
document.body.scrollTop = 0; // For Safari
document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}




// riskPanel = document.getElementById("riskPanel");

// var offset = document.getElementById("risk").offsetTop;
// var offheight = document.getElementById("risk").offsetHeight;




     


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}