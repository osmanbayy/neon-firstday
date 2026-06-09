import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Field } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface ForgotPasswordModalProps {
  forgotModalIsOpen: boolean;
  setForgotModalIsOpen: (value: boolean) => void;
}

export function ForgotPasswordModal({ forgotModalIsOpen, setForgotModalIsOpen }: ForgotPasswordModalProps) {
  return (
    <Dialog open={forgotModalIsOpen} onOpenChange={setForgotModalIsOpen}>
      <form>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Forgot your password?</DialogTitle>
            <DialogDescription>
              Enter your email accout. We will send you a password reset link.
            </DialogDescription>
          </DialogHeader>

          <Field>
            <Label htmlFor="email-1">Name</Label>
            <Input type="email" id="email-1" name="email" placeholder="you@neonapps.com" />
          </Field>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Get Code</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}
