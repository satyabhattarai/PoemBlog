import { auth0 } from "@/lib/auth0";

export const POST = auth0.withApiAuthRequired(async function myApiRoute(req) {
  const res = new NextResponse();
  const { user } = await auth0.getSession(req);
  return NextResponse.json(
    { protected: process.env.AUTH0_SECRET, id: user.sub },
    res
  );
});
//api call ko lagi security
