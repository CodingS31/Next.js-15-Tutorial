import { SignUp } from "@clerk/nextjs";

export default function SignupPage() {
  return (
    <div className="flex items-center justify-center p-6">
      <SignUp />
    </div>
  );
}
