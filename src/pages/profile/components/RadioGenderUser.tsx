import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface RadioProps {
  value?: string;
  onValueChange: (value: string) => void;
}

export function RadioGenderUser({ value, onValueChange }: RadioProps) {
  return (
    <RadioGroup
      value={value ?? ""}
      onValueChange={onValueChange}
      className="flex justify-start items-center gap-4"
    >
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="male" id="male" />
        <Label htmlFor="male">مذکر</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="female" id="female" />
        <Label htmlFor="female">مونث</Label>
      </div>
    </RadioGroup>
  );
}
