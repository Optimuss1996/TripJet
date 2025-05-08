import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export default function SwitchComponent() {
  return (
    <div className="flex items-center space-x-2">
      <Label htmlFor="airplane-mode text-neutral-text-500">تور خارجی</Label>
      <Switch id="airplane-mode" />
    </div>
  );
}
