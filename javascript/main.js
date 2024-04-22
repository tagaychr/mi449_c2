const LINES = document.querySelector("#lines");
const OFFSET = document.querySelector("#offset");
const CODE = document.querySelector("code");

const UPDATE = () => {
  document.documentElement.style.setProperty(
    "--initial",
    `${LINES.value} ${OFFSET.value}`
  );

  CODE.innerHTML = `p:first-letter {
  initial-letter: ${LINES.value} ${OFFSET.value};
}
`;
};

UPDATE();

LINES.addEventListener("input", UPDATE);
OFFSET.addEventListener("input", UPDATE);
