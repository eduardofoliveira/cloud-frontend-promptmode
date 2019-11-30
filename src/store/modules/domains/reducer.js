import produce from 'immer';

const INITIAL_STATE = {
  domains: [],
  loading: false,
};

export default function domains(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@domains/SHOW_DOMAINS_REQUEST':
      return produce(state, draft => {
        draft.loading = true;
      });
    case '@domains/SHOW_DOMAINS_SUCCESS':
      return produce(state, draft => {
        draft.loading = false;
        draft.domains = action.payload.data;
      });
    case '@domains/SHOW_DOMAINS_FAILURE':
      return produce(state, draft => {
        draft.loading = false;
      });
    default:
      return state;
  }
}
