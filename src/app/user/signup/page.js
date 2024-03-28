import FormBackground from "@/app/components/ui/formbackground";
import SignUpForm from "@/app/components/user/signinform";

function SignUp() {
  return (
    <>
      <FormBackground form={"singup"} />
      <SignUpForm />
    </>
  );
}

export default SignUp;
