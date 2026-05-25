document.getElementById('exportBtn').addEventListener('click', () => {
  // Query all tabs in the current window
  chrome.tabs.query({ currentWindow: true }, (tabs) => {
    let content = "Browser Tabs:\n\n";

    tabs.forEach((tab) => {
      content += `${tab.title}\n${tab.url}\n\n\n`;
    });

    // Create a Blob (Binary Large Object) for the text data
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);

    // Use the Chrome downloads API to save the file
    chrome.downloads.download({
      url: url,
      filename: 'my_tabs.txt',
      saveAs: true
    });
  });
});