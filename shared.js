var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");
var selectButtons = document.querySelectorAll(".plan button");

for (var i = 0; i < selectButtons.length; i++) {
  selectButtons[i].addEventListener("click", function () {
      modal.style.display = 'block';
      backdrop.style.display = 'block';
  });
}
