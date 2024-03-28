import FormBackground from "@/app/components/ui/formbackground";
import LoginForm from "@/app/components/user/loginform";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../../api/auth/[...nextauth]/route";

export default async function LoginPage() {
  const session = await getServerSession(authOptions);

  if (session) redirect("/");

  return (
    <>
      <FormBackground form={"login"} />
      <LoginForm />
    </>
  );
}
