import { useSelector } from 'react-redux';

export default function PrivateRoutes() {

  const { user, status } = useSelector((state) => state.user);

}
