const addReviewButton = document.getElementById("add-review");

const sortChildren = (parent) => {
  const reviews = parent.querySelectorAll(".review");
  const reviewsWithNumbers = [];

  reviews.forEach((review) => {
    console.log("printing id: ", review.getAttribute("id"));
    const number = parseInt(review.getAttribute("id"));
    reviewsWithNumbers.push({ review, number });
  });

  // sorting
  reviewsWithNumbers.sort((a, b) => a.number - b.number);

  // clear parent container and add all again
  parent.innerHTML = "";
  reviewsWithNumbers.forEach((item) => {
    parent.appendChild(item.review);
  });
};

addReviewButton.addEventListener("click", (e) => {
  // TODO: get form values here, this should not be hardcoded
  e.preventDefault();

  // FORM values
  let name = "Example";
  let message = "message";

  // parameter to sort this is random: should be changed
  let value = Math.floor(Math.random() * (100 - 1 + 1)) + 1;

  const review = document.createElement("div");
  review.classList.add("review");
  review.id = value;

  // TODO: insert the form values here
  review.innerHTML = `
      <div class="header">
        <p>Name: ${name + " " + value}</p>
        <p>Full name</p>
      </div>
      <div class="message">
        <h3>Title</h3>
        <p>${message}</p>
      </div>`;

  document.querySelector(".review-container").appendChild(review);

  // TODO: sort children to ensure that "top review" is in first
  sortChildren(document.querySelector(".review-container"));
});
