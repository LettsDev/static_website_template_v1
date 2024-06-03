// ******************************************************************************************************
// shiny animation on mouse entering an element
// ******************************************************************************************************

const shineEffectEvent = (e: MouseEvent, element: HTMLElement) => {
  const { x, y } = element.getBoundingClientRect();
  const mousePositionX = e.clientX;
  const mousePositionY = e.clientY;
  const shinePositionX = mousePositionX - x;
  const shinePositionY = mousePositionY - y;
  element.style.setProperty("--x", shinePositionX.toString());
  element.style.setProperty("--y", shinePositionY.toString());
};

export function addShine(element: HTMLElement) {
  if (element) {
    element.classList.add("shiny");
    element.addEventListener("mousemove", (e: MouseEvent) => {
      shineEffectEvent(e, element);
    });
  }
}

export function removeShine(element: HTMLElement) {
  if (element) {
    element.classList.remove("shiny");
    element.removeEventListener("mousemove", (e: MouseEvent) => {
      shineEffectEvent(e, element);
    });
  }
}

// ******************************************************************************************************
// tilting animation on mouse enter WIP
// ******************************************************************************************************

const tiltEffectEvent = (e: MouseEvent, element: HTMLElement) => {
  const { width, height, left, top } = element.getBoundingClientRect();
  const mousePositionX = e.clientX;
  const mousePositionY = e.clientY;
  const x = mousePositionX - left;
  const y = mousePositionY - top;

  const rotateY = (y / height - 0.5) * 20;
  const rotateX = (x / width - 0.5) * -20;

  element.style.setProperty("--x", rotateX.toString());
  element.style.setProperty("--y", rotateY.toString());
};

export function addTilt(element: HTMLElement) {
  if (element) {
    element.classList.add("tilt");
    element.addEventListener("mousemove", (e: MouseEvent) => {
      tiltEffectEvent(e, element);
    });
  }
}

export function removeTilt(element: HTMLElement) {
  if (element) {
    element.classList.remove("tilt");
    element.removeEventListener("mousemove", (e: MouseEvent) => {
      tiltEffectEvent(e, element);
    });
  }
}
