import React from "react";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Message from "./components/Message";
import Counter from "./components/Counter";
import LifeCycleA from "./components/LifeCycleA";
import FragmentDemo from "./components/FragmentDemo";
import Table from "./components/Table";
import { PureCmp } from "./components/PureCmp";
import ParentComp from "./components/ParentComp";
import RefDemo from "./components/RefDemo";
import FocusInput from "./components/FocusInput";
import FRParentInput from "./components/FRParentInput";
import PortalDemo from "./components/PortalDemo";
import Hero from "./components/Hero";
import ErrorBoundary from "./components/ErrorBoundary";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
import ClickCounterTwo from "./components/ClickCounterTwo";
import HoverCounterTwo from "./components/HoverCounterTwo";
import User from "./components/User";
import Counter2 from "./components/Counter2";

function App() {
  return (
    <div className="App">
      {/* <Greet name="RiFa">This is children props</Greet>
      <Greet name="FloveR">
        <button>Dynamic</button>
      </Greet>
      <Greet name="F"></Greet>
      <Welcome name="RiFa"></Welcome>
      <Welcome name="FloveR"></Welcome>
      <Message></Message> */}
      {/* <Counter></Counter> */}
      {/* <LifeCycleA></LifeCycleA> */}
      {/* <FragmentDemo></FragmentDemo>
      <Table></Table> */}
      {/* <PureCmp></PureCmp> */}
      {/* <ParentComp></ParentComp> */}
      {/* <RefDemo></RefDemo> */}
      {/* <FocusInput></FocusInput> */}
      {/* <FRParentInput></FRParentInput> */}
      {/* <PortalDemo></PortalDemo> */}
      {/* <ErrorBoundary>
        <Hero heroName="Batman"></Hero>
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Superman"></Hero>
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Joker"></Hero>
      </ErrorBoundary> */}

      {/* <ClickCounter name="FreeDoM"></ClickCounter>
      <HoverCounter name="FreeDoM"></HoverCounter> */}
      {/* <ClickCounterTwo></ClickCounterTwo>
      <HoverCounterTwo></HoverCounterTwo>
      <User render={(isLoggedIn) => (isLoggedIn ? "FreeDoM" : "Guest")}></User> */}
      <Counter2
        render={(count, incrementCount) => (
          <ClickCounterTwo
            count={count}
            incrementCount={incrementCount}
          ></ClickCounterTwo>
        )}
      ></Counter2>
      <Counter2
        render={(count, incrementCount) => (
          <HoverCounterTwo
            count={count}
            incrementCount={incrementCount}
          ></HoverCounterTwo>
        )}
      ></Counter2>
    </div>
  );
}

export default App;
