import react, { useState } from 'react';
let ans = '';
let gen = "😊";
let d = new Date().toLocaleDateString();
let t = new Date().toLocaleTimeString();
const Inp = () => {
  const [feedBack, setFeedBack] = useState("");
  const [Gender, setGender] = useState("");
  const [date, setDate] = useState(d);
  const [time, setTime] = useState(t);
  const [Result, setResult] = useState({
    fname: ' ',
    lname: ' ',
    email: ' ',
    mobno: ' ',
    city: ' ',
    suggestion: ''
  });
  function male(event) {
    gen = "👨‍🎓👦 Mr. "
  }
  function female(event) {
    gen = "👩‍🎓👧 Mrs. "
  }
  const inputEvent = (event) => {
    const { name, value } = event.target;
    setResult((preValue) => {
      return {
        ...preValue,
        [name]: value,
      }
    });

  }
   /*const inputEvent = (event) =>{
    const name = event.target.name;
    const value = event.target.value;
    setResult((preValue)=>{
     if(name==='fname'){
      return{
       fname:value,
       lname:preValue.lname,
       email:preValue.email,
       mobno:preValue.mobno,
       city:preValue.city,
       suggestion:preValue.suggestion,
      }
     }
     else if(name==='lname'){
      return{
       fname:preValue.fname,
       lname:value,
       email:preValue.email,
       mobno:preValue.mobno,
       city:preValue.city,
       suggestion:preValue.suggestion,
      }
     }
     else if(name==='email'){
      return{
       fname:preValue.fname,
       lname:preValue.lname,
       email:value,
       mobno:preValue.mobno,
       city:preValue.city,
       suggestion:preValue.suggestion,
      }
     }
     else if(name==='mobno'){
      return{
       fname:preValue.fname,
       lname:preValue.lname,
       email:preValue.email,
       mobno:value,
       city:preValue.city,
       suggestion:preValue.suggestion,
      }
     }
     else if(name==='city'){
      return{
       fname:preValue.fname,
       lname:preValue.lname,
       email:preValue.email,
       mobno:preValue.mobno,
       city:value,
       suggestion:preValue.suggestion,
      }
     }
     else if(name==='suggestion'){
      return{
       fname:preValue.fname,
       lname:preValue.lname,
       email:preValue.email,
       mobno:preValue.mobno,
       city:preValue.city,
       suggestion:value,
      }
     }
    });
   };*/

  const onSubmits = (event) => {
    event.preventDefault();
    if (Result.fname === "" && Result.suggestion === "") {
      alert("Your First Name and suggestion is Manedatory !");
    }
    else if (Result.fname === "") {
      alert("Enter First Name !");
      ans = "";
    }
    else if (Result.suggestion === "") {
      alert("Your Suggestion is Important !");
      ans = "";
    }
    else {
      let d = new Date().toLocaleDateString();
      let t = new Date().toLocaleTimeString();
      setTime(t);
      setDate(d);
      ans = ans + "   ⭐" + gen + " " + Result.fname + " Says :-  " + Result.suggestion + "\n   From : " +
        Result.city + "\n   Date : " + date + "\n   Time :" + time + "\n\n";
      setFeedBack(ans);
    }
  };
  const onResets = () => {
    setGender("");
    return {
      fname: "",
      lname: "",
      gender: "",
      email: "",
      mobno: "",
      city: "",
      suggestion: ""
    }
  }
  return (
    <>
      <form onSubmit={onSubmits} onReset={onResets}>
        <div className='heading_style'>
          <h1>FeedBack Using React : JS</h1>
        </div>
        <div className='part'>
          <div className='part1'>

            <h2 className='part1_head'>Enter Your Details</h2>
            <br />
            <label>First Name</label>
            <input
              className='inpt' type='text'
              name='fname'
              placeholder='First Name'
              onChange={inputEvent}
              //value={fullName.lname}
              autocomplete="off" />
            <br />
            <label>Last Name</label>
            <input
              className='inpt' type='text'
              name='lname'
              placeholder='Last Name'
              onChange={inputEvent}
            // value={fullName.lname}
            /><br />
            <label>City</label>
            <input className='inpt'
              type='text'
              onChange={inputEvent}
              name='city' />
            <br />
            <div className='gender'>
              Gender : Male <input className='r'
                type='radio' onChange={male}
                name="gender" id='m' value={Gender} />
              Female
              <input
                className='r' type='radio'
                onChange={female} name="gender" value={Gender} />
            </div>
            <br />

            <label>Write FeedBack</label>
            <input className='tx'
              onChange={inputEvent} type='text'
              name='suggestion'
              style={{ height: 70 }} />
            <div className='btn'>
              <button data-inline="true"
                type='submit'>Add Feedback</button>
              <button data-inline="true"
                type='reset'>Reset</button>
            </div>
          </div>


          <div className='part2'>

            <div className='part2heading'>
              <h2 className="p2h">What People Think</h2></div>
            <textarea
              value={feedBack}
              style={{ width: 408, height: 490 }} />
            <br />
          </div>
        </div>
      </form>
    </>
  )
}

export default Inp;