import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { useAuthStore } from "@/lib/stores/authStore"

interface LogoutModalProps {
  logoutModalIsOpen: boolean;
  setLogoutModalIsOpen: (value: boolean) => void
}

export function LogoutConfirmModal({ logoutModalIsOpen, setLogoutModalIsOpen }: LogoutModalProps) {
  const { logout } = useAuthStore();

  const mockDelayedLogout = () => {
    setTimeout(() => {
      logout();
      setLogoutModalIsOpen(false);
    }, 1500);
  }
  return (
    <AlertDialog open={logoutModalIsOpen} onOpenChange={setLogoutModalIsOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={mockDelayedLogout}>Logout</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
