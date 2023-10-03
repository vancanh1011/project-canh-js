import request from "../utils/request";

const ENTITY = "employees";

export const getEmployeesList = async () => {
    const response = await request.get(ENTITY);
    return response.data;
};



//const createNewEmployee = async ()=>{};


export const deleteEmployee = async (employeeId)=>{
    console.log("delete employee", employeeId);
    const response = await request.delete(`${ ENTITY }/${employeeId} ` );
    const updatedResponse = await getEmployeesList();
    console.log(updatedResponse);
    response.data = updatedResponse;
    return response;

};


//const updateEmployee = async ()=>{};
