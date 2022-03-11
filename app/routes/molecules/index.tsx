import { Button } from "~/components/atoms/Button/Button";
import { Heading } from "~/components/atoms/Heading/Heading";
import { Card } from "~/components/molecules/Card/Card";
import NavBar from "~/components/molecules/NavBar/NavBar";
import { Spacer } from "~/components/molecules/Spacer/Spacer";
import MyLinks from "~/components/organisms/MyLinks/MyLinks";
import { Wrapper } from "~/components/organisms/Wrapper/Wrapper";

export default function Index() {
  return (
    <>
      <Wrapper bgColor="#5261AC">
        <Heading label="Molecules" />

        <MyLinks />
        <Spacer />

        <NavBar />
        <Spacer />
        <Card
          title="Heading"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, repellat dolor nemo hic quidem necessi"
        />
        <Spacer />
      </Wrapper>
    </>
  );
}
