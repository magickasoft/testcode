
const transform = key => value => ({
  transform: [
    { [key]: value },
  ],
});

const scale = transform('scale');
const translateY = transform('translateY');
const translateX = transform('translateX');
const scaleX = transform('scaleX');
const rotate = transform('rotate');

export { scale, translateY, translateX, scaleX, rotate };
