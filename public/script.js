document.addEventListener('DOMContentLoaded', () => {
  const inputUrl = document.getElementById('input-url');
  const snipBtn = document.getElementById('snip-btn');
  const shortUrlInput = document.getElementById('short-url');
  const copyBtn = document.getElementById('copy-btn');
  const resultDiv = document.getElementById('result');

  snipBtn.addEventListener('click', async () => {
      const longUrl = inputUrl.value.trim();

      if (longUrl) {
          try {
              const response = await fetch('/api/short', { // Your backend shortening endpoint
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({ origUrl: longUrl })
              });

              const data = await response.json();

              if (response.ok) {
                  shortUrlInput.value = data.shortUrl;
                  resultDiv.classList.remove('border', 'border-1'); // Remove initial border
                  resultDiv.classList.add('border', 'border-success', 'border-2'); // Add success styling
              } else {
                  shortUrlInput.value = data.error || 'Failed to shorten URL.';
                  resultDiv.classList.remove('border', 'border-1');
                  resultDiv.classList.add('border', 'border-danger', 'border-2'); // Add error styling
              }
          } catch (error) {
              console.error('Error shortening URL:', error);
              shortUrlInput.value = 'Network error. Please try again.';
              resultDiv.classList.remove('border', 'border-1');
              resultDiv.classList.add('border', 'border-danger', 'border-2'); // Add error styling
          }
      } else {
          shortUrlInput.value = 'Please enter a valid URL.';
          resultDiv.classList.remove('border', 'border-1');
          resultDiv.classList.add('border', 'border-warning', 'border-2'); // Add warning styling
      }
  });

  copyBtn.addEventListener('click', async () => {
      const shortUrlToCopy = shortUrlInput.value;

      if (shortUrlToCopy) {
          try {
              await navigator.clipboard.writeText(shortUrlToCopy);
              alert('Short URL copied to clipboard!'); // Or a more subtle UI feedback
          } catch (err) {
              console.error('Failed to copy:', err);
              alert('Failed to copy URL to clipboard.');
          }
      } else {
          alert('No short URL to copy.');
      }
  });
});