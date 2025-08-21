"use client";

import { withPageAuthRequired } from "@auth0/nextjs-auth0";
export default withPageAuthRequired(function Profile({ user }) {
  return (
    <>
      {user && (
        <div style={{ textAlign: "center" }}>
          <img
            src={user.picture}
            alt="Profile"
            style={{ borderRadius: "50%", width: "80px", height: "80px" }}
          />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      )}
    </>
  );
});
