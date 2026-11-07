// Edit Profile Modal Elements
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileNameInput = editProfileModal.querySelector(
  "#profile-name-input",
);
const editProfileDescriptionInput = editProfileModal.querySelector(
  "#profile-description-input",
);
const editProfileForm = editProfileModal.querySelector(".modal__form");

// New Post Modal Elements
const newPostModal = document.querySelector("#new-post-modal");
const newPostCaptionInput = newPostModal.querySelector("#post-caption-input"); //either change the name of this element or add it either way I want to implement this in my code. For All of NewPOST related points.
const newPostUrlInput = newPostModal.querySelector("#post-url-input");
const newPostForm = newPostModal.querySelector("#new-post-form");

// Profile Display Elements (Target text content in the DOM)
const profileNameElement = document.querySelector(".profile__name");
const profileDescriptionElement = document.querySelector(
  ".profile__description",
);
// Profile Form Field Elements (Target inputs inside the form)
const editInputNameElement = document.querySelector("#profile-name-input");
const editInputDescElement = document.querySelector(
  "#profile-description-input",
);
//this is for the save button on the form
const newPostSaveBtn = newPostModal.querySelector("#new-post-save-btn");
//const cardList = document.queryselector(".cards__list"); //Cards Gallery Elements (Where new cards get added) idea

// this is the my reusable open/closing elements modals.
// Handle all Open and Close clicks across the entire page dynamically
document.addEventListener("click", function (evt) {
  // A. Check if any button with data-action="open-modal" was clicked
  const openBtn = evt.target.closest('[data-action="open-modal"]');
  if (openBtn) {
    const targetSelector = openBtn.getAttribute("data-target");
    const modal = document.querySelector(targetSelector);

    if (modal) {
      modal.classList.add("modal_is-opened");

      // If the opened modal is the profile editor, auto-fill current info into fields
      if (targetSelector === "#edit-profile-modal") {
        editInputNameElement.value = profileNameElement.textContent;
        editInputDescElement.value = profileDescriptionElement.textContent;
      }
    }
    return; // Exit listener early since we handled the open action
  }

  // B. Check if any close button with data-action="close-modal" was clicked
  const closeBtn = evt.target.closest('[data-action="close-modal"]');
  if (closeBtn) {
    // Find the opened parent modal overlay container and close it
    const modal = evt.target.closest(".modal_is-opened");
    if (modal) {
      modal.classList.remove("modal_is-opened");
    }
  }
});

// Close any open modal automatically when the user presses the 'Escape' key
window.addEventListener("keydown", function (evt) {
  if (evt.key === "Escape") {
    // Select all currently open modals on the page and close them
    const openedModals = document.querySelectorAll(".modal_is-opened");
    openedModals.forEach(function (modal) {
      modal.classList.remove("modal_is-opened");
    });
    if (closeBtn || isBackdropClick) {
      // If a close button was clicked, find its parent modal. Otherwise, use the clicked overlay itself.
      const modal = closeBtn
        ? evt.target.closest(".modal_is-opened")
        : evt.target;
      if (modal) {
        modal.classList.remove("modal_is-opened");
      }
    }
  }
});

//this line below: this function handles the form submittion and prevents the page from refeashing.
function handleProfileFormSubmit(evt) {
  //this line below: prevents the brower from refeashing the entire page.
  evt.preventDefault();
  // these this line below: Grab the values from inputs and update the text in the DOM
  profileNameElement.textContent = editProfileNameInput.value;
  profileDescriptionElement.textContent = editProfileDescriptionInput.value;
  //this line below: Close the modal after the data is successfully updated
  editProfileModal.classList.remove("modal_is-opened");
}
// This function handles the new post form submission
function handleNewPostFormSubmit(evt) {
  evt.preventDefault();

  // 1. Grab values entered into the input fields
  const captionValue = newPostCaptionInput.value;
  const urlValue = newPostUrlInput.value;

  console.log(captionValue, urlValue);
  /*  //(work in progress idea)2. Create the HTML string template for the new card element
  const cardHTML = `
    <li class="card">
      <img src="${urlValue}" alt="${captionValue} image" class="card__image" />
      <div class="card__content">
        <h2 class="card__title">${captionValue}</h2>
        <button type="button" class="card__like-button"></button>
      </div>
    </li>
  `;

  // 3. Update the DOM by prepending the card to the beginning of the gallery list
  cardsList.insertAdjacentHTML("afterbegin", cardHTML);
*/
  // 4. Reset the form values so it's clean for the next use
  newPostForm.reset();

  // 5. Close the new post modal
  newPostModal.classList.remove("modal_is-opened");
}
//this line below: this is the submittion listener and calls the handleprofileformsubmit.
editProfileForm.addEventListener("submit", handleProfileFormSubmit);
newPostForm.addEventListener("submit", handleNewPostFormSubmit);
