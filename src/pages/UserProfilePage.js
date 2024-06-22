import Navbar from "../features/navbar/Navbar";
import UserOrders from "../features/user/Components/UserOrder";
import UserProfile from "../features/user/Components/UserProfile";

function UserProfilePage() {
    return ( 
    <div>
        <Navbar>
        <h1 className="mx-auto text-2xl">My Profile</h1>
        <UserProfile></UserProfile>
        </Navbar>
    </div>
    );
}
export default UserProfilePage;