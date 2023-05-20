import "../shared-components/styles.css";
import { createUseStyles } from "react-jss";
export function ClimbPreviewCard({climbName, climbSetter,climbDesc, climbDiff, publicKey, ...props}){

    return (<div className="climb-preview-card">
        <p className={styles.difficulty}>{climbDiff}</p> 
    </div>)
}

const styles = createUseStyles({
    "difficulty": {
        fontFamily: 'Franklin Gothic Medium',
        color:'white',
        fontSize: '40',
        top: '-6',
        left: '18',
        position: "absolute",
    }
});