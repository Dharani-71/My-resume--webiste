document.addEventListener('DOMContentLoaded', function() {
    console.log("Page loaded successfully!");
});
function toggleDescription(projectId) {
    const description = document.getElementById(projectId);
    if (description.style.display === "none") {
        description.style.display = "block";
    } else {
        description.style.display = "none";
    }
}
