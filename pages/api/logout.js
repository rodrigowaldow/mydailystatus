import auth0 from "../../lib/auth0";

export default async function logout(req, res) {
    await auth0.handleLogout(req, res);
}