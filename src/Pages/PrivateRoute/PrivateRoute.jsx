import PropTypes from 'prop-types';
import { Navigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import useAuth from '../../Hooks/useAuth';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useAuth()

    if (loading) {
        return <div className="text-center flex justify-center items-center">
            <ThreeDots
                height="80"
                width="80"
                radius="9"
                color="red"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
            />
        </div>
    }

    if (user) {
        return children;
    }


    return <Navigate state={location.pathname} to="/login"></Navigate>
};

PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired
}

export default PrivateRoute;