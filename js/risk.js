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

function setMask1(){
    var mask1 = document.getElementById("mask1").value;

    switch (mask1) {
        case "none":
            maskEff1 = 0;
            break;
        case "cloth":
            maskEff1 = 30;
            break;
        case "surgical":
            maskEff1 = 50;
            break;
        case "n95":
            maskEff1 = 95;
            break;
        default:
            maskEff1 = 0;
    }
    document.getElementById("maskEff1").value = maskEff1;    
}


function setMask2(){
    var mask2 = document.getElementById("mask2").value;

    switch (mask2) {
        case "none":
            maskEff2 = 0;
            break;
        case "cloth":
            maskEff2 = 30;
            break;
        case "surgical":
            maskEff2 = 50;
            break;
        case "n95":
            maskEff2 = 95;
            break;
        default:
            maskEff2 = 0;
    }
    document.getElementById("maskEff2").value = maskEff2;    
}

var individuals = [];
var individualsInputs = [];
var analysisParametersCheckedIndex = [];

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
    var maskEff1 = parseFloat(document.getElementById("maskEff1").value)/100.0;
    var maskEff2 = parseFloat(document.getElementById("maskEff2").value)/100.0;
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
            filterEff3_10 = 0.0;
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

    
    var risk = 1 - Math.exp(-1 * infector * quanta * inhalation * duration * (1 - maskEff1) * (1 - maskEff2) / roomVolumn/eqACH);
    risk = 100*risk;
    risk = risk.toFixed(3);

    var riskUnsteady = 1 - Math.exp(-1 * infector * quanta * inhalation * (1 - maskEff1) * (1 - maskEff2) / roomVolumn*((eqACH*duration + Math.exp(-1*duration*eqACH)-1)/eqACH**2));
    riskUnsteady = 100*riskUnsteady;
    riskUnsteady = riskUnsteady.toFixed(3);
    // self.probability = 1 - math.exp(-1*self.infective*self.quanta*self.inhalation*self.duration*
    //                             (1 - self.mask1)*(1 - self.mask2)/self.V/eqACH)

    var parameterTotalSupplyAir = document.getElementById("totalSupplyAir");
    if (parameterTotalSupplyAir.checked)
    {
        document.getElementById("totalSupplyAirPanel").style.display = "block";
    }
    else
    {
        document.getElementById("totalSupplyAirPanel").style.display = "none";
    }

    var parameterReturnAirFraction = document.getElementById("returnAirFraction");
    if (parameterReturnAirFraction.checked)
    {
        document.getElementById("returnAirFractionPanel").style.display = "block";
    }
    else
    {
        document.getElementById("returnAirFractionPanel").style.display = "none";
    }

    var parameterHvacFilter = document.getElementById("hvacFilter");
    if (parameterHvacFilter.checked)
    {
        document.getElementById("hvacFilterPanel").style.display = "block";
    }
    else
    {
        document.getElementById("hvacFilterPanel").style.display = "none";
    }

    var parameterAirCleanerSupply = document.getElementById("airCleanerSupply");
    if (parameterAirCleanerSupply.checked)
    {
        document.getElementById("airCleanerSupplyPanel").style.display = "block";
    }
    else
    {
        document.getElementById("airCleanerSupplyPanel").style.display = "none";
    }

    var parameterUpperUVGI = document.getElementById("upperUVGI");
    if (parameterUpperUVGI.checked)
    {
        document.getElementById("upperUVGIPanel").style.display = "block";
    }
    else
    {
        document.getElementById("upperUVGIPanel").style.display = "none";
    }

    var totalSupplyAirValue = document.getElementsByName("totalSupplyAirValue");
    var returnAirFraction = document.getElementsByName("returnAirFraction");
    var hvacFilter = document.getElementsByName("hvacFilter");
    var airCleanerSupply = document.getElementsByName("airCleanerSupply");
    var upperUVGI = document.getElementsByName("upperUVGI");
    
    var totalSupplyAirValueValues = [];
    var returnAirFractionValues = [];
    var hvacFilterValues = [];
    var airCleanerSupplyValues = [];
    var upperUVGIValues = [];

    var totalSupplyAirValueLabels = [];
    var returnAirFractionLabels = [];
    var hvacFilterLabels = [];
    var airCleanerSupplyLabels = [];
    var upperUVGILabels = [];

    for(var i = 0; i<hvacFilter.length; i++)
    {
        totalSupplyAirValueValues[i] = totalSupplyAirValue[i].value;
        returnAirFractionValues[i] = returnAirFraction[i].value/100;
        airCleanerSupplyValues[i] = airCleanerSupply[i].value;
        upperUVGIValues[i] = upperUVGI[i].value;

        totalSupplyAirValueLabels[i] = totalSupplyAirValue[i].value;
        returnAirFractionLabels[i] = returnAirFraction[i].value;
        hvacFilterLabels[i] = hvacFilter[i].value;
        airCleanerSupplyLabels[i] = airCleanerSupply[i].value;
        upperUVGILabels[i] = upperUVGI[i].value;

        switch (hvacFilter[i].value) {
            case "none":
                pfilterEff03_1 = 0.0;
                pfilterEff1_3 = 0.0;
                pfilterEff3_10 = 0.0;
                break;
            case "MERV1":
                pfilterEff03_1 = 0.0;
                pfilterEff1_3 = 0.0;
                pfilterEff3_10 = 0.1;
                break;
            case "MERV2":
                pfilterEff03_1 = 0.0;
                pfilterEff1_3 = 0.0;
                pfilterEff3_10 = 0.1;
                break;
            case "MERV3":
                pfilterEff03_1 = 0.0;
                pfilterEff1_3 = 0.0;
                pfilterEff3_10 = 0.1;
                break;
            case "MERV4":
                pfilterEff03_1 = 0.0;
                pfilterEff1_3 = 0.0;
                pfilterEff3_10 = 0.1;
                break;
            case "MERV5":
                pfilterEff03_1 = 0.03;
                pfilterEff1_3 = 0.17;
                pfilterEff3_10 = 0.2;
                break;
            case "MERV6":
                pfilterEff03_1 = 0.03;
                pfilterEff1_3 = 0.17;
                pfilterEff3_10 = 0.35;
                break;
            case "MERV7":
                pfilterEff03_1 = 0.09;
                pfilterEff1_3 = 0.17;
                pfilterEff3_10 = 0.5;
                break;
            case "MERV8":
                pfilterEff03_1 = 0.09;
                pfilterEff1_3 = 0.2;
                pfilterEff3_10 = 0.7;
                break;
            case "MERV9":
                pfilterEff03_1 = 0.09;
                pfilterEff1_3 = 0.35;
                pfilterEff3_10 = 0.85;
                break;
            case "MERV10":
                pfilterEff03_1 = 0.09;
                pfilterEff1_3 = 0.5;
                pfilterEff3_10 = 0.85;
                break;
            case "MERV11":
                pfilterEff03_1 = 0.2;
                pfilterEff1_3 = 0.65;
                pfilterEff3_10 = 0.85;
                break;
            case "MERV12":
                pfilterEff03_1 = 0.35;
                pfilterEff1_3 = 0.8;
                pfilterEff3_10 = 0.9;
                break;
            case "MERV13":
                pfilterEff03_1 = 0.5;
                pfilterEff1_3 = 0.9;
                pfilterEff3_10 = 0.9;
                break;
            case "MERV14":
                pfilterEff03_1 = 0.85;
                pfilterEff1_3 = 0.9;
                pfilterEff3_10 = 0.9;
                break;
            case "MERV15":
                pfilterEff03_1 = 0.95;
                pfilterEff1_3 = 0.95;
                pfilterEff3_10 = 0.95;
                break;
            case "MERV16":
                pfilterEff03_1 = 0.75;
                pfilterEff1_3 = 0.9;
                pfilterEff3_10 = 0.9;
                break;
            case "HEPA":
                pfilterEff03_1 = 0.999;
                pfilterEff1_3 = 0.999;
                pfilterEff3_10 = 0.999;
                break;
            default:
                pfilterEff03_1 = 0;
                pfilterEff1_3 = 0;
                pfilterEff3_10 = 0;
        }
        var hvacEilterEff = pfilterEff03_1*p03_1 + pfilterEff1_3*p1_3 + pfilterEff3_10*p3_10;
        hvacFilterValues[i] = hvacEilterEff;
    }
    // document.getElementById("tempText").innerHTML = returnAirFractionValues;

    var parameterAnalysisValues = [];
    parameterAnalysisValues[0] = totalSupplyAirValueValues;
    parameterAnalysisValues[1] = returnAirFractionValues;
    parameterAnalysisValues[2] = hvacFilterValues;
    parameterAnalysisValues[3] = airCleanerSupplyValues;
    parameterAnalysisValues[4] = upperUVGIValues;
    // document.getElementById("tempText").innerHTML = parameterAnalysisValues[0][0];
    var labels = [];
    labels[0] = totalSupplyAirValueLabels;
    labels[1] = returnAirFractionLabels;
    labels[2] = hvacFilterLabels;
    labels[3] = airCleanerSupplyLabels;
    labels[4] = upperUVGILabels;

    var analysisParameters = document.getElementsByName("analysisParameters");
    analysisParametersCheckedIndex = [];
    individuals = [];
    individualsInputs = [];
    var analysisParametersChecked = [];
    var analysisParametersUnchecked = [];
    var analysisParametersLabels = document.getElementsByName("analysisParametersLabels");
    // var analysisParametersLabelsChecked = [];
    var analysisParametersLabelsUnchecked = [];
    for (var i=0;i<analysisParameters.length;i++){
        if ( true ) {
            analysisParametersChecked.push(analysisParameters[i]);
            analysisParametersCheckedIndex.push(i);
        }
        else
        {
            analysisParametersUnchecked.push(analysisParameters[i]);
            analysisParametersLabelsUnchecked.push(analysisParametersLabels[i]);
        }
    }
    
    if (analysisParametersChecked.length >=5)
    {
        analysisParametersUnchecked.forEach(function(e){e.disabled = true});
        analysisParametersLabelsUnchecked.forEach(function(e){e.style = "color: lightgrey;"});
        // analysisParametersUnchecked[0].disabled = true;
    }
    else
    {
        analysisParametersUnchecked.forEach(function(e){e.disabled = false});
        analysisParametersLabelsUnchecked.forEach(function(e){e.style = "color: black;"});
        // analysisParametersUnchecked[0].disabled = false;
    }
    
    function paraAnalysis()
    {

    }

    
    for (var i = 0; i<analysisParametersCheckedIndex.length; i++)
    {
        individuals[i] = parameterAnalysisValues[analysisParametersCheckedIndex[i]];
        individualsInputs[i] = labels[analysisParametersCheckedIndex[i]];
        if (analysisParametersCheckedIndex[i]==0)
        {
            for (var j=0; j<individuals[i].length; j++)
            {
                var pQr = individuals[i][j] * returnFrac;
                var pQf = individuals[i][j] - pQr;
                var pfiltration = pQr/roomVolumn*filterEff;
                var peqACH = uvgi + (pQf/roomVolumn + pfiltration)*ventEff*ventEffRoomConfiguration+deposit+airCleaner/roomVolumn;
                var prisk = 1 - Math.exp(-1 * infector * quanta * inhalation * duration * (1 - maskEff1) * (1 - maskEff2) / roomVolumn/peqACH);
                prisk = 100*prisk;
                prisk = prisk.toFixed(3);

                var priskUnsteady = 1 - Math.exp(-1 * infector * quanta * inhalation * (1 - maskEff1) * (1 - maskEff2) / roomVolumn*((peqACH*duration + Math.exp(-1*duration*peqACH)-1)/peqACH**2));
                priskUnsteady = 100*priskUnsteady;
                priskUnsteady = priskUnsteady.toFixed(3);
                // if (individuals[i][j]==0)
                // {
                //     individuals[i][j] = 0;
                // }
                // else
                // {
                    individuals[i][j] = prisk;
                // }
                
            }

        }
        else if (analysisParametersCheckedIndex[i]==1)
        {
            for (var j=0; j<individuals[i].length; j++)
            {
                var pQr = supply * individuals[i][j];
                var pQf = supply - pQr;
                
                var pfiltration = pQr/roomVolumn*filterEff;
                
                var peqACH = uvgi + (pQf/roomVolumn + pfiltration)*ventEff*ventEffRoomConfiguration+deposit+airCleaner/roomVolumn;
            
                var prisk = 1 - Math.exp(-1 * infector * quanta * inhalation * duration * (1 - maskEff1) * (1 - maskEff2) / roomVolumn/peqACH);
                prisk = 100*prisk;
                prisk = prisk.toFixed(3);
            
                var priskUnsteady = 1 - Math.exp(-1 * infector * quanta * inhalation * (1 - maskEff1) * (1 - maskEff2) / roomVolumn*((peqACH*duration + Math.exp(-1*duration*peqACH)-1)/peqACH**2));
                priskUnsteady = 100*priskUnsteady;
                priskUnsteady = priskUnsteady.toFixed(3);

                // if (individuals[i][j]==0)
                // {
                //     individuals[i][j] = 0;
                // }
                // else
                // {
                    individuals[i][j] = prisk;
                // }
                
            }
        }
        else if (analysisParametersCheckedIndex[i]==2)
        {
            for (var j=0; j<individuals[i].length; j++)
            {
                // var Qr = supply * returnFrac;
                // var Qf = supply - Qr;
                
                var pfiltration = Qr/roomVolumn*individuals[i][j];
                
                
                var peqACH = uvgi + (Qf/roomVolumn + pfiltration)*ventEff*ventEffRoomConfiguration+deposit+airCleaner/roomVolumn;
            
                var prisk = 1 - Math.exp(-1 * infector * quanta * inhalation * duration * (1 - maskEff1) * (1 - maskEff2) / roomVolumn/peqACH);
                prisk = 100*prisk;
                prisk = prisk.toFixed(3);
            
                var priskUnsteady = 1 - Math.exp(-1 * infector * quanta * inhalation * (1 - maskEff1) * (1 - maskEff2) / roomVolumn*((peqACH*duration + Math.exp(-1*duration*peqACH)-1)/peqACH**2));
                priskUnsteady = 100*priskUnsteady;
                priskUnsteady = priskUnsteady.toFixed(3);

                if (individuals[i][j]==0)
                {
                    individuals[i][j] = 0;
                }
                else
                {
                    individuals[i][j] = prisk;
                }
                
            }
        }
        else if (analysisParametersCheckedIndex[i]==3)
        {
            for (var j=0; j<individuals[i].length; j++)
            {
                // var Qr = supply * returnFrac;
                // var Qf = supply - Qr;
                
                // var filtration = Qr/roomVolumn*filterEff;
                
                
                var peqACH = uvgi + (Qf/roomVolumn + filtration)*ventEff*ventEffRoomConfiguration+deposit+individuals[i][j]/roomVolumn;
            
                var prisk = 1 - Math.exp(-1 * infector * quanta * inhalation * duration * (1 - maskEff1) * (1 - maskEff2) / roomVolumn/peqACH);
                prisk = 100*prisk;
                prisk = prisk.toFixed(3);
            
                var priskUnsteady = 1 - Math.exp(-1 * infector * quanta * inhalation * (1 - maskEff1) * (1 - maskEff2) / roomVolumn*((peqACH*duration + Math.exp(-1*duration*peqACH)-1)/peqACH**2));
                priskUnsteady = 100*priskUnsteady;
                priskUnsteady = priskUnsteady.toFixed(3);

                // if (individuals[i][j]==0)
                // {
                //     individuals[i][j] = 0;
                // }
                // else
                // {
                    individuals[i][j] = prisk;
                // }
                
            }
        }
        else if (analysisParametersCheckedIndex[i]==4)
        {
            for (var j=0; j<individuals[i].length; j++)
            {
                // var Qr = supply * returnFrac;
                // var Qf = supply - Qr;
                
                // var filtration = Qr/roomVolumn*filterEff;
                
                
                var peqACH = individuals[i][j] + (Qf/roomVolumn + filtration)*ventEff*ventEffRoomConfiguration+deposit+airCleaner/roomVolumn;
            
                var prisk = 1 - Math.exp(-1 * infector * quanta * inhalation * duration * (1 - maskEff1) * (1 - maskEff2) / roomVolumn/peqACH);
                prisk = 100*prisk;
                prisk = prisk.toFixed(3);
            
                var priskUnsteady = 1 - Math.exp(-1 * infector * quanta * inhalation * (1 - maskEff1) * (1 - maskEff2) / roomVolumn*((peqACH*duration + Math.exp(-1*duration*peqACH)-1)/peqACH**2));
                priskUnsteady = 100*priskUnsteady;
                priskUnsteady = priskUnsteady.toFixed(3);

                // if (individuals[i][j]==0)
                // {
                //     individuals[i][j] = 0;
                // }
                // else
                // {
                    individuals[i][j] = prisk;
                // }
                
            }
        }
    }
    // document.getElementById("tempText").innerHTML = individuals;
    
    
    plot();

    

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
    document.getElementById("riskMini").innerHTML = risk0 + '%';
    
}
,100);


// var width = 300;
//     var height = 300;
//     var svg = d3.select("#svgcontainer")
//         .append("svg")
//         .attr("width", width)
//         .attr("height", height);
//     svg.append("line")
//         .attr("x1", 100)
//         .attr("y1", 100)
//         .attr("x2", 200)
//         .attr("y2", 200)
//         .style("stroke", "rgb(255,0,0)")
//         .style("stroke-width", 2);

//     const chart = svg.append('g')
//     .attr('transform', `translate(${margin}, ${margin})`);

function plot()
{
    var plotTitles = ["HVAC total supply airflow rate", "HVAC return air fraction", "HVAC filter", "Air cleaner supply CADR", "Upper-room UVGI intensity"];
    var plotXLabels = ["Airflow rate [m3/h]", "Return air fraction [%]", "Filter", "CADR [m3/h]", "UVGI intensity [/h]"];
    // document.getElementById("tempText").innerHTML = "test";
    // var n = 0;
    var chart = [];
    // var chartIndex = [];
    // document.getElementById("tempText").innerHTML = "chart: " + chart.length + "| checkbox: " + analysisParametersCheckedIndex.length;


    for (var i = 0; i<individuals.length;i++)
    {
        var data = [];
    
        for (var j=0; j<individuals[i].length; j++)
        {
            
            
            if ((individualsInputs[i][j]) != "" && individualsInputs[i][j] != "none")
            {
                var obj = new Object();
                obj.label = individualsInputs[i][j];
                obj.y = parseFloat(individuals[i][j]);
                data.push(obj);
            }
            
        }
        
        

        var plotContainer = document.getElementById("plotContainer");
        plotContainer.children[i].style.height = "300px";
        plotContainer.children[i].style.width = "100%";

        // chartIndex[i] = analysisParametersCheckedIndex[i];

        chart[i] = new CanvasJS.Chart(plotContainer.children[i].id, {
            title:{
                text: plotTitles[analysisParametersCheckedIndex[i]]              
            },
            axisX:{
                // interlacedColor: "rgba(1,77,101,.2)",
                // gridColor: "rgba(1,77,101,.1)",
                title: plotXLabels[analysisParametersCheckedIndex[i]] 
            },
            axisY:{
                // interlacedColor: "rgba(1,77,101,.2)",
                gridColor: "rgba(1,77,101,.1)",
                title: "Risk [%]"
            },
            data: [              
            {
                // Change type to "doughnut", "line", "splineArea", etc.
                type: "column",
                name: plotXLabels[analysisParametersCheckedIndex[i]],
                color: "#69b3a2",
                dataPoints: data
            }
            ]
        });
        chart[i].render();

        
        // document.getElementById("tempText").innerHTML = "chart: " + chart.length + "| checkbox: " + analysisParametersCheckedIndex.length;
    
    }
    
}


// function plot()
// {
// var plotTitles = ["HVAC total supply airflow rate", "HVAC return air fraction", "HVAC filter", "Air cleaner supply CADR", "Upper-room UVGI intensity"];
// var plotXLabels = ["Airflow rate [m3/h]", "Return air fraction [%]", "Filter", "CADR [m3/h]", "UVGI intensity [/h]"];

// var margin = {top: 40, right: 30, bottom: 70, left: 50},
//     width = 460 - margin.left - margin.right,
//     height = 450 - margin.top - margin.bottom;
// var svg = [];
// var n = document.getElementById("my_dataviz"); // get how many plots already exist in the container


// // document.getElementById("tempText").innerHTML = individuals + '|' + analysisParametersCheckedIndex;

// if (n.childNodes.length<individuals.length)
// {
// for (var i=0; i<individuals.length; i++)
// {
    
//     // if (n.childNodes.length>=individuals.length)
//     // {
//     //     break; // if already enough plots, exit; avoid repeating plotting
//     // } 

//     // append the svg object to the body of the page
//     svg[i] = d3.select("#my_dataviz")
//     .append("svg")
//         .attr("width", width + margin.left + margin.right)
//         .attr("height", height + margin.top + margin.bottom)
//     .append("g")
//         .attr("transform",
//             "translate(" + margin.left + "," + margin.top + ")");
//     // svg = svgs[i];
//     svg[i].append("text")
//         .attr("class", "plotTitle")
//         .attr("x", (width / 2))             
//         .attr("y", -20)
//         .attr("text-anchor", "middle")  
//         .text(plotTitles[analysisParametersCheckedIndex[i]]);
//     svg[i].append("text")
//         .attr("class", "plotLabel")
//         .attr("x", (width / 2))             
//         .attr("y", height+40)
//         .attr("text-anchor", "middle")  
//         .text(plotXLabels[analysisParametersCheckedIndex[i]]);
//     svg[i].append("text")
//         .attr("class", "plotLabel")
//         .attr("x", 0)             
//         .attr("y", -20)
//         .attr("text-anchor", "end")  
//         .text("Risk [%]");

//     // Parse the Data
//     // d3.csv("https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/7_OneCatOneNum_header.csv", function(data) {

//     var data = [];
    
//     for (var j=0; j<individuals[i].length; j++)
//     {
        
//         var obj = new Object();
//         if (individuals[i][j] != 0)
//         {
//             obj.key = individualsInputs[i][j];
//             obj.value = individuals[i][j];
//         }
//         data.push(obj);
//     }
//     document.getElementById("tempText").innerHTML = data.toString();
//     console.log(data)
    
//     // data = [{key: "x", value: 2000},{key: "y", value: 4000},{key: "z", value: 8000}];
    
//     // X axis
//     var x = d3.scaleBand()
//     .range([ 0, width ])
//     .domain(data.map(function(d) { return d.key; }))
//     .padding(0.2);
//     svg[i].append("g")
//     .attr("class", "plotAxis")
//     .attr("transform", "translate(0," + height + ")")
//     .call(d3.axisBottom(x))
//     .selectAll("text")
//         .attr("transform", "translate(0,0)")
//         .style("text-anchor", "middle");

//     var ydomain = [];
//     ydomain[0] = 0;
//     ydomain[1] = Math.max(individuals[i]);
//     // Add Y axis
//     var y = d3.scaleLinear()
//     .domain(ydomain)
//     .range([ height, 0]);
//     svg[i].append("g")
//     .attr("class", "plotAxis")
//     .call(d3.axisLeft(y))
//     .selectAll("text")
//         .style("text-anchor", "end");

//     // Bars
//     svg[i].selectAll("mybar")
//     .data(data)
//     .enter()
//     .append("rect")
//         .attr("x", function(d) { return x(d.key); })
//         .attr("width", x.bandwidth())
//         .attr("fill", "#69b3a2")
//         // no bar at the beginning thus:
//         .attr("height", function(d) { return height - y(0); }) // always equal to 0
//         .attr("y", function(d) { return y(0); })
    
//     // Animation
//     svg[i].selectAll("rect")
//     .transition()
//     .duration(800)
//     .attr("y", function(d) { return y(d.value); })
//     .attr("height", function(d) { return height - y(d.value); })
//     .delay(function(d,i){console.log(i) ; return(i*100)})

//     // })

// }

// }
// else if (n.childNodes.length > individuals.length)
// {
//     var div0 = document.getElementById("my_dataviz");
//     while (div0.firstChild) {
//         div0.removeChild(div0.lastChild);
//     }
//     // if (div0.firstChild)
//     // {
//     //     div0.removeChild(div0.firstChild)
//     // }
// }

// }

var strategies = 0;
var s = document.getElementsByName("strategy");

function addStrategy()
{
    if (strategies<s.length)
    {
        s[strategies].style.display = "block";
        strategies+=1;
    }
    showStrategyAnalysis();
}



function deleteStrategy()
{
    if (strategies>0)
    {
        strategies-=1;
        s[strategies].style.display = "none";
    }   
    showStrategyAnalysis()
}

function showStrategyAnalysis()
{
    if (strategies>0)
    {
        document.getElementById("strategyAnalysis").style.display = "block";
        document.getElementById("strategyAnalysis2").style.display = "block";
    }
    else
    {
        document.getElementById("strategyAnalysis").style.display = "none";
        document.getElementById("strategyAnalysis2").style.display = "none";
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
    document.getElementById("miniBar").style.display = "block";
    // stickyBar.classList.add("sticky");
    // document.getElementById("simModelSelection").style.display = "none";
    // document.getElementById("parameterAnalysisPanel").style.margin = "246px 0"
    // document.getElementById("parameterAnalysisPanel2").style.margin = "246px 0"
  } else {
    document.getElementById("miniBar").style.display = "none";
    // stickyBar.classList.remove("sticky");
    // document.getElementById("simModelSelection").style.display = "block";
    // document.getElementById("parameterAnalysisPanel").style.margin = "0 0"
    // document.getElementById("parameterAnalysisPanel2").style.margin = "0 0"
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
