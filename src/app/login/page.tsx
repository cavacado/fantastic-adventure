"use client";
import { login } from "../actions/login";

export default function Login() {
  return (
    <>
      <h1>Showcasing Recommended Events:</h1>
      <h1>Please Login to access application:</h1>
      <form action={login} data-login>
        <div>
          <label htmlFor="email">Enter your email: </label>
          <input type="email" name="email" id="email" required />
        </div>
        <div>
          <label htmlFor="name">Enter your password: </label>
          <input type="password" name="password" id="password" required />
        </div>
        <div>
          <input type="submit" value="Login" />
        </div>
      </form>
    </>
  );
}
