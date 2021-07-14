export default (state = [], action) => {
  let idx;
  let votes;
  let quote;

  switch (action.type) {
    case "ADD_QUOTE":
      return [...state, action.quote];
    case "REMOVE_QUOTE":
      idx = state.findIndex(quote => quote.id === action.quoteId);
      return [...state.slice(0, idx), ...state.slice(idx + 1)];
    case "DOWNVOTE_QUOTE":
      idx = state.findIndex(quote => quote.id === action.quoteId);
      state[idx].votes > 0 ? votes = state[idx].votes - 1 : votes = 0;
      quote = state[idx]
      quote.votes = votes
      return [...state.slice(0, idx), quote, ...state.slice(idx + 1)];
    case "UPVOTE_QUOTE":
      idx = state.findIndex(quote => quote.id === action.quoteId);
      votes = state[idx].votes + 1;
      quote = state[idx]
      quote.votes = votes
      return [...state.slice(0, idx), quote, ...state.slice(idx + 1)];
    default:
      return state;
  
  }
}
