import React, {useContext, useRef,useEffect}from 'react'
import ContactContext from '../../context/contact/ContactContext';

const ContactFilter = () => {
  const contactContext = useContext(ContactContext);
  const text = useRef('');

  const {filterContact,clearFilter,filtered} = contactContext;
  useEffect(()=>{
    if(filtered===null){
      text.current.value='';
    }
  });

  const onChange = e => {
    if(text.current.value!==''){
      filterContact(e.target.value);
    }else{
      clearFilter();
    }
  }
  return (
    <form>
      <input ref={text} type="text" placeholder="Filter Contact..."
      onChange={onChange}/>
    </form>
  )
}

export default ContactFilter;
