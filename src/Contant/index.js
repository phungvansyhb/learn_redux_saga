const STATUS = [
   {
       index : 1,
       label : "READY",
       status:0
   },
   {
       index: 2,
       label :"PROGRESSCING",
       status:1
   },
   {
       index : 3,
       label : "COMPLETE",
       status:2
   }
];


export default STATUS;
export const STATUS_CODE = {
    SUCCESS : 200,
    CREATED : 201,
    UPDATED : 202
}
export const API_ENDPOINT = "http://localhost:3000";