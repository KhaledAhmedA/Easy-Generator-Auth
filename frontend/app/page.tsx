import { Poppins } from "next/font/google";
import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/login-button";
import { RegisterButton } from "@/components/auth/register-button";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export default function Home() {
  return (
    <div className="-mt-[70%] md:-mt-[20%]">
      <div className="main-wrap">
        <div>

          <img src="/imgs/logo.avif" alt="logo" className="mx-auto w-[20vh] h-[20vh]" />
        </div>
        <br />
        Easy Generator works for &nbsp;&nbsp;
        <div className="dropping-texts">
          <div>Feature</div>
          <div>Learners</div>
          <div>Instractors</div>
          <div>Business!</div>
        </div>
        <div className="flex flex-row justify-center gap-8 mx-auto mt-[20%] md:mt-[10%]">
          <div className="">
            <LoginButton>
              <Button className="alink" variant="secondary" size="lg">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Sign In
              </Button>
            </LoginButton>
          </div>
          <div>
            <RegisterButton>
              <Button className="alink" variant="secondary" size="lg">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Sign Up
              </Button>
            </RegisterButton>
          </div>
        </div>
      </div>

    </div>
  );
}
