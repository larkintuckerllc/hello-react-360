let _onRotate;

export const subscribe = (onRotate) => {
  _onRotate = onRotate;
};

export const rotate = () => {
  _onRotate();
}