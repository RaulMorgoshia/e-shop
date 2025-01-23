import { redirect } from "next/navigation";

export default function Home() {
  redirect("/main"); // Redirect to the "main" page
  return null;
}
