const defaultState = {
    category: "cloth",
    gender: "men"
};

export default function filterReducer(state = defaultState, action) {
    switch (action.type) {
      // omit other cases
      case 'FILTER_MEN': {
        return {
            ...state,
            category: 'Men',
            gender: action.payload.gender,
        };
      }
      case 'FILTER_WOMEN': {
        return {
            ...state,
            category: 'Women',
            gender: action.payload.gender,
        };
      }
      case 'KID': {
        return {
            ...state,
            category: 'KID',
            gender: action.payload.gender,
        };
      }
      default:
        return defaultState
    }
  }