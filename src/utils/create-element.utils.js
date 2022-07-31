const createElement = (element, className, child, parent, ...dataAttr) => {
  const el = document.createElement(element);

  if (className) {
    el.classList.add(...className.split(' '));
  }

  if (child && Array.isArray(child)) {
    child.forEach((item) => item && el.appendChild(item));
  } else if (child && typeof child === 'object') {
    el.appendChild(child);
  } else if (child && typeof child === 'string') {
    el.innerHTML = child;
  }

  if (parent) {
    parent.appendChild(el);
  }

  if (dataAttr.length) {
    dataAttr.forEach(([attrName, attrValue]) => {
      if (attrValue === '') {
        el.setAttribute(attrName, '');
      } else if (attrName.match(/type|href|id|value|src|placeholder|alt/)) {
        el.setAttribute(attrName, attrValue);
      } else {
        el.dataset[attrName] = attrValue;
      }
    });
  }
  return el;
};

export { createElement };
