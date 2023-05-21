import "../Components/ClimbPreviewCard";
import { useState, useEffect } from "react";
import { ClimbPreviewCard } from "../Components/ClimbPreviewCard";
import { ClimbFilterActionBar } from "../Components/ClimbFilterActionBar";
import { useServer } from "../Providers/ServerContext";
import axios from "axios";

export function BlockViewer() {
  const [blocks, setBlocks] = useState([]);
  const baseURL = useServer();

  const doBuyTransaction = (block) => {};

  // useEffect(()=>{
  //     axios.get(`${baseURL}blocks`)
  //     .then((response)=>{console.log(response)})
  //     .catch((error)=>console.log(error));
  // }, []);
  return (
    <div>
      <ClimbFilterActionBar></ClimbFilterActionBar>
      {blocks.map((block, index) => {
        <ClimbPreviewCard key={index} {...block}></ClimbPreviewCard>;
      })}
    </div>
  );
}
