const posts = [];
let counter = 0;
const LIMIT = 5;

document.addEventListener("DOMContentLoaded", init);

function init() {
  loadInitialImages();

  document.addEventListener("scroll", handleScrollEvent);
  document
    .getElementById("uploadFormTextarea")
    .addEventListener("input", adjustTextareaHeight);
  document
    .getElementById("uploadIcon")
    .addEventListener("click", () =>
      document.getElementById("fileInput").click()
    );
  document
    .getElementById("fileInput")
    .addEventListener("change", handleFileInputChange);
  document
    .getElementById("removeImage")
    .addEventListener("click", () => removeMediaPreview("image"));
  document
    .getElementById("removeVideo")
    .addEventListener("click", () => removeMediaPreview("video"));
  document
    .getElementById("uploadForm")
    .addEventListener("submit", handleFormSubmit);
}

function loadInitialImages() {
  for (let i = 0; i < 3; i++) {
    fetchAndDisplayRandomImageFromUnsplash();
  }
}

function handleFormSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const post = {
    text: formData.get("text"),
    file: formData.get("file"),
  };

  addAndDisplayPost(post, "top");
  resetUploadForm();
}

function resetUploadForm() {
  const textarea = document.getElementById("uploadFormTextarea");
  textarea.value = "";
  adjustTextareaHeight.call(textarea);

  ["image", "video"].forEach((type) => removeMediaPreview(type));
}

function addAndDisplayPost(post, position = "bottom") {
  posts.push(post);
  const postElement = createPostElement(post);

  const container = document.getElementById("posts");
  if (position === "top") {
    container.insertBefore(postElement, container.firstChild);
  } else {
    container.appendChild(postElement);
  }
}

function createPostElement(post) {
  const postElement = document.createElement("div");
  postElement.classList.add("post-card");
  postElement.innerText = post.text;

  if (post.file) {
    let mediaElem;
    if (post.file.type.startsWith("image/")) {
      mediaElem = document.createElement("img");
      mediaElem.src = post.file.url || URL.createObjectURL(post.file);
    } else if (post.file.type.startsWith("video/")) {
      mediaElem = document.createElement("video");
      mediaElem.controls = true;
      mediaElem.src = URL.createObjectURL(post.file);
    }

    if (mediaElem) postElement.appendChild(mediaElem);
  }

  return postElement;
}

function handleScrollEvent() {
  adjustStickyHeaderOpacity();
  loadMoreImagesIfNeeded();
}

function adjustStickyHeaderOpacity() {
  const stickyHeader = document.querySelector(".sticky-header");
  stickyHeader.style.opacity = window.scrollY > 0 ? "0.9" : "1";
}

function loadMoreImagesIfNeeded() {
  if (isScrolledToBottom() && counter <= LIMIT) {
    fetchAndDisplayRandomImageFromUnsplash();
    counter++;
  }
}

function isScrolledToBottom() {
  return window.innerHeight + window.scrollY > document.body.offsetHeight;
}

function handleFileInputChange() {
  const file = this.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function () {
    previewMedia(file);
  };

  reader.readAsDataURL(file);
}

function previewMedia(file) {
  const objectURL = URL.createObjectURL(file);
  const type = file.type.startsWith("image/") ? "image" : "video";

  const previewElem = document.getElementById(`${type}Preview`);
  const container = document.getElementById(`${type}Container`);

  previewElem.src = objectURL;
  container.style.display = "block";

  hideOtherMediaType(type);
}

function hideOtherMediaType(currentType) {
  const otherType = currentType === "image" ? "video" : "image";
  document.getElementById(`${otherType}Container`).style.display = "none";
}

function removeMediaPreview(type) {
  document.getElementById(`${type}Container`).style.display = "none";
  document.getElementById("fileInput").value = "";
}

function adjustTextareaHeight() {
  this.style.height = "auto";
  this.style.height = `${this.scrollHeight}px`;
}

function fetchAndDisplayRandomImageFromUnsplash() {
  const unsplashURL = "https://source.unsplash.com/random";

  fetch(unsplashURL)
    .then((response) => {
      if (!response.ok) throw new Error("Failed to fetch image from Unsplash");
      return response.url;
    })
    .then((imageURL) => {
      const post = {
        text: "Unsplash image",
        file: {
          type: "image/jpeg",
          url: imageURL,
        },
      };
      addAndDisplayPost(post);
    })
    .catch((error) =>
      console.error("Error fetching image from Unsplash:", error)
    );
}
