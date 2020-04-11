import auth0 from "../../lib/auth0";

export default async function login(req, res) {
    await auth0.handleLogin(req, res);
}