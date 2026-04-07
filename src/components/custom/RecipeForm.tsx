import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field.tsx";
import { Checkbox } from "@/components/ui/checkbox.tsx";
import { Input } from "@/components/ui/input.tsx";
import { Textarea } from "@/components/ui/textarea.tsx";

function RequiredAsterisk() {
  return <span className="text-red-500">*</span>;
}

export function RecipeForm() {
  return (
    <form>
      <FieldGroup className="flex flex-col gap-4">
        <FieldSet>
          <FieldLegend>Create new recipe</FieldLegend>
          <FieldDescription>
            This will appear for everyone, but you can customize it for yourself
            later if need be.
          </FieldDescription>
        </FieldSet>

        <FieldSet>
          <FieldGroup className="grid grid-cols-1 md:grid-cols-2 gap-3 items-center">
            <Field className="col-span-1 md:col-span-2">
              <FieldLabel htmlFor="recipe-name">
                Recipe Name <RequiredAsterisk />
              </FieldLabel>
              <Input id="recipe-name" required />
            </Field>
            <Field className="col-span-1 md:col-span-2">
              <FieldLabel htmlFor="recipe-description">Description</FieldLabel>
              <Textarea
                id="recipe-description"
                placeholder="A short description of the recipe. Could describe the recipe or even just the inspiration behind it."
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="recipe-time">
                Prep Time (mins) <RequiredAsterisk />
              </FieldLabel>
              <Input id="recipe-time" type="number" min="1" required />
            </Field>
            <Field>
              <FieldLabel htmlFor="recipe-servings">
                Servings <RequiredAsterisk />
              </FieldLabel>
              <Input id="recipe-servings" type="number" min="1" required />
            </Field>
          </FieldGroup>
        </FieldSet>

        <FieldSeparator />

        <FieldSet>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="recipe-ingredients">
                Ingredients <RequiredAsterisk />
              </FieldLabel>
              <Input
                id="recipe-ingredients"
                placeholder="e.g. 2 eggs, 1 cup flour"
                required
              />
              <FieldDescription>
                List ingredients separated by commas. For advanced UI, use a
                dynamic list.
              </FieldDescription>
            </Field>
            <Field>
              <FieldLabel htmlFor="recipe-directions">
                Directions <RequiredAsterisk />
              </FieldLabel>
              <Input
                id="recipe-directions"
                placeholder="Step-by-step instructions"
                required
              />
              <FieldDescription>
                List directions separated by periods or use a dynamic list for
                each step.
              </FieldDescription>
            </Field>
          </FieldGroup>
        </FieldSet>

        <FieldSeparator />

        <FieldSet>
          <FieldGroup>
            <Field orientation="horizontal">
              <Checkbox id="save-to-cookbook" defaultChecked />
              <FieldLabel htmlFor="save-to-cookbook" className="font-normal">
                Save recipe into Cookbook
              </FieldLabel>
            </Field>
          </FieldGroup>
        </FieldSet>
      </FieldGroup>
    </form>
  );
}
