import { AUTH_USER_FAILED, AUTH_USER_SUCCESS } from '../Api/Constant';

const reducer = (state: any, action: any) => {
	switch (action.type) {
		case AUTH_USER_SUCCESS:
			return {
				...state,
				user: action.payload,
			};

		case AUTH_USER_FAILED:
			return { ...state, user: {} };
		default:
			throw new Error(`No matching action type - ${action.type}`);
	}
};

export default reducer;
