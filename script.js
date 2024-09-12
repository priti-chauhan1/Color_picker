
const colorPicker = document.getElementById('color-picker');
const colorValue = document.getElementById('color-value');

colorPicker.addEventListener('input', function () {
  const selectedColor = colorPicker.value;
  colorValue.textContent = `Selected Color: ${selectedColor}`;
  document.body.style.backgroundColor = selectedColor;
});