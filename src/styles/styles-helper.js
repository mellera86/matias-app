export const setTheme = (theme) => {
  let primaryColor = `var(--primary-${theme}-color)`;
  let primaryOffColor = `var(--primary-off-${theme}-color)`;
  let secondaryColor = `var(--secondary-${theme}-color)`;
  let secondaryOffColor = `var(--secondary-off-${theme}-color)`;
  let highlightColor = `var(--highlight-${theme}-color)`;

  document.body.style.setProperty('--primary-color', primaryColor);
  document.body.style.setProperty('--primary-off-color', primaryOffColor);
  document.body.style.setProperty('--secondary-color', secondaryColor);
  document.body.style.setProperty('--secondary-off-color', secondaryOffColor);
  document.body.style.setProperty('--highlight-color', highlightColor);
}

