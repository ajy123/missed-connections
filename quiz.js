const quiz_data = [
  {
    borough: "manhattan",
    // 'physical attribute': ['dark skin', 'blue eyes', 'red nails', 'dark hair'],
    "physical attribute": ["dark skin", "blue eyes", "red nails"],
    clothing: [
      "black dress",
      "black polo",
      "white short sleeve",
      "hat",
      "grey pants",
      "navy suit jacket",
      "pink flower dress",
      "Hawaiian shirt",
    ],
    Accessories: [
      "heart shaped sunglasses",
      "white sunglasses",
      "headphones",
      "AirPods",
    ],
    "location places": ["park", "train"],
    activities: ["running", "reading", "shopping", "dining"],
  },
  {
    borough: "brooklyn",
    "physical attribute": ["curly hair", "dark hair"],
    clothing: [
      "black dress",
      "blue shorts",
      "grayish dress",
      "black sambas",
      "tan jacket",
      "blue Argentina jersey",
      "Nirvana shirt",
    ],
    Accessories: ["hat (backwards)", "5 toes shoes", "AirPods"],
    "location places": ["park", "train", "Joe’s Pizza"],
    // 'location places': ['Joe’s Pizza'],
    activities: ["dancing", "biking", "racing", "staring", "reading"],
  },
  {
    borough: "queens",
    "physical attribute": ["beard", "blue eye", "bleach hair"],
    clothing: ["lime green dress", "adidas black sweatshirt", "khaki pants"],
    activities: [
      "rock climbing",
      "training",
      "dominating pool table",
      "reading",
    ],
  },
  {
    borough: "bronx",
    clothing: ["black shirt", "jean shorts", "tight dress", "green tee"],
    activities: [
      "talked Lego",
      "guzzled Sprite",
      "play outdoors",
      "getting Starbucks",
    ],
  },
  {
    borough: "statenisland",
    clothing: ["white dress", "dress pants"],
    activities: ["buying cigarettes", "biking"],
  },
];

const resetBtn = document.getElementById("reset-btn");
const clothingContainer = document.getElementById("clothing-container");
const boroughSpans = document.querySelectorAll(".borough");

function renderClothingChips() {
  const clothingItems = new Set();
  quiz_data.forEach((data) =>
    data.clothing.forEach((item) => clothingItems.add(item))
  );

  clothingItems.forEach((item) => {
    const chip = document.createElement("span");
    chip.className =
      "inline-flex items-center bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-blue-200 dark:text-blue-800 cursor-pointer";
    chip.innerText = item;
    chip.addEventListener("click", () => {
      highlightBoroughs(item);
      showCloseButton(chip);
    });

    clothingContainer.appendChild(chip);
  });
}

function showCloseButton(chip) {
  // Remove existing close buttons
  document.querySelectorAll(".chip-close-btn").forEach((btn) => btn.remove());

  const closeButton = document.createElement("button");
  closeButton.className =
    "ml-2 text-blue-800 focus:outline-none chip-close-btn";
  closeButton.innerHTML = "&times;";
  closeButton.addEventListener("click", (event) => {
    event.stopPropagation(); // Prevent triggering the chip click event
    chip.classList.remove("bg-yellow-200");
    closeButton.remove();
  });

  chip.appendChild(closeButton);
  resetBtn.classList.remove("bg-gray-400");
  resetBtn.classList.add("bg-blue-700");
  resetBtn.classList.remove("cursor-not-allowed");
}

function highlightBoroughs(clothingItem) {
  //   boroughSpans.forEach((span) => span.classList.remove("bg-yellow-200"));
  quiz_data.forEach((data) => {
    if (data.clothing.includes(clothingItem)) {
      const boroughSpan = document.getElementById(data.borough.toLowerCase());
      boroughSpan.classList.remove("bg-blue-600");
      boroughSpan.classList.add("bg-yellow-300");
      console.log(boroughSpan);
    }
  });
}

renderClothingChips();
// Reset all chips to default state
resetBtn.addEventListener("click", () => {
  // remove all the borough highlight
  const boroughSpan = document.getElementsByClassName("borough");
  console.log(boroughSpan);
  for (let span of boroughSpans) {
    span.classList.remove("bg-yellow-200");
    span.classList.add("bg-blue-600");
  }
  clothingContainer.innerHTML = "";
  if (!clothingContainer.classList.contains("hidden")) {
    renderClothingChips();
  }
});
