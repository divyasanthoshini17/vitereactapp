import { useFormik } from "formik";
import * as Yup from "yup";
import React from "react";
import { useGetformsQuery,useAddformsMutation,useDelformMutation } from "./services/formAPi";

function Sform(){
    const{data,isLoading,error}=useGetformsQuery();
    const [addForms]=useAddformsMutation();
    const [deleteForm] = useDelformMutation();
   

    let sform=useFormik({
        initialValues:{
            firstname:"",
            lastname:"",
            age:""
        },
        validationSchema: Yup.object({
            firstname:Yup.string().required("name choodu"),
            age:Yup.number().required("number beyy"),
            lastname:Yup.string().required(),
        }),
        
         onSubmit: async (values) => {
            console.log(values);

            await addForms(values);   // 🔥 send to JSON server
        }
    });


    if(isLoading) return<h1>LOADING</h1>

    if(error) return<h1>Not LOAding</h1>

    // console.log(sform);
    

    return(
        <div>
            <p>{JSON.stringify(sform)}</p>
            <form onSubmit={sform.handleSubmit}>
                <input type="text" name="firstname"  onChange={sform.handleChange} /><br></br>
                <div>{sform.touched.firstname && sform.errors.firstname}</div>
                <input type="text" name="lastname" onChange={sform.handleChange}/><br></br>
                <input type="number" name="age" onChange={sform.handleChange}/><br></br>
                <button>Register</button><br></br>

                {data.map((form)=>{
                    return(
                        <div>
                            <h3>Firstname:{form.firstname}</h3>
                            <h3>Lastname:{form.lastname}</h3>
                            <h3>Age:{form.age}</h3>
                            <button onClick={() => deleteForm(form.id)}>Delete</button>
                        </div>
                    )
                })}
            </form>
        </div>
    )
}

export default Sform;