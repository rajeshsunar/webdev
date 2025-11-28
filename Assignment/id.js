document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formSection");
  const card = document.getElementById("idCard");

  const nameIn = document.getElementById("name");
  const idIn = document.getElementById("idNum");
  const courseIn = document.getElementById("course");
  const photoIn = document.getElementById("photo");

  const showName = document.getElementById("showName");
  const showId = document.getElementById("showId");
  const showCourse = document.getElementById("showCourse");
  const cardPhoto = document.getElementById("cardPhoto");

  let photoURL = "";

  // Photo preview
  photoIn.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (file) {
      photoURL = URL.createObjectURL(file);
      cardPhoto.src = photoURL;
    }
  });

  // Generate card
  document.getElementById("generateBtn").addEventListener("click", () => {
    const name = nameIn.value.trim();
    const id = idIn.value.trim();
    const course = courseIn.value.trim();

    if (!name || !id || !course || !photoURL) {
      alert("Please fill all fields and upload a photo");
      return;
    }

    showName.textContent = name;
    showId.textContent = id;
    showCourse.textContent = course;
    cardPhoto.src = photoURL;

    form.classList.add("hidden");
    card.classList.remove("hidden");
  });
});