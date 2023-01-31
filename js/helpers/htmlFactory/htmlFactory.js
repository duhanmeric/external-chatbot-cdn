const insertInnerEl = (element, child) => {
  element.appendChild(child);
};

const htmlFactory = (tagName, options) => {
  const element = document.createElement(tagName);
  for (const prop in options) {
    if (prop === "children") {
      options[prop].forEach((childEl) => {
        insertInnerEl(element, childEl);
      });
    } else {
      element[prop] = options[prop];
    }
  }

  return element;
};

export default htmlFactory;
