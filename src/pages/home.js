﻿import { JumbotronContainer } from "../containers/jumbotron";
import { FooterContainer } from "../containers/footer";
import { FaqsContainer } from "../containers/faqs";
import { HeaderContainer } from "../containers/header";
import { OptForm, Feature } from "../components";

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>Unlimited films, TV programmes and more</Feature.Title>
          <Feature.SubTitle>
            Watch anywhere, cancel at any time
          </Feature.SubTitle>
          <OptForm>
            <OptForm.Input placeholder="Email address" />
            <OptForm.Button placeholder="Email address">
              Try it now{" "}
            </OptForm.Button>
            <OptForm.Break />
            <OptForm.Text>
              Ready to watch? Enter your email to create or restart membership
            </OptForm.Text>
          </OptForm> 
        </Feature>
      </HeaderContainer>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}
