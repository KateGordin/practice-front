export const selectSpaces = (state) => state.space.spaces;

export const selectDetailSpace = (state) => {
  console.log(state);
  return state.space.detailPage;
};
