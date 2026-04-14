function validateForm() {
    const major = document.getElementById("major").value;
    const interests = [];

    if (major == "major-select") {
        alert("Please select a major.");
        return false;
    }

    if (document.getElementById("sports").checked) {
        interests.push("sports");
    } 
    if (document.getElementById("music").checked) {
        interests.push("music");
    }
     if (document.getElementById("art").checked) {
        interests.push("art");
    } 
    if (document.getElementById("technology").checked) {
        interests.push("technology");
    } 
    
    if (interests.length == 0){
        alert("Please select at least one interest.");
        return false;
    }
    localStorage.setItem("major", major);
    localStorage.setItem("interests", JSON.stringify(interests));
    return true;
}