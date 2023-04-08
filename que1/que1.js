const inputFiles = document.querySelector('input[type="file"]');
inputFiles.webkitdirectory = true;
inputFiles.addEventListener('change', (event) => {
  const files = event.target.files;

  for (let i = 0; i < files.length; i++) {
    console.log(files[i].name);
  }
});


