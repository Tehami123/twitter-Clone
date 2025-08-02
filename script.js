function showmorepeople() {
    const morePeopleSection = document.getElementById('morepeople');
    if (morePeopleSection.classList.contains('hidden')) {
        morePeopleSection.classList.remove('hidden');
    } else {
        morePeopleSection.classList.add('hidden');
    }
    const showMoreButton = document.getElementById('buttonshow');
    if (showMoreButton.textContent === 'Show More') {
        showMoreButton.textContent = 'Show Less';
    } else {
        showMoreButton.textContent = 'Show More';
    }
}
   
function showmorepeople2() {
    const morePeopleSection = document.getElementById('morepeople2');
    if (morePeopleSection.classList.contains('hidden')) {
        morePeopleSection.classList.remove('hidden');
    } else {
        morePeopleSection.classList.add('hidden');
    }
    const showMoreButton = document.getElementById('buttonshow2');
    if (showMoreButton.textContent === 'Show More') {
        showMoreButton.textContent = 'Show Less';
    } else {
        showMoreButton.textContent = 'Show More';
    }
}
   
 function Main() {
  
 document.getElementById("dude-content")
   let posttweet = document.querySelector(".Postingtweet")
 





// posttweet.addEventListener("click", () => {
//   console.log("Post button clicked!");
//   let tweet = document.querySelector(".posttweet");
//   let inputcontent = document.getElementById("inputcontent").value;

//   tweet.innerHTML = `
//     <div class="posttweet flex gogo gap-3 m-3">
//       <img class="w-10 h-10 rounded-4xl" src="https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png" alt="">
//       <div class="w-full">
//         <h2 class="username font-semibold">Developer</h2>
//         <p class="usernamesmall text-sm text-gray-400">@Slim_Shady4567</p>
//         <p class="text-sm mt-2">${inputcontent}</p>
//         <div class="flex gap-3 mt-2">
//           <button class="bg-blue-600 hover:bg-blue-800 rounded-full px-3 py-1 font-bold text-sm">Reply</button>
//           <button class="bg-blue-600 hover:bg-blue-800 rounded-full px-3 py-1 font-bold text-sm">Retweet</button>
//           <button class="bg-blue-600 hover:bg-blue-800 rounded-full px-3 py-1 font-bold text-sm">Like</button>
//           <button class="bg-blue-600 hover:bg-blue-800 rounded-full px-3 py-1 font-bold text-sm">Share</button>
//         </div>
//       </div>
//     </div>
//   `;
// });
   posttweet.addEventListener("click", ()=>{
    let inputcontent = document.getElementById("inputcontent").value;
    let Yourusername = document.querySelector("#YourUsername").value;
    let YourName = "@" + document.querySelector("#YourName").value;
    if(inputcontent === ""){
      Li.innerHTML = ""
    }
console.log("Post button clicked!");


let Li = document.createElement("li")
Li.innerHTML = `


<div class="posttweet flex gogo gap-3 m-3">
<img class="w-10 h-10 rounded-4xl" src="https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png" alt="">
<div class="w-full">
<h2 class="username font-semibold">${Yourusername}</h2>
<p class="usernamesmall text-sm text-gray-400">${YourName}</p>
<p id="dude-content" class="text-sm mt-2">${inputcontent}</p>
<div class="flex gap-3 mt-2">
<button class="bg-blue-600 hover:bg-blue-800 rounded-full px-3 py-1 font-bold text-sm replying" onclick="Replyingok">Reply</button>
<button class="bg-blue-600 hover:bg-blue-800 rounded-full px-3 py-1 font-bold text-sm">Retweet</button>
<button class="bg-blue-600 hover:bg-blue-800 rounded-full px-3 py-1 font-bold text-sm">Like</button>
<button class="bg-blue-600 hover:bg-blue-800 rounded-full px-3 py-1 font-bold text-sm">Share</button>
</div>
</div>
</div>  
</div>  
`;
let tweet = document.querySelector(".posttweet")
tweet.appendChild(Li)

    
  //  i wrote all this code to add the content of the input field to the tweet section
  //  it will be added to the tweet section when the post button is clicked
  // also i used copilot only for one thing and i realised that i didnt type .value in inputcontent
  //  so i had to type it manually
  // and yeah i am proud of this code
  //  but i am not proud of the fact that i had to use copilot for this becuase it was just 1 small mistake of not using .value

 
 
    });



  
  }




  Main()

function Replyingok(){
console.log("reply button clicked")

}


  function accountinfo(){
     let YourName = "@" + document.querySelector("#YourName").value;
    let Yourusername = document.querySelector("#YourUsername").value;
 let youraccount = document.querySelector(".YourAccount")
   youraccount.innerHTML =`<div class="flex"> 
             <img class="flex justify-end w-10 h-10 rounded-4xl" src="https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png" alt="">
             <div class="grid ">
             <div class="font-semibold">${Yourusername}</div>
             <div class=" text-[11px] font-normal">${YourName}</div>
             </div>
             </div>`;

  }
  


    function openForm() {
    document.getElementById("signupModal").classList.remove("hidden");
  }

  function closeForm() {
    document.getElementById("signupModal").classList.add("hidden");
  }
// function openfollowingpage(){


// if(document.getElementsByClassName(".third").style.display = "none"){
// // document.querySelector(".thrice").style.display = "none"
// }
// else{
//   document.querySelector(".thrice").style.display = "block"
// }

// }
function maxwidth(){
  if(window.matchMedia("(max-width:660px)").matches){
document.querySelector(".thrice").style.display = "block"
document.querySelector(".whatshappening").classList.add("hidden")
  }
}
function openforyoupage(){
document.querySelector(".whatshappening").classList.remove("hidden")
document.querySelector(".posttweet").classList.remove("hidden")
if(window.matchMedia("(max-width:660px)").matches){
document.querySelector(".thrice").style.display = "none"

  }
}


  function displaynotcontainer(){
 if(`max-width:950px`){
document.querySelector(".phone").classList.remove("container")
 }
}
displaynotcontainer()



 const signUpBtn = document.getElementById('signUpBtn');
    const signUpModal = document.getElementById('signUpModal');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const modalOverlay = document.getElementById('modalOverlay');


    // Function to open the modal
    const openModal = () => {
        signUpModal.classList.remove('hidden');
    };

    // Function to close the modal
    const closeModal = () => {
        signUpModal.classList.add('hidden');
    };

    // Event Listeners
    // 1. Open the modal when the sign-up button is clicked
    signUpBtn.addEventListener('click', openModal);

    // 2. Close the modal when the close button (X) is clicked
    closeModalBtn.addEventListener('click', closeModal);

    // 3. Close the modal when the dark overlay is clicked
    modalOverlay.addEventListener('click', closeModal);

    // Optional: Close the modal when the 'Escape' key is pressed
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && !signUpModal.classList.contains('hidden')) {
            closeModal();
        }
    });


function openaccount(){
 let yourrealaccount = document.querySelector(".YourAccountopen")
 yourrealaccount.innerHTML = `
   <div id="signUpModal" class="hidden fixed inset-0 z-50">
        <div class="fixed inset-0 bg-black bg-opacity-60" id="modalOverlay"></div>

        <div class="relative bg-white rounded-lg shadow-xl p-8 m-4 max-w-md w-full mx-auto my-auto">
            
            <button id="closeModalBtn" class="absolute top-4 right-4 text-gray-500 hover:text-gray-800">
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            <h2 class="text-2xl font-bold mb-6 text-gray-800">Create Your Account</h2>
            
            <form>
                <div class="mb-4">
                    <label for="name" class="block text-gray-700 text-sm font-bold mb-2">Full Name</label>
                    <input type="text" id="name" class="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-400" placeholder="e.g., John Doe">
                </div>
                 <div class="mb-4">
                    <label for="username" class="block text-gray-700 text-sm font-bold mb-2">Username</label>
                    <input type="text" id="username" class="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-400" placeholder="e.g., johndoe99">
                </div>
                <div class="mb-4">
                    <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
                    <input type="email" id="email" class="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-400" placeholder="you@example.com">
                </div>
                <div class="mb-6">
                    <label for="password" class="block text-gray-700 text-sm font-bold mb-2">Password</label>
                    <input type="password" id="password" class="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-400" placeholder="••••••••••">
                </div>
                <div class="flex items-center justify-end">
                    <button class="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline" type="button">
                        Sign Up
                    </button>
                </div>
            </form>
        </div>
    </div>
    
  `
}

    //  <div class="flex items-center gap-3">
    //         <img class="w-10 h-10 rounded-full" src="https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png" alt="">
    //         <div>
    //             <h3 class="username font-bold">User ${i + 1}</h3>
    //             <p>This is a sample tweet content for user ${i + 1}.</p>
    //         </div>
    //     </div>
    //     <div class="mt-2">
    //         <button class="text-blue-500 hover:underline">Reply</button>
    //         <button class="text-blue-500 hover:underline ml-2">Retweet</button>
    //         <button class="text-blue-500 hover:underline ml-2">Like</button>
    //     </div>