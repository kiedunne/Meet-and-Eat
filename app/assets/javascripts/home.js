function openForm() {
  document.getElementById("formGroup").style.display = "block";
}

function closeForm() {
  document.getElementById("formGroup").style.display = "none";
}

// The class you click to trigger the popup
$('#signup-button').on('click', function() {
  // The Overlay fades in
  $("#formGroup").fadeIn(200, function() {});
  // The Popup fades in just after
  $(".bkg-animated").fadeIn(600, function() {});
});

function veggieAdd() {
  var Diet = document.getElementById("diet-pref").value = "vegetarian";
}

function pesciAdd() {
  var Diet = document.getElementById("diet-pref").value = "pescetarian";
}

function veganAdd() {
  var Diet = document.getElementById("diet-pref").value = "vegan";
}

function lactoAdd() {
  var Diet = document.getElementById("diet-pref").value = "lacto-vegetarian";
}

function ovoAdd() {
  var Diet = document.getElementById("diet-pref").value = "ovo-vegetarian";
}

function omniAdd() {
  var Diet = document.getElementById("diet-pref").value = "standard";
}
