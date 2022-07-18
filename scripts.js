// TODO - We need to listen to what is being submitted in the form
document
  .querySelector("#dest_details_form")
  .addEventListener("submit", (event) => {
    event.preventDefault();

    // TODO - We need to retrieve the values of what the user inputs in all the elements and then store them in variables
    var destName = event.target.elements["dest_name"].value;
    var destLocation = event.target.elements["location"].value;
    var destPhoto = event.target.elements["photo"].value;
    var destDescription = event.target.elements["description"].value;

    // TODO - Create a form reset for a new input
    resetFormValues(event.target);

    // TODO - Create a destination card using the form element values
    var destCard = createDestinationCard(
      destName,
      destLocation,
      destPhoto,
      destDescription
    );

    var destContainer = document.querySelector("#dest_container");

    // TODO - Append my destCard in the dest_container div
    document.querySelector("dest_container").appendChild(destCard);
  });

// TODO - Reset all values in the forms

// TODO - Create my bootstrap cards with the destination details
