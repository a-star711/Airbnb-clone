import { Label } from "../ui/label";
import { Input } from "../ui/input";

function ImageInput() {
  const name = "image";
  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize">
        Image
      </Label>
      <Input
        id={name}
        name={name}
        type="file"
        required
        width={100}
        height={100}
        accept="image/*"
        className="max-w-xs"
      />
    </div>
  );
}
export default ImageInput;
