// 5 Projet with DOM
// 1. Add friend features with same button
// 2. Insta like btn
// 3. custom cursor
// 4. Multiple Image hovering Animation
// 5. Insta Story Feature
//++++++++++++++++++++++++++++++++++++++++++++
// 1. Add friend features with same button:

let istatus = document.querySelector("h5");
let btn = document.querySelector("#add");
check = 0;

btn.addEventListener("click", function () {
  if (check == 0) {
    istatus.innerHTML = "Friends";
    istatus.style.color = "green";
    btn.innerHTML = "Remove Friend";
    
    check = 1;
  } else {
    istatus.innerHTML = "Remove";
    istatus.style.color = "red";
    btn.innerHTML = "Add Friend";
    
    check = 0;
  }
});

// Diffrent Button like Remove:____

// let removeFriend = document.querySelector("#remove");

// removeFriend.addEventListener("click", function () {
//   istatus.innerHTML = "Remove";
//   istatus.style.color = "red";
// });
