export default {
  login: "/login",
  register: "/register",
  registerByInvitation: "/register_invitation/:id",
  home: "/",
  network: "/network",
  profile: "/profile",
  networkProfile: "/network/profile/:username",
  seeder: `${process.env.REACT_APP_SEEDER_ROUTE}`,
};
