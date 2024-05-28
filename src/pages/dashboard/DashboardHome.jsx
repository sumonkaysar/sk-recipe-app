import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase.config";
import dashboardBG from "../../assets/dashboard-bg.jpg"
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import moment from "moment";

export default function DashboardHome() {
  const [user] = useAuthState(auth);
  console.log(new Date(Number(user?.reloadUserInfo?.createdAt)));
  return (
    <div className="relative h-screen w-full">
      <div className="h-2/5 bg-no-repeat bg-cover" style={{ backgroundImage: `url(${dashboardBG})` }}></div>
      <div className="h-3/5 bg-rose-100"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[45%] lg:-translate-y-1/2 bg-white w-4/5 lg:w-[700px] text-center rounded-lg shadow-xl">
        <div className="text-center">
          <div className="avatar -mt-8 lg:-mt-12">
            <div className="w-24 lg:w-32 rounded-full border-4 border-white shadow-[0_0_35px_1px_#c5c4c4]">
              <img src={user?.photoURL} />
            </div>
          </div>
        </div>
        <h2 className="text-xl lg:text-2xl font-semibold lg:mt-2">{user?.displayName}</h2>
        <div className="text-left px-10 mt-4 pb-8">
          <h4 className="font-semibold border-b-2 border-gray-700 mb-4">Information</h4>
          <div className="grid lg:grid-cols-2 gap-y-4 gap-x-10">
            <div>
              <h3 className="lg:text-lg font-semibold">Email</h3>
              <p>{user?.email}</p>
            </div>
            <div>
              <h3 className="lg:text-lg font-semibold">Phone</h3>
              <p>{user?.phoneNumber ? user?.phoneNumber : "N/A"}</p>
            </div>
            <div>
              <h3 className="lg:text-lg font-semibold">Email Verified</h3>
              <p>{!user?.emailVerified ? <FaCheckCircle className="text-success" size="25px" /> : <FaTimesCircle className="text-error" size="25px" />}</p>
            </div>
            <div>
              <h3 className="lg:text-lg font-semibold">Created By</h3>
              <p>{user?.providerData[0]?.providerId}</p>
            </div>
            <div>
              <h3 className="lg:text-lg font-semibold">Created On</h3>
              <p>{moment(Number(user?.reloadUserInfo?.createdAt)).format('Do MMMM YYYY, h:mm a')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
