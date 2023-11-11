import { useState } from "react";
import { api } from "~/utils/api";
import { nanoid } from "nanoid";
import { useRouter } from "next/router";

import { toast } from "sonner";
import { inputStyles } from "~/ui/input";
import { Button, Modal } from "~/ui";
import DeleteModal from "~/ui/deleteModal";
import * as Dialog from "@radix-ui/react-dialog";
import { Cancel } from "~/ui/icons";

interface DeleteHackathonProps {
  id: string;
}

const DeleteHackathon = (props: DeleteHackathonProps) => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>();
  const [open, setOpen] = useState(false);
  const [randomWord, setRandomWord] = useState<string>(nanoid(6));
  const [validateInput, setValidateInput] = useState<string>("");

  const { mutate: deleteHackathon } = api.hackathon.deleteHackathon.useMutation(
    {
      onSuccess: () => {
        setLoading(false);
        setOpen(false);
        router.push("/");
        toast.success("Hackathon deleted successfully");
      },
      onError: () => {
        setLoading(false);
      },
    },
  );

  const deleteHackathonHandler = (id: string, word: string) => {
    if (randomWord === word) {
      setLoading(true);
      try {
        deleteHackathon({
          id: id,
        });
      } catch (err) {
        toast.error("Something went wrong");
        setLoading(false);
      }
    } else {
      toast.error("The words do not match");
    }
  };
  return (
<Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild><Button>Delete</Button></Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-midnight bg-opacity-70 data-[state=open]:animate-overlayShow" />
        <Dialog.Content className="fixed top-[50%] left-[50%] z-50 max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] overflow-auto rounded-[6px] border border-neutral-800 bg-midnight p-[25px] font-sans opacity-100 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none data-[state=open]:animate-contentShow">
          <div className="mb-5 flex items-center justify-between">
            <Dialog.Title className="text-xl font-medium">
              Delete
            </Dialog.Title>
            <Dialog.Close asChild>
              <Cancel
                width={25}
                className="duration-120 cursor-pointer text-gray-400 transition-all hover:scale-105"
              />
            </Dialog.Close>
          </div>
    <div className="rounded-md border border-red-700/30 p-3">
      <p className="mb-2 font-bold">Danger</p>
      <p>please type{" "}
        <code className="text-red-200">{randomWord}</code> in the box below and
        click the button.
      </p>
      <input
        className={inputStyles}
        onChange={(e) => setValidateInput(e.target.value)}
        autoComplete="off"
        disabled={loading}
      />
      <div className="flex items-center justify-end">
      </div>
    </div>
    <div className="mt-2">
    <Button
        onClick={() => deleteHackathonHandler(props.id, validateInput)}
        loadingstatus={loading}
        disabled={loading}
      >
        Delete
      </Button>
      </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default DeleteHackathon;