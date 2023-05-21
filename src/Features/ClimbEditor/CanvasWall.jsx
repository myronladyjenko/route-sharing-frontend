export function CanvasWall({ props, children, holds }) {
    const [currentHolds, updateCurrentHolds] = useState([]); // [{id: 1, x: 20, y: 20, rotation: 90}
    const [availableHolds, updateAvailableHolds] = useState([]); // [{id: 1, x: 20, y: 20, rotation: 90}
    const [holdType, setHoldType] = useState("none");
    const [publicKey, setPublicKey] = useState("192ohfkwhdsaif");
    const [isPreview, setIsPreview] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [isSaving, setIsSaving] = useState(false);
    const [isSaved, setIsSaved] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
    const [isDeleted, setIsDeleted] = useState(false);
    const [isError, setIsError] = useState(false);
    const [isErrorText, setIsErrorText] = useState("");
    
    

    const updateHoldType = (newHoldType) => {
        setHoldType(newHoldType);
        updateAvailableHolds(
        JSON.parse(sessionStorage.getItem("holds"))[newHoldType]
        );
    };
    
    const addHold = (hold) => {
        updateCurrentHolds([...currentHolds, hold]);
    };
    
    const removeHold = (hold) => {
        updateCurrentHolds(
        currentHolds.filter((currentHold) => currentHold.id !== hold.id)
        );
    };
    
    const updateClimbName = (newClimbName) => {
        setClimbName(newClimbName);
    };
    
    const updateClimbDesc = (newClimbDesc) => {
        setClimbDesc(newClimbDesc);
    };
    
    const updateClimbSetter = (newClimbSetter) => {
}
