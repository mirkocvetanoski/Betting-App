import FormBackground from "@/app/components/ui/formbackground";
import LoginForm from "@/app/components/user/loginform";

function LoginPage() {
  return (
    <>
      <FormBackground form={"login"} />
      <LoginForm />
    </>
  );
}

export default LoginPage;
