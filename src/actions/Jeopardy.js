import request from 'superagent';


const baseUrl = 'https://jservice.io/api/random';


export function getQuestion(){
 
  return dispatch => {
    request.get(`${baseUrl}`).end(
      (error, response) => {
        if(!error) {
          dispatch({ type: `GET_QUESTION`, question: response.body[0]});
        }
      }
    );
  };
}




