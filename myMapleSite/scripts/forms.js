let textLocation;
let valueNumber

let latitude = null;
let longitude = null;

document.getElementById("search").onclick = async function () {
    const locationText = document.getElementById("location").value;

    const response = await fetch("/location", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ location: locationText })
    });

    const data = await response.json();
    console.log("Backend JSON:", data);

    // ⭐ Use EXACT lat/lon returned from JSON
    latitude = data.lat;
    longitude = data.long;

    showInformation();
    showResults();
    showSMS();
};

function showInformation() {
    console.log("Shown map!");

    if (!latitude || !longitude) {
        document.getElementById("map").innerHTML = "<p>Loading map...</p>";
        return;
    }

    // ⭐ The map uses the EXACT lat/lon returned from FastAPI
    const mapUrl = `https://www.google.com/maps?q=${latitude},${longitude}&z=14&output=embed`;

    document.getElementById("map").innerHTML = `
        <br>
        <iframe 
            src="${mapUrl}"
            width="600" 
            height="450" 
            style="border:0;" 
            allowfullscreen
            loading="lazy">
        </iframe>
    `;
}


function showResults(){
    console.log("Shown results!")
    document.getElementById("results").innerHTML ="<br><h2>YOUR MAPLE TAP INFORMATION</h2><h3 style='margin-right:20%; margin-left: 20%;color: #0C0C0C;'>START DATE: Calculating...<br>END DATE: Calculating... <br>IDEAL TAP DATE: Calculating... </h3>"
}

// function showEstimate() {
//     if(document.getElementById("yield").checked){
//         document.getElementById("results").innerHTML ="<br><h2>YOUR MAPLE TAP INFORMATION</h2><h3 style='margin-right:20%; margin-left: 20%;color: #0C0C0C;'>START DATE: Feb 22nd 2026<br>END DATE: Mar. 1st 2026<br>IDEAL TAP DATE: Feb 29th 2026<br>"
//     } else{
//         console.log('ugh')

//     }
// }


function showSMS(){
    console.log("I am tired")
    // document.getElementById("sms").innerHTML ="<br><h3 style='margin-right:20%; margin-left: 20%;color: #0C0C0C;'>Want to review SMS updates? Enter your phone number</h3><input type='text' id='trees' name ='trees' placeholder='###-###-####' style = 'font-family: Poppins; font-size: 16px;' size= '40;'><br><br> <button type='submit' id = 'numberSubmit' style='font-family: Poppins; font-size: 18px;'>Enter</button>"
}

// document.getElementById("numberSubmit").onclick = function(){
//     textLocation = document.getElementById("numberSubmit").value;
//     console.log(valueNumber);
// }

// function hideNumber(){
//     document.getElementById("sms").innerHTML ="<br><h3 style='margin-right:20%; margin-left: 20%;color: #0C0C0C;'>Number accepted! <br> 'valueNumber'</h3>"
// }
