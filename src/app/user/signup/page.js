import FormBackground from "@/app/components/ui/formbackground";
import SignUpForm from "@/app/components/user/signinform";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../../api/auth/[...nextauth]/route";

export default async function SignUp() {
  const session = await getServerSession(authOptions);

  if (session) redirect("/");

  return (
    <>
      <FormBackground form={"singup"} />
      <SignUpForm />
    </>
  );
}
