import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { createDemoAccount } from "@/services/account.ts";
import { useAccountMutation } from "@/hooks/useAccount.ts";

interface DemoAccountDialogProps {
  open: boolean;
  onClose: () => void;
}

export function DemoAccountDialog({ open, onClose }: DemoAccountDialogProps) {
  const { mutate } = useAccountMutation();
  const [loading, setLoading] = useState(false);

  const handleCreate = () => {
    setLoading(true);
    const acc = createDemoAccount();
    if (acc) mutate(acc);
    setLoading(false);
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogTitle>Create a Demo Account</DialogTitle>
        <p>This will create a temporary demo account for you to try the app.</p>
        <DialogFooter>
          <Button onClick={onClose} variant="secondary" disabled={loading}>
            Cancel
          </Button>
          <Button onClick={handleCreate} disabled={loading}>
            Create Demo Account
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
