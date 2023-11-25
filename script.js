
document.getElementById("fileInput").addEventListener("change", function () {
  let file = this.files[0];
  let fileSize = file.size / 1024; // Fayl hajmini KB-ga o'tkazish
  console.log("Fayl hajmi: " + fileSize + " KB");
});
