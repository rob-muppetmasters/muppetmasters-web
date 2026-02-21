const functionUrl = "https://web-counter-gzexcubfahdpepd5.uksouth-01.azurewebsites.net/api/GetCounter";

async function getVisitCount() {
    try {
        const response = await fetch(functionUrl);
        const data = await response.json();

        // Update the count
        document.getElementById("counter").innerText = data.count;

        // Format the "Last Updated" date to a friendly local string
        //const date = new Date(data.lastUpdated);
        //document.getElementById("update-time").innerText = "Last visit: " + date.toLocaleTimeString();
        
    } catch (error) {
        console.error("Could not fetch visitor count:", error);
        document.getElementById("counter").innerText = "Err";
    }
}

// Run the function when the page loads
window.onload = getVisitCount;
