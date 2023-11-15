"use client";
import { useRef } from "react";
import { BenefitsComponent } from "./_components/benefits";
import { CommonQuestionsComponent } from "./_components/commonQuestions";
import { ContainerComponent } from "./_components/container";
import { FooterComponent } from "./_components/footer";
import { HeaderComponent } from "./_components/header";
import { NecessaryInvestmentComponent } from "./_components/necessaryInvestment";
import { TestimonyComponent } from "./_components/testimony";

export default function MainPage() {
  const refForm = useRef<HTMLDivElement>(null);
  return (
    <>
      <HeaderComponent refForm={refForm} />
      <BenefitsComponent refForm={refForm} />
      <ContainerComponent refForm={refForm} />
      <NecessaryInvestmentComponent refForm={refForm} />
      <CommonQuestionsComponent />
      <TestimonyComponent refForm={refForm} />
      <FooterComponent />
    </>
  );
}
