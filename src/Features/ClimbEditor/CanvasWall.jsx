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

  const updateClimbSetter = (newClimbSetter) => {};
  return <div></div>;
}
