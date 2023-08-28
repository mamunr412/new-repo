import { Navigate, useLocation } from 'react-router-dom';
import { getToken } from '../app/Hooks/useToken';

const RequireUser = ({
	allowedRoles,
	children,
}: {
	allowedRoles: string[];
	children: JSX.Element;
}): any => {
	const location = useLocation();
	const token = getToken()
 
	return token && allowedRoles.includes('user') ? (
		children
	) : (
		<Navigate to='/login' state={{ from: location }} replace />
	);
};

export default RequireUser;
