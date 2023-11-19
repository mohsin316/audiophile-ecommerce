// styles
import "./Login.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials, selectCurrentUser } from "../features/authSlice";
import { useLoginMutation } from "../features/authApiSlice";
import { useLocation, useNavigate, Link } from "react-router-dom";

import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabase = createClient(
  "https://delyvsmuliqlbeccucrz.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRlbHl2c211bGlxbGJlY2N1Y3J6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkwMjcxMzYsImV4cCI6MjAxNDYwMzEzNn0.zSmw19VIuZzJl8RrP0UsZBzWYwlO9kt7zybULQBHJ9E"
);

export default function Login() {
  const [email, setEmail] = useState("example@email.com");
  const [password, setPassword] = useState("example-password");
  const [errMsg, setErrMsg] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const dispatch = useDispatch();
  const [login, { isLoading }] = useLoginMutation();
  const userAuth = useSelector(selectCurrentUser);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: "example@email.com",
        password: "example-password",
      });
      console.log(data, error);
      // const userData = await login({ email, password }).unwrap();
      // console.log(userData);
      // dispatch(setCredentials({ ...userData }));
      navigate(from, { replace: true });
    } catch (error) {
      console.log("there was an error", error.status);
    }
  };

  // useEffect(() => {
  //   console.log(userAuth, isLoading);
  // }, [userAuth, isLoading]);

  return (
    <section>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <label>
            email
            <input
              value="example@email.com"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            pass
            <input
              value="example-password"
              type="text"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          {!isLoading && <button>submit</button>}
        </form>
      </div>
    </section>
  );
}
