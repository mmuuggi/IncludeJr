const getScrollTopByHref = (element) => {
  const id = element.getAttribute("href");
  const section = document.querySelector(id).offsetTop;
  return section;
};

const scrollToPosition = (to) => {
  window.scroll({
    top: to,
    behavior: "smooth",
  });
};

const scrollToIdOnClick = (event) => {
  event.preventDefault();
  const above = 80;
  const to = getScrollTopByHref(event.target) - above;

  scrollToPosition(to);
};

document.querySelectorAll('.Header a[href^="#"]').forEach((item) => {
  item.addEventListener("click", scrollToIdOnClick);
});
