import ConditionalUseEffect from "./ConditionalUseEffect";
import { useSingletonHook } from "./singleton";
import SingletonCheck from "./SingletonCheck";

function App() {
  const singletonObject1 = useSingletonHook();
  const singletonObject2 = useSingletonHook();
  const isEqual1 = singletonObject1.object1 === singletonObject2.object1;
  const isEqual2 = singletonObject1.object2 === singletonObject2.object2;
  console.log({ isEqual1, isEqual2 });
  return (
    <>
      <SingletonCheck singletonObject={singletonObject1} />
      <ConditionalUseEffect />
    </>
  );
}

export default App;
