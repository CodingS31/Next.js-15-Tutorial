import { SignIn } from "@clerk/nextjs";

export default function SigninPage() {
  return (
    <div className="flex items-center justify-center p-6">
      <SignIn />
    </div>
  );
}
