import { useRef } from "react";
import classes from "./NewMeetupForm.module.css";
import Card from "../ui/Card";

function NewMeetupForm({onAddMeetup}) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();
  function submitHandler(e){
   e.preventDefault(); 
   const enteredTitle = titleInputRef.current.value;
   const enteredImage = imageInputRef.current.value;
   const enteredAddress = addressInputRef.current.value;
   const enteredDescription = descriptionInputRef.current.value;
   const meetupData = {
    title: enteredTitle,
    image: enteredImage,
    adress: enteredAddress,
    description: enteredDescription
   }
   onAddMeetup(meetupData)
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={titleInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" ref={imageInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input type="text" required id="address" ref={addressInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea id="description" required rows="5" ref={descriptionInputRef}/>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
