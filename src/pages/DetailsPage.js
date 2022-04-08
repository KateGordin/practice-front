import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { selectDetailSpace } from "../store/spaces/selectors";
import { useDispatch, useSelector } from "react-redux";
import { getDetailSpace } from "../store/spaces/actions";

export default function DetailsPage() {
  const params = useParams();
  // const [space, setSpace] = useState({});

  //detail space from store
  const dispatch = useDispatch();
  const detailSpace = useSelector(selectDetailSpace);

  const getDetailSpaceOnScreen = async () => {
    dispatch(await getDetailSpace(params.id));
  };

  useEffect(() => {
    getDetailSpaceOnScreen();
  }, []);

  console.log("detailSpace", detailSpace);

  return (
    <div className="detailsPage">
      {!detailSpace ? (
        "Loading"
      ) : (
        <div
          style={{
            backgroundColor: detailSpace.backgroundColor,
            color: detailSpace.color,
          }}
        >
          <h3>{detailSpace.title}</h3>
          <h6>{detailSpace.description}</h6>

          <div>
            {detailSpace.stories.map((story) => (
              <div key={story.id}>
                <h4>{story.name} </h4>
                <p> {story.content}</p>
                <img src={story.imageUrl} style={{ width: 300 }} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
