import "../shared-components/styles.css";
import { createUseStyles } from "react-jss";
export function ClimbPreviewCard({
  climbName,
  climbSetter,
  climbDesc,
  climbDiff,
  publicKey,
  ...props
}) {
  const classes = useStyles();
  return (
    <div className="climb-preview-card">
      <p className={classes.difficulty} tooltip={"The difficulty of the climb"}>
        {climbDiff}
      </p>
      <div className={classes["inner-card"]}>
        <h1>{climbName}</h1>
        <h2>{climbSetter}</h2>
        <p>{climbDesc}</p>
        <button className="action-button widest transition-action" onClick>
          Buy Climb
        </button>
      </div>
    </div>
  );
}

const useStyles = createUseStyles({
  difficulty: {
    fontFamily: "Franklin Gothic Medium",
    color: "white",
    fontSize: "30px",
    top: "18px",
    left: "18px",
    position: "absolute",
  },
  "inner-card": {
    padding: "60px 10px",
    textAlign: "right",
    alignItems: "center",
    flexDirection: "column",
  },
});
