import request from "../utils/request";

const ENTITY = "employees";

export const getEmployeesList = async () => {
  const response = await request.get(ENTITY);
  return response.data;
};

export const createNewEmployee = async (data) => {
  const response = await request.post(ENTITY, { ...data });
  const updatedResponse = await getEmployeesList();
  response.data = updatedResponse;
  return response;
};

export const deleteEmployee = async (employeeId) => {
  const response = await request.delete(`${ENTITY}/${employeeId} `);
  const updatedResponse = await getEmployeesList();
  response.data = updatedResponse;
  return response;
};

export const updateEmployee = async (employeeId, data) =>{
  const response = await request.put(`${ENTITY}/${employeeId} `,data);
  const updatedResponse = await getEmployeesList();
  response.data = updatedResponse;
  return response;
};
