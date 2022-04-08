import { useEffect, useState } from "react";
import HeroBanner from "../components/HeroBanner";
import { useDispatch, useSelector } from "react-redux";
import { selectSpaces } from "../store/spaces/selectors";
import { getAllSpaces } from "../store/spaces/actions";
import { NavLink } from "react-router-dom";

function Home() {
  const dispatch = useDispatch();
  const spaces = useSelector(selectSpaces);

  // //get all spaces
  const getSpaces = async () => {
    dispatch(await getAllSpaces());
  };

  useEffect(() => {
    getSpaces();
  }, []);

  return (
    <>
      <HeroBanner>
        <h1>Home</h1>
      </HeroBanner>
      <div>
        {spaces.map((space) => (
          <div
            style={{
              backgroundColor: space.backgroundColor,
              color: space.color,
            }}
            key={space.id}
          >
            {space.title}
            <NavLink to={`/spaces/${space.id}`}>
              <button>Visit space</button>
            </NavLink>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
