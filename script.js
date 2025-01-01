function drawSpeedometer(needleValue) {
  // Speedometer drawing logic
}

function animateNeedle(toValue) {
  // Needle animation logic
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

function saveLastResults(download, upload, latency, jitter, packetLoss) {
  const results = `Download: ${download} Mbps, Upload: ${upload} Mbps, Latency: ${latency} ms, Jitter: ${jitter} ms, Packet Loss: ${packetLoss}%`;
  localStorage.setItem("lastResults", results);
  document.getElementById("last-results").textContent = results;
}

function loadLastResults() {
  const lastResults = localStorage.getItem("lastResults");
  if (lastResults) {
    document.getElementById("last-results").textContent = lastResults;
  }
}

function updateProgress(message, percentage) {
  document.getElementById("progress-message").textContent = message;
  document.getElementById("progress-bar").style.width = `${percentage}%`;
}

function startSpeedTest() {
  const server = document.getElementById("server").value;
  updateProgress(`Connecting to ${server} server...`, 10);

  setTimeout(() => {
    const downloadSpeed = Math.floor(Math.random() * 100);
    document.getElementById("download-speed").textContent = downloadSpeed;
    animateNeedle(downloadSpeed);
    updateProgress("Testing upload speed...", 50);

    setTimeout(() => {
      const uploadSpeed = Math.floor(Math.random() * 50);
      document.getElementById("upload-speed").textContent = uploadSpeed;
      updateProgress("Measuring latency and jitter...", 75);

      setTimeout(() => {
        const latency = Math.floor(Math.random() * 100);
        const jitter = Math.floor(Math.random() * 20);
        const packetLoss = Math.floor(Math.random() * 5);

        document.getElementById("latency").textContent = latency;
        document.getElementById("jitter").textContent = jitter;
        document.getElementById("packet-loss").textContent = packetLoss;

        saveLastResults(downloadSpeed, uploadSpeed, latency, jitter, packetLoss);
        updateProgress("Test complete!", 100);
      }, 2000);
    }, 2000);
  }, 2000);
}

// Load last results on page load
window.onload = loadLastResults;