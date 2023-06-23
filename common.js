var getCSSVariable = (variableName) => {
    return getComputedStyle(document.documentElement).getPropertyValue(variableName);
}