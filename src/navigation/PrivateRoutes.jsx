import { useSelector } from 'react-redux';

export default function PrivateRoutes({ children, requiresAdmin }) {
  const { user, status } = useSelector((state) => state.user);
  const isAdmin = user && user.role === 'admin';

  const isAuthenticated = user && user.id;

}


