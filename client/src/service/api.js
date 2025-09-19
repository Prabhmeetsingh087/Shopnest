import axios from 'axios';

const URL = 'http://ec2-13-48-46-186.eu-north-1.compute.amazonaws.com';

export const authenticatesignup = async (data) => {
    try {
        const response = await axios.post(`${URL}/signup`, data);
        return response.data;
    } catch (error) {
        console.log('Error while calling signup API', error);
        throw error; // Re-throw the error to handle it in the calling code
    }
};

export const authenticatelogin = async (data) => {
    try {
        //const response1 = await axios.post(`${URL}/login`, data);
        //return response1.data;
        
        return await axios.post(`${URL}/login`, data)
        //If the POST request is successful (e.g., the server returns a 2xx HTTP status code), the resolved value will be an Axios response object.
        // This object contains several properties that provide information about the response from the server.
        // It may look like this
//  {
//   data: {
//     user: {
//       id: "12345",
//       username: "exampleUser",
//       email: "user@example.com"
//     },
//     token: "abcd1234efgh5678ijkl"
//   },
//   status: 200,
//   statusText: 'OK',
//   headers: { ... },
//   config: { ... },
//   request: { ... }
// }

        
    } catch (error) {
        console.log('Error while calling login API', error);
        return error.response;
    }
};



export  const payUsingPaytm = async (data) => {
    try {
        let response = await axios.post(`${URL}/payment`, data);
        return response.data;
    } catch (error) {
        console.log('Error', error);
        return error.response;
    }
};