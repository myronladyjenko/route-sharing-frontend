import "../shared-components/styles.css";
import { ClimbPreviewCard } from "../Components/ClimbPreviewCard";


const sharedStyles = {display: "inline-block", margin: "20px"};

export function Collection() {
    return (
        <div>
            <div style={{width: "100vw", textAlign: "center"}}>
                <div style = {sharedStyles}> 
                    <ClimbPreviewCard 
                        climbName = {"Green Handlebars"} 
                        climbSetter = {"Joe + L"} 
                        climbDesc = {"the omega epic holds that only the coolest people enjoy"} 
                        climbDiff = {"V0 / 4"}
                        publicKey = {"1"}
                    /> 
                </div>
                <div style = {sharedStyles}> 
                    <ClimbPreviewCard 
                        climbName = {"Mesa Biome"} 
                        climbSetter = {"Destroyer of worlds"} 
                        climbDesc = {"super wowie !!!!!!!!!!!!!!!!!! mega sized holds!!!!"} 
                        climbDiff = {"V3 / 6A"}
                        publicKey = {"2"}
                    /> 
                </div>
                <div style = {sharedStyles}> 
                    <ClimbPreviewCard 
                        climbName = {"Fiiish"} 
                        climbSetter = {"My My Myron"} 
                        climbDesc = {"uses very fiiiishy red holds that are sometimes cringe but usually not. This description shows what happens when they are biiing omega bing long long"} 
                        climbDiff = {"V6 / 7A"}
                        publicKey = {"3"}
                    /> 
                </div>
                <div style = {sharedStyles}> 
                    <ClimbPreviewCard 
                        climbName = {"Grapes"} 
                        climbSetter = {"Daniel Friday"} 
                        climbDesc = {"please do not eat the grapes they are hard"} 
                        climbDiff = {"V9 / 7C"}
                        publicKey = {"69"}
                    /> 
                </div>
            </div>
        </div>
    );
}