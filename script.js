function handleSliderOne(sliderOne, sliderTwo) {
    const [left, right] = getPoints(sliderOne, sliderTwo);
    fillSlider(sliderOne, sliderTwo, '#C6C6C6', '#FF69B4', sliderTwo);
    // cannot move left pointer beyond right 
    if (left > right) {
        sliderOne.value = right;
    }
}

function handleSliderTwo(sliderOne, sliderTwo) {
    const [left, right] = getPoints(sliderOne, sliderTwo);
    fillSlider(sliderOne, sliderTwo, '#C6C6C6', '#FF69B4', sliderTwo);
    if (left > right) {
        sliderTwo.value = left;
    }
}

function getPoints(currentLeft, currentRight) {
    const left = parseInt(currentLeft.value);
    const right = parseInt(currentRight.value);
    return [left, right];
}

function fillSlider(left, right, sliderColor, rangeColor, slider) {
    const range = right.max - right.min;
    // highlight line between points by using linear gradient to colorblock
    slider.style.background = `linear-gradient(to right,
      ${sliderColor} ${(left.value - right.min) / (range) * 100}%,
      ${rangeColor} ${(left.value - right.min) / (range) * 100}%,
      ${rangeColor} ${(right.value - right.min) / (range) * 100}%, 
      ${sliderColor} ${(right.value - right.min) / (range) * 100}%)`;
}

const sliderOne = document.querySelector('#sliderOne');
const sliderTwo = document.querySelector('#sliderTwo');

// default 
fillSlider(sliderOne, sliderTwo, '#C6C6C6', '#FF69B4', sliderTwo);

sliderOne.oninput = () => handleSliderOne(sliderOne, sliderTwo);
sliderTwo.oninput = () => handleSliderTwo(sliderOne, sliderTwo);
