document.addEventListener("DOMContentLoaded", function () {
  const statusDiv = document.getElementById("status");
  const checkButton = document.getElementById("checkStatus");

  checkButton.addEventListener("click", async function () {
    statusDiv.textContent = "Prüfe Status...";
    statusDiv.className = "my-4 p-3 bg-gray-100 border border-gray-300 rounded";

    try {
      const response = await fetch("/api/status");
      const data = await response.json();

      statusDiv.textContent = `Status: ${data.status}, Container: ${
        data.container
      }, Zeit: ${new Date(data.timestamp).toLocaleTimeString()}`;
      statusDiv.className = "my-4 p-3 bg-green-100 border border-green-300 text-green-700 rounded";
    } catch (error) {
      statusDiv.textContent = "Fehler beim Prüfen des Status.";
      statusDiv.className = "my-4 p-3 bg-red-100 border border-red-300 text-red-700 rounded";
    }
  });
});
