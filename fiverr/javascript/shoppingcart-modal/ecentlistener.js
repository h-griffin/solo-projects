//FILTERS CHECKBOXES
function checkBoxOpt() {
    // Select all checkboxes with the name 'settings' using querySelectorAll.
    // Get all checkboxes as a NodeList
    // var checkboxes = document.querySelectorAll("input[type=checkbox][name=laboratorio]");
    var checkboxes = document.querySelectorAll("input[type=checkbox]");
    // Convert checkboxes NodeList to an array
    var checkboxesArr = Array.from(checkboxes);
    let enabledSettings = []

    // Use Array.forEach to add an event listener to each checkbox.
    console.log(checkboxes);
    console.log(checkboxesArr);

    checkboxesArr.forEach(function(checkbox) {
      alert("boo");
    checkbox.addEventListener('change', function() {
      enabledSettings =
        Array.from(checkboxesArr) // Convert checkboxes to an array to use filter and map.
        .filter(i => i.checked) // Use Array.filter to remove unchecked checkboxes.
        .map(i => i.value) // Use Array.map to extract only the checkbox values from the array of objects.

      console.log(enabledSettings)
      alert("hola");
    })
  });
}
