import api from "../utils/axios";

export const getAllPorject = async () => {
    const res = await api.get("/project")
    return res
}

export const uploadProject = async (data) => {
    const res = await api.post("/project/upload",data)
    return res
}

export const updateProject = async (data) => {
    const res = await api.patch("/project/update/:id",data)
    return res
}

export const deleteProject = async (data) => {
    const res = await api.delete("/project/delete/:id",data)
    return res
}

export const getMyProject = async (data) => {
    const res = await api.get("/project/getMyProject/:id",data)
    return res
}

export const getProjectById = async (data) => {
    const res = await api.get("/project/getProjectById/:id",data)
    return res
}