import * as yup from "yup"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"



import {
    Formik,
    // FormikHelpers,
    // FormikProps,
    Form,
    // Field,
    // FieldProps,
} from 'formik';
import { ProductInfo } from "@/lib/types";


const formSchema = yup.object({
    propertyName: yup.string(),
    unitType: yup.string(),
    categoryName: yup.string(),
    subCategoryName: yup.string(),
    productType: yup.string(),
    height: yup.string().nullable(),
    width: yup.string().nullable(),
    weight: yup.string().nullable(),
    remarks: yup.string().nullable(),
})


export default function AddProduct() {
    const initialValues: ProductInfo = {
        propertyName: "",
        unitType: "",
        categoryName: "",
        subCategoryName: "",
        productType: "",
        height: "",
        width: "",
        weight: null,
        remarks: ""
    }

    return (
        <div>
            <h1>My Example</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={formSchema}
                onSubmit={(values, actions) => {
                    console.log({ values, actions });
                    alert(JSON.stringify(values, null, 2));
                    actions.setSubmitting(false);
                }}
            >
                {({ errors, touched }) => (
                    <Form>
                        <label htmlFor="propertyName">propertyName</label>
                        <div className="grid w-full max-w-sm items-center gap-1.5">
                            <Label htmlFor="propertyName">Email</Label>
                            <Input type="propertyName" id="propertyName" placeholder="propertyName" />
                        </div>
                        {errors.propertyName && touched.propertyName ? (
                            <div>{errors.propertyName}</div>
                        ) : ""}

                        <div className="grid w-full max-w-sm items-center gap-1.5">
                            <Label htmlFor="propertyName">unitType</Label>
                            <Input type="propertyName" id="propertyName" placeholder="propertyName" />
                        </div>
                        {errors.propertyName && touched.propertyName ? (
                            <div>{errors.propertyName}</div>
                        ) : ""}




                        {/* <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Username</FormLabel>
                            <FormControl>
                                <Input placeholder="shadcn" {...field} />
                            </FormControl>
                            <FormDescription>
                                This is your public display name.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
//                 /> */}
                        {/* <Field id="firstName" name="firstName" placeholder="First Name" /> */}
                        <Button type="submit">Submit</Button>
                    </Form>

                )}

            </Formik>
        </div>
    );
}
