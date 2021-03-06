import type { NextPage } from "next";

import { footerLinks, hubOneConfig } from "../HubOneConfig";
import { Footer } from "../ui/components/Footer";
import { HeaderBar } from "../ui/components/Header";
import Hero from "../ui/sections/Hero";
import LinkSection from "../ui/sections/LinkSection";

const Home: NextPage = () => {
  return (
    <div>
      <HeaderBar {...hubOneConfig} />
      <Hero companyName={hubOneConfig.companyName} />
      <LinkSection />
      <Footer {...footerLinks} />
    </div>
  );
};

export default Home;
