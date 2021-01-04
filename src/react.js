function renderRealDOM(vdom) {
  if (typeof vdom === 'string') {
    return document.createTextNode(vdom);
  }

  if (vdom === undefined) return;

  const $el = document.createElement(vdom.tagName);

  vdom.children.map(renderRealDOM).forEach(node => {
    $el.appendChild(node);
  });

  return $el;
}

export function render(vdom, container) {
  container.appendChild(renderRealDOM(vdom));
}

export function createElement(tagName, props, ...children) {
  // tagName: html tag인 경우 문자열, 아닌 경우 함수
  if (typeof tagName === 'function') {
    return tagName.apply(null, [props, ...children]);
  }
  return { tagName, props, children };
}
