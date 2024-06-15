/*
    Aileen Shi
    6/15/24
    CPSC 3750

    JS for navbar
*/
// Load navbar when content loaded
document.addEventListener("DOMContentLoaded", function() {
    async function fetchHtml() {
        const navContainer = document.createElement("div");
        navContainer.classList.add("nav-container");
        const primary = "navbar.html";
        const backUp = "../navbar.html";

        try {
            let response = await fetch(primary);
            if (!response.ok) {
                throw new Error("primary failed: ${response.status}");
            }
            let html = await response.text();
            navContainer.innerHTML = html;
            document.body.insertBefore(navContainer, document.body.firstChild);
        } catch (error) {
            try {
                let response = await fetch(backUp);
                if (!response.ok) {
                    throw new Error("backup failed: ${response.status}");
                }
                let html = await response.text();
                navContainer.innerHTML = html;
                document.body.insertBefore(navContainer, document.body.firstChild);
            } catch (backUpError) {
                console.error("backup failed:", backUpError);
                navContainer.innerHTML = "Failed to load";
            }
        }
    }
    fetchHtml();
});