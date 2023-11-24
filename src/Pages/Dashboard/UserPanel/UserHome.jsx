import useAuth from "../../../Hooks/useAuth";

const UserHome = () => {

    const { user } = useAuth()

    return (
        <div className="max-w-screen-xl mx-auto px-2 md:px-10 lg:px-20 mt-10">
            <h2 className="text-2xl font-bold">Hi! Welcome Back <br />
                <span className="text-xl font-semibold">{user.displayName}</span>
            </h2>
        </div>
    );
};

export default UserHome;