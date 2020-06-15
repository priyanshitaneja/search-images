export const setMainImageIndex = mainImageIndex => ({
  type: 'SET_MAIN_IMAGE',
  mainImageIndex,
});

export const setNextPage = () => ({
  type: 'NEXT_PAGE',
});

export const setPriorPage = () => ({
  type: 'PRIOR_PAGE',
});

export const setFirstPage = () => ({
  type: 'FIRST_PAGE',
});

export const setDirection = direction => ({
  type: 'SET_DIRECTION',
  direction,
});

