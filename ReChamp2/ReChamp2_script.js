(function () {
  const colorButtons = document.querySelectorAll('.ReChamp2_colorBtn');
  const displayImage = document.getElementById('ReChamp2_colorDisplay');

  const colorMap = {
    taupe: "https://cdn.shopify.com/s/files/1/0086/1297/0558/files/4.ReChamp2_Taupe.png?v=1748876965",
    brown: "https://cdn.shopify.com/s/files/1/0086/1297/0558/files/3.ReChamp2_Brown.png?v=1748876965",
    black: "https://cdn.shopify.com/s/files/1/0086/1297/0558/files/2.ReChamp2_Black.png?v=1748876965"
  };

  if (!colorButtons.length || !displayImage) {
    console.warn("요소를 찾을 수 없습니다. 외부 콘텐츠가 아직 로드되지 않았을 수 있습니다.");
    return;
  }

  colorButtons.forEach(button => {
    button.addEventListener('click', () => {
      colorButtons.forEach(btn => btn.classList.remove('selected'));
      button.classList.add('selected');
      const color = button.dataset.color;
      displayImage.src = colorMap[color];
      displayImage.alt = `${color.charAt(0).toUpperCase() + color.slice(1)} Chair`;
    });
  });
})();
