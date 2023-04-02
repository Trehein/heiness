import { useFirestoreCollectionMutation } from "@react-query-firebase/firestore";
import { collection } from "firebase/firestore";
import { firestore } from "../../fbConfig/fbConfig";

const AddExample = () => {
  const ref = collection(firestore, "units");
  const mutation = useFirestoreCollectionMutation(ref);

  return (
    <>
      <button
        disabled={mutation.isLoading}
        onClick={() => {
          mutation.mutate({
            name: "New unit here",
            price: 12,
          });
        }}
      >
        Add example
      </button>
      {mutation.isError && <p>{mutation.error.message}</p>}
    </>
  );
}

export default AddExample