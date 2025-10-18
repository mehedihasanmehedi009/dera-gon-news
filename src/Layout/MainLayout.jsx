import React from "react";
import { Outlet } from "react-router";
import Header from "../Components/Header";
import Latest from "../Components/Latest";
import Navear from "../Components/Navear";
import LeftAside from "../Components/homelayout/LeftAside";
import RigthAside from "../Components/homelayout/RigthAside";

const MainLayout = () => {
  return (
    <div className="">
      <header>
        <Header />
        <section className="w-11/12 mx-auto py-7">
          <Latest></Latest>
        </section>
        <nav className="w-11/12 mx-auto">
          <Navear></Navear>
        </nav>
      </header>
      <main className="w-11/12 mx-auto grid grid-cols-12">
        <aside className="col-span-3">
          <LeftAside></LeftAside>
        </aside>
        <section className="main col-span-6">
          <Outlet></Outlet>
        </section>
        <aside className="col-span-3">
            <RigthAside></RigthAside>
        </aside>
      </main>
    </div>
  );
};

export default MainLayout;
