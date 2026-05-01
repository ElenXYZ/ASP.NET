import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const withAuth = (Component) => {
    return function WrappedComponent(props) {
        const user = useSelector(state => state.auth.user);

        if (!user) {
            return <Navigate to="/login" />;
        }

        return <Component {...props} />;
    };
};

export default withAuth;