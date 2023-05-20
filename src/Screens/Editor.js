import { useContext } from 'react';
import { useServer } from '../Providers/ServerContext';
import { ClimbPreviewCard } from '../Components/ClimbPreviewCard';

import axios from 'axios';

function getClimbs(baseURL){
    axios.get(`${baseURL}search`)
        .then((response)=>{
            console.log(response);
        }).catch((error)=>console.log(error));
}
export function Editor(){
    const baseURL = useServer();
    return (<div>
        <ClimbPreviewCard climbName={'Climb Name'} climbDesc={'A lol'} climbSetter={"Nathan's balls"} climbDiff={'V0/4'} publicKey={'192ohfkwhdsaif'}/>
        <button onClick={getClimbs}>Get Climbs</button>
    </div>)
}