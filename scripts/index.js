console.log("Hello, World");
//make the edit profile button open the edit profile form and make the x-icon remove the modal_is-open.
//create the varible using the const = document.querySelector(name the class);
const ediProfileBtn = document.querySelector(".profile__edi-button");
//create another varible using the const = document.qerySelector(use a # to identify the id);
const editProfileModal = document.querySelector("#edit-profile-modal");
//create another varible were editProfileModal is neated inside of the close button varible.
const editProfileCloseBtn = editProfileModal.querySelector(
  ".modal__close-button",
);
//this part is for the new post element.
const newPostBtn = document.querySelector(".profile__add-button");
//create another varible using the const = document.querySelector(use # to identify the id);
const newPostModal = document.querySelector("#new-post-modal");
//create another varible were newPostModal is neated inside of the close button varible for the new post.
const newPostCloseBtn = newPostModal.querySelector(".modal__close-button");

//for the profile edit button - add an eventListeren with the "click" function ()
ediProfileBtn.eventListener("click", function () {
  editProfileModal.classlist.add("modal_is-opened");
});
//this bit removes the visibility of the modal aka removes the modal modal_is-open in HTML.
editProfileCloseBtn.eventListener("click", function () {
  editProfileModal.classList.remove("modal_is-opened");
});
//this bit is connected to the new post button.
newPostBtn.eventListener("click", function () {
  //this bit opens the modal in the same way we use modal modal_is-open in HTML.
  newPostModal.classlist.add("modal_is-opened");
});
newPostCloseBtn.eventListener("click", function () {
  newPostModal.classList.remove("modal_is-opened");
});
