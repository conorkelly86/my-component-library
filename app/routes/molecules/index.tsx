import { Button } from "~/components/atoms/Button/Button";
import { Heading } from "~/components/atoms/Heading/Heading";
import NavBar from "~/components/molecules/NavBar/NavBar";
import { Wrapper } from "~/components/organisms/Wrapper/Wrapper";

export default function Index() {
  return (
    <>
      <Wrapper bgColor="#5261AC">
        <NavBar />
      </Wrapper>
    </>
  );
}
