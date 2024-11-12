// src/utils/copyToClipboard.js
export function copyToClipboard(text) {
    return navigator.clipboard.writeText(text)
      .then(() => {
        alert("Copied to clipboard!");
      })
      .catch(err => {
        console.error("Failed to copy text: ", err);
        throw err;
      });
  }
