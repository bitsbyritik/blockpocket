import { Heading } from "./Heading";
import { Text } from "./Text";
import { Password } from "./Password";

export const CreatePassword = () => {
  return (
    <div className="m-10 flex flex-col relative gap-6 ">
      <Heading>Create a Password</Heading>
      <div className="px-20">
        <Text className="text-gray-700">
          It should be at least 8 characters.
        </Text>
        <Text className="text-gray-700">
          You will need this to unlock your wallet.
        </Text>
      </div>
      <Password />
    </div>
  );
};
