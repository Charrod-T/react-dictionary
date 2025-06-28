import react from 'react';
import './WordForm.css';

return (
    <section className="card-form">
        <h2> New Card</h2>
        <form action ="#" method ="GET">
          <div className="form-row">
            <label>
              English:
              <input type="text" 
              name="en" 
              placholder="English"/>
            </label>
          </div>
          <div className="form-row">
            <label>
              German:
              <input type="text" name="de" placholder="German"/>
            </label>
          </div>
          <div className="form-row">
            <button type="submit">Add Word</button>
          </div>
        </form> 
      </section>
)

export default WordForm;