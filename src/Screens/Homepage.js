//this should be the main homepage?
import '../shared-components/styles.css';
import { createUseStyles } from 'react-jss';
export function Home(){
    return (<div>
        <h1 style={{textAlign: "center"}}>CLIMBING FOR EVERYONE</h1>
    <button className='action-button'>Browse Climbs</button></div>);

}

const styles = createUseStyles({
    
})