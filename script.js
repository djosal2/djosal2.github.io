function checkStatus() {
    const defended = document.querySelector('input[name="defended"]:checked').value;
    const salary = document.querySelector('input[name="salary"]:checked').value;
    const resultDiv = document.getElementById("result");

    let result;
    if (defended === "yes" && salary === "yes") {
        result = "You truly are a PhD! Congrats! Feeling all high and mighty now aren't ya!";
    } else if (defended === "yes" && salary === "no") {
        result = "You are not really a PhD...try harder...";
    } else if (defended === "no" && salary === "yes") {
        result = "Cheater! How?? Teach me!!! Please...";
    } else {
        result = "You no doctor..why you no doctor yet. Talk to me when you doctor.";
    }

    resultDiv.textContent = result;
}