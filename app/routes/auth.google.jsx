import { authenticator } from "../services/auth.server.js";
import { SocialsProvider } from "remix-auth-socials";

export const action = async ({ request }) => {
  return await authenticator.authenticate(SocialsProvider.GOOGLE, request, {
    successRedirect: "/dashboard",
    failureRedirect: "/",
  });
};
