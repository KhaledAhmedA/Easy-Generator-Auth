"use client";

import { useRouter } from "next/navigation";

interface LoginButtonProps {
    children: React.ReactNode;
    mode?: "modal" | "redirect";
    asChild?: boolean;
}

export const RegisterButton = ({
    mode = "redirect",
    ...props
}: LoginButtonProps) => {
    const router = useRouter();

    const onClick = () => {
        router.push("/auth/register");
    };

    if (mode === "modal") {
        return <span> modal</span>;
    }

    return (
        <span className="cursor-pointer" onClick={onClick}>
            {props.children}
        </span>
    );
};
