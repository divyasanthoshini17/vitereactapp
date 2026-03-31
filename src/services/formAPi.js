import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const formApi=createApi({
    reducerPath: "formApi",
    baseQuery:fetchBaseQuery({baseUrl:"http://localhost:3000"}),
    endpoints:(builder)=>({
        getforms:builder.query({
            query:()=>`/forms`,
            providesTags: ["Forms"]
        }),
        addforms:builder.mutation({
            query:(newform)=>({ 
                url:`/forms`,
                method:'POST',
                body:newform,
            }),
            invalidatesTags: ["Forms"]
        }),
        delform: builder.mutation({
            query: (id) => ({
                url: `/forms/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Forms"]   
        })
    })
});

export const {useAddformsMutation,useGetformsQuery,useDelformMutation}=formApi;