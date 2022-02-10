import { authenticator } from "../services/auth.server.js";

export const action = async ({ request }) => {
  await authenticator.logout(request, { redirectTo: "/" });
};
