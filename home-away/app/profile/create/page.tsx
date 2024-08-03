import { SubmitButton } from "@/components/form/Buttons";
import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";

const createProfileAction = async (prevState: any, formData: FormData) => {
  "use server";
  const firstName = formData.get("firstName") as string;

  if (firstName !== "shakeAndBake") return { message: "FFDD rekt created" };

  return { message: "Done" };
};
function CreateProfile() {
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">new user</h1>
      <div className="border p-8 rounded-md">
        <FormContainer action={createProfileAction}>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <FormInput type="text" name="firstName" label="First name" />
            <FormInput type="text" name="lastName" label="Last name" />
            <FormInput type="text" name="username" label="UserName" />
          </div>
          <SubmitButton text="Create Profile" className="mt-8 " />
        </FormContainer>
      </div>
    </section>
  );
}
export default CreateProfile;