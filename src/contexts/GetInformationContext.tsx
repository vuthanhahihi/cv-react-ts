import { createContext, ReactNode, useReducer } from "react";
import getInformation from "../api/getInfomation";
import {
  GetInforState,
  myInfoReducer,
} from "../reducers/GetInformationReducer";
import { MyInformationType } from "../reducers/types";

const { GET_MY_INFOR } = MyInformationType;

interface GetInforContextProps {
  children: ReactNode;
}

const getMyInforDefault: GetInforState = [];

interface GetInforDefault {
  myInfor: GetInforState;
  getMyInfor: () => Promise<void>;
}
export const GetInforContext = createContext<GetInforDefault>({
  myInfor: getMyInforDefault,
  getMyInfor: () => Promise.resolve(void 0),
});

const GetMyInforContextProvider = ({ children }: GetInforContextProps) => {
  const [myInfor, dispatch] = useReducer(myInfoReducer, getMyInforDefault);

  const getMyInfor = async () => {
    const myInfor = await Promise.resolve(getInformation);
    dispatch({
      type: GET_MY_INFOR,
      payload: myInfor.data
    });
  };
  const GetInforContextData = {
    myInfor,
    getMyInfor,
  };
  return (
    <GetInforContext.Provider value={GetInforContextData}>
      {children}
    </GetInforContext.Provider>
  );
};

export default GetMyInforContextProvider
