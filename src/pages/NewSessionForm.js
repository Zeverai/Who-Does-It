import React from "react";

const NewSessionForm = () => {
   return (
      <div className='form-container'>
         <form>
            <label>How many PEOPLE in this session?</label>
            <input type='number' min='0' />
            <label>How many TASKS in this session?</label>
            <input type='number' min='0' />
            <button type='submit'>Next</button>
         </form>
      </div>
   );
};

export default NewSessionForm;
