function addTimestamp() {
    const input = document.getElementById('imageInput');
    const resultDiv = document.getElementById('result');
  
    const file = input.files[0];
  
    if (file) {
      const reader = new FileReader();
  
      reader.onload = function (e) {
        const image = new Image();
        image.src = e.target.result;
  
        const timestamp = new Date().toLocaleString();
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
  
        canvas.width = image.width;
        canvas.height = image.height;
  
        ctx.drawImage(image, 0, 0);
  
        ctx.font = '16px Arial';
        ctx.fillStyle = 'black';
        ctx.fillText(timestamp, 10, 20);
  
        const updatedImage = new Image();
        updatedImage.src = canvas.toDataURL('image/png');
  
        resultDiv.innerHTML = '';
        resultDiv.appendChild(updatedImage);
      };
  
      reader.readAsDataURL(file);
    } else {
      resultDiv.innerText = 'Please select an image.';
    }
  }
// Function to add timestamp to an image
function addTimestamp() {
    // Get elements from the HTML document
    const input = document.getElementById('imageInput'); // Input file element
    const timestampInput = document.getElementById('timestampInput'); // Input for user-provided timestamp
    const resultDiv = document.getElementById('result'); // Div to display the result
  
    // Get the selected image file and user-provided timestamp
    const file = input.files[0]; // Selected image file
    const userTimestamp = timestampInput.value.trim(); // User-provided timestamp
  
    // Check if an image file is selected
    if (file) {
      // Create a FileReader to read the image file
      const reader = new FileReader();
  
      // Event handler for when the FileReader finishes reading the file
      reader.onload = function (e) {
        // Create an Image object and set its source to the read data URL
        const image = new Image();
        image.src = e.target.result;
  
        // Determine the timestamp to be displayed
        const timestamp = userTimestamp || new Date().toLocaleString();
  
        // Create a canvas element for drawing
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
  
        // Set canvas dimensions to match the image dimensions
        canvas.width = image.width;
        canvas.height = image.height;
  
        // Draw the image onto the canvas
        ctx.drawImage(image, 0, 0);
  
        // Set font and fill style for the timestamp text
        ctx.font = '16px Arial';
        ctx.fillStyle = 'black';
  
        // Adjust the position of the timestamp (bottom-left corner)
        const textWidth = ctx.measureText(timestamp).width;
        const x = canvas.width - textWidth - 10; // 10px from the right edge
        const y = canvas.height - 10; // 10px from the bottom edge
  
        // Draw the timestamp text on the canvas
        ctx.fillText(timestamp, x, y);
  
        // Create an Image object for the updated image and set its source to the canvas data URL
        const updatedImage = new Image();
        updatedImage.src = canvas.toDataURL('image/png');
  
        // Clear the result div and append the updated image
        resultDiv.innerHTML = '';
        resultDiv.appendChild(updatedImage);
      };
  
      // Read the image file as a data URL
      reader.readAsDataURL(file);
    } else {
      // If no image is selected, display an error message
      resultDiv.innerText = 'Please select an image.';
    }
  }

  // Function to add timestamp to an image
function addTimestamp() {
    // ... (no changes to this function)
  }
  
  // Function to add timestamp to an image
function addTimestamp() {
    // ... (no changes to this function)
  }
  
  // Function to process and display the image
  async function processAndDisplayImage() {
    const input = document.getElementById('imageInput');
    const timestampInput = document.getElementById('timestampInput');
    const resultDiv = document.getElementById('result');
  
    const file = input.files[0];
    const userTimestamp = timestampInput.value.trim();
  
    if (file) {
      const loadImage = () =>
        new Promise((resolve) => {
          const reader = new FileReader();
          reader.onload = (e) => {
            const image = new Image();
            image.onload = () => resolve(image);
            image.src = e.target.result;
          };
          reader.readAsDataURL(file);
        });
  
      const image = await loadImage();
  
      const timestamp = userTimestamp || new Date().toLocaleString();
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
  
      canvas.width = image.width;
      canvas.height = image.height;
  
      ctx.drawImage(image, 0, 0);
  
      ctx.font = '16px Arial';
      ctx.fillStyle = 'black';
  
      const textWidth = ctx.measureText(timestamp).width;
      const x = canvas.width - textWidth - 10;
      const y = canvas.height - 10;
  
      ctx.fillText(timestamp, x, y);
  
      const updatedImage = new Image();
      updatedImage.src = canvas.toDataURL('image/png');
  
      resultDiv.innerHTML = '';
      resultDiv.appendChild(updatedImage);
    } else {
      resultDiv.innerText = 'Please select an image.';
    }
  }
// Function to save the processed image
function saveProcessedImage() {
    const resultImage = document.getElementById('result').querySelector('img');
  
    if (resultImage) {
      const link = document.createElement('a');
      link.href = resultImage.src;
      link.download = 'processed_image.png'; // You can customize the file name here
      link.click();
    } else {
      alert('No processed image to save. Please process an image first.');
    }
  }
    