import { authOptions } from "../[...nextauth]";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
