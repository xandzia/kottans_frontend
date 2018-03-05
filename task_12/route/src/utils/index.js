export const bindAll = (context, ...names) => {
  names.forEach(name => {
    if (typeof context[name] === 'function') {
      context[name] = context[name].bind(context);
    } else {
      throw Error(
        `Expected function ${name}. Instead received: ${typeof context[name]}`
      );
    }
  });
};

export const toHtml = string => {
    const template = document.createElement('template');
    template.innerHTML = string.trim();
    
    return template.content;
}
