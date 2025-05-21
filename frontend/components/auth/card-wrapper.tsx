"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Header } from "@/components/auth/header";
import { BackButton } from "@/components/auth/back-button";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
}

export const CardWrapper = (props: CardWrapperProps) => {
  return (
    <Card className="w-[400px] shadow-md">
      <CardHeader>
        <Header label={props.headerLabel} />
      </CardHeader>
      <CardContent>{props.children}</CardContent>

      <CardFooter>
        <BackButton label={props.backButtonLabel} href={props.backButtonHref} />
      </CardFooter>
    </Card>
  );
};
