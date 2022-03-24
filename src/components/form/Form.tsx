import { ChangeEvent, FormEvent, useState } from "react";
import { IState as Props } from "../pages/Contact"

interface IProps {
  post: Props['post'],
  setPost: React.Dispatch<React.SetStateAction<Props['post']>>
}

const Form = ({post, setPost}: IProps) => {

const [inputData, setInputData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) :void => {
  setInputData({...inputData, [e.target.name] : e.target.value})
  
}

const onSubmit = (e : FormEvent<HTMLFormElement>) :void => {
  e.preventDefault();
  setPost([...post, inputData])
  setInputData({name:"", email:"", subject:"", message:""})

}
  return (
    <div className="row">
      <div className="contact-form">
        <form
          onSubmit={onSubmit}
          className="mb-0"
          id="cf"
          name="cf"
          autoComplete="off"
        >
          <div className="form-row">
            <div className="form-process"></div>

            <div className="col-12 col-md-6">
              <div className="form-group error-text-white">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  className="form-control required"
                  onChange={onChange}
                  value = {inputData.name}
                />
              </div>
            </div>

            <div className="col-12 col-md-6">
              <div className="form-group error-text-white">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email address"
                  className="form-control required"
                  onChange={onChange}
                  value = {inputData.email}
                />
              </div>
            </div>

            <div className="col-12">
              <div className="form-group error-text-white">
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Subject (Optional)"
                  className="form-control"
                  onChange={onChange}
                  value = {inputData.subject}
                />
              </div>
            </div>

            <div className="col-12 mb-4">
              <div className="form-group error-text-white">
                <textarea
                  name="message"
                  id="message"
                  placeholder="Here goes your message"
                  className="form-control required"
                  rows={7}
                  onChange={onChange}
                  value = {inputData.message}
                ></textarea>
              </div>
            </div>

            <div className="col-12 d-none">
              <input
                type="text"
                id="cf-botcheck"
                name="cf-botcheck"
                className="form-control"
              />
            </div>

            <div className="col-12 text-center">
              <button
                className="btn btn-primary"
                type="submit"
                id="submit"
                name="submit"
              >
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
