const defaultState = {
    slider: {
        pageNum: 1,
    },
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case 'SET_MAIN_IMAGE':
            return {
                ...state,
                mainImageIndex: action.mainImageIndex,
            };
        case 'SET_PER_PAGE':
            return {
                ...state,
                perPage: action.perPage,
            };
        case 'NEXT_PAGE':
            return {
                ...state,
                pageNum: state.pageNum + 1,
            };
        case 'PRIOR_PAGE':
            return {
                ...state,
                pageNum: state.pageNum - 1,
            };
        case 'FIRST_PAGE':
            return {
                ...state,
                pageNum: 1,
            };
        case 'SET_DIRECTION':
            return {
                ...state,
                direction: action.direction,
            };
        default:
            return state;
    }
};
