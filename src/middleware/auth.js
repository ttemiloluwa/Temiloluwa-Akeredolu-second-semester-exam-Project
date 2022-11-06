export default function CheckAuth(user) {
  if (user?.name && user?.password) {
    return { status: true, user };
  } else return { status: false, user: null };
}
