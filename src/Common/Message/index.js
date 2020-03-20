import {toast} from 'react-toastify'

export const msgsuccess = (succ) => {
    return toast.success(succ)
}
export const msgerr = (err) => {
    return toast.error(err)
}
export const msgwarning = (warn) => {
    return toast.warn(warn)
}
