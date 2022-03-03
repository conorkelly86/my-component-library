import { Button } from "~/components/atoms/Button/Button";
import { Heading } from "~/components/atoms/Heading/Heading";
import { Wrapper } from "~/components/organisms/Wrapper/Wrapper";

export default function Index() {
  return (
    <Wrapper bgColor="#5261AC">
      <Heading label="Welcome to my Library" />
      <Button label="click me!" />
    </Wrapper>
  );
}
