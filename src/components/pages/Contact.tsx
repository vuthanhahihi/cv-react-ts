import "../../styles/contact/contact.scss";
import { LocationOn, Cake, Mail, Person, Phone } from "@material-ui/icons";
import { useContext, useEffect, useState } from "react";
import { GetInforContext } from "../../contexts/GetInformationContext";
import Form from "../form/Form";
import ListPost from "../listpost/ListPost";

export interface IState {
  post: {
    name: string,
    email: string,
    subject: string,
    message: string
  }[]
}

const Contact = () => {

  const { myInfor, getMyInfor } = useContext(GetInforContext);

  const [post, setPost] = useState<IState["post"]>([{ name: "Đoàn Tuấn Vũ", email: "vuthanhahihi@gmail.com", subject: "hihi", message: "Hi" }]);


  useEffect(() => {
    getMyInfor();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="contact" id="contact">
      <div className="contact">
        <h2>Contact</h2>
        <p>Gọi cho tôi hoặc gửi cho tôi một email. Tôi sẽ phản hồi ngay.</p>
      </div>

      <div className="container">
        {myInfor.map((item) => (
          <div className="left" key={item.id}>
            <p>
              <Cake /> {item.birthday}
            </p>
            <p>
              <Person /> {item.sex}
            </p>
            <p>
              <Mail /> {item.email}
            </p>
            <p>
              <Phone /> {item.phone}
            </p>
            <p>
              <LocationOn /> {item.address}
            </p>
            <ListPost post = {post}/>
          </div>
        ))}

        <div className="right">
          <Form post={post} setPost={setPost}/>
        </div>
      </div>
    </div>
  );
};

export default Contact;
