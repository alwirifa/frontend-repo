import { redirect } from "next/navigation";

export default function Home({ id }: any) {
  redirect(`/dashboard/${id}`);
}
