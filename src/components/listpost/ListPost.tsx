import { IState as IProps } from "../pages/Contact"

const ListPost = ({post}: IProps) => {



const renderList = () : JSX.Element[] => {
    
    return post.map(mess => {
         return (
            <div key ={mess.name}>
                <ul style={{ listStyleType: "none"}}>
                    <li><strong>Name:</strong> {mess.name}</li>
                    <li><strong>Email:</strong> {mess.email}</li>
                    <li><strong>Subject:</strong> {mess.subject}</li>
                    <li><strong>Message:</strong> {mess.message}</li>
                </ul>
            </div>
        )
    })
}

  return (
    <div><h3>List Message</h3>
        {renderList()}
    </div>
  )
}

export default ListPost