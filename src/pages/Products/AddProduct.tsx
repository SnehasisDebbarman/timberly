/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import * as yup from "yup"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import React, { useEffect, useState } from "react"
// import { RequestOptions } from "@/lib/types";


import {
    Formik,
    // FormikHelpers,
    // FormikProps,
    Form,
    // Field,
    // FieldProps,
} from 'formik';
import { ProductInfo, RequestOptions } from "@/lib/types";
import { AddProductWithDetails, GetAllCategory } from "@/Service/CategoryService"
// import { useQuery } from "@tanstack/react-query"


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


export default function AddProduct({ setIsAddDialogOpen, setIsRefreshed }: { setIsAddDialogOpen: React.Dispatch<React.SetStateAction<any>>, setIsRefreshed: React.Dispatch<React.SetStateAction<any>> }) {
    const [subCategoryInfo, setSubCategoryInfo] = useState<any>(null)
    const initialValues: ProductInfo = {
        propertyName: "",
        unitType: "lengthWise",
        categoryName: "wood",
        subCategoryName: "",
        productType: "",
        height: "",
        width: "",
        weight: null,
        remarks: "",
    }
    const categoriesData = GetAllCategory()
    function GetAllSubCategory(categoryName: string) {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        const raw = JSON.stringify({
            categoryName: categoryName,
        });
        const requestOptions: RequestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow",
        };

        fetch(
            "https://businesswithalldata-production.up.railway.app/api/getSubCategoriesByCategory",
            requestOptions
        )
            .then((response) => response.json())
            .then((responseData) => {
                setSubCategoryInfo({ data: responseData })


            }).catch((error) => { alert("Error: " + error) })

    }
    useEffect(() => {
        console.log("subCategoryInfo", subCategoryInfo)
    }, [subCategoryInfo])
    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={formSchema}
                onSubmit={(values, actions) => {
                    AddProductWithDetails(values)
                        .then((info) => { alert(JSON.stringify(info, null, 2)); })
                        .finally(() => {
                            setIsAddDialogOpen(false)
                            setIsRefreshed(true);
                        })
                    actions.setSubmitting(false);
                }}
            >
                {({ values, errors, touched, setFieldValue }) => {
                    return (
                        <Form className="grid grid-cols-2 gap-4">
                            <div className="w-[100%] col-span-2">
                                <div className="grid w-full  items-center gap-1.5">
                                    <Label htmlFor="propertyName">propertyName</Label>
                                    <Input onChange={(e) => setFieldValue("propertyName", e.target.value)} className="" disabled type="text" id="propertyName" placeholder="propertyName" />
                                </div>
                                {errors.propertyName && touched.propertyName ? (
                                    <div>{errors.propertyName}</div>
                                ) : ""}
                            </div>

                            <div className="">
                                <div className="grid w-full max-w-sm items-center gap-1.5">
                                    <Label htmlFor="unitType">Unit Type</Label>
                                    <Select onValueChange={(text: string) => setFieldValue("unitType", text)} defaultValue={values.unitType}>
                                        <SelectTrigger className="">
                                            <SelectValue placeholder="Select a Unit Type" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectLabel>Unit Type</SelectLabel>
                                                <SelectItem value="weightWise">Weight Wise</SelectItem>
                                                <SelectItem value="lengthWise">Length Wise</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>
                                {errors.unitType && touched.unitType ? (
                                    <div>{errors.unitType}</div>
                                ) : ""}
                            </div>
                            <div className="">
                                <div className="grid w-full max-w-sm items-center gap-1.5">
                                    <Label htmlFor="categoryName">categoryName</Label>
                                    <Select onValueChange={(text: string) => {
                                        setFieldValue("categoryName", text)
                                        GetAllSubCategory(text)

                                    }} defaultValue={values.categoryName}>
                                        <SelectTrigger className="">
                                            <SelectValue placeholder="Select a Unit Type" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectLabel>Category</SelectLabel>
                                                {
                                                    categoriesData?.data && categoriesData.data.map((it: any, i: number) => {
                                                        return <SelectItem key={i} value={it.categoryName}>{it.categoryName}</SelectItem>
                                                    })
                                                }
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>
                                {errors.categoryName && touched.categoryName ? (
                                    <div>{errors.categoryName}</div>
                                ) : ""}
                            </div>
                            <div className="">
                                <div className="grid w-full max-w-sm items-center gap-1.5">
                                    <Label htmlFor="subCategoryName">subCategoryName</Label>
                                    <Select onValueChange={(text: string) => setFieldValue("subCategoryName", text)} defaultValue={values.subCategoryName}>
                                        <SelectTrigger className="">
                                            <SelectValue placeholder="Select a Sub Category" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectLabel>Sub Category </SelectLabel>
                                                {
                                                    subCategoryInfo?.data.map((it: any, i: number) => {
                                                        return <SelectItem key={i} value={it.subCatagoryName} >{it.subCatagoryName}</SelectItem>
                                                    })
                                                }
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>
                                {errors.subCategoryName && touched.subCategoryName ? (
                                    <div>{errors.subCategoryName}</div>
                                ) : ""}
                            </div>

                            <div className="">
                                <div className="grid w-full max-w-sm items-center gap-1.5">
                                    <Label htmlFor="productType">productType</Label>
                                    <Input required onChange={(e) => setFieldValue("productType", e.target.value)} type="productType" id="productType" placeholder="productType" />
                                </div>
                                {errors.productType && touched.productType ? (
                                    <div>{errors.productType}</div>
                                ) : ""}
                            </div>
                            {
                                values.unitType === "lengthWise" ?
                                    <div className="">
                                        <div className="grid w-full max-w-sm items-center gap-1.5">
                                            <Label htmlFor="height">height</Label>
                                            <Input required onChange={(e) => setFieldValue("height", e.target.value)} type="height" id="height" placeholder="height" />
                                        </div>
                                        {errors.height && touched.height ? (
                                            <div>{errors.height}</div>
                                        ) : ""}
                                    </div>
                                    :
                                    <div className="">
                                        <div className="grid w-full max-w-sm items-center gap-1.5">
                                            <Label htmlFor="weight">weight</Label>
                                            <Input required onChange={(e) => setFieldValue("weight", e.target.value)} type="weight" id="weight" placeholder="weight" />
                                        </div>
                                        {errors.weight && touched.weight ? (
                                            <div>{errors.weight}</div>
                                        ) : ""}
                                    </div>
                            }
                            {
                                values.unitType === "lengthWise" ? <div className="">
                                    <div className="grid w-full max-w-sm items-center gap-1.5">
                                        <Label htmlFor="width">width</Label>
                                        <Input required onChange={(e) => setFieldValue("width", e.target.value)} type="productType" id="width" placeholder="width" />
                                    </div>
                                    {errors.width && touched.width ? (
                                        <div>{errors.width}</div>
                                    ) : ""}
                                </div>
                                    : null
                            }
                            <Button className="col-span-2" type="submit">Submit</Button>
                        </Form>

                    )
                }}

            </Formik>
        </div >
    );
}


