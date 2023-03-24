import { useSingletonHook } from "./singleton";

const SingletonCheck = ({ singletonObject }) => {
  const singletonChildObject1 = useSingletonHook();
  const isChildEqual =
    singletonObject.object2 === singletonChildObject1.object2;
  console.log({ isChildEqual });
  return <></>;
};
export default SingletonCheck;
