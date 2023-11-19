import { useEffect } from "react";
import { useGetUsersQuery } from "../features/authApiSlice";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../features/authSlice";

export default function Users() {
  const { data, isFetching, isSuccess } = useGetUsersQuery();
  const auth = useSelector(selectCurrentUser);

  // useEffect(() => {
  //   console.log("DATA", data);
  //   //  console.log("isFetching", isFetching);
  //   //  console.log("isSuccess", isSuccess);
  //   //  console.log("current user is", user);
  // }, [data, isFetching, isSuccess]);
  return (
    <div>
      <h1>users</h1>
      {isSuccess && <h2>You are authorized to see this!</h2>}
      <Link to="/welcome">go back to welcomes</Link>
    </div>
  );
}
