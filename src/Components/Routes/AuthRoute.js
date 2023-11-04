import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { fetchUserData } from "../../features/auth/userDataSlice";

function AuthRoute({ children }) {
  const cookies = new Cookies();
  const { isLoggedIn, loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authToken = cookies.get("authToken");

  useEffect(() => {
    if (isLoggedIn === false) {
      navigate("/signin", { replace: true });
    } else if (isLoggedIn === null) {
      if (authToken) {
        dispatch(fetchUserData(authToken));
      } else {
        navigate("/signin");
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn]);

  return <>{isLoggedIn === true && children}</>;
}

export default AuthRoute;
