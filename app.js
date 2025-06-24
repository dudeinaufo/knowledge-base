/* --------------- DISPLAYS CONTENT WHEN LINKS ARE CLICKED --------------- */

const topicLinks = document.querySelectorAll('[data-topic]');

topicLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const key = link.getAttribute('data-topic');
    contentSection.innerHTML = topicHTML[key] || '<p>Content not found.</p>';
  });
});





/* --------------- KEEPS DROPDOWN OPEN WHEN MENU CATEGORY IS SELECTED --------------- */

document.addEventListener("DOMContentLoaded", () => {
  const toggles = document.querySelectorAll("nav ul li > a.toggle");

  toggles.forEach(toggle => {
    toggle.addEventListener("click", () => {
      const parentLi = toggle.parentElement;
      parentLi.classList.toggle("open");
    });
  });
});





/* --------------- COPY BUTTONS THAT CALL MORE THAN ONE FUNCTION --------------- */

//Button 1
function copy_functions1() {
  copy_text1();
  change_text_color1("copy_button1", "textToCopy1", "#888", "rgb(194, 194, 194)");
}

//Button 2
function copy_functions2() {
  copy_text2();
  change_text_color2("copy_button2", "textToCopy2", "#888", "rgb(194, 194, 194)");
}

//Button 2
function copy_functions3() {
  copy_text3();
  change_text_color2("copy_button3", "textToCopy3", "#888", "rgb(201, 103, 67)");
}






/* --------------- COPIES TEXT WHEN COPY BUTTON IS PRESSED --------------- */

//Button 1
function copy_text1() {
  const element = document.getElementById("textToCopy1");
  const html = element.innerHTML;
  const text = element.innerText;
  const blobHTML = new Blob([html], { type: "text/html" });
  const blobText = new Blob([text], { type: "text/plain" });
  const clipboardItem = new ClipboardItem({
    "text/html": blobHTML,
    "text/plain": blobText
  });
  navigator.clipboard.write([clipboardItem])
}

//Button 2
function copy_text2() {
  const element = document.getElementById("textToCopy2");
  const html = element.innerHTML;
  const text = element.innerText;
  const blobHTML = new Blob([html], { type: "text/html" });
  const blobText = new Blob([text], { type: "text/plain" });
  const clipboardItem = new ClipboardItem({
    "text/html": blobHTML,
    "text/plain": blobText
  });
  navigator.clipboard.write([clipboardItem])
}

//Button 3
function copy_text3() {
  const element = document.getElementById("textToCopy3");
  const html = element.innerHTML;
  const text = element.innerText;
  const blobHTML = new Blob([html], { type: "text/html" });
  const blobText = new Blob([text], { type: "text/plain" });
  const clipboardItem = new ClipboardItem({
    "text/html": blobHTML,
    "text/plain": blobText
  });
  navigator.clipboard.write([clipboardItem])
}





/* --------------- TEMPORARILY CHANGES TEXT COLOR WHEN COPY BUTTON IS PRESSED --------------- */

//Button 1
function change_text_color1(buttonId, textId, activeColor, defaultColor) {
  const button = document.getElementById(buttonId);
  const text = document.getElementById(textId);

  const setActive = () => text.style.color = activeColor;
  const setDefault = () => text.style.color = defaultColor;

  button.addEventListener("mousedown", setActive);
  button.addEventListener("mouseup", setDefault);
  button.addEventListener("mouseleave", setDefault);
}

//Button 2
function change_text_color2(buttonId, textId, activeColor, defaultColor) {
  console.log("Page has loaded!");
  const button = document.getElementById(buttonId);
  const text = document.getElementById(textId);

  const setActive = () => text.style.color = activeColor;
  const setDefault = () => text.style.color = defaultColor;

  button.addEventListener("mousedown", setActive);
  button.addEventListener("mouseup", setDefault);
  button.addEventListener("mouseleave", setDefault);
}

//Button 3
function change_text_color3(buttonId, textId, activeColor, defaultColor) {
  console.log("Page has loaded!");
  const button = document.getElementById(buttonId);
  const text = document.getElementById(textId);

  const setActive = () => text.style.color = activeColor;
  const setDefault = () => text.style.color = defaultColor;

  button.addEventListener("mousedown", setActive);
  button.addEventListener("mouseup", setDefault);
  button.addEventListener("mouseleave", setDefault);
}





/* --------------- IMAGE CAROUSEL --------------- */

const observer = new MutationObserver(() => {
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  const images = document.querySelectorAll('.carousel img');

  if (prevBtn && nextBtn && images.length > 0) {

    let current = 0;
    function updateCarousel(index) {
      images.forEach((img, i) => {
        img.classList.toggle('active', i === index);
      });
    }

    prevBtn.addEventListener('click', () => {
      current = (current - 1 + images.length) % images.length;
      updateCarousel(current);
    });

    nextBtn.addEventListener('click', () => {
      current = (current + 1) % images.length;
      updateCarousel(current);
    });
  }
});

observer.observe(document.body, { childList: true, subtree: true });