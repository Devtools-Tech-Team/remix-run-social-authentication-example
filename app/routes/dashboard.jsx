import { useLoaderData, Form } from "remix";

import { authenticator } from "../services/auth.server.js";

const CONTAINER_STYLES = {
  width: "100%",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
};

const BUTTON_STYLES = {
  padding: "15px 25px",
  background: "#dd4b39",
  border: "0",
  outline: "none",
  cursor: "pointer",
  color: "white",
  fontWeight: "bold",
};

export const loader = async ({ request }) => {
  const user = await authenticator.isAuthenticated(request, {
    failureRedirect: "/",
  });

  return {
    user,
  };
};

const Dashboard = () => {
  const { user } = useLoaderData();

  return (
    <div style={CONTAINER_STYLES}>
      <h1>You are LoggedIn</h1>
      <p>{user.displayName}</p>
      <Form action="/logout" method="post">
        <button style={BUTTON_STYLES}>Logout</button>
      </Form>
    </div>
  );
};

export default Dashboard;
