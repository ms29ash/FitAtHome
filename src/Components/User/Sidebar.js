import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import tw from "tailwind-styled-components";
import { logoutUser } from "../../features/auth/authSlice";

function Sidebar({ tab }) {
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(logoutUser());
  };
  return (
    <Container>
      <Wrapper>
        <Opt to="/user?tab=order" tab={tab === "order"}>
          Order
        </Opt>
        <Opt to="/user?tab=favorites" tab={tab === "favorites"}>
          Favorites
        </Opt>
        <Opt to="/user?tab=payments" tab={tab === "payments"}>
          Payments
        </Opt>
        <Opt to="/user?tab=subscriptions" tab={tab === "subscriptions"}>
          Subscriptions
        </Opt>
        <Opt to="/user?tab=address" tab={tab === "address"}>
          Addresses
        </Opt>
      </Wrapper>
      <Opt
        $as="button"
        tab={"logout"}
        onClick={logout}
        className="text-left ml-4 mb-6 inline"
      >
        Logout
      </Opt>
    </Container>
  );
}

export default Sidebar;

const Container = tw.div` max-h-[80vh]
h-[100%] bg-slate-100 flex flex-col justify-between
    
`;

const Wrapper = tw.div`pt-6 pl-4 flex flex-col `;
const Opt = tw(
  Link
)` my-1 font-semibold  text-black py-8 pl-4 pr-16 py-4 hover:bg-redfood hover:text-white transition-all duration-300  hover:cursor-pointer 
${(p) => (p.tab === true ? "bg-redfood text-white" : "")} `;
